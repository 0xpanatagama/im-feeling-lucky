import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: ['Yes'],
  image: 'https://imgur.com/00TMSUm',
  post_url: 'https://zizzamia.xyz/api/frame',
});

export const metadata: Metadata = {
  title: 'zizzamia.xyz',
  description: 'Lucky!',
  openGraph: {
    title: 'zizzamia.xyz',
    description: 'Lucky!',
    images: ['https://imgur.com/00TMSUm'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>zizzamia.xyz</h1>
    </>
  );
}
