import { motion } from 'motion/react';

const skillTickers = [
  { label: 'AHEYA DIGITAL', status: 'FOUNDER' },
  { label: 'CAPITAL PULSE ETHIOPIA', status: 'HOST' },
  { label: 'CAPITAL MARKETS', status: 'EDUCATOR' },
  { label: 'YOUTH ENTREPRENEURSHIP', status: 'ADVOCATE' },
  { label: 'PODCAST MODERATION', status: 'HOST' },
  { label: 'INVESTOR EDUCATION', status: '70+ PIECES' },
  { label: 'LINKEDIN CHANGEMAKER AWARD', status: 'QA LEAD' },
  { label: 'CISI LEVEL 3', status: 'CERTIFIED' },
  { label: 'SIE', status: 'CANDIDATE' },
  { label: 'FINANCIAL LITERACY', status: 'ACTIVE' },
];

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
