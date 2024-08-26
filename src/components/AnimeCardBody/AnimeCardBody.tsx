import { Anime } from '@/queries/fetchAnimeData'
import { useSeasonData } from '@/hooks/useSeasonData'
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

Image.defaultProps = {
  height: { md: 220, lg: 280 },
  objectFit: 'contain',
}

interface Props {
  anime: Anime
}

export function AnimeCardBody({ anime }: Props) {
  const { convertSeasonName } = useSeasonData()

  return (
    <CardBody>
      <Image
        src={anime.image?.facebookOgImageUrl || 'images/no-image.png'}
        alt={anime.title}
        onError={e => {
          e.currentTarget.src = 'images/no-image.png'
        }}
      />

      <Flex>
        <Heading size="md">
          {anime.title}
          <Badge>{anime.media}</Badge>
        </Heading>
      </Flex>

      {anime.seasonYear && (
        <Text>
          {anime.seasonYear}年{convertSeasonName(anime.seasonName)}
        </Text>
      )}
    </CardBody>
  )
}
