import { Layout } from "../../shared/layout"
import { Box, Pagination } from 'grommet';
import styled from "styled-components"

import { MainPageGrid2 } from "../../shared/grids/mainpageGrid2"
import { GLOBALSTYLE } from "../../shared/styles"

import { post3, post1, post2 } from "../../shared/data"
//molecule
import Post2 from "../../molecule/post2"
//atom
import H from "../../atom/heading"

type NetBinnenProps = {
}

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
const NetBinnenPage = ({ }: NetBinnenProps) => {
  return (
    <Layout>
      <Box>
        <Container width={{ max: "xlarge" }} fill="horizontal" alignSelf='center'
        pad="small">

          <MainPage_Container margin={{ bottom: "medium" }} pad={{ bottom: "medium" }}>
            <Box>
              <H name="Net Binnen" />
            </Box>

            <Box>

              <MainPageGrid2>
                {data.map((post, index) =>
                  <Box key={index} >
                    <Post2 post={post} />
                  </Box>
                )}
              </MainPageGrid2 >

            </Box>

     <Box align="start" pad="small" gap="medium">
      <Box>
        <Pagination
          numberItems={1237}
          page={24}
          background="brand"
          pad="medium"
          margin="small"
        />
      </Box>
    </Box>


          </MainPage_Container>
        </Container>
      </Box>
    </Layout>
  );
};


export default NetBinnenPage