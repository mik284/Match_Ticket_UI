import { asyncFetchData } from '@/utils/graphqlUtils';
import { gql } from 'graphql-request';

export const getUsers = (params) => {
  const { pageSize, current, ...filters } = params;

  const getAllUsersQuery = gql`
  query getAllUsers($input:UserFilter){
  getAllUsers(filter:$input){
    resourceName
    schemaName
    success
    total
    users{
      email
      id
      phone
      username
      role
    }
  }
}
  `;
  return asyncFetchData({
    query: getAllUsersQuery,
    variables: {
      input: {
        limit: params?.pageSize || 10,
        offset: params?.pageSize * (params?.current - 1) || 0,
        ...filters,
      },
    },
  });
};
