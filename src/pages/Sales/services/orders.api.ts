import { asyncFetchData } from '@/utils/graphqlUtils';
import { gql } from 'graphql-request';

export const getOrders = (params) => {
	const { pageSize, current, ...filters } = params;

	const getAllOrdersQuery = gql`
    query getAllVenues($input: VenueFilter) {
      getAllVenues(filter: $input) {
        resourceName
        schemaName
        success
        total
        venues {
          address
          capacity
          city
          id
          sections {
            capacity
            gate
            id
            name
            venue {
              name
            }
          }
          imageUrl
          latitude
          longitude
          organizer {
            name
          }
          address
        }
      }
    }
  `;
	return asyncFetchData({
		query: getAllOrdersQuery,
		variables: {
			input: {
				limit: params?.pageSize || 10,
				offset: params?.pageSize * (params?.current - 1) || 0,
				...filters,
			},
		},
	});
};
