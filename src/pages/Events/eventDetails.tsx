import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ProCard, ProDescriptions } from '@ant-design/pro-components';
import { Button, Space } from 'antd';
import React from 'react';
import Orders from './components/Orders';
import Tickets from './components/Tickets';
import useEvent from './hooks/useEvent';

const EventDetails: React.FC = () => {
  const { event, isLoading } = useEvent();
  console.log('data', event);
  return (
    <ProCard
      title="Event Details"
      extra="View and manage your Events"
      tabs={{
        type: 'card',
      }}
      headerBordered
      bordered
      loading={isLoading}
    >
      <ProCard.TabPane key="tab1" tab="Event Details">
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {/* Event Details Section */}
          <ProCard title="Event Information" bordered>
            <ProCard split="vertical" bordered>
              {/* Event Information */}
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
                  <ProDescriptions.Item label="Event Category">
                    {event?.category}
                  </ProDescriptions.Item>
                  <ProDescriptions.Item label="Venue">
                    {event?.venue?.name}
                  </ProDescriptions.Item>

                  <ProDescriptions.Item label="Event Name">
                    {event?.name}
                  </ProDescriptions.Item>
                  <ProDescriptions.Item label="Time">
                    {new Date(event?.date).toDateString()}
                  </ProDescriptions.Item>

                  <ProDescriptions.Item label="Description">
                    {event?.description}
                  </ProDescriptions.Item>
                </ProDescriptions>
              </ProCard>
            </ProCard>
          </ProCard>

          {/* Sections Details */}

          <ProCard title="Sections Details" bordered>
            {event?.venue?.sections?.map((section) => (
              <ProDescriptions
                column={3}
                bordered
                colon={false}
                contentStyle={{ fontWeight: 600 }}
                style={{ marginBottom: '1rem' }}
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
      {/* <ProCard.TabPane key="tab3" tab="Event Dashboard">
        <EventDashboard />
      </ProCard.TabPane> */}
      <ProCard.TabPane key="tab2" tab="Event Tickets Sales">
        <Tickets eventId={event?.id} />
      </ProCard.TabPane>
      <ProCard.TabPane key="tab3" tab="Event Ticket orders">
        <Orders eventId={event?.id} />
      </ProCard.TabPane>
    </ProCard>
  );
};

export default EventDetails;
