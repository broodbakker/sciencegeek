import { Close as CloseIcon } from 'grommet-icons';
import styled from 'styled-components';

type CloseProp = {
  handleClick: () => void
  color?: string;
}

const Icon = styled(CloseIcon)`
  cursor:pointer;

`

export const Cross = ({ handleClick, color }: CloseProp) =>
  <Icon onClick={handleClick} color={color} />