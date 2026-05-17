import { motion } from 'motion/react';

const skillTickers = [
  { label: 'EQUITY RESEARCH', status: 'EXPERT' },
  { label: 'BUSINESS DEVELOPMENT', status: 'LEAD' },
  { label: 'FINANCIAL MODELING', status: 'ADVANCED' },
  { label: 'CAPITAL MARKETS', status: 'SPECIALIST' },
  { label: 'COMPLIANCE', status: 'KYC/AML' },
  { label: 'INVESTOR EDUCATION', status: '70+ EPISODES' },
  { label: 'CISI LEVEL 3', status: 'CERTIFIED' },
  { label: 'SIE', status: 'CANDIDATE' },
  { label: 'DATA ANALYTICS', status: 'ALX' },
  { label: 'MARKET INTELLIGENCE', status: 'ACTIVE' },
];

// Duplicate for seamless loop
const duplicatedSkills = [...skillTickers, ...skillTickers, ...skillTickers];

export default function Ticker() {
  return (
    <div className="bg-bg2 border-b border-border py-[6px] overflow-hidden sticky top-0 z-[100]" aria-hidden="true">
      <motion.div 
        className="flex gap-12 whitespace-nowrap w-max"
        animate={{ x: [0, -1500] }}
        transition={{ 
          duration: 40, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {duplicatedSkills.map((item, idx) => (
          <div key={`${item.label}-${idx}`} className="font-mono text-[11px] text-text2 flex gap-2 items-center">
            <span className="text-accent font-medium tracking-wider">{item.label}</span>
            <span className="text-text3 text-[9px] border border-border px-1">[{item.status}]</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
