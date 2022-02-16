import styled, { css } from "styled-components"
import { Box, Anchor } from 'grommet';
import { normalizeColor } from "grommet/utils";

interface ContainerProps {
  readonly isRoute: boolean;
}
const Container = styled(Box) <ContainerProps>`
  position:relative;
  ${props => props.isRoute && css`
   background-color: ${normalizeColor("backgroundNavColor", props.theme)};
  `}
`
const Border = styled(Box)`
  position:absolute;
  width:100%;
  height:3px;
  bottom:0;
`
type NavLinkProps = {
  name: string,
  isRoute: boolean,
  path: string,
}
export const NavItem = ({ name, isRoute, path }: NavLinkProps) => {
  return (
    <Container pad={{ vertical: "xsmall" }} border={{ side: "left", size: "small", color: "borderColor" }} width={{ min: "xsmall", max: "xsmall" }} isRoute={isRoute} >
      <Anchor href={path} weight={500} label={name} alignSelf="center" />
      {isRoute && <Border background="primary" />}
    </Container>
  )
}