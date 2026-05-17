import { SectionHeader } from './About';

export default function Skills() {
  const skillCategories = [
    {
      title: "Research & Analysis",
      tags: ["Equity Research", "Market Intelligence", "Industry Analysis", "Due Diligence", "Research Design", "Primary Research"]
    },
    {
      title: "Finance & Modeling",
      tags: ["Financial Modeling", "Financial Analysis", "Ratio Analysis", "Budgeting", "Excel / GSheets", "Quantitative Methods"]
    },
    {
      title: "Capital Markets",
      tags: ["Securities Analysis", "Investment Research", "ECMA Guidelines", "Investor Education", "Portfolio Analysis"]
    },
    {
      title: "Compliance & Risk",
      tags: ["KYC / EDD", "AML / CTF", "Regulatory Frameworks", "NBE Directives", "PEP Screening"]
    },
    {
      title: "Communication",
      tags: ["Report Writing", "Presentations", "Stakeholder Mgmt", "Content Creation", "English · Amharic"]
    },
    {
      title: "Tools & Platforms",
      tags: ["CRM Tools", "Data Analytics", "Google Workspace", "Microsoft Office", "LinkedIn"]
    }
  ];

  return (
    <section id="skills" className="max-w-[1100px] mx-auto px-6 md:px-10 py-[60px] border-t border-border">
      <SectionHeader number="03" title="Skills" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((cat, i) => (
          <div key={i} className="bg-bg2 border border-border p-5">
            <div className="font-mono text-[10px] text-accent tracking-[0.12em] uppercase mb-[14px]">{cat.title}</div>
            <div className="flex flex-wrap gap-[6px]">
              {cat.tags.map((tag, j) => (
                <span key={j} className="bg-bg3 border border-border2 text-text2 font-mono text-[10px] px-2 py-1 tracking-[0.05em]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
