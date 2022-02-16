import React from "react"
import { Box, ResponsiveContext } from "grommet"
import styled from "styled-components"
//grid
import { MainPageGrid3 } from "../../../shared/grids/mainpageGrid3"
//data
import { post3, post1, post2 } from "../../../shared/data"
//molecule
import { Post3, Post3Big } from "../../molecule/post3"
import HeadPost from "../../molecule/headPost/index"

const data1 = [post1, post2, post3]

const ImgContainer = styled(Box)`
  position:relative;
  aspect-ratio: 2/1;
  width:100%;
  max-width:850px;
`
const Header_headPost = () => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Box background="backgroundDark" height="full">
      <ImgContainer fill="horizontal" alignSelf="center" >
        <HeadPost src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" alt="this is alt" title="Extreem andersdenkende heeft moeite met onzekerheid" />
      </ImgContainer>
      <Box>
        <MainPageGrid3>
          {data1.map((post, index) =>
            <Box key={index} margin={{ horizontal: "small" }}>
              {size === "small" ? <Post3 post={post} /> : <Post3Big post={post} />}
            </Box>
          )}
        </MainPageGrid3 >
      </Box>
    </Box>
  )
}


export default Header_headPost