import ProTableComponent from '@/components/ProTableComponent';
import { getAllTickets } from '../services/tickets.api';

function Tickets({ eventId }) {
  const columns = [
    {
      title: 'Ticket Code',
      dataIndex: 'code',
      key: 'code',
      hideInSearch: false,
    },
    {
      title: 'Ticket Type',
      dataIndex: 'ticketType',
      key: 'ticketType',
      render: (_, record) => record?.ticketType?.name,
    },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    {
      title: 'Inserted At',
      dataIndex: 'insertedAt',
      key: 'insertedAt',
      render: (_, record) => new Date(record?.insertedAt).toDateString(),
    },
  ];
  return (
    <ProTableComponent
      request={async (params) => {
        try {
          const data = await getAllTickets(
            eventId ? { ...params, eventId } : params,
          );
          return {
            data: data?.getAllTickets?.tickets || [],
            success: data?.getAllTickets?.success || false,
            total: data?.getAllTickets?.total || 0,
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
      headerTitle="Tickets"
    />
  );
}

export default Tickets;
