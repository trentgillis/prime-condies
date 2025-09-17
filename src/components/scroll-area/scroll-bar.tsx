import React from 'react';

import * as PrimitiveScrollArea from '@radix-ui/react-scroll-area';

interface ScrollBarProps {
  orientation?: 'vertical' | 'horizontal';
}

function ScrollBar({ orientation }: ScrollBarProps) {
  return (
    <PrimitiveScrollArea.ScrollAreaScrollbar
      className="flex h-2.5 touch-none flex-col border-t border-t-transparent p-[2px] transition-colors select-none"
      orientation={orientation}
    >
      <PrimitiveScrollArea.ScrollAreaThumb className="relative flex-1 rounded-full bg-zinc-700" />
    </PrimitiveScrollArea.ScrollAreaScrollbar>
  );
}

export default ScrollBar;
