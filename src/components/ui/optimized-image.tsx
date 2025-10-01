"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, "onLoad"> {
  aspectRatio?: number;
  blurDataURL?: string;
}

export function OptimizedImage({
  src,
  alt,
  className,
  aspectRatio,
  blurDataURL,
  fill,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Se tiver aspectRatio, usar como container, senão aplicar na imagem
  if (aspectRatio && !fill) {
    return (
      <div
        className={cn("relative overflow-hidden bg-muted", className)}
        style={{ aspectRatio, position: "relative", width: "100%" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cn(
            "object-cover duration-700 ease-in-out",
            isLoading
              ? "scale-110 blur-lg grayscale"
              : "scale-100 blur-0 grayscale-0"
          )}
          onLoad={() => setIsLoading(false)}
          placeholder={blurDataURL ? "blur" : "empty"}
          blurDataURL={blurDataURL}
          {...props}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={cn(
        "duration-700 ease-in-out",
        isLoading
          ? "scale-110 blur-lg grayscale"
          : "scale-100 blur-0 grayscale-0",
        className
      )}
      onLoad={() => setIsLoading(false)}
      placeholder={blurDataURL ? "blur" : "empty"}
      blurDataURL={blurDataURL}
      {...props}
    />
  );
}
