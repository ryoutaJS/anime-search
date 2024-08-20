import { useFetchAnimeData } from '@/hooks/useFetchAnimeData'

export function AnimeCard() {
  const { data } = useFetchAnimeData()
  console.log(data?.searchWorks.nodes)

  return <></>
}
