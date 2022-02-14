
import React, { FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import { Box } from "grommet"
import styled from "styled-components"
//data
import { NAV_LINKS, NAV_SLIDER_LINKS } from "../shared/data"
import { GLOBALSTYLE } from "../shared/styles"
//organism
import Navbar from "../organism/navbar/index"
import NavMenuSlider from "../template/navMenuSlider/index"
import SearchMenu from "../template/searchSection/index"
import Footer from "../organism/footer/index"
//functions
import { isRoute } from "../utils"

const FixedHeader = styled(Box)`
  position: sticky;
  top: 0;
  width:100%;
  z-index:1;
`
const GreyLineBig = styled(Box)`
  @media ${GLOBALSTYLE.breakpoint.mintablet}  {
    background-color:${GLOBALSTYLE.colors.backgroundGrey};;
    height:20px;
  }
`
const T = styled(Box)`
  max-width:1300px;
  @media ${GLOBALSTYLE.breakpoint.mintablet}  {
    padding:10px;
  }
`

type LayoutProps = {
}
export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const path: string = useRouter().asPath
  return (
    <>
      {/* navbar */}
      <FixedHeader>
        <Navbar isRoute={isRoute(path, NAV_LINKS)} />
      </FixedHeader>
      {/* greyLine */}
      <GreyLineBig />
      <NavMenuSlider isRoute={isRoute(path, NAV_SLIDER_LINKS)} />
      <SearchMenu />
      <Box>
        <T fill="horizontal" alignSelf='center'>
          {children}
        </T>
      </Box>
      {/* footer */}
      <Footer />
    </>
  )
}