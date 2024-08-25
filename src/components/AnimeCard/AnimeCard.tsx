import { useFetchAnimeData } from '@/hooks/useFetchAnimeData'
import { shadowValue } from '@/styles/theme'
import { Anime } from '@/queries/fetchAnimeData'
import { AnimeCardBody } from '../AnimeCardBody/AnimeCardBody'
import { AnimeCardFooter } from '../AnimeCardFooter/AnimeCardFooter'
import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator'
import { Card } from '@chakra-ui/react'

Card.defaultProps = {
  my: 5,
  shadow: shadowValue,
}

export function AnimeCard() {
  const { loading, data } = useFetchAnimeData()

  if (loading) {
    return <LoadingIndicator />
  }

  return (
    <>
      {data?.searchWorks.nodes.map((anime: Anime) => (
        <Card key={anime.annictId}>
          <AnimeCardBody anime={anime} />
          <AnimeCardFooter anime={anime} />
        </Card>
      ))}
    </>
  )
}
