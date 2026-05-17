import { SectionHeader } from './About';

export default function Experience() {
  return (
    <section id="experience" className="max-w-[1100px] mx-auto px-6 md:px-10 py-[60px] border-t border-border">
      <SectionHeader number="02" title="Experience" />

      <div className="flex flex-col gap-10">
        <ExpItem 
          date="DEC 2025 – PRESENT"
          org="Ignite Capital PLC"
          loc="Addis Ababa, ET"
          role="Research Officer & Business Development Lead"
          isCurrent
          bullets={[
            "Conduct in-depth research and analysis of securities, industries, and market trends to develop investment recommendations aligned with ECMA guidelines.",
            "Prepare comprehensive research reports, market bulletins, and white papers for management and stakeholders.",
            "Perform industry and risk analysis to support investment decisions; monitor capital market activities continuously.",
            "Monitor real-time news, press releases, and industry publications for events affecting covered companies.",
            "Regularly update financial models and investment theses as new information becomes available."
          ]}
        />

        <ExpItem 
          date="JUL 2023 – PRESENT"
          org="Ethiopian Youth Entrepreneur Association"
          loc="Addis Ababa, ET"
          role="Volunteer Researcher"
          isCurrent
          bullets={[
            "Conducted comprehensive qualitative and quantitative research on the startup ecosystem using surveys and stakeholder interviews.",
            "Led ecosystem research involving startups, investors, and institutional stakeholders to support entrepreneurship development.",
            "Supported research projects related to startup financing, investor mapping, and commercial bank collaboration opportunities.",
            "Produced strategic reports and recommendations to support decision-making processes."
          ]}
        />

        <ExpItem 
          date="2026 - PRESENT"
          org="Dink TV"
          loc="Addis Ababa, ET"
          role="Investment & Strategic Partnership - Office of the CEO"
          isCurrent
          bullets={[
            "Support investment and strategic partnership initiatives for the CEO, including opportunity screening and partner engagement.",
            "Assist with research, briefing materials, and strategic analysis for media, business development, and growth opportunities.",
            "Coordinate partnership discussions and follow-up actions with internal and external stakeholders."
          ]}
        />

        <ExpItem 
          date="NOV 2022 – DEC 2025"
          org="Addis International Bank"
          loc="Addis Ababa, ET"
          role="Customer Service Officer"
          bullets={[
            "Performed KYC and Enhanced Due Diligence (EDD) for high-risk accounts targeting PEPs and large corporate entities.",
            "Applied Proclamation No. 780/2013 and NBE Directive No. SBB/51/2014 to identify and mitigate money laundering and terrorist financing risks.",
            "Coordinated customer onboarding and compliance processes aligned with national banking regulations.",
            "Worked with compliance, risk, and operational teams to ensure adherence to NBE directives."
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
