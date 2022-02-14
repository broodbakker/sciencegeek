import Link from 'next/link'
//grommet
import { Box, Anchor } from "grommet"

type ButtonProps = {
  link: string
  name: string
}

const Button = ({ name, link }: ButtonProps) =>
  <Box responsive={false} direction="row" pad="xsmall" width="small" background="secondary" align="center" justify="center">
    <Link href={link}>
      <Anchor label={name} color="white" />
    </Link>
  </Box>

export default Button