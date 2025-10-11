import React from 'react';
import { twMerge } from 'tailwind-merge';

interface DailyDetailProps extends React.PropsWithChildren {
  className?: string;
}

function DailyDetail({ children, className = '' }: DailyDetailProps) {
  return (
    <div className={twMerge('border-border flex flex-col gap-1 p-2', className)}>{children}</div>
  );
}

export default DailyDetail;
