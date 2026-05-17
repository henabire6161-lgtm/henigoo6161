import { useEffect } from 'react';
import { SectionHeader } from './About';

export default function Contact() {
  useEffect(() => {
    // Re-initialize LinkedIn badges on mount
    const script = document.createElement('script');
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const contactLinks = [
    { label: "EMAIL", value: "henabire6161@gmail.com", href: "mailto:henabire6161@gmail.com" },
    { label: "PHONE", value: "+251 954 346 161", href: "tel:+251954346161" },
    { label: "LINKEDIN", value: "henok-berhanu-kebede", href: "https://www.linkedin.com/in/henok-berhanu-kebede-🇪🇹-118475244" },
    { label: "WEBSITE", value: "henigo.vercel.app", href: "https://henigo.vercel.app" },
    { label: "GITHUB", value: "github.com/HeniGoo", href: "https://github.com/HeniGoo" }
  ];

  const opportunities = [
    "Equity / securities research roles",
    "Capital markets analyst positions",
    "Investment research collaborations",
    "Content partnerships in finance & investing",
    "Speaking & financial literacy programs",
    "International finance opportunities"
  ];

  return (
    <section id="contact" className="max-w-[1100px] mx-auto px-6 md:px-10 py-[60px] border-t border-border">
      <SectionHeader number="05" title="Contact" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="text-[18px] font-light leading-[1.5] mb-7 text-text">
            Interested in research collaboration, content partnerships, or capital markets discussions?
          </div>
          <div className="flex flex-col gap-3">
            {contactLinks.map((link, i) => (
              <a 
                key={i}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-bg2 border border-border text-text transition-colors hover:border-accent group"
              >
                <span className="font-mono text-[10px] text-accent w-[60px] tracking-[0.08em] shrink-0">{link.label}</span>
                <span className="text-[13px] group-hover:text-accent transition-colors truncate">{link.value}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="bg-bg2 border border-border p-6 flex flex-col gap-6">
          <div>
            <div className="font-mono text-[10px] text-text3 tracking-[0.12em] uppercase mb-4">// OPEN TO</div>
            <p className="text-[13px] text-text2 leading-[1.7] mb-4">
              I'm actively looking for opportunities to expand my work in capital markets research, financial analysis, and investor education.
            </p>
            <ul className="list-none flex flex-col gap-2">
              {opportunities.map((opp, i) => (
                <li key={i} className="font-mono text-[11px] text-text2 pl-4 mb-0 relative before:content-['→'] before:absolute before:left-0 before:text-green">
                  {opp}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-auto pt-6 border-t border-border flex justify-center">
            {/* LinkedIn Badge */}
            <div 
              className="badge-base LI-profile-badge" 
              data-locale="en_US" 
              data-size="medium" 
              data-theme="dark" 
              data-type="HORIZONTAL" 
              data-vanity="henok-berhanu-kebede-🇪🇹-118475244" 
              data-version="v1"
            >
              <a 
                className="badge-base__link LI-simple-link" 
                href="https://et.linkedin.com/in/henok-berhanu-kebede-%F0%9F%87%AA%F0%9F%87%B9-118475244?trk=profile-badge"
              >
                Henok Berhanu Kebede
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
