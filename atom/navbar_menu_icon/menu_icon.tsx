import styled from 'styled-components';
import { Anchor } from 'grommet'
import { Menu, Search } from 'grommet-icons';

const FlexAnchor = styled(Anchor)`
  display:flex;
  `
const MenuContainer = styled(Menu)`
  cursor:pointer;
  `
const SearchContainer = styled(Search)`
  cursor:pointer;
  `
type IconProps = {
  mediaQuery?: string
  handleClick: () => void
}

export const NavIcon = ({ mediaQuery, handleClick }: IconProps) =>
  mediaQuery === "small" ? <MenuContainer onClick={handleClick} />
    : <FlexAnchor icon={<Menu />} label="Menu" href="#" gap="xxsmall" color="white" onClick={handleClick} />

export const SearchIcon = ({ mediaQuery, handleClick }: IconProps) =>
  mediaQuery === "small" ? <SearchContainer onClick={handleClick} />
    : <FlexAnchor icon={<Search />} label="Search" href="#" gap="xxsmall" color="white" onClick={handleClick} />



