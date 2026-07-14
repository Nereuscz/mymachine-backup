import type { CSSProperties } from "react";

type ImageSlotProps = {
  src: string;
  alt: string;
  /** Rádius rohů v px (v návrhu atribut radius u <image-slot>). */
  radius?: number;
  minHeight?: number | string;
  height?: number | string;
  className?: string;
  style?: CSSProperties;
};

/**
 * Produkční náhrada prototypové komponenty <image-slot>:
 * běžný obrázek s poměrem stran daným kontejnerem a object-fit: cover.
 * Fotky v assets/photos jsou placeholdery — viz README handoffu.
 */
export default function ImageSlot({
  src,
  alt,
  radius,
  minHeight,
  height,
  className,
  style,
}: ImageSlotProps) {
  return (
    <div
      className={className}
      style={{
        display: "block",
        width: "100%",
        height: height ?? "100%",
        minHeight,
        borderRadius: radius,
        overflow: "hidden",
        ...style,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}
