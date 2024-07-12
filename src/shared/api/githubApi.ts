import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
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
