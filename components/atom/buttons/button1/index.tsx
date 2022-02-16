import Link from 'next/link'
//grommet
import { Button as B } from "grommet"
import { Next } from 'grommet-icons';

type ButtonProps = {
  link: string
  name: string
}

const Button = ({ name, link }: ButtonProps) =>
  <Link href={link}>
    <a>
      <B size="medium" label={name} icon={<Next color="white" />} reverse primary color="secondary" />4
    </a>
  </Link>


export default Button




