import { FormEvent, useState } from 'react'
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

export function SeasonSelect() {
  const router = useRouter()
  const { years, currentYear, currentSeason } = useSeasonData()

  const [year, setYear] = useState<string>(currentYear)
  const [season, setSeason] = useState<string>(currentSeason)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/?season=${year}-${season}`)
  }

  return (
    <Center>
      <form onSubmit={onSubmit}>
        <HStack>
          <Select w={100} defaultValue={currentYear} onChange={e => setYear(e.target.value)}>
            {years.map(year => (
              <option value={year}>{year}</option>
            ))}
          </Select>

          <Select w={140} defaultValue={currentSeason} onChange={e => setSeason(e.target.value)}>
            <option value="spring">春シーズン</option>
            <option value="summer">夏シーズン</option>
            <option value="autumn">秋シーズン</option>
            <option value="winter">冬シーズン</option>
          </Select>

          <IconButton type="submit" aria-label="Search" />
        </HStack>
      </form>
    </Center>
  )
}
