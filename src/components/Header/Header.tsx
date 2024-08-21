import { Heading } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/react'
import { SearchBar } from '../SearchBar/SearchBar'

Box.defaultProps = {
  border: '1px',
  borderColor: 'gray.300',
  p: 4,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export function Header() {
  return (
    <Box>
      <Heading>Anime Search</Heading>
      <SearchBar />
    </Box>
  )
}
