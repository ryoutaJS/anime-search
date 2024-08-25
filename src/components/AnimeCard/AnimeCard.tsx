import { useFetchAnimeData } from '@/hooks/useFetchAnimeData'
import { shadowValue } from '@/styles/theme'
import { Anime } from '@/queries/fetchAnimeData'
import { AnimeCardBody } from '../AnimeCardBody/AnimeCardBody'
import { AnimeCardFooter } from '../AnimeCardFooter/AnimeCardFooter'
import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator'
import { Card, Grid } from '@chakra-ui/react'

Grid.defaultProps = {
  mt: 6,
  gap: 6,
  templateColumns: { base: '1fr', md: '1fr 1fr' },
}

Card.defaultProps = {
  shadow: shadowValue,
}

export function AnimeCard() {
  const { loading, data } = useFetchAnimeData()

  if (loading) {
    return <LoadingIndicator />
  }

  return (
    <Grid>
      {data?.searchWorks.nodes.map((anime: Anime) => (
        <Card key={anime.annictId}>
          <AnimeCardBody anime={anime} />
          <AnimeCardFooter anime={anime} />
        </Card>
      ))}
    </Grid>
  )
}
