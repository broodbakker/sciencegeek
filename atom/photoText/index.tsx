import styled from "styled-components"
import { Text, } from 'grommet';

const H = styled(Text)`
font-weight:900;
`

type photoTextProps = {
  name: string
}
export const PhotoText = ({ name }: photoTextProps) =>
  <Text >{name}</Text >