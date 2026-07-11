import { SectionHeader } from './About';

export default function Experience() {
  return (
    <section id="experience" className="max-w-[1100px] mx-auto px-6 md:px-10 py-[60px] border-t border-border">
      <SectionHeader number="02" title="Experience" />

      <div className="flex flex-col gap-10">
        <ExpItem
          date="JUL 2026 – PRESENT"
          org="Aheya Digital Communication & Consultancy"
          loc="Addis Ababa, ET"
          role="Founder"
          isCurrent
          bullets={[
            "Founded an independent communication and consultancy venture focused on strategy, financial communication, and practical business solutions.",
            "Lead client and partnership conversations, shape communication strategies, and build programs that connect research with action.",
            "Develop initiatives that support financial capability, youth entrepreneurship, and accessible knowledge sharing."
          ]}
        />

        <ExpItem
          date="2026 – PRESENT"
          org="Capital Pulse Ethiopia"
          loc="Addis Ababa, ET"
          role="Podcast Host & Program Lead"
          isCurrent
          bullets={[
            "Created and host a podcast program focused on capital market education, youth entrepreneurship, finance, leadership, and capacity building.",
            "Host guests and professionals to share practical perspectives on investing, markets, entrepreneurship, and career growth.",
            "Translate complex financial ideas into clear, useful conversations for young people, founders, and the wider Ethiopian public."
          ]}
        />

        <ExpItem
          date="MAR 2026 – PRESENT"
          org="LinkedIn Changemaker Award 2026"
          loc="Remote"
          role="Volunteer Quality Assurance Team Lead & Finalist Webinar Moderator"
          isCurrent
          bullets={[
            "Volunteer as a Quality Assurance Team Lead, helping maintain a consistent and high-quality participant experience.",
            "Moderated the finalist webinar, creating an engaging, well-received conversation and demonstrating confident facilitation skills.",
            "Coordinate with the wider volunteer team to support a thoughtful, inclusive, and professional program."
          ]}
        />

        <ExpItem
          date="2026 – PRESENT"
          org="Dink TV"
          loc="Addis Ababa, ET"
          role="Investment & Strategic Partnership Advisor — Office of the CEO"
          isCurrent
          bullets={[
            "Support investment and strategic partnership initiatives, including opportunity screening and partner engagement.",
            "Prepare research, briefing materials, and strategic analysis for media, business development, and growth opportunities.",
            "Coordinate partnership discussions and follow-up actions with internal and external stakeholders."
          ]}
        />

        <ExpItem
          date="DEC 2025 – JUL 2026"
          org="Ignite Capital PLC"
          loc="Addis Ababa, ET"
          role="Research Officer & Business Development Lead"
          bullets={[
            "Conducted in-depth research and analysis of securities, industries, and market trends to develop investment recommendations aligned with ECMA guidelines.",
            "Prepared research reports, market bulletins, and white papers for management and stakeholders.",
            "Performed industry and risk analysis, monitored capital market activity, and maintained financial models and investment theses."
          ]}
        />

        <ExpItem
          date="JUL 2023 – PRESENT"
          org="Ethiopian Youth Entrepreneur Association"
          loc="Addis Ababa, ET"
          role="Volunteer Researcher"
          isCurrent
          bullets={[
            "Conduct qualitative and quantitative research on the startup ecosystem using surveys and stakeholder interviews.",
            "Support ecosystem research involving startups, investors, and institutions to strengthen entrepreneurship development.",
            "Produce recommendations on startup financing, investor mapping, and commercial-bank collaboration opportunities."
          ]}
        />

        <ExpItem
          date="NOV 2022 – DEC 2025"
          org="Addis International Bank"
          loc="Addis Ababa, ET"
          role="Customer Service Officer"
          bullets={[
            "Performed KYC and Enhanced Due Diligence for high-risk accounts, including PEPs and large corporate entities.",
            "Applied banking regulations and internal controls to identify and mitigate financial-crime risks.",
            "Coordinated customer onboarding and compliance processes with risk and operational teams."
          ]}
        />
      </div>
    </section>
  );
}

function ExpItem({ date, org, loc, role, bullets, isCurrent = false }: { date: string, org: string, loc: string, role: string, bullets: string[], isCurrent?: boolean }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 pb-10 border-b border-border last:border-b-0 last:pb-0 last:mb-0">
      <div>
        <div className="font-mono text-[11px] text-accent mb-1">{date}</div>
        <div className="text-[13px] text-text2 font-medium mb-1">{org}</div>
        <div className="font-mono text-[10px] text-text3">{loc}</div>
      </div>
      <div>
        <div className="text-[17px] font-medium mb-3 tracking-[-0.01em]">
          {role}
          {isCurrent && <span className="inline-block bg-accent/10 border border-accent/30 text-accent font-mono text-[9px] tracking-[0.1em] px-2 py-[2px] ml-[10px] align-middle uppercase">Current</span>}
        </div>
        <ul className="list-none flex flex-col gap-2">
          {bullets.map((bullet, i) => (
            <li key={i} className="text-[13px] text-text2 leading-[1.6] pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent before:font-medium">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
