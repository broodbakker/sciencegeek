import '../styles/globals.css'
import type { AppProps } from 'next/app'
//style
import { GlobalStyle } from "../shared/global"
import { customTheme } from "../shared/styles"
import { Grommet } from "grommet"
//state
import { IsNavMenuOpenProvider } from '../state/isNavMenuOpen'
import { IsSearchMenuOpenProvider } from '../state/isSearchMenuOpen'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IsNavMenuOpenProvider>
      <IsSearchMenuOpenProvider>
        <GlobalStyle />
        <Grommet theme={customTheme}>
          <Component {...pageProps} />
        </Grommet>
      </IsSearchMenuOpenProvider>
    </IsNavMenuOpenProvider>

  )
}

export default MyApp
