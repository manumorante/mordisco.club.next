import React from 'react'
import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />

      <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />

      <meta property='og:title' content='mordisco.club' />
      <meta property='og:site_name' content='mordisco.club' />
      <meta property='og:url' content='https://mordisco.club' />
      <meta property='og:description' content='mordisco.club' />
      <meta property='og:type' content='website' />
      <meta property='og:image' content='/og.png' />
    </Head>
  )
}

export default Meta
