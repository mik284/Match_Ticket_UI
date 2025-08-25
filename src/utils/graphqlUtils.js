import { useQuery } from '@tanstack/react-query';
import { GraphQLClient } from 'graphql-request';

export function fetchDataWithUseQuery({ key, query, variables = {} }) {
  const config = { refetchOnWindowFocus: false };
  const endpoint = `${BASE_URL}`;
  const headers = {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };

  const client = new GraphQLClient(`${endpoint}/graphql`, headers);

  return useQuery(key, async () => await client.request(query, variables), config);
}


// A handler to perform secure mutations with authentication token
export const mutationHandler = async (values, mutationQuery, token = null) => {
  const headers = {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  const endpoint = `${BASE_URL}`;
  const client = new GraphQLClient(`${endpoint}/graphql`, headers);
  return await client.request(mutationQuery, {
    input: values,
  });
};

// A handler to fetch data and returns a promise with authentication token
export async function asyncFetchData({ query, variables = {} }) {
  const endpoint = `${BASE_URL}`;
  const headers = {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };

  const client = new GraphQLClient(`${endpoint}/graphql`, headers);

  return await client.request(query, variables);
}