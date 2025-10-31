'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface DockItem {
  name: string;
  path?: string;
  icon: React.ReactNode;
  color: string;
  onClick?: () => void;
}

interface DockProps {
  items: DockItem[];
}

function DockIcon({ item }: { item: DockItem }) {
  const content = (
    <motion.div
      className="w-14 h-14 flex items-center justify-center rounded-xl bg-dark-800/50 backdrop-blur-sm border-2 transition-colors duration-300"
      whileTap={{ scale: 0.85 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className={`text-2xl ${
        item.color === 'cyan' ? 'text-neon-cyan' :
        item.color === 'green' ? 'text-neon-green' :
        item.color === 'purple' ? 'text-neon-purple' :
        item.color === 'pink' ? 'text-neon-pink' :
        'text-neon-cyan'
      }`}>
        {item.icon}
      </div>
    </motion.div>
  );

  if (item.onClick) {
    return (
      <button
        onClick={item.onClick}
        className="flex items-center justify-center cursor-pointer"
      >
        {content}
      </button>
    );
  }

  if (item.path) {
    return (
      <Link
        href={item.path}
        className="flex items-center justify-center"
      >
        {content}
      </Link>
    );
  }

  return content;
}

export default function Dock({ items }: DockProps) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-dark-900/80 backdrop-blur-md border-2 border-neon-cyan/20">
        {items.map((item, idx) => (
          <DockIcon
            key={idx}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}
