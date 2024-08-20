import { Anime } from '@/queries/fetchAnimeData'
import { CardBody, Stack, Heading, Badge, Image, Text } from '@chakra-ui/react'

interface Props {
  anime: Anime
}

export function AnimeCardBody({ anime }: Props) {
  return (
    <CardBody>
      <Image src={anime.image?.facebookOgImageUrl} alt={anime.title} />
      <Stack mt={3}>
        <Heading size="lg">
          {anime.title}
          <Badge ml="2" fontSize="large">
            {anime.media}
          </Badge>
        </Heading>
        {anime.seasonYear && (
          <Text>
            {anime.seasonYear}年{anime.seasonName}
          </Text>
        )}
      </Stack>
    </CardBody>
  )
}
