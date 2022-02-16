//state
import { HandleNavMenu, HandleSearchMenu } from './logic'
//component
import { NavIcon as Nav, SearchIcon as Search } from "./menu_icon"

type IconProps = {
  mediaQuery?: string
}

export const NavIcon = ({ mediaQuery }: IconProps) => {
  const handleClick = HandleNavMenu()

  return <Nav handleClick={handleClick} mediaQuery={mediaQuery} />
}

export const SearchIcon = ({ mediaQuery }: IconProps) => {
  const handleClick = HandleSearchMenu()

  return <Search handleClick={handleClick} mediaQuery={mediaQuery} />
}

