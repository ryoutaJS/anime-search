import Link from 'next/link'
import { Anime } from '@/queries/fetchAnimeData'
import { CardFooter, Button, ButtonGroup } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FaTwitter } from 'react-icons/fa'

CardFooter.defaultProps = {
  pt: 1,
}

interface Props {
  anime: Anime
}

export function AnimeCardFooter({ anime }: Props) {
  return (
    <CardFooter>
      <ButtonGroup>
        {anime.officialSiteUrl && (
          <Link href={anime.officialSiteUrl} target="_blank">
            <Button variant="outline" leftIcon={<ExternalLinkIcon />}>
              公式サイト
            </Button>
          </Link>
        )}
        {anime.twitterUsername && (
          <Link href={`https://x.com/${anime.twitterUsername}`} target="_blank">
            <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
              Twitter
            </Button>
          </Link>
        )}
      </ButtonGroup>
    </CardFooter>
  )
}
