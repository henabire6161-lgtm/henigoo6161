import { SectionHeader } from './About';

export default function ContentPortfolio({ onOpenArchive }: { onOpenArchive: () => void }) {
  const series = [
    { num: "01", name: "Capital Pulse Ethiopia", desc: "A guest-led podcast program on capital market education, youth entrepreneurship, finance, leadership, and capacity building for Ethiopia’s next generation." },
    { num: "02", name: "Securities Series (Season 1)", desc: "A foundational exploration of securities markets: 32 full episodes and 6 special segments covering the mechanics of equity and capital markets." },
    { num: "03", name: "Capital Market in Practice (Season 2)", desc: "Practical conversations and analysis that connect market principles with real-world developments and investment decisions." },
    { num: "04", name: "Investor Education", desc: "Accessible Amharic and English content that helps the Ethiopian investment community understand finance, markets, and long-term wealth building." }
  ];

  return (
    <section id="content" className="max-w-[1100px] mx-auto px-6 md:px-10 py-[60px] border-t border-border">
      <SectionHeader number="04" title="Programs & Content" />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
        <p className="text-[15px] text-text2 max-w-[520px] leading-[1.7]">
          I use research, conversations, and practical education to make capital markets and entrepreneurship easier to understand—and easier to act on.
        </p>
        <div className="flex gap-3 shrink-0">
          <ContentMetric label="Content Pieces" value="70+" />
          <ContentMetric label="Podcast" value="NEW" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
        {series.map((item, i) => (
          <div key={i} className="bg-bg2 border border-border p-5 transition-colors cursor-pointer hover:border-accent group">
            <div className="font-mono text-[22px] text-accent font-medium mb-2 group-hover:translate-x-1 transition-transform">{item.num}</div>
            <div className="text-[13px] font-medium mb-[6px]">{item.name}</div>
            <div className="text-[11px] text-text3 leading-[1.5]">{item.desc}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center justify-center text-center">
        <div className="font-mono text-[11px] text-text3 uppercase tracking-[0.2em] mb-4">// MARKET EDUCATION ARCHIVE</div>
        <button
          onClick={onOpenArchive}
          className="bg-transparent border border-accent text-accent px-10 py-4 font-mono text-[14px] hover:bg-accent hover:text-black transition-all cursor-pointer"
        >
          EXPLORE COMPLETE ARCHIVE →
        </button>
      </div>

      <div className="mt-12 bg-bg2 border border-border2 px-6 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-text font-bold">Capital markets education for a new generation.</p>
          <p className="mt-1 text-[13px] text-text2">Follow the ongoing market education series and the next conversations from Capital Pulse Ethiopia.</p>
        </div>
        <a
          href="https://www.linkedin.com/in/henok-berhanu-kebede-🇪🇹-118475244"
          target="_blank"
          rel="noreferrer"
          className="bg-accent text-black px-6 py-[10px] font-mono text-[12px] font-medium tracking-[0.08em] cursor-pointer no-underline shrink-0 transition-opacity hover:opacity-85"
        >
          Follow on LinkedIn →
        </a>
      </div>
    </section>
  );
}

function ContentMetric({ label, value }: { label: string, value: string }) {
  return (
    <div className="bg-bg2 border border-border px-5 py-[10px] text-center min-w-[120px]">
      <span className="font-mono text-[28px] text-accent font-medium block">{value}</span>
      <span className="font-mono text-[10px] text-text3 tracking-[0.1em] uppercase">{label}</span>
    </div>
  );
}
