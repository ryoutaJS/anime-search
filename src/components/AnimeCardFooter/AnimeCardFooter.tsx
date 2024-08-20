import Link from 'next/link'
import { Anime } from '@/queries/fetchAnimeData'
import { CardFooter, Button, ButtonGroup } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

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
      </ButtonGroup>
    </CardFooter>
  )
}
