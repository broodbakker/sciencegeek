
import React from 'react'
import  Link  from "next/link"
import { Box, Text } from 'grommet';
import styled from "styled-components"

type ILinkProps = {
  name: string,
  link: string
}
const Container = styled(Box)`
  cursor:pointer;
`
export const NavItem = ({ name, link }: ILinkProps) =>
  <Link href={link}>
  <a>
    <Container responsive={false} pad="small" border={{ side: "bottom", color: "borderColor" }} >
      <Text >{name}</Text>
    </Container>
    </a>
  </Link>


export const NavItemHighlight = ({ name, link }: ILinkProps) =>
  <Link href={link}>
  <a>
    <Box responsive={false} pad="small" border={{ side: "bottom", color: "primary", size: "small" }} >
      <Text weight="bold">{name}</Text>
    </Box>
    </a>
  </Link>
