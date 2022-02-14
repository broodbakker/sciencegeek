import { useIsNavMenuOpen } from '../../state/isNavMenuOpen'
import { useIsSearchMenuOpen } from '../../state/isSearchMenuOpen'

export const HandleNavMenu = () => {
  const { dispatch } = useIsNavMenuOpen()

  const handleClickMenu = () => dispatch({ type: "close" })

  return handleClickMenu
}

export const HandleSearchMenu = () => {
  const { dispatch } = useIsSearchMenuOpen()

  const handleClickMenu = () => dispatch({ type: "close" })

  return handleClickMenu
}