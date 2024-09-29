import { DefaultSeo as DS } from 'next-seo'

export function DefaultSeo() {
  const title = 'アニメ検索アプリ'
  const description =
    'タイトルや放送時期でアニメを検索できるサービスです。検索結果にはアニメのイメージ画像、放送時期、放送メディア、公式HP、X（旧Twitter）などが表示されます。'

  return (
    <DS
      title={title}
      openGraph={{
        type: 'website',
        title,
        description,
        url: 'https://anime-search.vercel.app/',
        locale: 'ja_JP',
      }}
      twitter={{
        cardType: 'summary_large_image',
      }}
    />
  )
}
