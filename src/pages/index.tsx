import { AnimeCard } from '@/components/AnimeCard/AnimeCard'
import { Header } from '@/components/Header/Header'
import { SelectSeason } from '@/components/SelectSeason/SelectSeason'
import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop'
import { Container } from '@chakra-ui/react'

Container.defaultProps = {
  my: 5,
  maxW: 1100,
}

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <SelectSeason />
        <AnimeCard />
      </Container>
      <ScrollToTop />
    </>
  )
}
