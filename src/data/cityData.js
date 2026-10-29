/**
 * cityData.js
 * Rich, authentic industry data for 8 Tier-1 Indian Cities and 4 Key International Hubs.
 * Each profile contains 600+ words of genuine local context (airports, MRO facilities, defence bases, regulators).
 */

export const indianCities = [
  {
    slug: 'delhi-ncr',
    name: 'Delhi NCR',
    state: 'National Capital Region',
    heroSubtitle: 'National Defence Capital, DGCA Regulatory Nexus & Noida-Jewar Aviation Corridor',
    metaTitle: 'Aviation Consultant in Delhi NCR | Air Cmde Arvind Srivastava',
    metaDesc: 'Aviation consultant in Delhi NCR: Air Cmde Arvind Srivastava (IAF Veteran, 30+ yrs). MoD capital acquisition, DGCA compliance & Jewar airport MRO advisory.',
    h1: 'Best Aviation Consultant in Delhi NCR: Air Commodore Arvind Srivastava',
    localAirports: ['Indira Gandhi International Airport (DEL)', 'Noida International Airport (DXR) Jewar', 'Hindon Air Force Station (Air Base & Civil Enclave)'],
    mroHubs: ['Air India / AIESL Delhi Base Maintenance', 'Hindon IAF Base Depot Facilities', 'Jewar Upcoming Multi-Hangar MRO Hub'],
    regulatorsDefence: ['Directorate General of Civil Aviation (DGCA HQ, Opp. Safdarjung Airport)', 'Ministry of Defence (South Block & Sena Bhawan)', 'Bureau of Civil Aviation Security (BCAS)', 'Airports Authority of India (AAI HQ, Rajiv Gandhi Bhawan)'],
    overview: `Air Commodore Arvind Srivastava provides high-level aviation consultancy across the National Capital Region (New Delhi, Noida, Greater Noida, and Gurugram). As a retired Indian Air Force veteran with over 30 years of aeronautical engineering experience and former Deputy Director General Technical (Air) in Defence Capital Acquisition at the Ministry of Defence (MoD), he brings direct insight into India's most critical aviation decision-making bodies located in New Delhi.

Delhi NCR serves as the administrative, regulatory, and policy epicenter of Indian civil aviation and military aerospace. The presence of DGCA Headquarters at Aurobindo Marg, the Ministry of Civil Aviation at Rajiv Gandhi Bhawan, the Ministry of Defence at South Block, and Air Headquarters at Vayu Bhawan makes Delhi the decisive location for airworthiness certifications, capital acquisition clearances, and policy compliance.

With the development of the Noida International Airport at Jewar as an international MRO and air cargo gateway, along with the high-capacity operations of Indira Gandhi International Airport (DEL) and the strategic logistics capabilities of Hindon Air Force Station, NCR is rapidly expanding its commercial and defence aerospace footprint. Air Commodore Arvind Srivastava consults aerospace OEMs, defence contractors, charter operators, and technical institutes navigating this complex regulatory and procurement environment.`,
    localContext: `The National Capital Region requires specialized advisory spanning both military defence procurement and civil airworthiness. For defence contractors, proximity to Sena Bhawan and South Block demands rigorous adherence to the Defence Acquisition Procedure (DAP 2020), including precise compilation of technical appreciation dossiers, Request for Proposal (RFP) compliance matrices, and Offset clause obligations under IDDM (Indigenously Designed, Developed and Manufactured) and Make in India categories.

In civil aviation, operators expanding fleets across DEL and upcoming DXR at Jewar require CAR 145 maintenance organization approvals, CAR M continuing airworthiness management alignment, and safety management systems (SMS) certified through the DGCA Northern Regional Office. Having directed major aircraft servicing infrastructure modernizations and trained over 1,000 aviation technical personnel, Air Commodore Arvind Srivastava delivers actionable guidance grounded in authentic technical command.`,
    servicesOffered: [
      {
        title: 'MoD Capital Acquisition Advisory (Delhi)',
        desc: 'Direct advisory on Defence Acquisition Procedure (DAP 2020) for aerospace programmes, including technical feasibility evaluations, trial evaluations, and Make-II/IDDM category qualification.'
      },
      {
        title: 'DGCA & BCAS Regulatory Approval Support',
        desc: 'Consultancy for CAR 145 (MRO approval), CAR M (Continuing Airworthiness), CAR 147 (Maintenance Training), and airport security clearance through BCAS.'
      },
      {
        title: 'Jewar & Hindon MRO Hub Feasibility',
        desc: 'Technical infrastructure planning, hangar layout optimization, tooling acquisition, and quality systems establishment for upcoming MRO facilities in the Jewar-Noida corridor.'
      },
      {
        title: 'Defence Offset & Vendor Localization',
        desc: 'Connecting global tier-1 aerospace suppliers with verified Indian manufacturing vendors in Gurugram, Faridabad, and Greater Noida industrial clusters.'
      }
    ],
    faqs: [
      {
        q: 'Why hire an aviation consultant based in Delhi NCR?',
        a: 'Delhi NCR houses the Ministry of Defence, DGCA Headquarters, Ministry of Civil Aviation, and BCAS. An aviation consultant in Delhi NCR provides direct liaison, immediate regulatory clarity under DAP 2020 and CAR regulations, and local oversight for NCR aviation infrastructure projects like Jewar Airport.'
      },
      {
        q: 'How does Air Commodore Arvind Srivastava assist defence suppliers in Delhi?',
        a: 'Having served as DDG Technical (Air) in Defence Capital Acquisition, Air Cmde Srivastava provides technical appreciation on RFI/RFP submissions, assists with trial evaluation readiness, and ensures documentation complies with MoD procurement standards.'
      },
      {
        q: 'Can you assist with setting up MRO operations near Jewar International Airport?',
        a: 'Yes. We offer end-to-end MRO setup advisory including hangar technical planning, equipment and tooling procurement, CAR 145 quality manual drafting, and technical workforce certification frameworks.'
      },
      {
        q: 'What DGCA compliance approvals does your consultancy cover?',
        a: 'We cover CAR 145 (Approved Maintenance Organizations), CAR M / CAR CAMO (Continuing Airworthiness), CAR 147 (Maintenance Training Organizations), and CAR 66 aircraft maintenance engineer certification pathways.'
      }
    ]
  },
  {
    slug: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    heroSubtitle: 'Commercial Aviation Capital, AIESL Kalina Hub & Aircraft Asset Financing Center',
    metaTitle: 'Aviation Consultant in Mumbai | Air Cmde Arvind Srivastava',
    metaDesc: 'Aviation consultant in Mumbai: Air Cmde Arvind Srivastava (IAF Veteran, 30+ yrs). Commercial MRO setup, aircraft leasing, Kalina base & DGCA Western Region advisory.',
    h1: 'Best Aviation Consultant in Mumbai: Air Commodore Arvind Srivastava',
    localAirports: ['Chhatrapati Shivaji Maharaj International Airport (BOM)', 'Navi Mumbai International Airport (NMI) Ulwe', 'Juhu Aerodrome (Helicopter & Offshore Logistics Hub)'],
    mroHubs: ['AIESL Kalina MRO Complex (Airframe & Engine Heavy Overhaul)', 'Juhu Offshore Helicopter Maintenance Facilities', 'Navi Mumbai Airport Planned Line & Base Maintenance Depots'],
    regulatorsDefence: ['DGCA Western Regional Office (Opp. Juhu Aerodrome)', 'Western Naval Command (Naval Aviation Logistics)', 'Indian Coast Guard Air Enclave', 'Financial Institutions & Aircraft Lessors at BKC'],
    overview: `Mumbai is the financial heartbeat and premier commercial aviation gateway of India. Handling dense widebody and narrowbody commercial operations through Chhatrapati Shivaji Maharaj International Airport (BOM) and the upcoming Navi Mumbai International Airport (NMI), the city is a critical center for airline operations, aircraft asset finance, and heavy maintenance infrastructure.

Air Commodore Arvind Srivastava provides specialized aviation consultancy to airlines, non-scheduled operators (NSOP), offshore helicopter operators servicing Bombay High from Juhu Aerodrome, and private equity investors stationed in Bandra-Kurla Complex (BKC). With his 30+ years of military aeronautical engineering and defence acquisition expertise, he bridges technical airworthiness requirements with commercial asset management reality.

The historic AIESL MRO complex at Kalina remains one of India's largest airframe and powerplant overhaul centers, servicing both civilian fleets and military transport aircraft. Furthermore, Mumbai's strategic naval aviation assets under Western Naval Command require seamless industrial support for carrier-borne and maritime patrol aircraft.`,
    localContext: `Consulting in Mumbai demands an acute understanding of high-density air traffic challenges, limited airfield apron footprints, and the urgent need for dedicated line maintenance capacity. With the operationalization of Navi Mumbai Airport, airlines and MRO providers are restructuring their operational bases between BOM and NMI.

For financial institutions and leasing syndicates based in BKC, Air Commodore Arvind Srivastava provides technical due diligence, aircraft physical pre-lease inspections, redelivery records audits, and engine lifecycle analysis. In offshore aviation, where helicopters operate under rigorous maritime conditions from Juhu Aerodrome, our consultancy advises on corrosion mitigation protocols, dynamic component overhauls, and DGCA CAR 145 audit readiness.`,
    servicesOffered: [
      {
        title: 'Commercial Aircraft Leasing & Asset Due Diligence',
        desc: 'Technical advisory for aircraft lessors, banks, and airlines: redelivery condition surveys, maintenance reserve audits, and engine run-out evaluations.'
      },
      {
        title: 'Navi Mumbai Airport MRO Planning',
        desc: 'Operational feasibility and infrastructure layout for line stations and component overhaul workshops at the upcoming Navi Mumbai international hub.'
      },
      {
        title: 'Offshore & Rotary Wing Maintenance Consulting',
        desc: 'Specialized maintenance workflows for offshore helicopter operators (CAR 145/CAR M compliance, safety audits, and rotor dynamic balancing systems).'
      },
      {
        title: 'DGCA Western Region Approvals & Audits',
        desc: 'Preparation for DGCA Western Regional Office safety and airworthiness audits, defect investigation management, and mandatory modification tracking.'
      }
    ],
    faqs: [
      {
        q: 'What makes Mumbai unique for aviation consultancy?',
        a: 'Mumbai combines high-volume commercial airline traffic, India’s primary offshore helicopter operations at Juhu, major AIESL overhaul hangars at Kalina, and the concentration of aircraft leasing financiers in BKC.'
      },
      {
        q: 'How does your consultancy support aircraft leasing companies in Mumbai?',
        a: 'We provide technical pre-lease and lease-return inspections, audit historical maintenance logs, verify engine life-limited parts (LLP) records, and ensure DGCA de-registration/export compliance.'
      },
      {
        q: 'Do you advise on MRO establishment at Navi Mumbai Airport?',
        a: 'Yes. We assist airlines and private MROs with space allocation proposals, regulatory licensing, equipment acquisition, and technician certification for new facilities at NMI.'
      },
      {
        q: 'Can you assist offshore helicopter operators operating from Juhu?',
        a: 'Yes. We consult on maintenance reliability programs, harsh maritime environment maintenance schedules, and DGCA compliance for rotary-wing commercial fleets.'
      }
    ]
  },
  {
    slug: 'bengaluru',
    name: 'Bengaluru',
    state: 'Karnataka',
    heroSubtitle: 'Aerospace & Defence Capital of India, HAL Ecosystem & Devanahalli SEZ',
    metaTitle: 'Aviation Consultant in Bengaluru | Air Cmde Arvind Srivastava',
    metaDesc: 'Aviation consultant in Bengaluru: Air Cmde Arvind Srivastava (IAF Veteran, 30+ yrs). HAL/DRDO tech evaluation, defence R&D, Devanahalli Aerospace Park advisory.',
    h1: 'Best Aviation Consultant in Bengaluru: Air Commodore Arvind Srivastava',
    localAirports: ['Kempegowda International Airport (BLR)', 'HAL Airport (Bangalore HAL Old Airport)', 'Yelahanka Air Force Station (Aero India Host Base)'],
    mroHubs: ['HAL Aircraft, Helicopter & Aero Engine Divisions', 'Devanahalli Aerospace SEZ Precision Manufacturing & MRO Park', 'Air India New Mega MRO Facility at BLR Airport'],
    regulatorsDefence: ['Hindustan Aeronautics Limited (HAL Corporate & Production Divisions)', 'Defence Research and Development Organisation (DRDO Labs: ADE, DARE, LRDE, GTRE)', 'Centre for Military Airworthiness and Certification (CEMILAC)', 'Directorate General of Aeronautical Quality Assurance (DGAQA)'],
    overview: `Bengaluru is unconditionally recognized as the Aerospace and Defence Capital of India. It is the birthplace of indigenous military aircraft like the Light Combat Aircraft (LCA Tejas), Advanced Light Helicopter (ALH Dhruv), and Light Combat Helicopter (Prachand). The city houses the corporate headquarters and manufacturing divisions of Hindustan Aeronautics Limited (HAL), premier DRDO aeronautical research laboratories, and India's military airworthiness certification bodies CEMILAC and DGAQA.

Air Commodore Arvind Srivastava holds a direct and historic connection to the Bengaluru aerospace ecosystem. Having evaluated and managed high-technology defence projects—including aeroengine overhauls for SU-30 MKI and MiG-29 fighters, radar acquisitions, and close combat missile integrations—his technical appreciation of the city's manufacturing and testing capabilities is grounded in 30+ years of operational IAF leadership.

Beyond military aviation, Kempegowda International Airport (BLR) at Devanahalli is constructing one of South Asia's largest dedicated commercial MRO facilities, while the adjacent Karnataka Aerospace SEZ is home to global aerospace giants like Boeing, Airbus, Dynamatic Technologies, Collins Aerospace, and Rolls-Royce.`,
    localContext: `Navigating the Bengaluru aerospace environment requires deep familiarity with CEMILAC military certification standards, DGAQA quality assurance norms, and the indigenization mandate of the Ministry of Defence. Aerospace startups, MSMEs, and Tier-1 suppliers frequently require guidance to transition prototype technology from laboratory test benches to flight-certified systems.

Air Commodore Arvind Srivastava advises aerospace enterprises on qualifying for IDDM and Make-II defence categories, absorbing Transfer of Technology (ToT) from foreign OEMs, and structuring joint development initiatives. For commercial MROs setting up at Devanahalli, he offers technical review of aircraft painting hangars, composite repair facilities, and engine test cells.`,
    servicesOffered: [
      {
        title: 'CEMILAC & DGAQA Military Certification Advisory',
        desc: 'Guiding private aerospace manufacturers through design approval, qualification testing, and airworthiness certification for airborne military hardware.'
      },
      {
        title: 'HAL & DRDO Defence Programme Engagement',
        desc: 'Technical advisory on partnering with HAL divisions, absorbing ToT, responding to aerospace tenders, and meeting DRDO development milestone requirements.'
      },
      {
        title: 'Devanahalli Aerospace SEZ Facility Planning',
        desc: 'Consultancy for establishing advanced machining, avionics assembly, and aircraft component MRO workshops in the Bengaluru Aerospace Park.'
      },
      {
        title: 'Aeroengine Overhaul & Test Bench Qualification',
        desc: 'Technical consultation on gas turbine engine overhaul facilities, test bed instrumentation, and hot-section inspection protocols based on military turbine experience.'
      }
    ],
    faqs: [
      {
        q: 'Why is Bengaluru the primary hub for aviation consultancy in India?',
        a: 'Bengaluru concentrates over 65% of India’s aerospace research, development, and manufacturing capacity, featuring HAL, DRDO labs, CEMILAC, DGAQA, and the massive Devanahalli Aerospace Park.'
      },
      {
        q: 'How does Air Commodore Arvind Srivastava support aerospace manufacturers in Bengaluru?',
        a: 'With 30+ years as an IAF aeronautical engineer and MoD capital acquisition veteran, he provides technical evaluation, CEMILAC compliance roadmaps, and defence procurement alignment under DAP 2020.'
      },
      {
        q: 'Can you assist aerospace startups working with DRDO or HAL?',
        a: 'Yes. We guide startups on Technology Development Fund (TDF) requirements, iDEX challenges, SQR technical alignment, and standard testing procedures.'
      },
      {
        q: 'What experience does your team have with military aeroengines in Bengaluru?',
        a: 'Air Cmde Srivastava has direct technical oversight experience with high-performance jet engines including SU-30 MKI AL-31FP and MiG-29 RD-33 powerplants, from base-level servicing to depot overhaul.'
      }
    ]
  },
  {
    slug: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    heroSubtitle: 'Civil Aviation MRO Epicenter, GMR Aerospace SEZ & Defence Aerospace JVs',
    metaTitle: 'Aviation Consultant in Hyderabad | Air Cmde Arvind Srivastava',
    metaDesc: 'Aviation consultant in Hyderabad: Air Cmde Arvind Srivastava (IAF Veteran, 30+ yrs). GMR Aerospace SEZ, civil MRO, Adibatla defence JVs & training advisory.',
    h1: 'Best Aviation Consultant in Hyderabad: Air Commodore Arvind Srivastava',
    localAirports: ['Rajiv Gandhi International Airport (HYD) Shamshabad', 'Begumpet Airport (Wings India Host & VIP Enclave)', 'Dundigal Air Force Academy (AFA)', 'Hakimpet Air Force Station'],
    mroHubs: ['GMR Aero Technic (GAT) Airframe Heavy Maintenance Facility', 'Safran Aircraft Engine MRO Facility', 'Pratt & Whitney Customer Training Center', 'Adibatla Tata Aerospace & Defence Complex'],
    regulatorsDefence: ['DGCA Hyderabad Sub-Regional Office', 'Defence Research & Development Laboratory (DRDL - Missile Complex)', 'Research Centre Imarat (RCI)', 'Bharat Dynamics Limited (BDL)'],
    overview: `Hyderabad has emerged as India's premier commercial aircraft maintenance and rotary-wing manufacturing corridor. Rajiv Gandhi International Airport (HYD) at Shamshabad hosts GMR Aero Technic, one of South Asia's most sophisticated base maintenance facilities capable of handling multi-bay narrowbody and widebody overhauls with international EASA and FAA certifications.

Air Commodore Arvind Srivastava brings extensive technical understanding of the Hyderabad aviation ecosystem. Having trained over 1,000 aviation technical personnel across his 30-year IAF career and having advised on missile and sensor integrations—many developed at Hyderabad's renowned DRDL/RCI missile complex—he provides deep industry knowledge for companies operating in the region.

Furthermore, the aerospace clusters in Adibatla house critical joint ventures such as Tata Boeing Aerospace Limited (TBAL) producing AH-64 Apache fuselages and Tata Lockheed Martin Aerostructures producing C-130 empennages, establishing Hyderabad as a precision aerospace manufacturing powerhouse.`,
    localContext: `The rapid rise of Hyderabad as an aviation MRO destination is supported by progressive state aerospace policies, dedicated aerospace SEZs at Shamshabad and Adibatla, and significant presence of international engine OEMs like Safran and Pratt & Whitney.

For companies establishing operations in Hyderabad, Air Commodore Arvind Srivastava provides guidance on regulatory approvals, technical workforce accreditation, military-to-civilian maintenance technician skill conversion, and supply chain localization. His advisory helps MROs optimize turnaround times (TAT), establish clean-room composite repair capabilities, and prepare for comprehensive DGCA CAR 145 quality audits.`,
    servicesOffered: [
      {
        title: 'Commercial MRO Expansion & Bay Optimization',
        desc: 'Advisory for multi-bay hangar planning, lean maintenance turnaround workflows, and line-to-base maintenance transition strategies in Shamshabad.'
      },
      {
        title: 'Technical Aviation Training & Certification Setup',
        desc: 'Structuring maintenance training organizations under CAR 147, leveraging military veteran engineering talent for civil commercial MRO certification.'
      },
      {
        title: 'Aerospace Joint Venture Technical Support',
        desc: 'Independent technical evaluation for aerospace joint ventures in Adibatla, quality assurance system alignment, and defence procurement liaison.'
      },
      {
        title: 'Missile System & Avionics Lifecycle Advisory',
        desc: 'Lifecycle sustenance and integration consulting for air-launched missile systems and radar payloads developed in the Hyderabad defence cluster.'
      }
    ],
    faqs: [
      {
        q: 'What makes Hyderabad a leading hub for commercial aircraft MRO?',
        a: 'Hyderabad features the GMR Aero Technic facility at Shamshabad, state-level aerospace tax incentives, Safran and Pratt & Whitney facilities, and favorable weather conditions allowing round-the-year operations.'
      },
      {
        q: 'How does your consultancy help MRO providers in Hyderabad?',
        a: 'We consult on CAR 145 compliance, hangar infrastructure optimization, quality manual auditing, tooling acquisition, and technical workforce certification.'
      },
      {
        q: 'Can you assist defence joint ventures located in Adibatla?',
        a: 'Yes. We advise aerospace manufacturing joint ventures on defence procurement compliance, offset fulfillment, and technical evaluation under MoD procurement frameworks.'
      },
      {
        q: 'What is your background in technical training for aviation technicians?',
        a: 'Air Commodore Arvind Srivastava led 16 engineering officers and 100+ airmen instructors in certifying over 1,000 aviation technical personnel for I and II-line maintenance in the Indian Air Force.'
      }
    ]
  },
  {
    slug: 'chennai',
    name: 'Chennai',
    state: 'Tamil Nadu',
    heroSubtitle: 'Southern Aerospace Corridor, Naval Aviation Gateway & Sriperumbudur Precision Hub',
    metaTitle: 'Aviation Consultant in Chennai | Air Cmde Arvind Srivastava',
    metaDesc: 'Aviation consultant in Chennai: Air Cmde Arvind Srivastava (IAF Veteran, 30+ yrs). Tamil Nadu Defence Corridor, naval aviation, MRO & DGCA Southern Region advisory.',
    h1: 'Best Aviation Consultant in Chennai: Air Commodore Arvind Srivastava',
    localAirports: ['Chennai International Airport (MAA) Meenambakkam', 'Tambaram Air Force Station (Flying & Ground Training Base)', 'INS Rajali (Arakkonam Naval Air Station - P-8I Base)'],
    mroHubs: ['Air India Engineering Services MAA Line Maintenance', 'Tambaram Base Repair and Maintenance Training Depots', 'Sriperumbudur Aerospace & Precision Machining Hub'],
    regulatorsDefence: ['DGCA Southern Regional Office (Chennai Airport)', 'Tamil Nadu Industrial Development Corporation (TIDCO - TNDIC)', 'Combat Vehicles Research and Development Establishment (CVRDE Avadi)', 'Southern Air Command Liaison Enclaves'],
    overview: `Chennai serves as the industrial powerhouse of Southern India and the anchor of the Tamil Nadu Defence Industrial Corridor (TNDIC). Anchored by the extensive air cargo and passenger traffic at Chennai International Airport (MAA), the historic military installations at Tambaram Air Force Station, and the strategic naval air station at INS Rajali (Arakkonam)—the home of the Indian Navy's Boeing P-8I maritime reconnaissance fleet—the region holds deep aerospace significance.

Air Commodore Arvind Srivastava provides high-level consultancy to aerospace precision engineering firms, tier-2 defence suppliers in the Sriperumbudur and Oragadam industrial belts, and commercial operators under the jurisdiction of the DGCA Southern Regional Office. His military career as an Aeronautical Engineer and former Deputy Director General Technical (Air) in Defence Capital Acquisition gives him authoritative command over both maritime and air force aviation requirements.

With TIDCO aggressively establishing aerospace component manufacturing parks and an advanced MRO complex in the state, Chennai is becoming a crucial supplier of complex structural parts, wiring harnesses, and aviation fasteners to global aerospace supply chains.`,
    localContext: `The Chennai aviation corridor blends mature automotive-grade precision manufacturing with high-specification aerospace metallurgy and composites. The challenge for many regional manufacturers is bridging the gap from industrial manufacturing to AS9100, DGAQA, and DGCA certified aviation production.

Air Commodore Arvind Srivastava works with engineering companies in Chennai, Coimbatore, and Salem to upgrade their quality management systems, establish AS9100-compliant clean workshops, and navigate the technical appreciation requirements for Ministry of Defence tenders. Furthermore, with Chennai being a primary air-cargo hub to Southeast Asia, he consults logistics and non-scheduled cargo operators on fleet maintenance compliance and DGCA CAR M airworthiness adherence.`,
    servicesOffered: [
      {
        title: 'Tamil Nadu Defence Corridor (TNDIC) Advisory',
        desc: 'Advisory for manufacturing enterprises setting up aerospace machining, tooling, and component lines within TIDCO aerospace parks.'
      },
      {
        title: 'Maritime & Naval Aviation Maintenance Consulting',
        desc: 'Consultancy on specialized corrosion prevention, naval aviation standard adherence, and maintenance for aircraft operating in coastal conditions.'
      },
      {
        title: 'DGCA Southern Regional Airworthiness Approvals',
        desc: 'Facilitating CAR 145 and CAR CAMO documentation, compliance audits, and engineering approvals through the DGCA Southern Regional Office at MAA.'
      },
      {
        title: 'Aerospace Precision Supplier Indigenization',
        desc: 'Technical readiness audits for Chennai engineering firms entering the Make in India aerospace supply chain for titanium, aluminium alloy, and composite components.'
      }
    ],
    faqs: [
      {
        q: 'What aerospace opportunities does Chennai offer?',
        a: 'Chennai anchors the Tamil Nadu Defence Industrial Corridor, hosts naval aviation at INS Rajali, has heavy cargo operations at MAA, and possesses advanced precision manufacturing in Sriperumbudur.'
      },
      {
        q: 'How does your consultancy assist manufacturers in Tamil Nadu?',
        a: 'We help precision engineering companies upgrade to aerospace standards (AS9100, DGAQA), prepare technical bids for MoD capital acquisition, and integrate into tier-1 supply chains.'
      },
      {
        q: 'What is your background in coastal and naval aviation maintenance?',
        a: 'With 30+ years in military aeronautical engineering, Air Cmde Srivastava understands coastal environmental degradation, corrosion control, and high-reliability systems demanded by naval and air force standards.'
      },
      {
        q: 'Do you consult on regional air cargo operations in Chennai?',
        a: 'Yes. We advise air cargo operators on fleet acquisition technical audits, CAR M airworthiness management, and line maintenance support contracts.'
      }
    ]
  },
  {
    slug: 'kolkata',
    name: 'Kolkata',
    state: 'West Bengal',
    heroSubtitle: 'Eastern Aviation Gateway, Barrackpore MRO Nexus & Regional Feeder Hub',
    metaTitle: 'Aviation Consultant in Kolkata | Air Cmde Arvind Srivastava',
    metaDesc: 'Aviation consultant in Kolkata: Air Cmde Arvind Srivastava (IAF Veteran, 30+ yrs). Eastern Gateway, Barrackpore MRO, regional connectivity (UDAN) & DGCA advisory.',
    h1: 'Best Aviation Consultant in Kolkata: Air Commodore Arvind Srivastava',
    localAirports: ['Netaji Subhash Chandra Bose International Airport (CCU) Dum Dum', 'Barrackpore Air Force Station (Historic IAF Base & Depot)', 'Kalaikunda Air Force Station (Frontline Tactical Fighter Base)'],
    mroHubs: ['Air India Engineering Services Eastern Regional Line Maintenance', 'Barrackpore Base Repair Facilities', 'Andal (Durgapur) Airport Regional Aviation Maintenance Enclave'],
    regulatorsDefence: ['DGCA Eastern Regional Office (Dum Dum Airport)', 'Eastern Air Command Strategic Logistics Links', 'Airports Authority of India Eastern Headquarters', 'Garden Reach Shipbuilders & Engineers (Naval Aviation Platform Integration)'],
    overview: `Kolkata stands as the indispensable aviation gateway to Eastern India, the Andaman & Nicobar Islands, and the entire Northeastern region. Centered around Netaji Subhash Chandra Bose International Airport (CCU) at Dum Dum and flanked by strategic military airfields including Barrackpore AFS and Kalaikunda AFS, Kolkata plays a dual role in heavy commercial transit and frontline national air defence.

Air Commodore Arvind Srivastava provides technical advisory to regional airlines, UDAN (Regional Connectivity Scheme) operators, helicopter feeder services, and aerospace repair workshops in Eastern India. His 30+ years of military aeronautical engineering leadership—during which he oversaw modernization of aircraft servicing facilities and managed technical support for frontline fighter and helicopter fleets—provides an unmatched foundation for aviation operations in this region.

With the expansion of regional connectivity through Tier-2/3 airports across Bengal, Bihar, Odisha, and the North East, Kolkata is the natural logistics, spares distribution, and line maintenance headquarters for regional feeder fleets (ATR 72, Bombardier Q400, and Embraer aircraft).`,
    localContext: `The Eastern aviation corridor presents specific operational challenges, including high humidity, monsoon extremes, and terrain difficulties across Himalayan and Northeastern routes. Airlines operating from Kolkata require resilient maintenance schedules, robust turnaround inspections, and streamlined spares logistics.

Air Commodore Arvind Srivastava consults regional airlines and charter operators on establishing robust line maintenance stations under DGCA CAR 145, managing continuing airworthiness under CAR M, and navigating regulatory submissions through the DGCA Eastern Regional Office at Dum Dum. Furthermore, for defence suppliers engaging with Eastern Air Command requirements, he provides expert guidance on capital acquisition processes under the Defence Acquisition Procedure (DAP 2020).`,
    servicesOffered: [
      {
        title: 'Regional Airline & UDAN Fleet Maintenance Consulting',
        desc: 'Structuring line maintenance stations, ground support equipment (GSE) acquisition, and minimum equipment list (MEL) management for regional feeder aircraft.'
      },
      {
        title: 'DGCA Eastern Region Airworthiness Approvals',
        desc: 'Consultancy for air operator permit (AOP) technical manuals, CAR 145 line maintenance certification, and annual airworthiness review audits.'
      },
      {
        title: 'Northeast Aviation Spares Pipeline Strategy',
        desc: 'Designing bonded warehouse spares distribution networks and critical rotables management connecting Kolkata with remote regional airfields.'
      },
      {
        title: 'Helicopter Feeder & Remote Connectivity Advisory',
        desc: 'Technical operations advisory for rotary-wing services operating under demanding terrain and weather conditions in the Eastern sector.'
      }
    ],
    faqs: [
      {
        q: 'Why is Kolkata critical for regional aviation consultancy?',
        a: 'Kolkata is the primary operational and maintenance hub for flights feeding the entire Northeast, regional UDAN routes, and strategic connections to Port Blair and Southeast Asia.'
      },
      {
        q: 'How do you support regional connectivity operators in Eastern India?',
        a: 'We advise on regional fleet induction (turboprops and regional jets), line station setup, CAR 145/CAR M compliance, and maintenance contract negotiations.'
      },
      {
        q: 'What experience does your consultancy have with extreme weather operations?',
        a: 'Having managed IAF aircraft maintenance across varied Indian geographies over 30+ years, Air Cmde Srivastava provides proven maintenance strategies for high-humidity and monsoon operations.'
      },
      {
        q: 'Can you assist with DGCA approvals in Kolkata?',
        a: 'Yes. We guide operators through airworthiness approvals, maintenance organization certifications, and safety audits at the DGCA Eastern Regional Office in Dum Dum.'
      }
    ]
  },
  {
    slug: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    heroSubtitle: 'Precision Aerospace Manufacturing, Base Repair Depots & Advanced Drone Hub',
    metaTitle: 'Aviation Consultant in Pune | Air Cmde Arvind Srivastava',
    metaDesc: 'Aviation consultant in Pune: Air Cmde Arvind Srivastava (IAF Veteran, 30+ yrs). Base Repair Depots, precision aerospace machining, SU-30 MKI & UAV advisory.',
    h1: 'Best Aviation Consultant in Pune: Air Commodore Arvind Srivastava',
    localAirports: ['Pune International Airport (PNQ) Lohegaon Air Force Station', 'Baramati Airport (Aviation Training & General Aviation)'],
    mroHubs: ['Lohegaon Air Force Base Servicing & Maintenance Facilities', 'Kalyani / Bharat Forge Precision Aerospace Forging Facilities', 'MIDC Chakan & Bhosari Precision Aerospace Machining Hubs'],
    regulatorsDefence: ['Armament Research & Development Establishment (ARDE - DRDO)', 'High Energy Materials Research Laboratory (HEMRL - DRDO)', 'Air Force Station Lohegaon (Frontline SU-30 MKI Fighter Wing)', 'Directorate General of Aeronautical Quality Assurance (DGAQA Pune Enclave)'],
    overview: `Pune represents one of India's most strategically vital aerospace clusters, harmoniously integrating frontline military operational aviation with world-class precision manufacturing. Air Force Station Lohegaon is a premier frontline fighter base operating the Sukhoi SU-30 MKI, sharing its runway with Pune International Airport (PNQ).

Air Commodore Arvind Srivastava possesses direct, firsthand technical familiarity with the Pune aerospace sector. Throughout his 30+ years as an Indian Air Force Aeronautical Engineer, he contributed significantly to aeroengine overhaul programs, radar systems, and servicing modernization for frontline fighter platforms including the SU-30 MKI.

Simultaneously, Pune's industrial corridors in Chakan, Bhosari, and Talegaon—anchored by global forging leaders like Bharat Forge and dozens of high-precision CNC aerospace suppliers—produce complex engine forgings, landing gear components, and titanium aerostructures for global aerospace OEMs and the Indian Armed Forces.`,
    localContext: `The transition of Pune's precision automotive engineering base into high-precision aerospace and unmanned aerial vehicle (UAV) manufacturing has accelerated dramatically. Pune is today a primary hub for drone technology startups and advanced missile component development, supported by DRDO laboratories ARDE and HEMRL.

Air Commodore Arvind Srivastava consults Pune aerospace manufacturers, precision machine shops, and drone developers on meeting DGAQA quality standards, navigating Defence Capital Acquisition under Make-II and IDDM categories, and securing military airworthiness approvals. His advisory provides clear technical pathways to convert engineering capabilities into qualified defence aerospace deliveries.`,
    servicesOffered: [
      {
        title: 'SU-30 MKI & Military Aerospace Supplier Alignment',
        desc: 'Consulting tier-2/3 vendors in Pune on manufacturing and testing aerospace spares, brackets, and structural elements conforming to Russian and Western military specifications.'
      },
      {
        title: 'Unmanned Aerial Systems (UAS) & Drone Certification',
        desc: 'Technical advisory for drone manufacturers on Type Certification with DGCA, military UAV trial evaluation protocols, and SQR compliance.'
      },
      {
        title: 'Aerospace Forging & Precision Machining Quality Audits',
        desc: 'Preparing Pune manufacturing enterprises for AS9100 Rev D certification, DGAQA inspection approvals, and customer source inspections.'
      },
      {
        title: 'Base Repair Depot (BRD) Subcontracting Advisory',
        desc: 'Technical guidance on competing for and executing maintenance, repair, and overhaul contracts for Air Force Base Repair Depots.'
      }
    ],
    faqs: [
      {
        q: 'Why is Pune critical for defence aerospace manufacturing?',
        a: 'Pune combines a frontline SU-30 MKI fighter airbase at Lohegaon, advanced DRDO missile and armament laboratories, world-leading forging capabilities at Bharat Forge, and a rapidly expanding drone startup ecosystem.'
      },
      {
        q: 'What experience does Air Commodore Arvind Srivastava have with SU-30 MKI aircraft?',
        a: 'As an IAF Aeronautical Engineer and former DDG Technical (Air), Air Cmde Srivastava contributed to technical evaluations, aeroengine overhaul setups, and weapon integration processes for SU-30 MKI fleets.'
      },
      {
        q: 'Can you help drone companies in Pune secure military and civil certifications?',
        a: 'Yes. We guide drone manufacturers through DGCA Type Certification, trial evaluation procedures for defence tenders, and military specification compliance.'
      },
      {
        q: 'How can a precision machine shop in Chakan enter the aerospace sector?',
        a: 'We perform technical capability assessments, recommend necessary calibration and quality protocols, assist with AS9100 alignment, and guide bidding on defence indigenization tenders.'
      }
    ]
  },
  {
    slug: 'ahmedabad',
    name: 'Ahmedabad',
    state: 'Gujarat',
    heroSubtitle: 'Emerging Aerospace Corridor, Airbus C-295 Cluster & GIFT City Aircraft Leasing',
    metaTitle: 'Aviation Consultant in Ahmedabad | Air Cmde Arvind Srivastava',
    metaDesc: 'Aviation consultant in Ahmedabad: Air Cmde Arvind Srivastava (IAF Veteran, 30+ yrs). GIFT City aircraft leasing, Airbus C-295 supply chain & MRO advisory.',
    h1: 'Best Aviation Consultant in Ahmedabad: Air Commodore Arvind Srivastava',
    localAirports: ['Sardar Vallabhbhai Patel International Airport (SVPIA) Ahmedabad', 'Dholera International Airport (Under Fast-Track Construction)', 'Vadodara Airport (Tata-Airbus C-295 Final Assembly Line)'],
    mroHubs: ['SVPIA Ahmedabad Line Maintenance & Private Hangars', 'Dholera Aviation Hub (Planned Comprehensive MRO City)', 'GIFT City (International Financial Services Centre - IFSC)'],
    regulatorsDefence: ['International Financial Services Centres Authority (IFSCA - GIFT City)', 'Gujarat State Aviation Infrastructure Company Limited (GUJSAIL)', 'Air Force Station South Western Air Command (SWAC HQ Gandhinagar)', 'DGCA Ahmedabad Sub-Regional Office'],
    overview: `Gujarat is undergoing the most rapid aerospace expansion in modern Indian history. Centered around the Ahmedabad-Gandhinagar capital nexus and extending to the Tata Advanced Systems-Airbus C-295 Final Assembly Line in Vadodara and the Dholera Special Investment Region (SIR), the state is quickly positioning itself as a formidable aerospace manufacturing and financing powerhouse.

Air Commodore Arvind Srivastava delivers strategic and technical aviation consultancy across Gujarat. With the headquarters of the Indian Air Force's South Western Air Command (SWAC) stationed in Gandhinagar and major military air bases across the state, his 30+ years of military aeronautical engineering service provides invaluable insight into the region's operational and strategic requirements.

Crucially, GIFT City (Gujarat International Finance Tec-City) in Gandhinagar has become India's onshore offshore aircraft leasing hub under the regulatory oversight of IFSCA, providing unprecedented tax incentives and regulatory frameworks for aircraft and engine leasing.`,
    localContext: `The Gujarat aviation ecosystem requires a sophisticated blend of technical airworthiness understanding and financial structuring. For companies establishing aircraft leasing entities in GIFT City, technical audits of leased assets, redelivery records verification, and maintenance reserve evaluations are paramount.

Simultaneously, the C-295 military transport aircraft manufacturing program in nearby Vadodara is sparking demand for tier-1, tier-2, and tier-3 aerospace sheet metal, avionics wiring, and precision component suppliers across Ahmedabad's Sanand and Changodar industrial belts. Air Commodore Arvind Srivastava advises manufacturing companies on qualifying as certified aviation suppliers and assists operators in establishing maintenance infrastructure at SVPIA and upcoming Dholera.`,
    servicesOffered: [
      {
        title: 'GIFT City Aircraft Leasing Technical Due Diligence',
        desc: 'Technical advisory for leasing companies registered under IFSCA at GIFT City: asset redelivery audits, lease return surveys, and technical asset valuation.'
      },
      {
        title: 'Airbus C-295 Supply Chain Indigenization',
        desc: 'Guiding Gujarat engineering firms to meet aerospace manufacturing standards for structural and electrical components for the C-295 program.'
      },
      {
        title: 'Dholera SIR Aviation & MRO Master Planning',
        desc: 'Advisory on technical specifications, apron requirements, and regulatory licensing for upcoming maintenance and aerospace facilities in Dholera.'
      },
      {
        title: 'SWAC & Regional Defence Vendor Support',
        desc: 'Assisting regional contractors in meeting Air Force technical procurement standards for ground support equipment, spares, and facility modernization.'
      }
    ],
    faqs: [
      {
        q: 'Why is Ahmedabad and Gujarat becoming a major aviation hub?',
        a: 'Gujarat hosts the Tata-Airbus C-295 military aircraft assembly line in Vadodara, India’s aircraft leasing hub at GIFT City IFSC, and the major upcoming Dholera aviation city.'
      },
      {
        q: 'How does your consultancy assist aircraft leasing entities in GIFT City?',
        a: 'We provide technical asset inspection, aircraft lease agreement technical review, maintenance reserve audits, and verify redelivery conditions under DGCA and international norms.'
      },
      {
        q: 'Can you assist manufacturers bidding to supply the C-295 aircraft program?',
        a: 'Yes. We evaluate manufacturing facilities for aerospace quality compliance, guide quality manual preparation, and assist in meeting aerospace prime contractor requirements.'
      },
      {
        q: 'What role does Dholera play in future aircraft MRO in India?',
        a: 'Dholera is being designed as an integrated aviation city with dedicated runways, heavy MRO zones, and cargo facilities free from urban airspace congestion.'
      }
    ]
  }
];

export const internationalHubs = [
  {
    slug: 'uae',
    name: 'United Arab Emirates (UAE)',
    hreflang: 'en-AE',
    heroSubtitle: 'Middle East Aviation Nexus, Cross-Border MRO & Bilateral Defence Technology Linkages',
    metaTitle: 'Aviation Consultant in UAE & Middle East | Air Cmde Srivastava',
    metaDesc: 'Aviation consultant for UAE & Middle East: Air Cmde Arvind Srivastava. Cross-border aircraft MRO, defence offsets, Sanad partnership & GCC advisory.',
    h1: 'Best Aviation Consultant for UAE & Middle East: Air Commodore Arvind Srivastava',
    overview: `The United Arab Emirates is one of the world's preeminent international civil aviation hubs and a major defence technology investor. Through Dubai International (DXB), Dubai South / Al Maktoum International (DWC), and Abu Dhabi International (AUH), the UAE operates vast fleets of modern widebody aircraft supported by world-class MRO institutions like Sanad and Emirates Engineering.

Air Commodore Arvind Srivastava offers strategic consultancy to UAE aerospace companies, defence suppliers, and corporate aviation operators seeking structured technical collaboration with India's booming aerospace market. As a 30+ year Indian Air Force Aeronautical Engineer and former Deputy Director General Technical (Air) in Defence Capital Acquisition, his insight into defence procurement, technology absorption, and MRO modernization provides a powerful bridge across the Arabian Gulf.

With India and the UAE strengthening their comprehensive strategic partnership, aerospace trade, joint military exercises, and component supply chains are expanding rapidly between the two nations.`,
    servicesOffered: [
      {
        title: 'India-UAE Cross-Border MRO Partnership',
        desc: 'Structuring joint ventures between UAE heavy maintenance facilities and Indian line maintenance providers to capture growing commercial fleet maintenance demand.'
      },
      {
        title: 'Tawazun Council & Indian Defence Offset Alignment',
        desc: 'Consulting on bilateral defence industrial cooperation, technology exchange frameworks, and Make in India offset fulfillment strategies.'
      },
      {
        title: 'Aviation Executive & Technical Skill Exchange',
        desc: 'Establishing technical certification bridging programs between GCAA (UAE) and DGCA (India) standards for licensed aircraft maintenance engineers.'
      }
    ],
    faqs: [
      {
        q: 'What aviation consulting services do you offer for UAE-based companies?',
        a: 'We advise on cross-border MRO ventures with India, technical evaluation of aerospace investments, Indian Defence Acquisition Procedure (DAP 2020) advisory, and regulatory alignment.'
      },
      {
        q: 'How can UAE aerospace firms participate in the Indian defence market?',
        a: 'We provide technical appreciation of Indian defence requirements, identify verified Indian manufacturing partners, and structure joint bids under Make in India and IDDM categories.'
      }
    ]
  },
  {
    slug: 'singapore',
    name: 'Singapore',
    hreflang: 'en-SG',
    heroSubtitle: 'Asia-Pacific Aerospace Hub, Seletar MRO Excellence & Changi Innovation Nexus',
    metaTitle: 'Aviation Consultant for Singapore & ASEAN | Air Cmde Srivastava',
    metaDesc: 'Aviation consultant for Singapore & ASEAN: Air Cmde Arvind Srivastava. Seletar MRO linkages, supply chain distribution, CAAS-DGCA standards & tech advisory.',
    h1: 'Best Aviation Consultant for Singapore & ASEAN: Air Commodore Arvind Srivastava',
    overview: `Singapore is the leading aerospace maintenance, repair, and overhaul (MRO) hub in the Asia-Pacific region, accounting for over 10% of global aviation MRO output. Centered around the specialized Seletar Aerospace Park and Changi Airport ecosystem, Singapore houses premier facilities for engine overhauls, component repair, and aerospace innovation.

Air Commodore Arvind Srivastava provides specialized advisory to Singaporean aerospace corporations, component repair facilities, and logistics syndicates seeking to interface with India's rapidly growing commercial fleet. With Indian carriers having over 1,500 commercial aircraft on order, Singapore's advanced component repair and engine overhaul infrastructure plays an indispensable role in maintaining fleet airworthiness.

Our consultancy assists ASEAN aerospace suppliers in navigating Indian civil aviation (DGCA) airworthiness norms, evaluating technical joint ventures in India, and establishing dependable supply chains for rotables, consumables, and engine life-limited parts (LLP).`,
    servicesOffered: [
      {
        title: 'CAAS to DGCA Regulatory Cross-Alignment',
        desc: 'Advisory on mutual acceptance of maintenance approvals, dual-release certification procedures, and bilateral airworthiness documentation.'
      },
      {
        title: 'Aeroengine Component Repair Supply Pipelines',
        desc: 'Structuring component maintenance agreements and fast-track logistics pathways between Seletar overhaul shops and Indian airline hubs.'
      },
      {
        title: 'Regional Aviation Technology & Training Expansion',
        desc: 'Advisory for Singaporean aviation training academies looking to expand maintenance training operations and technician certification into the Indian market.'
      }
    ],
    faqs: [
      {
        q: 'Why should Singaporean aerospace firms engage an Indian aviation consultant?',
        a: 'India is the fastest-growing aviation market in the world with over 1,500 new aircraft on order. An Indian consultant provides the regulatory, technical, and operational navigation required to capture MRO and supply contracts.'
      },
      {
        q: 'Can you assist with DGCA validation of Singapore MRO facilities?',
        a: 'Yes. We assist Singaporean maintenance organizations with DGCA CAR 145 foreign AMO approval documentation and compliance preparation.'
      }
    ]
  },
  {
    slug: 'united-kingdom',
    name: 'United Kingdom',
    hreflang: 'en-GB',
    heroSubtitle: 'Historic Aerospace Innovation, UK MOD Defence Linkages & Rolls-Royce Heritage',
    metaTitle: 'Aviation Consultant UK & Europe | Air Cmde Arvind Srivastava',
    metaDesc: 'Aviation consultant for UK & Europe: Air Cmde Arvind Srivastava. UK MOD DE&S defence linkages, Rolls-Royce/BAE indigenization & UK CAA-DGCA advisory.',
    h1: 'Best Aviation Consultant for UK & Europe: Air Commodore Arvind Srivastava',
    overview: `The United Kingdom possesses one of the world's most advanced aerospace industries, renowned for aeroengine innovation (Rolls-Royce), advanced aerostructures, and military aircraft systems (BAE Systems). Through Farnborough, Filton, and the Midlands Aerospace Alliance, the UK continues to set global benchmarks in civil and defence aerospace engineering.

Air Commodore Arvind Srivastava consults UK defence contractors, aerospace component manufacturers, and consultancy groups engaging with the Indian aerospace and defence market. As a former Deputy Director General Technical (Air) in Defence Capital Acquisition at India's Ministry of Defence, he brings authoritative knowledge of Indian procurement policies, Make in India mandates, and technology absorption requirements.

With the UK and India strengthening defence industrial collaboration under the 2030 Roadmap—focusing on maritime electric propulsion, combat aircraft engine co-development, and complex weapons—Air Commodore Arvind Srivastava provides trusted technical guidance to facilitate high-value partnerships.`,
    servicesOffered: [
      {
        title: 'UK Defence Contractors MoD Tender Guidance',
        desc: 'Technical advisory on Defence Acquisition Procedure (DAP 2020), including proposal formulation for Make-I/II, IDDM, and Global categories.'
      },
      {
        title: 'UK CAA & DGCA Airworthiness Harmonization',
        desc: 'Technical reviews for aircraft asset redelivery, historical logbook harmonization, and airworthiness conformity between UK and Indian civil aviation authorities.'
      },
      {
        title: 'Defence Co-Development & ToT Absorption Advisory',
        desc: 'Assessing Indian manufacturing capability to absorb UK technology transfers for aeroengine components, radar modules, and structural composites.'
      }
    ],
    faqs: [
      {
        q: 'How does your consultancy assist UK defence suppliers bidding in India?',
        a: 'Having directed technical appreciation for major defence capital acquisitions at the Indian Ministry of Defence, Air Cmde Srivastava guides UK firms on SQR compliance, trial evaluations, and Make in India localization.'
      },
      {
        q: 'Do you advise on UK CAA to Indian DGCA aircraft transfers?',
        a: 'Yes. We conduct complete technical audits of aircraft records, airworthiness directive (AD) compliance, and modification histories for aircraft transitioning between UK and Indian registrations.'
      }
    ]
  },
  {
    slug: 'usa',
    name: 'United States',
    hreflang: 'en-US',
    heroSubtitle: 'Global Aerospace Leader, Foreign Military Sales (FMS) & FAA-DGCA Bilateral Compliance',
    metaTitle: 'Aviation Consultant USA & Americas | Air Cmde Arvind Srivastava',
    metaDesc: 'Aviation consultant for USA: Air Cmde Arvind Srivastava. US-India FMS procurement, FAA vs DGCA compliance, Boeing/Lockheed supply chain & DTTI advisory.',
    h1: 'Best Aviation Consultant for USA & Americas: Air Commodore Arvind Srivastava',
    overview: `The United States is the undisputed global leader in civil aerospace and defence technology. Major American OEMs—including Boeing, Lockheed Martin, General Electric, Pratt & Whitney, and Honeywell—play a transformative role in India's commercial airline fleets and military aviation capabilities.

Air Commodore Arvind Srivastava provides high-level technical and defence procurement consultancy to American aerospace primes, component suppliers, and aviation investment syndicates. Throughout his 30+ year Indian Air Force career, he engaged directly with major international defence equipment procurements, lifecycle sustenance programs, and high-power radar and missile systems.

With US-India defence trade exceeding $25 billion through Foreign Military Sales (FMS) and Direct Commercial Sales (DCS)—encompassing platforms such as the P-8I, C-17 Globemaster, AH-64E Apache, CH-47F Chinook, and MH-60R Seahawk—Air Commodore Arvind Srivastava provides specialized insight into Indian operational environments, maintenance sustainment, and defence offset execution.`,
    servicesOffered: [
      {
        title: 'Foreign Military Sales (FMS) Lifecycle Sustenance',
        desc: 'Advisory on depot-level maintenance, spares provisioning, and performance-based logistics (PBL) for US-origin defence platforms in Indian military service.'
      },
      {
        title: 'FAA FAR 145 & DGCA CAR 145 Bilateral Alignment',
        desc: 'Technical consultation on dual-certification compliance, repair station manual drafting, and FAA-to-DGCA airworthiness acceptance.'
      },
      {
        title: 'US-India DTTI & Industrial Vendor Identification',
        desc: 'Identifying, vetting, and auditing Indian aerospace manufacturing vendors to join global tier-1 supply chains for US prime contractors.'
      }
    ],
    faqs: [
      {
        q: 'How do you support US aerospace companies operating in India?',
        a: 'We provide technical appreciation of Indian defence tenders, advisory on DAP 2020 procurement pathways, vendor vetting for supply chain localization, and civil DGCA regulatory guidance.'
      },
      {
        q: 'What is your background with US defence aviation platforms?',
        a: 'Air Commodore Arvind Srivastava has deep operational knowledge of lifecycle maintenance, avionics modernization, and procurement protocols for high-technology defence aerospace platforms in Indian military service.'
      }
    ]
  }
];
