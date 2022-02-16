
import { Box } from 'grommet';
import styled from "styled-components"
//atoms
import H from "../../atom/heading"
import Post4 from "../../molecule/post4"
import Post1 from "../../molecule/post"
//typescript
import { Post } from "../../../typescript"
//data
import { GLOBALSTYLE } from "../../../shared/styles"

type Homepage_subjectPostsProps = {
  posts: Post[]
}



const Container_border = styled(Box)`
  border-bottom: 2px ${GLOBALSTYLE.colors.backgroundGrey} solid;
`

const Homepage_subjectPosts = ({ posts }: Homepage_subjectPostsProps) => {
  return (
    <Box margin={{ bottom: "large" }}>
      <Box margin={{ bottom: "small" }}>
        <H name="RTL Z bedrijven" />
      </Box>
      <Container_border margin={{ bottom: "medium" }}>
        <Post4 post={posts[0]} />
      </Container_border>

      <Box>
        <Post1 post={posts[1]} />
        <Post1 post={posts[2]} />
        <Post1 post={posts[3]} />
      </Box>

    </Box>
  );
};

export default Homepage_subjectPosts
