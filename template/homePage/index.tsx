import React from "react"
import { Box, ResponsiveContext } from "grommet"
import styled from "styled-components"
//grid
import { MainPageGrid } from "../../shared/grids/mainpageGrid"
import { MainPageGrid2 } from "../../shared/grids/mainpageGrid2"
import { MainPageGrid4 } from "../../shared/grids/mainpageGrid4"
//data
import { posts } from "../../shared/data"
import { GLOBALSTYLE } from "../../shared/styles"
import { post3, post1, post2 } from "../../shared/data"
//organism
import LaatsteNieuws from "../../organism/laatsteNieuws/index"
import Header_headPost from '../../organism/header_headPost/index';
import SubjectPosts from '../../organism/homepage_subjectPosts';
//molecule
import Post2 from "../../molecule/post2"
//atom
import H from "../../atom/heading"
//functions
import { Layout } from "../../shared/layout"

const data = [post1, post2, post3, post1, post2, post3]
const data1 = [data, data, data, data, data, data]

const Container_border_mintablet = styled(Box)`
  @media ${GLOBALSTYLE.breakpoint.mintablet}  {
    border-bottom: 2px ${GLOBALSTYLE.colors.backgroundGrey} solid;
  }
`
const Container_border = styled(Box)`
    border-bottom: 2px ${GLOBALSTYLE.colors.backgroundGrey} solid;
`
const Container_border_maxmobile = styled(Box)`
   @media ${GLOBALSTYLE.breakpoint.maxmobile}  {
      border-bottom: 2px ${GLOBALSTYLE.colors.backgroundGrey} solid;
  }
`

const LaatsteNieuwsBox = () => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Container_border_maxmobile
      responsive={false}
      margin={{
        left: size === "large" ? "small" : "medium",
        right: size === "large" ? "none" : "medium",
      }}
      pad={{
        bottom: size === "small" ? "medium" : "none",
      }}
    >
      <LaatsteNieuws posts={posts} title="Het laatste nieuws" link="/" linkText="meer net binnen" />
    </Container_border_maxmobile >
  )
}

const HomePage = () => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Layout>
      <Container_border_mintablet margin={{ bottom: "medium" }} pad={{ bottom: "medium" }}>
        <MainPageGrid
          headPost={<Header_headPost />}
          LaatsteNieuws={<LaatsteNieuwsBox />}
        />
      </Container_border_mintablet>

      <Container_border margin="small" pad={{ bottom: "medium" }} width={size === "small" ? "medium" : { max: "100%" }} alignSelf="center" >
        <Box margin={{ bottom: "medium" }}>
          <H name="Lees ook één van onze andere verhalen" />
        </Box>
        <MainPageGrid2>
          {data.map((post, index) =>
            <Post2 post={post} key={index} />
          )}
        </MainPageGrid2 >
      </Container_border>

      <Container_border margin="small" pad={{ bottom: "medium" }} width={size === "small" ? "medium" : { max: "100%" }} alignSelf="center" >
        <Box margin={{ bottom: "medium" }}>
          <H name="Andere onderwerpen" />
        </Box>
        <MainPageGrid4 >
          {data1.map((data, index) =>
            <Box key={index} >
              <SubjectPosts posts={data} />
            </Box>
          )}
        </MainPageGrid4 >
      </Container_border>
    </Layout>
  )
}

export default HomePage