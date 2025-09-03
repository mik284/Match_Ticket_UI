import ProTableComponent from '@/components/ProTableComponent';
import { getAllVenues } from '@/pages/Venues/services/venues.api';
import { EyeOutlined } from '@ant-design/icons';
import { Link } from '@umijs/max';
import { Button, Image } from 'antd';
import React from 'react';
import AddEditVenue from './components/AddEditVenue';

function Venues() {
  const [venues, setVenues] = React.useState([]);

  const columns = [
    {
      title: 'Venue',
      dataIndex: 'imageUrl',
      key: 'imageUrl',
      render: (_, record) => (
        <Image src={record?.imageUrl} alt="Venue" height={100} />
      ),
    },
    { title: 'Venue Name', dataIndex: 'name', key: 'name' },
    { title: 'City', dataIndex: 'city', key: 'city' },
    { title: 'Capacity', dataIndex: 'capacity', key: 'capacity' },
    {
      title: 'Parking Available',
      dataIndex: 'parkingAvailable',
      key: 'parkingAvailable',
      render: (_, record) => (record?.parkingAvailable ? 'Yes' : 'No'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Link to={`/venues/${record.id}`}>
          <Button size="small" icon={<EyeOutlined />} type="primary">
            View
          </Button>
        </Link>
      ),
    },
  ];

  function selectedRowKeys(selectedRows: any) {
    const selectedRow = venues.find((venue) => venue?.id === selectedRows[0]);
    console.log('selectedRows', selectedRow);
  }

  return (
    <ProTableComponent
      request={async (params) => {
        try {
          const data = await getAllVenues(params);
          setVenues(data?.getAllVenues?.venues || []);
          return {
            data: data?.getAllVenues?.venues || [],
            success: data?.getAllVenues?.success || false,
            total: data?.getAllVenues?.total || 0,
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
      rowKey={'id'}
      toolBarRender={() => [<AddEditVenue />]}
      columns={columns}
      rowSelection={{ onChange: selectedRowKeys }}
    />
  );
}

export default Venues;
