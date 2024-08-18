import { useState } from 'react'
import { Button, Center, HStack, Select } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export function SeasonSelect() {
  const [season, setSeason] = useState<string>('spring')

  return (
    <Center>
      <form>
        <HStack>
          <Select w={140} onChange={e => setSeason(e.target.value)}>
            <option value="spring">春シーズン</option>
            <option value="summer">夏シーズン</option>
            <option value="autumn">秋シーズン</option>
            <option value="winter">冬シーズン</option>
          </Select>

          <Button colorScheme="twitter" type="submit">
            <SearchIcon />
          </Button>
        </HStack>
      </form>
    </Center>
  )
}
