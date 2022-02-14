
import React from 'react'
//atom
import { NavItem, NavItemHighlight } from '../../atom/navmenuslider_navitem';

type NavMenuSliderProps = {
  nav_names: string[],
  nav_links: string[]
  isRoute: (index: number) => boolean,
}

const NavItems = ({ nav_names, nav_links, isRoute }: NavMenuSliderProps) =>
  <>
    {nav_names.map((navName, index) =>
      isRoute(index) ? <NavItemHighlight name={navName} link={nav_links[index]} /> : <NavItem name={navName} link={nav_links[index]} />
    )}
  </>

export default NavItems
