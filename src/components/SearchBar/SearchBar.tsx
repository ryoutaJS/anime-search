import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export function SearchBar() {
  const router = useRouter()
  const [keyword, setKeyword] = useState('')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    router.push(`/?keyword=${keyword}`)
  }
  return (
    <form onSubmit={onSubmit}>
      <InputGroup maxW={500}>
        <Input
          placeholder="アニメのタイトルを入力 （例）鬼滅の刃"
          onChange={e => setKeyword(e.target.value)}
        />
        <InputLeftElement>
          <SearchIcon color="gray.500" />
        </InputLeftElement>
      </InputGroup>
    </form>
  )
}
