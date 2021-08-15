import { InfinitePeople } from "./people/InfinitePeople";
import { ReactQueryDevtools } from 'react-query/devtools';
import { InfiniteSpecies } from "./species/InfiniteSpecies";
import { QueryClient, QueryClientProvider } from 'react-query';

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1 className={'title'}>Infinite Star Wars API</h1>

      <div className={"scroll-section App"}>
        <section className={'scroll-section__item'}>
          <h2 className={'title'}>People</h2>
          <InfinitePeople />
        </section>
        <section className={'scroll-section__item'}>
          <h2 className={'title'}>Species</h2>
          <InfiniteSpecies />
        </section>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
