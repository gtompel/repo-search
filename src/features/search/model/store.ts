import { createStore, createEvent } from 'effector';
import { gql, useQuery } from '@apollo/client';

const GET_REPOSITORIES = gql`
  query GetRepositories($searchTerm: String!, $after: String) {
    search(query: $searchTerm, type: REPOSITORY, first: 10, after: $after) {
      edges {
        node {
          id
          name
          stargazerCount
          pushedAt
          url
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export const setSearchTerm = createEvent<string>();
export const setPage = createEvent<number>();

export const $searchTerm = createStore<string>('')
  .on(setSearchTerm, (_, term) => term);

export const $page = createStore<number>(1)
  .on(setPage, (_, page) => page);

export const useRepositories = (searchTerm: string, _page: number) => {
  const { loading, error, data, fetchMore } = useQuery(GET_REPOSITORIES, {
    variables: { searchTerm, after: null },
  });

  const repositories = data?.search.edges.map((edge: any) => edge.node) || [];
  const pageInfo = data?.search.pageInfo || {};

  const loadMore = () => {
    if (pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          after: pageInfo.endCursor,
        },
      });
    }
  };

  return { loading, error, repositories, loadMore };
};
