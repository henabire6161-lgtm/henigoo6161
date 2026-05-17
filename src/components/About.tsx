export default function About() {
  return (
    <section id="about" className="max-w-[1100px] mx-auto px-6 md:px-10 py-[60px] border-t border-border">
      <SectionHeader number="01" title="About" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-[14px] text-text2 leading-[1.8]">
          <p className="mb-4">I'm a finance and capital markets professional based in Addis Ababa, Ethiopia, with a track record spanning banking operations, equity research, and entrepreneurship ecosystem development.</p>
          <p className="mb-4">At Ignite Capital PLC, I conduct in-depth securities analysis, produce research reports aligned with ECMA guidelines, and monitor real-time market developments to support institutional investment decisions.</p>
          <p className="mb-4">Beyond my professional work, I'm deeply committed to investor education in Ethiopia. Through over 70 pieces of content on capital markets, I'm helping everyday Ethiopians understand how financial markets work, how to evaluate investments, and how to build long-term wealth.</p>
          <p>I hold a CISI Level 3 certification and am currently pursuing the SIE (Securities Industry Essentials) exam to further sharpen my qualifications in global securities markets.</p>
        </div>
        <div className="bg-bg2 border border-border">
          <div className="bg-bg3 px-4 py-[10px] font-mono text-[10px] text-text3 tracking-[0.12em] uppercase border-b border-border">
            // CERTIFICATIONS &amp; TRAINING
          </div>
          <CertItem name="CISI Level 3 — Securities" org="CISI · Member #363434" active />
          <CertItem name="SIE — Securities Industry Essentials" org="FINRA · In Progress" active />
          <CertItem name="International Introduction to Investment" org="CISI" />
          <CertItem name="McKinsey Forward Program" org="McKinsey &amp; Company" />
          <CertItem name="Banking Crimes Prevention" org="Core Point Consultancy" />
          <CertItem name="Data Analytics &amp; Virtual Assistant" org="ALX Ethiopia" />
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ number, title }: { number: string, title: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="font-mono text-[11px] text-accent tracking-[0.12em]">{number}</div>
      <h2 className="text-[22px] font-light tracking-[-0.01em]">{title}</h2>
      <div className="flex-1 h-[1px] bg-border" />
    </div>
  );
}

function CertItem({ name, org, active = false }: { name: string, org: string, active?: boolean }) {
  return (
    <div className="flex items-start gap-3 px-4 py-3 border-b border-border last:border-b-0">
      <div className={`w-[6px] h-[6px] rounded-full mt-[5px] shrink-0 ${active ? 'bg-accent' : 'bg-text3'}`} />
      <div>
        <div className="text-[12px] text-text leading-[1.4]">{name}</div>
        <div className="font-mono text-[10px] text-text3">{org}</div>
      </div>
    </div>
  );
}
