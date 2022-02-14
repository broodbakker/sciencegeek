import { Box } from "grommet"
import styled from "styled-components"
//grid
import { SubjectHeadpostGrid } from "../../shared/grids/subjectHeadpostGrid"
//molecule
import HeadPost from "../../molecule/headPost/index"
//typescript
import { Post } from "../../typescript"

const ImgContainer = styled(Box)`
  position:relative;
  aspect-ratio: 2/1;
  width:100%;
`
type Subject_headPostProps = {
  posts: Post[]
}
const Subject_headPost = ({ posts }: Subject_headPostProps) =>
  <Box height="full">
    <SubjectHeadpostGrid>
      {posts.map((post, index) => <ImgContainer key={index} fill="horizontal" alignSelf="center" >
        <HeadPost src={post.photos.headerData.image} alt={post.title} title={post.title} />
      </ImgContainer>
      )}

    </SubjectHeadpostGrid>
  </Box>

export default Subject_headPost