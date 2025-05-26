import React, { ReactNode } from "react";

interface PersonalizationContainerProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const PersonalizationContainer: React.FC<
  PersonalizationContainerProps
> = ({ children, className = "", style = {} }) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};
