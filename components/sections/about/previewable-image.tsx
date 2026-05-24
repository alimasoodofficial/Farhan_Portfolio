"use client";

import Image from "next/image";

interface PreviewableImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function PreviewableImage({ src, alt, className = "", sizes, priority = false }: PreviewableImageProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl group/image-view">
      <Image
        src={src}
        alt={alt}
        fill
        className={`${className} transition-transform duration-500 group-hover/image-view:scale-105`}
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}

