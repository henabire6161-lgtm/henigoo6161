import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from './About';
import { X, Search, ExternalLink } from 'lucide-react';

interface ContentItem {
  id: number;
  title: string;
  season: 'S1' | 'S2';
  episode: number;
  date: string;
  category: string;
  link: string;
  summary?: string;
}

const ALL_CONTENT: ContentItem[] = [
  // Season 2: Capital Market in Practice
  { 
    id: 1, 
    title: "Capital Market in Practice - Part 32", 
    season: 'S2', 
    episode: 32, 
    date: "May 15, 2026", 
    category: "Market Analysis", 
    link: "https://www.linkedin.com/in/henok-berhanu-kebede-%F0%9F%87%AA%F0%9F%87%B9-118475244",
    summary: `Behavioral Finance: Why People Move Markets
Markets are not driven by numbers alone. They are influenced by how people think and react.

📊 What is behavioral finance?
Behavioral finance looks at how Emotions, Beliefs, and Reactions affect decisions in markets. It focuses on how people actually behave, not how they are expected to behave.

🧠 What we often see
In markets:
- Rising prices attract more buyers
- Falling prices create caution or fear
- People follow trends and each other
- Decisions are not always fully rational
- Reactions often come from perception, not just data.

💡 Key insight
Markets move through feedback loops of behavior. People react to prices, those reactions move prices, which then influences more people.

🤔 Why this matters
Behavioral finance helps explain why:
- Markets move beyond fundamentals
- Trends build and continue
- Sudden changes in sentiment occur
- It shows how human behavior shapes market outcomes.

✅ Final thought
Markets reflect decisions. Decisions reflect people.
What do you think? Do markets follow logic, or do they follow behavior first?`
  },
  { id: 2, title: "Capital Market in Practice - Part 31", season: 'S2', episode: 31, date: "May 10, 2026", category: "Practical Insights", link: "#" },
  // Season 1: Securities Series
  { id: 40, title: "Securities Series - Episode 32", season: 'S1', episode: 32, date: "2025", category: "Fundamentals", link: "#" },
  { id: 41, title: "Securities Series - Special Ep 6", season: 'S1', episode: 38, date: "2025", category: "Special", link: "#" },
];

export default function ContentArchive({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] bg-bg flex items-center justify-center p-4 md:p-10"
        >
          <div className="w-full max-w-6xl h-full bg-bg2 border border-border flex flex-col shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-bg3 border-b border-border p-6 flex justify-between items-center">
              <div>
                <h2 className="font-mono text-accent text-[12px] tracking-widest uppercase mb-1">// CONTENT REPOSITORY</h2>
                <div className="text-[24px] font-light">The Complete Series Archive</div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 border border-border hover:border-accent text-text3 hover:text-accent transition-colors"
                aria-label="Close Archive"
              >
                <X size={24} />
              </button>
            </div>

            {/* Filter/Search Bar */}
            <div className="p-4 border-b border-border bg-bg2 flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative flex-1 group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text3 group-focus-within:text-accent" size={16} />
                <input 
                  type="text" 
                  placeholder="Search episodes, topics, or insights..."
                  className="w-full bg-bg3 border border-border px-10 py-2 font-mono text-[11px] focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="flex gap-2">
                <button className="bg-bg3 border border-accent text-accent px-4 py-2 font-mono text-[10px] uppercase">All</button>
                <button className="bg-bg3 border border-border text-text3 px-4 py-2 font-mono text-[10px] uppercase hover:border-accent hover:text-accent">Season 1</button>
                <button className="bg-bg3 border border-border text-text3 px-4 py-2 font-mono text-[10px] uppercase hover:border-accent hover:text-accent">Season 2</button>
              </div>
            </div>

            {/* Content List */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* placeholder categories */}
                <div className="lg:col-span-3 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[11px] text-accent">S02 // CAPITAL MARKET IN PRACTICE</span>
                    <div className="flex-1 h-[1px] bg-border" />
                  </div>
                </div>

                {ALL_CONTENT.filter(c => c.season === 'S2').map(item => (
                  <ContentRow key={item.id} item={item} />
                ))}

                <div className="lg:col-span-3 mt-10 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[11px] text-accent">S01 // SECURITIES SERIES</span>
                    <div className="flex-1 h-[1px] bg-border" />
                  </div>
                </div>

                {ALL_CONTENT.filter(c => c.season === 'S1').map(item => (
                  <ContentRow key={item.id} item={item} />
                ))}
              </div>

              {/* empty state message */}
              <div className="mt-20 text-center">
                <p className="font-mono text-text3 text-[12px] italic">Plus 60+ additional pieces archived on LinkedIn Data Stream...</p>
                <a 
                   href="https://www.linkedin.com/in/henok-berhanu-kebede-🇪🇹-118475244" 
                   target="_blank" 
                   className="inline-block mt-4 text-accent border border-accent/20 px-4 py-2 hover:bg-accent/5 text-[12px]"
                >
                  Access Full Stream on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ContentRow({ item }: { item: ContentItem }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      layout
      className={`bg-bg3 border border-border p-4 transition-colors hover:border-accent group relative overflow-hidden ${isExpanded ? 'md:col-span-2 lg:col-span-2' : ''}`}
    >
      <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
        {item.summary && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:text-accent text-text3 transition-colors"
          >
            {isExpanded ? 'COLLAPSE' : 'READ'}
          </button>
        )}
        <a href={item.link} target="_blank" rel="noreferrer" className="p-1 hover:text-accent text-text3">
          <ExternalLink size={14} />
        </a>
      </div>
      <div className="font-mono text-[10px] text-text3 mb-2 flex justify-between">
        <span>EPISODE {item.episode}</span>
        <span className="text-accent">{item.category}</span>
      </div>
      <h3 className="text-[14px] font-medium leading-tight mb-2 pr-12">{item.title}</h3>
      
      <AnimatePresence mode="wait">
        {isExpanded && item.summary && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-border text-[13px] text-text2 leading-relaxed whitespace-pre-wrap font-sans">
              {item.summary}
            </div>
            <div className="mt-4 flex justify-end">
               <button 
                onClick={() => setIsExpanded(false)}
                className="text-[10px] font-mono text-accent hover:underline"
              >
                CLOSE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isExpanded && (
        <div className="flex justify-between items-center mt-3 pt-3 border-t border-border group-hover:border-accent/30">
          <span className="font-mono text-[10px] text-text3">{item.date}</span>
          <div className="flex gap-4">
            {item.summary && (
              <button 
                onClick={() => setIsExpanded(true)}
                className="text-accent text-[11px] font-mono hover:underline"
              >
                VIEW CONTENT →
              </button>
            )}
            <a 
              href={item.link} 
              target="_blank" 
              rel="noreferrer"
              className="text-accent text-[11px] font-mono hover:underline"
            >
              LINKEDIN →
            </a>
          </div>
        </div>
      )}
    </motion.div>
  );
}
