import { useSearchParams } from 'next/navigation'
import { useQuery } from '@apollo/client'
import { fetchAnimeData, AnimeData, Anime } from '@/queries/fetchAnimeData'
import { useSeasonData } from '@/hooks/useSeasonData'

export function useFetchAnimeData() {
  const { currentYear, currentSeason } = useSeasonData()

  const searchParams = useSearchParams()
  const searchSeason = searchParams.get('season')

  let variables = { season: `${currentYear}-${currentSeason}` }
  if (searchSeason) {
    variables = { season: searchSeason }
  }

  const { data } = useQuery<AnimeData>(fetchAnimeData, {
    variables: variables,
  })

  return { data }
}
