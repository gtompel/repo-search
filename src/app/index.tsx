import * as ReactDOM from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { App } from './App';

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  );