import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { IconButton, Center, HStack, Select } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useSeasonData } from '@/hooks/useSeasonData'
import { shadowValue } from '@/styles/theme'

Select.defaultProps = {
  bg: 'white',
  size: 'lg',
  shadow: shadowValue,
}

IconButton.defaultProps = {
  size: 'lg',
  colorScheme: 'twitter',
  shadow: shadowValue,
  icon: <SearchIcon />,
}

export function SelectSeason() {
  const router = useRouter()
  const { years, currentYear, currentSeason } = useSeasonData()

  const [year, setYear] = useState<string>(currentYear)
  const [season, setSeason] = useState<string>(currentSeason)

  const onSearch = () => {
    router.push(`/?season=${year}-${season}`)
  }

  return (
    <Center>
      <HStack>
        <Select w={100} defaultValue={currentYear} onChange={e => setYear(e.target.value)}>
          {years.map(year => (
            <option value={year}>{year}</option>
          ))}
        </Select>

        <Select w={140} defaultValue={currentSeason} onChange={e => setSeason(e.target.value)}>
          <option value="winter">1月〜3月</option>
          <option value="spring">4月〜6月</option>
          <option value="summer">7月〜9月</option>
          <option value="autumn">10月〜12月</option>
        </Select>

        <IconButton type="submit" aria-label="Search" onClick={onSearch} />
      </HStack>
    </Center>
  )
}
