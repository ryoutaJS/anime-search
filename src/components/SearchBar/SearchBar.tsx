import { FormEvent, useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    if (!searchParams.get('keyword')) {
      setKeyword('')
    }
  }, [searchParams])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    router.push(`/?keyword=${keyword}`)
  }

  return (
    <form onSubmit={onSubmit}>
      <InputGroup>
        <Input
          placeholder="アニメのタイトルを入力 （例）鬼滅の刃"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
        <InputLeftElement>
          <SearchIcon color="gray.500" />
        </InputLeftElement>
      </InputGroup>
    </form>
  )
}
