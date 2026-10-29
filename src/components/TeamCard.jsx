import React from 'react';
import { Shield, UserCheck, ExternalLink } from 'lucide-react';

export default function TeamCard({ member }) {
  const role = member.role || member.designation || 'Defence Consultant';
  const initial = member.photoPlaceholder || (member.name ? member.name.charAt(0) : 'L');

  return (
    <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-7 shadow-sm hover:shadow-lg hover:border-[#C9A96E] transition-all group flex flex-col justify-between">
      <div>
        {/* Profile Avatar / Photo */}
        <div className="w-16 h-16 rounded-full bg-[#0B0B0C] text-white font-serif text-lg flex items-center justify-center border-2 border-[#C9A96E] mb-4 group-hover:scale-105 transition-transform shadow-md overflow-hidden shrink-0">
          {member.photo && member.photo.startsWith('http') || member.photo && member.photo.startsWith('/images') || member.photo && member.photo.startsWith('data:image') ? (
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerText = initial;
              }}
            />
          ) : (
            <span>{initial}</span>
          )}
        </div>

        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-serif text-lg font-normal text-[#1A1A1A] group-hover:text-[#C9A96E] transition-colors">
            {member.name}
          </h3>
          {(member.verified !== false) && (
            <span title="Verified Leadership Profile" className="text-[#C9A96E]">
              <UserCheck className="w-4 h-4" />
            </span>
          )}
        </div>

        <div className="text-[10px] font-medium text-[#C9A96E] uppercase tracking-[0.2em] mb-3 flex items-center gap-1.5">
          <Shield className="w-3 h-3 text-[#C9A96E]" />
          {role}
        </div>

        <p className="text-xs text-stone-600 leading-relaxed font-light">
          {member.bio}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-stone-100 text-[10px] text-stone-400 uppercase tracking-widest flex items-center justify-between font-light">
        <span>Verified Profile</span>
        {member.socialLink ? (
          <a
            href={member.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9A96E] hover:text-[#1A1A1A] transition-colors flex items-center gap-1"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Profile</span>
          </a>
        ) : (
          <span className="text-[#C9A96E]">Labradorite</span>
        )}
      </div>
    </div>
  );
}
