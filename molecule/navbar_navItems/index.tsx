import styled from "styled-components"
import { Box } from 'grommet';
//atoms
import { NavItem } from "../../atom/navbar_navitem"
//static data
import { NAV_NAMES, NAV_LINKS } from '../../shared/data'

const NavLinksOverflow = styled(Box)`
overflow-x: auto;
&::-webkit-scrollbar {
  display: none;
  }
`
type NavItemsProps = {
  isRoute: (index: number) => boolean,
}

export const NavItems = ({ isRoute }: NavItemsProps) => {
  return (
    <Box align="center" border={{ side: "bottom", size: "small", color: "borderColor" }} background="white">
      <NavLinksOverflow overflow="scroll" direction="row" border={{ side: "right", size: "small", color: "borderColor" }} >
        {NAV_NAMES.map((navName, index) =>
          <NavItem name={navName} path={NAV_LINKS[index]} isRoute={isRoute(index)} key={index} />
        )}
      </NavLinksOverflow>
    </Box>
  )
}

