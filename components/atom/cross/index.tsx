//state
import { HandleNavMenu } from './logic'
import { HandleSearchMenu } from './logic'
//component
import { Cross } from "./cross"

type CrossProps = {
  color?:string
}

export const NavMenuSlider_Cross = ({ color}: CrossProps) => {
  const handleClick = HandleNavMenu()

  return <Cross handleClick={handleClick} color={color} />
}

export const SearchMenu_cross = ({ color}: CrossProps) => {
  const handleClick = HandleSearchMenu()

  return <Cross handleClick={handleClick} color={color}/>
}
