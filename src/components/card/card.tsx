import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

function Card({ children, className = '' }: CardProps) {
  return (
    <div className={twMerge('rounded border border-zinc-700 bg-zinc-900 p-3', className)}>
      {children}
    </div>
  );
}

export default Card;
