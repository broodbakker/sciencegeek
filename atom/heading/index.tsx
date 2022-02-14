import { Heading } from "grommet"

type HProps = {
  name: string
  level?: '1' | '2' | '3' | '4' | '5' | '6' | 1 | 2 | 3 | 4 | 5 | 6;
  margin?: string
}


const H = ({ name, level = "3", margin }: HProps) =>
  <Heading level={level} margin={margin}>{name}</Heading>

export default H
