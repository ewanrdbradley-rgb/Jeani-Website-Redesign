import Image from "next/image";

/* real photography from the Jeani library: golden hour, open skies, natural motion */
export default function Photo({
  src,
  alt,
  className = "",
  position = "center",
  sizes = "100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  position?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}
