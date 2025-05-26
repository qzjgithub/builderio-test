import React, { ReactNode } from "react";

interface VariantProps {
  default?: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Variant: React.FC<VariantProps> = ({
  default: defaultValue = "",
  children,
  className = "",
  style = {},
}) => {
  return (
    <div
      className={className}
      style={style}
      data-variant-default={defaultValue}
    >
      {children}
    </div>
  );
};
