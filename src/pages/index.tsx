import { AnimeCard } from '@/components/AnimeCard/AnimeCard'
import { Header } from '@/components/Header/Header'
import { SeasonSelect } from '@/components/SeasonSelect/SeasonSelect'
import { Container } from '@chakra-ui/react'

Container.defaultProps = {
  mt: 5,
  maxW: 800,
}

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <SeasonSelect />
        <AnimeCard />
      </Container>
    </>
  )
}
