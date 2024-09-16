import { FormEvent, useState, useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { shadowValue } from '@/styles/theme'

Input.defaultProps = {
  bg: 'white',
  size: 'lg',
  shadow: shadowValue,
}

export function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [keyword, setKeyword] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!searchParams.get('keyword')) {
      setKeyword('')
    }
  }, [searchParams])

  const onSearch = (e: FormEvent) => {
    e.preventDefault()
    router.push(`/?keyword=${keyword}`)
    inputRef.current?.blur()
  }

  return (
    <form onSubmit={onSearch}>
      <InputGroup>
        <Input
          placeholder="アニメのタイトルを入力 （例）鬼滅の刃"
          value={keyword}
          ref={inputRef}
          onChange={e => setKeyword(e.target.value)}
        />
        <InputLeftElement>
          <SearchIcon color="gray.500" />
        </InputLeftElement>
      </InputGroup>
    </form>
  )
}
