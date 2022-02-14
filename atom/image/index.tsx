import Image from "next/image"

type ImgProps = {
  src: string
  alt: string
}

export const Img = ({ src, alt }: ImgProps) =>
  <Image
    src={src}
    alt={alt}
    layout="fill"
    objectFit="cover"
  />


