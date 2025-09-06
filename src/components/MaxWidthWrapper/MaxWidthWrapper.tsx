import React from 'react';

function MaxWidthWrapper({ children }: React.PropsWithChildren) {
  return (
    <div className="grid flex-grow grid-cols-1 px-4 lg:grid-cols-[1fr_1024px_1fr] lg:[&>*]:col-start-2">{children}</div>
  );
}

export default MaxWidthWrapper;
