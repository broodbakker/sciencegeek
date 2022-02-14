
import React from 'react'
import { Box } from 'grommet';
//molecule
import NavItems from '../../molecule/navmenuslider_navitems/index';
//atom
import { NavMenuSlider_Cross } from '../../atom/cross';

type NavMenuSliderProps = {
  isRoute: (index: number) => boolean,
}

const NavMenuSlider = ({ isRoute }: NavMenuSliderProps) => {
  return (
    <Box pad="medium" gap="small" width="medium">
      <Box alignSelf="end">
        <NavMenuSlider_Cross />
      </Box>

      <NavItems isRoute={isRoute} />

    </Box>
  )
}

export default NavMenuSlider
