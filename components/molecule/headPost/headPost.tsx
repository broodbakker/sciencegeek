import { Box,  Stack } from "grommet"
import styled from "styled-components"
//atom
import { Title } from "../../atom/headPost_title"
import { Img } from "../../atom/image"

const CustomStack = styled(Stack)`
  cursor:pointer;
`
type HeadPostProps = {
  src: string
  alt: string
  title: string
}

const HeadPost = ({ src, alt, title }: HeadPostProps) =>
  <CustomStack anchor="bottom-left" fill>
    <Box fill height="small">
      <Img
        src={src}
        alt={alt}
      />
    </Box>

    <Box pad="small">
      <Title name={title} />
    </Box>
  </CustomStack>

export default HeadPost;