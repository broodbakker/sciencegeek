
import React from 'react'
import styled from "styled-components"
import { Search } from 'grommet-icons';
import { TextInput } from 'grommet';

type SearchbarProp = {
  handleClick: () => void
}

const Input = styled(TextInput)`
  background-color:white;
`

export const Searchbar = ({ handleClick }: SearchbarProp) =>
  <Input icon={<Search />} placeholder="vind een verhaal..." size="large" />