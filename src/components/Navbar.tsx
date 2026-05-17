export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-4 bg-bg border-b border-border sticky top-[33px] z-[99]">
      <div className="font-mono text-[13px] text-accent tracking-[0.08em] font-medium">
        HBK // RESEARCH
      </div>
      <ul className="hidden md:flex gap-8 list-none">
        <li><a href="#about" className="font-mono text-[11px] text-text2 no-underline tracking-[0.1em] uppercase transition-colors hover:text-accent">About</a></li>
        <li><a href="#experience" className="font-mono text-[11px] text-text2 no-underline tracking-[0.1em] uppercase transition-colors hover:text-accent">Experience</a></li>
        <li><a href="#skills" className="font-mono text-[11px] text-text2 no-underline tracking-[0.1em] uppercase transition-colors hover:text-accent">Skills</a></li>
        <li><a href="#content" className="font-mono text-[11px] text-text2 no-underline tracking-[0.1em] uppercase transition-colors hover:text-accent">Content</a></li>
        <li><a href="#contact" className="font-mono text-[11px] text-text2 no-underline tracking-[0.1em] uppercase transition-colors hover:text-accent">Contact</a></li>
      </ul>
      <div className="flex items-center gap-[6px] font-mono text-[11px] text-text3 whitespace-nowrap">
        <div className="w-[6px] h-[6px] rounded-full bg-green animate-pulse" />
        OPEN TO OPPORTUNITIES
      </div>
    </nav>
  );
}
