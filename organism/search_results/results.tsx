import React from 'react'
import { Box, ResponsiveContext } from 'grommet';
//molecule
import Post2 from "../../molecule/post2"
import Post1 from "../../molecule/post"
//grid
import { MainPageGrid2 } from "../../shared/grids/mainpageGrid2"
//typescript
import { Post } from "../../typescript"

type ResultsProp = {
  posts: Post[]
}

export const Results = ({ posts }: ResultsProp) => {
  const size = React.useContext(ResponsiveContext);
  return (
    <MainPageGrid2>
      {posts.map((post, index) =>
        <Box key={index} >
          {size === "small" ? <Post1 post={post} borderColor="borderColorLight" /> : <Post2 post={post} />}
        </Box>
      )}
    </MainPageGrid2 >
  )
}




