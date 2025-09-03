import { asyncFetchData, mutationHandler } from '@/utils/graphqlUtils';
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
      sections {
        capacity
        gate
        id
        name
      }
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

export const createEventWithTicketTypes = (values) => {
  const createVenueMutation = gql`
    mutation createVenueWithSections($input: VenueWithSectionsInput) {
      createVenueWithSections(venueWithSections: $input) {
        message
        success
      }
    }
  `;
  return mutationHandler(values, createVenueMutation);
};
