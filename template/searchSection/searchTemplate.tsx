
import React from 'react'
import styled, { css } from "styled-components"
import { Box } from 'grommet';
import { normalizeColor } from "grommet/utils";
//molecule
import { Search_results } from '../../organism/search_results/index';
//atom
import { SearchMenu_cross } from '../../atom/cross';
import { Searchbar } from '../../atom/searchbar';
//function
import { hexToRGB } from "../../utils"

const Container = styled(Box)`
  position:relative;
  ${props => css`
    background-color: ${hexToRGB(normalizeColor("backgroundSearch", props.theme), 0.9)};
  `}
`
const CrossContainer = styled(Box)`
  position:absolute;
  right:0;
  top:0;
  margin:5px;
  z-index:10;
`
type SearchMenuSliderProps = {
}

const SearchTemplate = ({ }: SearchMenuSliderProps) => {
  return (
    <Container pad={{ vertical: "large", horizontal: "small" }} width="fill" border={{ side: "bottom", size: "small", color: "borderColorDark" }}>

      <CrossContainer >
        <SearchMenu_cross />
      </CrossContainer>

      <Box height="medium" overflow="scroll" pad="small" >
        <Box width="large" alignSelf="center"
          height={{ min: "xsmall" }} >
          <Searchbar handleClick={() => { }} />
        </Box>

        <Search_results />
      </Box>
    </Container>
  )
}

export default SearchTemplate
