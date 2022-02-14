import styled from "styled-components"
import Image from "next/image"

type LogoTextType = {
}
const ImgContainer = styled.div`
  position:relative;
  aspect-ratio: 1 / 1;
  height:100%;
`
export const LogoIcon = ({ }: LogoTextType) =>
  <ImgContainer >
    <Image
      src="/images/sciencegeeklogo.png"
      alt="sciencegeek-logo"
      layout="fill"
      objectFit="cover"
    />
  </ImgContainer>