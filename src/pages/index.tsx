import { useQuery } from '@apollo/client'
import { fetchAnimeData, AnimeData } from '@/queries/fetchAnimeData'

export default function Home() {
  const { data } = useQuery<AnimeData>(fetchAnimeData, {
    variables: { title: '鬼滅の刃' },
  })

  console.log(data?.searchWorks.nodes)

  return
}
