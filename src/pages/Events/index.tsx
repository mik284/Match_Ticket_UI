import ProTableComponent from '@/components/ProTableComponent';
import { getEvents } from '@/services/events.api';
import { EyeOutlined } from '@ant-design/icons';
import { Link } from '@umijs/max';
import { Button } from 'antd';
import AddEditEvent from './components/AddEditEvent';

function Events() {
  const columns = [
    { title: 'Event Name', dataIndex: 'name', key: 'name' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    {
      title: 'Event Date',
      dataIndex: 'date',
      key: 'date',
      render: (_, record) => (
        <span>{new Date(record.date).toDateString()}</span>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Link to={`/events/${record.id}`}>
          <Button size="small" icon={<EyeOutlined />} type="primary">
            View
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <ProTableComponent
      request={async (params) => {
        const data = await getEvents(params);
        return {
          data: data?.getAllEvents?.events || [],
          success: data?.getAllEvents?.success || false,
          total: data?.getAllEvents?.total || 0,
        };
      }}
      columns={columns}
      toolBarRender={() => [<AddEditEvent />]}
      rowKey={'id'}
    />
  );
}

export default Events;
