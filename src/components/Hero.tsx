import { profilePhoto } from '../assets/profilePhoto';

export default function Hero() {
  return (
    <div className="px-6 md:px-10 py-12 md:py-20 max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 md:gap-[60px] items-start">
      <div>
        <div className="font-mono text-[11px] text-accent tracking-[0.15em] uppercase mb-5">// FOUNDER · PODCAST HOST · CAPITAL MARKETS EDUCATOR</div>
        <h1 className="text-[40px] md:text-[52px] font-light leading-[1.1] tracking-[-0.02em] mb-2">
          Henok<br />
          <span className="text-accent font-medium text-[48px] md:text-[60px]">Berhanu</span><br />
          Kebede
        </h1>
        <div className="font-mono text-[13px] text-text2 mb-7 tracking-[0.05em]">Founder, Aheya Digital Communication &amp; Consultancy · Host, Capital Pulse Ethiopia</div>

        <div className="mb-9">
          <div className="font-mono text-[10px] text-text3 tracking-[0.12em] uppercase mb-3">// CORE COMPETENCIES</div>
          <div className="flex flex-wrap gap-2">
            {["Capital Markets", "Podcast Hosting", "Investor Education", "Youth Entrepreneurship", "Financial Literacy"].map(skill => (
              <span key={skill} className="bg-bg2 border border-border px-3 py-1 text-[11px] text-accent font-mono uppercase tracking-wider">{skill}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a href="#content" className="bg-accent text-black px-6 py-[10px] font-mono text-[12px] font-medium tracking-[0.08em] cursor-pointer no-underline inline-block transition-opacity hover:opacity-85">
            Explore Capital Pulse
          </a>
          <a href="#contact" className="bg-transparent text-accent border border-accent px-6 py-[10px] font-mono text-[12px] tracking-[0.08em] cursor-pointer no-underline inline-block transition-all hover:bg-accent/10">
            Work With Me
          </a>
        </div>
      </div>

      <div className="bg-bg2 border border-border overflow-hidden">
        <div className="relative border-b border-border">
          <img
            src={profilePhoto}
            alt="Henok Berhanu Kebede"
            className="w-full aspect-square object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg via-bg/70 to-transparent px-4 pt-12 pb-4">
            <div className="font-mono text-[10px] text-accent tracking-[0.14em] uppercase">// Aheya Digital</div>
          </div>
        </div>
        <div className="bg-bg3 border-b border-border px-4 py-[10px] font-mono text-[10px] text-text3 tracking-[0.12em] uppercase">
          // PROFILE METRICS
        </div>
        <StatRow label="LOCATION" value="Addis Ababa, ET" />
        <StatRow label="VENTURE" value="AHEYA DIGITAL" />
        <StatRow label="PROGRAM" value="CAPITAL PULSE ET" />
        <StatRow label="FOCUS" value="MARKET EDUCATION" />
        <StatRow label="CONTENT PIECES" value="70+" />
        <StatRow label="CERTIFICATIONS" value="CISI LVL 3" />
        <StatRow label="STATUS" value="BUILDING ●" valueColor="text-green" />
      </div>
    </div>
  );
}

function StatRow({ label, value, valueColor = "text-accent" }: { label: string, value: string, valueColor?: string }) {
  return (
    <div className="flex justify-between items-center px-4 py-3 border-b border-border last:border-b-0">
      <div className="font-mono text-[11px] text-text3">{label}</div>
      <div className={`font-mono text-[12px] font-medium ${valueColor}`}>{value}</div>
    </div>
  );
}
