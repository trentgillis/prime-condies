import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={twMerge('flex items-center gap-1 text-xs text-zinc-400 uppercase', className)}>
      {children}
    </div>
  );
}

export default CardHeader;
