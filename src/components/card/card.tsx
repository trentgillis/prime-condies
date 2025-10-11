import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

function Card({ children, className = '' }: CardProps) {
  return (
    <div className={twMerge('border-border bg-card rounded border p-3', className)}>{children}</div>
  );
}

export default Card;
