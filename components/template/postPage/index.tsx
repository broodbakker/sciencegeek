import React from 'react'
import { Layout } from "../../../shared/layout"
import { Box, Text, ResponsiveContext } from 'grommet';
import styled from "styled-components"
//atoms
import { Img } from "../../atom/image"
import { Title } from "../../atom/post_title"
import { PhotoText } from "../../atom/photoText";
//organism
import LeesOok from '../../organism/leesOok';
//data
import { posts } from "../../../shared/data"

type PostProps = {
}

const PostPage = ({ }: PostProps) => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Layout>
      <Box pad={size === "small" ? "" : "medium"}>
        <Page />
      </Box>
    </Layout>
  );
};

const ImgContainer = styled(Box)`
  position:relative;
  aspect-ratio: 3/2;
`

const Page = () =>
  <Box>

{/* image */}
    <Box fill="horizontal" alignSelf="center" width={{ max: "large" }}
    margin={{bottom:"medium"}}>
      <ImgContainer >
        <Img alt="test" src="/images/image1.png" />
      </ImgContainer>
      <Box margin={{left:"small"}}>
         <PhotoText name="bron: Pixabay.com" />
      </Box>
    </Box>

    <Box width={{ max: "large" }} margin={{ horizontal: "auto" }} pad={{horizontal:"small",vertical:"medium"}}>
      <Box  margin={{bottom:"medium"}}>
        <Title name="Extreem andersdenkende heeft moeite met onzekerheid" level="2" />
      </Box>

      <Box  margin={{bottom:"medium"}}>
        <Text>
          Nederlandse en Amerikaanse onderzoekers hebben in een gezamenlijk onderzoek van de Brown Universiteit in Rhode Island, aangetoond dat mensen met een gepolariseerde opvatting, namelijk beschikken over een grotere intolerantie voor onzekerheid. Die gevoeligheid voor onzekerheid staat los van de opvatting zelf. Dus bijvoorbeeld: een gepolariseerde democraat beschikt over diezelfde intolerantie voor onzekerheid als een gepolariseerde liberaal.
        </Text>
      </Box>

      <Box>
        <LeesOok posts={posts} title="Het laatste nieuws op ScienceGeek!" link="/" linkText="meer net binnen" />
      </Box>
    </Box>
  </Box>

export default PostPage