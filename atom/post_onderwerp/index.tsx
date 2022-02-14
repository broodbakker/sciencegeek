//grommet
import { Text } from "grommet"

type OnderwerpProps = {
  name: string
  color?:string
  size?:string
}

export const Onderwerp = ({ name, color="primary",size="xsmall" }: OnderwerpProps) =>
  <Text size={size} color={color} weight="bold">
    {name}
  </Text>

