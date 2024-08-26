import { gql } from '@apollo/client'

export interface AnimeData {
  searchWorks: {
    nodes: Anime[]
  }
}

export interface Anime {
  annictId: number
  title: string
  seasonName: string | null
  seasonYear: number | null
  media: string
  officialSiteUrl: string | null
  twitterUsername: string | null
  image: {
    facebookOgImageUrl: string | null
  } | null
}

export const fetchAnimeData = gql`
  query GetAnimeList($title: [String!], $season: [String!]) {
    searchWorks(
      titles: $title
      seasons: $season
      orderBy: { field: WATCHERS_COUNT, direction: DESC }
    ) {
      nodes {
        annictId
        title
        seasonYear
        seasonName
        media
        officialSiteUrl
        twitterUsername
        image {
          facebookOgImageUrl
        }
      }
    }
  }
`
