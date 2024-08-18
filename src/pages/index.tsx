import { useQuery } from '@apollo/client'
import { fetchAnimeData, AnimeData } from '@/queries/fetchAnimeData'
import { Header } from '@/components/Header/Header'
import { SeasonSelect } from '@/components/SeasonSelect/SeasonSelect'
import { Container } from '@chakra-ui/react'

export default function Home() {
  const { data } = useQuery<AnimeData>(fetchAnimeData, {
    variables: { title: '鬼滅の刃' },
  })

  console.log(data?.searchWorks.nodes)

  return (
    <>
      <Header />
      <Container mt={5}>
        <SeasonSelect />
      </Container>
    </>
  )
}
