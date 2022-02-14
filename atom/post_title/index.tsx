import styled from "styled-components"
//grommet
import { Heading } from "grommet"

const CustomHeading = styled(Heading)`
  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  -webkit-line-clamp: 3 !important;
  overflow: hidden !important;
`

type TitleProps = {
  name: string
  level?: '1' | '2' | '3' | '4' | '5' | '6' | 1 | 2 | 3 | 4 | 5 | 6;
  color?:string
}

export const Title = ({ name,level = 4, color="headingColor" }: TitleProps) =>
  <CustomHeading level={level} size="small" color={color}>
    {name}
  </CustomHeading>

