//grommet
import { Box, Grid } from "grommet"
//molecule
import Post from "../../molecule/post"
//atom
import Button from "../../atom/buttons/button1"
import Title from "../../atom/laatstenieuws_title"
//typescript
import { Post as PostProps } from "../../typescript"

type LeesOokProps = {
  posts: PostProps[];
  title: string,
  link: string
  linkText: string
};

const LeesOok = ({ posts, title, link, linkText }: LeesOokProps) => (
  <Box fill>
    <Button link={link} name="Lees ook" />
    <Grid gap="small">
      {posts.map((post, index) => <Post post={post} key={index} />)}
    </Grid>
  </Box>
);

export default LeesOok;