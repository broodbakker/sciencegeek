import { Header as H, Box } from 'grommet';
//molecule
import { Logo } from "../../molecule/logo"
import { Menu } from "../../molecule/navbar_menu"
import { NavItems } from '../../molecule/navbar_navItems';

type NavbarProps = {
  isRoute: (index: number) => boolean
}
const Navbar = ({ isRoute }: NavbarProps) => {
  return (
    <>
      <Box background="primary">
        <H pad="small" width={{ max: "xlarge" }} fill="horizontal" alignSelf='center'>
          <Logo />
          <Menu />
        </H>
      </Box>

      <NavItems isRoute={isRoute} />
    </>
  )
}

export default Navbar;