import styled from "styled-components"
import { Heading, } from 'grommet';

const H = styled(Heading)`
font-weight:900;
`
type LogoTextType = {
  color: string
  name: string
  size?: string
}
export const LogoText = ({ color, name, size = "medium" }: LogoTextType) =>
  <H level="2" color={color} size={size} alignSelf="center">{name}</H>