//grommet
import { Box, Grid } from "grommet"
import styled from "styled-components"
//molecule
import Post from "../../molecule/post"
//atom
import Button from "../../atom/buttons/button1"
//typescript
import { Post as PostProps } from "../../../typescript"
//data
import { GLOBALSTYLE } from "../../../shared/styles"

type LeesOokProps = {
  posts: PostProps[];
  title: string,
  link: string
  linkText: string
};

const Container = styled(Box)`
 border-bottom: 1px ${GLOBALSTYLE.colors.backgroundGrey} solid;
`

const LeesOok = ({ posts, title, link, linkText }: LeesOokProps) => (
  <Box fill>
    <Container margin={{bottom:"small"}}>
      <Button link={link} name="Lees ook" />
    </Container>

    <Grid gap="small">
      {posts.map((post, index) => <Post post={post} key={index} />)}
    </Grid>
  </Box>
);

export default LeesOok;