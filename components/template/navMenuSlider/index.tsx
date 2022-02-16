
import React from 'react'
import { Layer } from 'grommet';
//state
import { useIsNavMenuOpen } from '../../../state/isNavMenuOpen'
//component
import NavMenu from "./navMenuSlider"

type NavMenuSliderProps = {
  isRoute: (index: number) => boolean,
}

const NavMenuSlider = ({ isRoute }: NavMenuSliderProps) => {
  const { state: { isNavMenuOpen }, dispatch } = useIsNavMenuOpen()

  return (
    <>
      {isNavMenuOpen && (
        <Layer
          responsive={false}
          position={"right"}
          onClickOutside={() => dispatch({ type: 'close' })}
          onEsc={() => dispatch({ type: 'close' })}
          full="vertical"
        >
          <NavMenu isRoute={isRoute} />
        </Layer>
      )}
    </>
  );
};

export default NavMenuSlider
