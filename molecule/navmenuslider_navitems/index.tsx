
import React from 'react'

import NavItemsView from "./navItems"
//static data
import { NAV_SLIDER_NAMES, NAV_SLIDER_LINKS } from '../../shared/data'

type NavMenuSliderProps = {
  isRoute: (index: number) => boolean,
}

const NavItems = ({ isRoute }: NavMenuSliderProps) =>
  <NavItemsView isRoute={isRoute} nav_names={NAV_SLIDER_NAMES} nav_links={NAV_SLIDER_LINKS} />

export default NavItems
