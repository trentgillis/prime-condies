import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div
      className={twMerge(
        'text-muted-foreground flex items-center gap-1 text-[0.625rem] uppercase',
        className,
      )}
    >
      {children}
    </div>
  );
}

export default CardHeader;
