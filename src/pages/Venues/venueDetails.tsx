import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ProCard, ProDescriptions } from '@ant-design/pro-components';
import { Button, Image, Space } from 'antd';
import React from 'react';
import Events from '../Events';
import useVenue from './hooks/useVenue';

const VenueDetails: React.FC = () => {
  const { venue, isLoading } = useVenue();
  console.log('data', venue);

  return (
    <ProCard
      title="Venue Details"
      extra="View and manage your Venues"
      tabs={{
        type: 'card',
      }}
      loading={isLoading}
      headerBordered
      bordered
    >
      <ProCard.TabPane key="tab1" tab="Venue Details">
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {/* Venue Details Section */}
          <ProCard title="Venue Information" bordered>
            <ProCard split="vertical" bordered>
              {/* Venue Image */}
              <ProCard loading={isLoading} colSpan="300px" bordered>
                <Image src={venue?.imageUrl} alt="Venue" width="100%" />
              </ProCard>

              {/* Venue Information */}
              <ProCard bordered>
                <ProDescriptions
                  // column={2}
                  bordered
                  colon={false}
                  contentStyle={{ fontWeight: 600 }}
                  extra={
                    <Space>
                      <Button icon={<DeleteOutlined />} danger>
                        Delete
                      </Button>
                      <Button icon={<EditOutlined />} type="default">
                        Edit
                      </Button>
                    </Space>
                  }
                >
                  <ProDescriptions.Item label="Name">
                    {venue?.name}
                  </ProDescriptions.Item>
                  <ProDescriptions.Item label="Parking Availability">
                    {venue?.parkingAvailable ? 'Yes' : 'No'}
                  </ProDescriptions.Item>

                  <ProDescriptions.Item label="City / Town">
                    {venue?.city}
                  </ProDescriptions.Item>

                  <ProDescriptions.Item label="Geographical Location">
                    {venue?.address}
                  </ProDescriptions.Item>
                  <ProDescriptions.Item label="Capacity Limit">
                    {venue?.capacity}
                  </ProDescriptions.Item>
                  {/* <ProDescriptions.Item label="Accessibility">
                    Wheel Chair
                  </ProDescriptions.Item> */}
                </ProDescriptions>
              </ProCard>
            </ProCard>
          </ProCard>

          {/* Sections Details */}
          <ProCard title="Sections Details" bordered>
            {venue?.sections?.map((section) => (
              <ProDescriptions
                style={{ marginBottom: '1rem' }}
                column={3}
                title={section?.name}
                bordered
                colon={false}
                contentStyle={{ fontWeight: 600 }}
                key={section.id}
              >
                <ProDescriptions.Item label="Section Name">
                  {section?.name}
                </ProDescriptions.Item>
                <ProDescriptions.Item label="Capacity">
                  {section?.capacity}
                </ProDescriptions.Item>
                <ProDescriptions.Item label="Gate">
                  {section?.gate}
                </ProDescriptions.Item>
              </ProDescriptions>
            ))}
          </ProCard>
        </Space>
      </ProCard.TabPane>
      <ProCard.TabPane key="tab2" tab="Venue Events">
        <Events venue={venue} />
      </ProCard.TabPane>
    </ProCard>
  );
};

export default VenueDetails;
