//grommet
import React from "react"
import { Box, Grid } from "grommet"
//molecule
import Post from "../../molecule/post"
//atom
import Button from "../../atom/buttons/button1"
import Title from "../../atom/laatstenieuws_title"
//typescript
import { Post as PostProps } from "../../typescript"

type LaatsteNieuwsProps = {
  posts: PostProps[];
  title: string,
  link: string
  linkText: string
};

const LaatsteNieuws = ({ posts, title, link, linkText }: LaatsteNieuwsProps) => {
  return (
    <Box fill overflow="scroll">
      <Title name={title} size="small" />
      <Grid gap="small">
        {posts.map((post, index) => <Post post={post} key={index} />)}
      </Grid>
      <Button link={link} name={linkText} />

    </Box>
  )
}

export default LaatsteNieuws;