import ProTableComponent from '@/components/ProTableComponent';
import { getUsers } from '@/pages/Users/services/users.api';
import AddEditUser from './components/AddEditUser';

function Users() {
  const columns = [
    { title: 'User Name', dataIndex: 'username', key: 'username' },
    { title: 'Phone Number', dataIndex: 'phone', key: 'phone' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
  ];

  return (
    <ProTableComponent
      request={async (params) => {
        try {
          const data = await getUsers(params);
          return {
            data: data?.getAllUsers?.users || [],
            success: data?.getAllUsers?.success || false,
            total: data?.getAllUsers?.total || 0,
          };
        } catch (e) {
          console.log(e);
          return {
            data: [],
            success: false,
            total: 0,
          };
        }
      }}
      columns={columns}
      toolBarRender={() => [<AddEditUser />]}
      rowKey={'id'}
    />
  );
}

export default Users;
