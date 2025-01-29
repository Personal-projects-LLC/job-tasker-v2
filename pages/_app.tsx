import '@styles/global.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { DehydratedState } from 'react-query';

interface CustomPageProps {
  dehydratedState?: DehydratedState;
}

function MyApp({ Component, pageProps }: AppProps<CustomPageProps>) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;