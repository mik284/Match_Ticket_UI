import { asyncFetchData } from '@/utils/graphqlUtils';
import { gql } from 'graphql-request';

export const getAllOrders = (params) => {
	const { pageSize, current, ...filters } = params;
	const getAllOrdersQuery = gql`
    query getAllOrders($input: OrderFilter) {
      getAllOrders(filter: $input) {
        orders {
          amount
          checkoutId
          currency
          mpesaReceipt
          paymentMethod
          phone
          status
          transactionDate
        }
        resourceName
        schemaName
        success
        total
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
