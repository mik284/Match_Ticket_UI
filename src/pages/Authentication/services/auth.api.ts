import { mutationHandler } from '@/utils/graphqlUtils';
import { gql } from 'graphql-request';

export const loginUser = async (values: {
  username: string;
  password: string;
  context: string;
}) => {
  const loginMutation = gql`
    mutation login($input: LoginInput!) {
      login(input: $input) {
        message
        success
        token
      }
    }
  `;
  return mutationHandler(values, loginMutation);
};


export const changePassword = async (values: {
  email: string;
  newPassword: string;
  token: string;
}) => {
  const changePasswordMutation = gql`
  mutation resetPassword($input:ResetPasswordInput!){
  resetPassword(resetPasswordInput:$input){
    message
    success
  }
}
 
  `;
  return mutationHandler(values, changePasswordMutation);
};
