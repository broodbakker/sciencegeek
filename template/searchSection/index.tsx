
import React from 'react'
import { Layer } from 'grommet';
//component
import SearchMenuView from "./searchTemplate"
//state
import { useIsSearchMenuOpen } from '../../state/isSearchMenuOpen'

type SearchMenuSliderProps = {
}
const SearchMenu = ({ }: SearchMenuSliderProps) => {
  const { state: { isSearchMenuOpen }, dispatch } = useIsSearchMenuOpen()
  return (
    <>
      {isSearchMenuOpen && (
        <Layer
          position={"top"}
          onClickOutside={() => dispatch({ type: 'close' })}
          onEsc={() => dispatch({ type: 'close' })}
          full="horizontal"
          background="transparent"
          animation="fadeIn"
        >
          <SearchMenuView />

        </Layer>
      )}
    </>
  );
};

export default SearchMenu
