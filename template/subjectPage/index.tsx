import React from 'react'
import { Box, ResponsiveContext } from "grommet"
import styled from "styled-components"
//grid
import { SubjectGrid } from "../../shared/grids/subjectGrid"
import { MainPageGrid2 } from "../../shared/grids/mainpageGrid2"
//data
import { GLOBALSTYLE } from "../../shared/styles"
import { post3, post1, post2 } from "../../shared/data"
//organism
import Subject_headPost from '../../organism/subject_headPost/index';
//molecule
import Post from "../../molecule/post"
import Post4 from "../../molecule/post4"
//atom
import H from "../../atom/heading"
//functions
import { Layout } from "../../shared/layout"

const data = [post1, post2, post3, post1, post2, post3]

const Container = styled(Box)`
  @media ${GLOBALSTYLE.breakpoint.mintablet}  {
    padding:10px;
  }
`
const MainPage_Container = styled(Box)`
  @media ${GLOBALSTYLE.breakpoint.mintablet}  {
    border-bottom:2px ${GLOBALSTYLE.colors.backgroundGrey} solid;
  }
`
const HorizontalScroll = styled(Box)`
overflow-x: auto;
&::-webkit-scrollbar {
  display: none;
  }
`

const dataHeadpost = [post1, post2]

const SubjectPage = () => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Layout>
      <MainPage_Container margin={{ bottom: "medium" }} pad={{ bottom: "medium" }}>
        <Subject_headPost posts={dataHeadpost} />
      </MainPage_Container>

      <Box>

        <ResponsiveContext.Consumer>
          {(size) =>
            size === 'small' ? (
              <>
                <H name="Lees ook één van onze andere verhalen" />
                <SubjectGrid>
                  {data.map((post, index) =>
                    <Box key={index} >
                      <Post post={post} />
                    </Box>
                  )}
                </SubjectGrid >
              </>

            ) : (
              <Box background="fontColor">
                <H name="Lees ook één van onze andere verhalen" />
                <HorizontalScroll overflow="scroll" direction="row"  >

                  <SubjectGrid>
                    {data.map((post, index) =>
                      <Box key={index} pad="medium" >
                        <Post4 post={post} />
                      </Box>
                    )}

                  </SubjectGrid >
                </HorizontalScroll>
              </Box>
            )
          }
        </ResponsiveContext.Consumer>


      </Box >

      <Box>
        <H name="Lees ook één van onze andere verhalen" />
        <MainPageGrid2>
          {data.map((post, index) =>
            <Box key={index} >
              <Post4 post={post} />
            </Box>
          )}
        </MainPageGrid2 >
      </Box >


    </Layout>
  )
}

export default SubjectPage