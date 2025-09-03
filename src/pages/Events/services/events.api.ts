import { asyncFetchData, mutationHandler } from '@/utils/graphqlUtils';
import { gql } from 'graphql-request';

export const getEvents = (params) => {
  const { pageSize, current, ...filters } = params;

  const getAllEventsQuery = gql`
    query getAllEvents($input: EventFilter) {
      getAllEvents(filter: $input) {
        events {
          id
          date
          description
          endTime
          isActive
          isCancelled
          name
          category
          venue {
            id
            name
          }
        }
        total
        resourceName
        schemaName
        success
      }
    }
  `;
  return asyncFetchData({
    query: getAllEventsQuery,
    variables: {
      input: {
        limit: params?.pageSize || 10,
        offset: params?.pageSize * (params?.current - 1) || 0,
        ...filters,
      },
    },
  });
};
export const getAllSections = (params) => {
  const { pageSize, current, ...filters } = params;
  const getAllSectionsQuery = gql`
  query getAllSections($input:SectionFilter!){
  getAllSections(filter:$input){
    resourceName
    schemaName
    sections{
      capacity
      gate
      id
      name
          }
    total
    
  }
}
  `;
  return asyncFetchData({
    query: getAllSectionsQuery,
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
  const createEventMutation = gql`
    mutation createEventWithTicketTypes($input: EventWithTicketTypesInput!) {
      createEventWithTicketTypes(eventWithTicketTypes: $input) {
        message
        success
      }
    }
  `;
  return mutationHandler(values, createEventMutation);
};
