import styles from "./MaxWidthWrapper.module.scss";

import React from "react";

function MaxWidthWrapper({ children }: React.PropsWithChildren) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default MaxWidthWrapper;
