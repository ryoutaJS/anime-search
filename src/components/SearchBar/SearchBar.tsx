import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export function SearchBar() {
  return (
    <>
      <InputGroup maxW={500}>
        <Input placeholder="アニメのタイトルを入力 （例）鬼滅の刃" />
        <InputLeftElement>
          <SearchIcon color="gray.500" />
        </InputLeftElement>
      </InputGroup>
    </>
  )
}
