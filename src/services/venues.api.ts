import { asyncFetchData } from '@/utils/graphqlUtils';
import { gql } from 'graphql-request';

export const getAllVenues = (params) => {
  const { pageSize, current, ...filters } = params;

  const getVenuesQuery = gql`
    query getAllVenues($input: VenueFilter) {
      getAllVenues(filter: $input) {
        resourceName
        schemaName
        success
        total
        venues {
          capacity
          address
          city
          imageUrl
          id
          latitude
          longitude
          name
          parkingAvailable
        }
      }
    }
  `;
  return asyncFetchData({
    query: getVenuesQuery,
    variables: {
      input: {
        limit: params?.pageSize || 10,
        offset: params?.pageSize * (params?.current - 1) || 0,
        ...filters,
      },
    },
  });
};
