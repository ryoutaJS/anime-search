import { useSearchParams } from 'next/navigation'
import { useQuery } from '@apollo/client'
import { fetchAnimeData, AnimeData } from '@/queries/fetchAnimeData'
import { useSeasonData } from '@/hooks/useSeasonData'

interface Variables {
  season?: string
  title?: string
}

export function useFetchAnimeData() {
  const { currentYear, currentSeason } = useSeasonData()

  const searchParams = useSearchParams()
  const season = searchParams.get('season')
  const keyword = searchParams.get('keyword')
  const variables: Variables = {}

  if (keyword) {
    variables.title = keyword
  }
  if (season) {
    variables.season = season
  }
  if (!season && !keyword) {
    variables.season = `${currentYear}-${currentSeason}`
  }

  const { data } = useQuery<AnimeData>(fetchAnimeData, {
    variables: variables,
  })

  return { data }
}
