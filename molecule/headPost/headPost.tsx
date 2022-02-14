import { Box,  Image, Stack } from "grommet"
import styled from "styled-components"
//atom
import { Title } from "../../atom/headPost_title"

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
    <Box fill>
      <Image
        fit="cover"
        src={src}
        height="small"
        alt={alt}
      />
    </Box>

    <Box pad="small">
      <Title name="Extreem andersdenkende heeft moeite met onzekerheid" />
    </Box>
  </CustomStack>

export default HeadPost;