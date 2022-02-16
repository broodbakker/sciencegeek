import { Heading } from "grommet"
import styled from "styled-components"

const CustomHeading = styled(Heading)`
text-shadow: 0 2px 2px rgba(0,0,0,.9);
`
type HeadPostProps = {
  name: string
}

export const Title = ({ name }: HeadPostProps) =>
  <CustomHeading color="white" level='2' size="small">
    {name}
  </CustomHeading>


