import { AnimeCard } from '@/components/AnimeCard/AnimeCard'
import { Header } from '@/components/Header/Header'
import { SeasonSelect } from '@/components/SeasonSelect/SeasonSelect'
import { Container } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Header />
      <Container mt={5}>
        <SeasonSelect />
        <AnimeCard />
      </Container>
    </>
  )
}
