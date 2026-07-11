export default function About() {
  return (
    <section id="about" className="max-w-[1100px] mx-auto px-6 md:px-10 py-[60px] border-t border-border">
      <SectionHeader number="01" title="About" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-[14px] text-text2 leading-[1.8]">
          <p className="mb-4">I’m the founder of Aheya Digital Communication &amp; Consultancy, a venture built to turn ideas, research, and conversations into practical impact for businesses and communities.</p>
          <p className="mb-4">I also host Capital Pulse Ethiopia, a podcast program that brings together guests and professionals to make capital markets, finance, leadership, and youth entrepreneurship more accessible. The program is designed to strengthen financial capability and create useful conversations for Ethiopia’s next generation of founders and investors.</p>
          <p className="mb-4">My work combines capital markets research, investor education, business development, and communication. Through more than 70 pieces of content, I help everyday Ethiopians understand markets, evaluate opportunities, and build long-term financial confidence.</p>
          <p>I hold a CISI Level 3 certification and am preparing for the SIE (Securities Industry Essentials) exam to continue building my global securities-market knowledge.</p>
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
