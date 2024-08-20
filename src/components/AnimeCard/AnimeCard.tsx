import { useFetchAnimeData } from '@/hooks/useFetchAnimeData'
import { Anime } from '@/queries/fetchAnimeData'
import { AnimeCardBody } from '../AnimeCardBody/AnimeCardBody'
import { AnimeCardFooter } from '../AnimeCardFooter/AnimeCardFooter'
import { Card } from '@chakra-ui/react'

export function AnimeCard() {
  const { data } = useFetchAnimeData()

  return (
    <>
      {data?.searchWorks.nodes.map((anime: Anime) => (
        <Card key={anime.annictId} shadow="xl" my={4}>
          <AnimeCardBody anime={anime} />
          <AnimeCardFooter anime={anime} />
        </Card>
      ))}
    </>
  )
}
