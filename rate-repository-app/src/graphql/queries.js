import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          reviewCount
          stargazersCount
          forksCount
          ownerAvatarUrl
          ratingAverage
          description
          language
        }
      }
    }
  }
`;

export const USER = gql`
  query {
    me {
      id
      username
    }
  }
`;
