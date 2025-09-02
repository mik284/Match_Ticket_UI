import {
  ModalForm,
  ProFormGroup,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Button } from 'antd';
import React from 'react';

const AddEditUser: React.FC = () => {
  return (
    <>
      <ModalForm
        title="Create User"
        trigger={<Button type="primary">Create User</Button>}
        modalProps={{
          destroyOnClose: true,
        }}
        onFinish={async (values) => {
          console.log('Form Values:', values);
          return true;
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
          <ProFormText
            name="phone"
            width="md"
            label="Phone Number"
            placeholder="+254789000000"
            rules={[{ required: true, message: 'Please enter phone number' }]}
          />
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
            name="idType"
            label="ID Type"
            width="md"
            placeholder="Select ID Type"
            options={[
              { label: 'National ID', value: 'national_id' },
              { label: 'Passport', value: 'passport' },
              { label: 'Driver’s License', value: 'drivers_license' },
            ]}
            rules={[{ required: true, message: 'Please select ID type' }]}
          />
        </ProFormGroup>

        <ProFormGroup>
          <ProFormText
            name="idNumber"
            label="ID Number"
            width="md"
            placeholder="37658900"
            rules={[{ required: true, message: 'Please enter ID number' }]}
          />
          <ProFormSelect
            name="role"
            label="Role"
            width="md"
            placeholder="Select role"
            options={[
              { label: 'Admin', value: 'admin' },
              { label: 'Editor', value: 'editor' },
              { label: 'User', value: 'user' },
            ]}
            rules={[{ required: true, message: 'Please select role' }]}
          />
        </ProFormGroup>
      </ModalForm>
    </>
  );
};

export default AddEditUser;
