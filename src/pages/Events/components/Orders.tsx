import ProTableComponent from '@/components/ProTableComponent';
import { getAllOrders } from '../services/orders.api';

function Orders({ eventId }) {
  const columns = [
    { title: 'Order Status', dataIndex: 'status', key: 'status' },
    { title: 'Amount', dataIndex: 'amount', key: 'amount' },
    { title: 'Currency', dataIndex: 'currency', key: 'currency' },
    {
      title: 'Transaction Date',
      dataIndex: 'transactionDate',
      key: 'transactionDate',
      render: (_, record) =>
        record?.transactionDate
          ? new Date(record?.transactionDate).toDateString()
          : '-',
    },
  ];
  return (
    <ProTableComponent
      request={async (params) => {
        try {
          const data = await getAllOrders(
            eventId ? { ...params, eventId } : params,
          );
          return {
            data: data?.getAllOrders?.orders || [],
            success: data?.getAllOrders?.success || false,
            total: data?.getAllOrders?.total || 0,
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
      headerTitle="Orders"
    />
  );
}

export default Orders;
