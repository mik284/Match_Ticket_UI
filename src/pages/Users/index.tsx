import ProTableComponent from '@/components/ProTableComponent';
import { getUsers } from '@/services/users.api';

function Users() {
  const columns = [
    { title: 'User Name', dataIndex: 'name', key: 'name' },
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
      rowKey={'id'}
    />
  );
}

export default Users;
