import { asyncFetchData } from '@/utils/graphqlUtils';
import { gql } from 'graphql-request';

export const getAllTickets = (params) => {
	const { pageSize, current, ...filters } = params;
	const getAllTicketsQuery = gql`
    query getAllTickets($input: TicketFilter) {
      getAllTickets(filter: $input) {
        resourceName
        schemaName
        success
        total
        tickets {
          code
          id
          insertedAt
          status
          ticketType {
            name
          }
        }
      }
    }
  `;
	return asyncFetchData({
		query: getAllTicketsQuery,
		variables: {
			input: {
				limit: params?.pageSize || 10,
				offset: params?.pageSize * (params?.current - 1) || 0,
				...filters,
			},
		},
	});
};
