import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'Cottonbell',
  title: 'Cottonbell',
  description: 'Designed to keep you comfortable',
  images: [
    {
      url: 'https://m.media-amazon.com/images/S/aplus-seller-content-images-us-east-1/ATVPDKIKX0DER/AF9P66JN7KVSA/40842df8-526c-4383-8139-1e934d65a25a._CR0,16,1829,549_PT0_SX600__.png',
    },
  ],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
