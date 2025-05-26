import React from "react";
import Image from "next/image";

interface RawImgProps {
  alt: string;
  image?: string;
  src?: string;
  width?: number | string;
  height?: number | string;
  loading?: "eager" | "lazy";
  decoding?: "async" | "auto" | "sync";
  className?: string;
  style?: React.CSSProperties;
  "aria-hidden"?: boolean | "true" | "false";
}

export const RawImg: React.FC<RawImgProps> = ({
  alt,
  image,
  src,
  width,
  height,
  loading,
  decoding,
  className = "",
  style = {},
  "aria-hidden": ariaHidden,
  ...props
}) => {
  // Use image prop if provided, otherwise use src
  const imageSrc = image || src || "";

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={typeof width === "string" ? parseInt(width) : width || 0}
      height={typeof height === "string" ? parseInt(height) : height || 0}
      loading={loading}
      decoding={decoding}
      className={className}
      style={style}
      aria-hidden={ariaHidden}
      {...props}
    />
  );
};
