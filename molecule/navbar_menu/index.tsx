import React from "react"
import { Box, ResponsiveContext } from 'grommet';
import { NavIcon, SearchIcon } from "../../atom/navbar_menu_icon"

export const Menu = () => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Box justify="end" direction="row" gap="medium"  >
      <SearchIcon mediaQuery={size === "small" ? "small" : ""} />
      <NavIcon mediaQuery={size === "small" ? "small" : ""} />
    </Box>
  )
}

