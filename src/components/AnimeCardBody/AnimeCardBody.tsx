import { Anime } from '@/queries/fetchAnimeData'
import { CardBody, Heading, Badge, Image, Text, Flex } from '@chakra-ui/react'

Heading.defaultProps = {
  size: 'lg',
  my: 3,
}

Badge.defaultProps = {
  fontSize: 'lg',
  ml: 2,
}

Flex.defaultProps = {
  height: { md: '60px' },
  alignItems: 'center',
}

interface Props {
  anime: Anime
}

export function AnimeCardBody({ anime }: Props) {
  return (
    <CardBody>
      <Image
        src={anime.image?.facebookOgImageUrl || 'images/no-image.png'}
        alt={anime.title}
        width="100%"
      />

      <Flex>
        <Heading size="md">
          {anime.title}
          <Badge>{anime.media}</Badge>
        </Heading>
      </Flex>

      {anime.seasonYear && (
        <Text>
          {anime.seasonYear}年{anime.seasonName}
        </Text>
      )}
    </CardBody>
  )
}
