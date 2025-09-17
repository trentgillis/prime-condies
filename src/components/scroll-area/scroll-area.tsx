import React, { ComponentProps } from 'react';

import * as PrimitiveScrollArea from '@radix-ui/react-scroll-area';
import { twMerge } from 'tailwind-merge';
import ScrollBar from './scroll-bar';

interface ScrollAreaProps extends ComponentProps<typeof PrimitiveScrollArea.Root> {
  orientation?: 'vertical' | 'horizontal';
}

function ScrollArea({
  className,
  orientation = 'vertical',
  children,
  ...restProps
}: ScrollAreaProps) {
  return (
    <PrimitiveScrollArea.Root className={twMerge(className, 'h-full')} {...restProps}>
      <PrimitiveScrollArea.Viewport className="h-full w-full">
        {children}
      </PrimitiveScrollArea.Viewport>
      <ScrollBar orientation={orientation} />
    </PrimitiveScrollArea.Root>
  );
}

export default ScrollArea;
