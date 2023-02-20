import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    ApolloProvider,
    InMemoryCache,
    ApolloClient
} from '@apollo/react-hooks';
import { App } from './App';

const client = new ApolloClient({
    uri: 'http://localhost:6006/graphql?',
    cache: new InMemoryCache()
});

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
