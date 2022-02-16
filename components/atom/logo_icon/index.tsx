import styled from "styled-components"
//atom
import { Img } from "../../atom/image"

type LogoTextType = {
}
const ImgContainer = styled.div`
  position:relative;
  aspect-ratio: 1 / 1;
  height:100%;
`
export const LogoIcon = ({ }: LogoTextType) =>
  <ImgContainer >
    <Img
      src="/images/sciencegeeklogo.png"
      alt="sciencegeek-logo"
    />
  </ImgContainer>