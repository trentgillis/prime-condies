import React from 'react';
import { twMerge } from 'tailwind-merge';

interface DailyDetailProps extends React.PropsWithChildren {
  className?: string;
}

function DailyDetail({ children, className = '' }: DailyDetailProps) {
  return (
    <div className={twMerge('flex flex-col gap-1 border-zinc-700 p-2', className)}>{children}</div>
  );
}

export default DailyDetail;
