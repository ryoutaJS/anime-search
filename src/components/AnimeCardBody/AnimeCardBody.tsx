import { Anime } from '@/queries/fetchAnimeData'
import { CardBody, Heading, Badge, Image, Text } from '@chakra-ui/react'

Heading.defaultProps = {
  size: 'lg',
  my: 3,
}

Badge.defaultProps = {
  fontSize: 'lg',
  ml: 2,
}

interface Props {
  anime: Anime
}

export function AnimeCardBody({ anime }: Props) {
  return (
    <CardBody>
      <Image src={anime.image?.facebookOgImageUrl} alt={anime.title} />

      <Heading>
        {anime.title}
        <Badge>{anime.media}</Badge>
      </Heading>

      {anime.seasonYear && (
        <Text>
          {anime.seasonYear}年{anime.seasonName}
        </Text>
      )}
    </CardBody>
  )
}
