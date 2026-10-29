import puppeteer from 'puppeteer';
import { PDFDocument } from 'pdf-lib';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from 'docx';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'http://127.0.0.1:4173';
const PROJECT_ROOT = path.resolve(__dirname, '../../');
const EXPORT_DIR = path.join(PROJECT_ROOT, 'website_pdf_exports');
const INDIVIDUAL_PAGES_DIR = path.join(EXPORT_DIR, 'Individual_Pages_PDF');

if (!fs.existsSync(EXPORT_DIR)) {
  fs.mkdirSync(EXPORT_DIR, { recursive: true });
}
if (!fs.existsSync(INDIVIDUAL_PAGES_DIR)) {
  fs.mkdirSync(INDIVIDUAL_PAGES_DIR, { recursive: true });
}

const PAGES = [
  { route: '/', title: '01. Home Page', filename: '01_Home.pdf' },
  { route: '/about', title: '02. About Us', filename: '02_About.pdf' },
  { route: '/team', title: '03. Leadership & Team', filename: '03_Team.pdf' },
  { route: '/services', title: '04. Services Overview', filename: '04_Services.pdf' },
  { route: '/services/technology-consultancy', title: '05. Technology Consultancy', filename: '05_TechnologyConsultancy.pdf' },
  { route: '/services/acquisition-process', title: '06. Acquisition Process', filename: '06_AcquisitionProcess.pdf' },
  { route: '/services/capital-acquisitions', title: '07. Capital Acquisitions', filename: '07_CapitalAcquisitions.pdf' },
  { route: '/services/mro-sustenance', title: '08. MRO & Sustenance', filename: '08_Sustenance.pdf' },
  { route: '/services/leasing-consultancy', title: '09. Leasing Consultancy', filename: '09_Leasing.pdf' },
  { route: '/services/it-networking', title: '10. IT & Networking', filename: '10_ITNetworking.pdf' },
  { route: '/services/project-management', title: '11. Project Management', filename: '11_ProjectManagement.pdf' },
  { route: '/services/miscellaneous-services', title: '12. Miscellaneous Services', filename: '12_MiscServices.pdf' },
  { route: '/services/end-to-end-assistance', title: '13. End-to-End Assistance', filename: '13_EndToEnd.pdf' },
  { route: '/verticals', title: '14. Verticals Overview', filename: '14_Verticals.pdf' },
  { route: '/verticals/government', title: '15. Government Vertical', filename: '15_Government.pdf' },
  { route: '/verticals/indigenisation-entities', title: '16. Indigenisation Entities', filename: '16_Indigenisation.pdf' },
  { route: '/verticals/startups-msme', title: '17. Startups & MSME Vertical', filename: '17_StartupsMSME.pdf' },
  { route: '/verticals/academia', title: '18. Academia Vertical', filename: '18_Academia.pdf' },
  { route: '/verticals/foreign-technology-entities', title: '19. Foreign Technology Entities', filename: '19_ForeignEntities.pdf' },
  { route: '/insights', title: '20. Insights & Updates', filename: '20_Insights.pdf' },
  { route: '/contact', title: '21. Contact Us', filename: '21_Contact.pdf' },
  { route: '/visiting-card', title: '22. Digital Visiting Card', filename: '22_VisitingCard.pdf' },
  { route: '/privacy-policy', title: '23. Privacy Policy', filename: '23_PrivacyPolicy.pdf' },
  { route: '/terms', title: '24. Terms of Service', filename: '24_Terms.pdf' },
];

async function generatePDFs() {
  console.log('🚀 Generating Vector Editable PDFs for all 24 website pages...');

  const executablePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  const browser = await puppeteer.launch({
    executablePath: fs.existsSync(executablePath) ? executablePath : undefined,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const generatedPdfPaths = [];

  for (const pageInfo of PAGES) {
    console.log(`📄 Capturing page [${pageInfo.title}]...`);
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
    
    await page.goto(`${BASE_URL}${pageInfo.route}`, {
      waitUntil: ['load', 'networkidle0'],
      timeout: 30000
    });

    await new Promise(r => setTimeout(r, 600));

    const pdfPath = path.join(INDIVIDUAL_PAGES_DIR, pageInfo.filename);
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '10mm', bottom: '10mm', left: '10mm', right: '10mm' }
    });

    generatedPdfPaths.push(pdfPath);
    await page.close();
  }

  await browser.close();
  console.log('✅ All individual page PDFs created!');

  console.log('📦 Merging all 24 pages into single Master PDF...');
  const mergedPdf = await PDFDocument.create();

  for (const pdfPath of generatedPdfPaths) {
    const pdfBytes = fs.readFileSync(pdfPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
    copiedPages.forEach((p) => mergedPdf.addPage(p));
  }

  const masterPdfBytes = await mergedPdf.save();
  const masterPdfPath = path.join(EXPORT_DIR, 'Labradorite_Motto_Website_Complete_Editable.pdf');
  fs.writeFileSync(masterPdfPath, masterPdfBytes);

  console.log(`🎉 Master PDF saved to: ${masterPdfPath}`);
}

async function extractPageText(browser, pageInfo) {
  const page = await browser.newPage();
  await page.goto(`${BASE_URL}${pageInfo.route}`, { waitUntil: ['load', 'networkidle0'], timeout: 30000 });
  
  const pageData = await page.evaluate((title) => {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3')).map(h => h.innerText.trim()).filter(Boolean);
    const paragraphs = Array.from(document.querySelectorAll('p, li, span, div')).map(p => p.innerText.trim()).filter(p => p.length > 15);
    // Deduplicate paragraphs
    const uniqueParagraphs = Array.from(new Set(paragraphs));
    return { title, headings, paragraphs: uniqueParagraphs };
  }, pageInfo.title);

  await page.close();
  return pageData;
}

async function generateDocx() {
  console.log('📝 Generating Editable MS Word (.docx) document with full text content...');

  const executablePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const browser = await puppeteer.launch({
    executablePath: fs.existsSync(executablePath) ? executablePath : undefined,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const children = [
    new Paragraph({
      text: "LABRADORITE MOTTO",
      heading: HeadingLevel.TITLE,
      alignment: AlignmentType.CENTER,
      spacing: { after: 300 }
    }),
    new Paragraph({
      text: "Complete Website Content Document (Editable Word Format - A to Z)",
      alignment: AlignmentType.CENTER,
      spacing: { after: 600 }
    }),
    new Paragraph({
      text: `Generated Date: ${new Date().toLocaleDateString('en-US', { dateStyle: 'full' })}`,
      alignment: AlignmentType.CENTER,
      spacing: { after: 800 }
    }),
  ];

  for (const pageInfo of PAGES) {
    console.log(`📝 Extracting text for Word Doc: [${pageInfo.title}]...`);
    const pageData = await extractPageText(browser, pageInfo);

    children.push(
      new Paragraph({
        text: pageData.title.toUpperCase(),
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 400, after: 200 }
      })
    );

    if (pageData.headings.length > 0) {
      children.push(
        new Paragraph({
          text: "Headings & Key Topics:",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 }
        })
      );
      pageData.headings.forEach(h => {
        children.push(
          new Paragraph({
            children: [
              new TextRun({ text: "• ", bold: true }),
              new TextRun({ text: h })
            ],
            spacing: { after: 60 }
          })
        );
      });
    }

    if (pageData.paragraphs.length > 0) {
      children.push(
        new Paragraph({
          text: "Full Content & Descriptions:",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 }
        })
      );
      pageData.paragraphs.forEach(p => {
        children.push(
          new Paragraph({
            text: p,
            spacing: { after: 120 }
          })
        );
      });
    }

    children.push(
      new Paragraph({
        text: "----------------------------------------------------------------------------------------------------",
        alignment: AlignmentType.CENTER,
        spacing: { before: 300, after: 300 }
      })
    );
  }

  await browser.close();

  const doc = new Document({
    sections: [{
      properties: {},
      children: children
    }]
  });

  const buffer = await Packer.toBuffer(doc);
  const docxPath = path.join(EXPORT_DIR, 'Labradorite_Motto_Website_Editable_Document.docx');
  fs.writeFileSync(docxPath, buffer);

  console.log(`🎉 Master Word Document saved to: ${docxPath}`);
}

async function main() {
  try {
    await generatePDFs();
    await generateDocx();
    console.log('\n🌟 ALL WEBSITE PDF & WORD EXPORTS COMPLETED SUCCESSFULLY! 🌟');
  } catch (err) {
    console.error('❌ Error generating exports:', err);
    process.exit(1);
  }
}

main();
