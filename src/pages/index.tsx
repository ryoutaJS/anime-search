import { useQuery } from '@apollo/client'
import { fetchAnimeData, AnimeData } from '@/queries/fetchAnimeData'

export default function Home() {
  const { data } = useQuery<AnimeData>(fetchAnimeData, {
    variables: { season: '2024-spring' },
  })

  console.log(data?.searchWorks.nodes)

  return
}
