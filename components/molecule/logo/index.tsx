import Link from 'next/link'
import styled from "styled-components"
import { Box } from 'grommet';
//atom
import { LogoText } from "../../atom/logo_text"
import { LogoIcon } from "../../atom/logo_icon"

const Container = styled(Box)`
  height:2.5rem;
`
export const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Container direction="row">
          <Box direction="row">
            <LogoText name="Science" color="white" />
            <LogoText name="Geek" color="secondary" />
          </Box>
          <LogoIcon />
        </Container>
      </a>
    </Link>
  )
}


