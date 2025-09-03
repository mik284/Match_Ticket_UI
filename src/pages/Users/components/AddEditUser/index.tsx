import showConfirm from '@/components/ModalConfirm';
import Notification from '@/components/Notification';
import { PhoneInput } from '@/components/Phonenumber';
import { getPhoneNumber } from '@/components/Phonenumber/formatPhoneNumberUtil';

import {
  ModalForm,
  ProFormGroup,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Button } from 'antd';
import React from 'react';
import { createUser } from '../../services/users.api';

const AddEditUser: React.FC = ({ isEdit }) => {
  return (
    <>
      <ModalForm
        title={isEdit ? 'Edit User' : 'Create User'}
        trigger={
          <Button type="primary">{isEdit ? 'Edit User' : 'Create User'}</Button>
        }
        modalProps={{
          destroyOnClose: true,
        }}
        onFinish={async (values) => {
          const confirmed = await showConfirm({
            title: isEdit
              ? 'Are you sure you want to edit user?'
              : 'Are you sure you want to create a user?',
          });
          if (confirmed) {
            if (isEdit) {
              console.log('edit user');
              try {
                const response = await createUser({
                  ...values,
                  phone: getPhoneNumber(values.phone),
                });
                Notification({
                  type: 'success',
                  message: response?.createUser?.message,
                });
                console.log('=========>>>>>', response);
                return true;
              } catch (e) {
                console.log(e);
              }
              return true;
            }
            try {
              const response = await createUser({
                ...values,
                phone: getPhoneNumber(values.phone),
              });
              Notification({
                type: 'success',
                message: response?.createUser?.message,
              });
              console.log('=========>>>>>', response);
              return true;
            } catch (e) {
              console.log(e);
            }
          }

          // return true;
        }}
        submitter={{
          searchConfig: {
            submitText: 'Create User',
            resetText: 'Cancel',
          },
        }}
      >
        {/* User Info */}
        <ProFormGroup>
          <ProFormText
            name="username"
            label="User Name"
            width="md"
            placeholder="Joe Doe"
            rules={[{ required: true, message: 'Please enter user name' }]}
          />
          <PhoneInput name="phone" label="Phone Number" width="md" />
        </ProFormGroup>

        <ProFormGroup>
          <ProFormText
            name="email"
            width="md"
            label="Email"
            placeholder="xyz123@gmail.com"
            rules={[
              { required: true, message: 'Please enter email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          />
          <ProFormSelect
            name="role"
            label="Role"
            width="md"
            placeholder="Select role"
            options={[
              { label: 'Admin', value: 'ADMIN' },
              { label: 'Organizer', value: 'ORGANIZER' },
              { label: 'Validator', value: 'VALIDATOR' },
            ]}
            rules={[{ required: true, message: 'Please select role' }]}
          />
        </ProFormGroup>
      </ModalForm>
    </>
  );
};

export default AddEditUser;
