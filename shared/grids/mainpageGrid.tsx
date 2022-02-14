import { Box } from "grommet"
import styled from "styled-components"
//blocks
import Responsive from "./responsiveGrid"
//styles
import { GLOBALSTYLE } from "../styles"

const columns = {
  small: ['auto'],
  medium: ['auto'],
  large: ['2/3', '1/3'],
};

const rows = {
  small: ['auto', 'auto',],
  medium: ['auto', 'auto',],
  large: ['auto', "auto"],
};

const fixedGridAreas = {
  small: [
    { name: 'headPhoto', start: [0, 0], end: [0, 0] },
    { name: 'laatsteNieuws', start: [0, 1], end: [0, 1] },
  ],
  medium: [
    { name: 'headPhoto', start: [0, 0], end: [0, 0] },
    { name: 'laatsteNieuws', start: [0, 1], end: [0, 1] },
  ],
  large: [
    { name: 'headPhoto', start: [0, 0], end: [0, 0] },
    { name: 'laatsteNieuws', start: [1, 0], end: [1, 0] },

  ],
  xlarge: [
    { name: 'headPhoto', start: [0, 0], end: [0, 0] },
    { name: 'laatsteNieuws', start: [1, 0], end: [1, 0] },
  ],
};

const GreyLineSmall = styled(Box)`
  @media ${GLOBALSTYLE.breakpoint.maxtablet}  {
    background-color:${GLOBALSTYLE.colors.backgroundGrey};
    height:10px;
  }
`

const LaatsteNieuwsContainer = styled(Box)`
  @media ${GLOBALSTYLE.breakpoint.mintablet}  {
    height:600px;
  }
`

export const MainPageGrid = (props: any) => (
  <Responsive
    rows={rows}
    columns={columns}
    gap=""
    areas={fixedGridAreas}
  >
    <Box gridArea="headPhoto">
      {props.headPost}
      <GreyLineSmall />
    </Box>

    <LaatsteNieuwsContainer >
      <Box gridArea="laatsteNieuws">
        {props.LaatsteNieuws}
      </Box>
    </LaatsteNieuwsContainer>

  </Responsive>
);