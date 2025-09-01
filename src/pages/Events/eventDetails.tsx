import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ProCard, ProDescriptions } from '@ant-design/pro-components';
import { Button, Space } from 'antd';
import React from 'react';
import EventDashboard from './components/eventDashboard';

const EventDetails: React.FC = () => {
  return (
    <ProCard
      title="Event Details"
      extra="View and manage your Events"
      tabs={{
        type: 'card',
      }}
      headerBordered
      bordered
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
                    Sports
                  </ProDescriptions.Item>
                  <ProDescriptions.Item label="Venue">
                    Kasarani Stadium
                  </ProDescriptions.Item>

                  <ProDescriptions.Item label="Event Name">
                    Gor Mahia vs AFC Leopards
                  </ProDescriptions.Item>
                  <ProDescriptions.Item label="Time">
                    25th Dec, 2024 - 3:00 PM
                  </ProDescriptions.Item>

                  <ProDescriptions.Item label="Description">
                    Nairobi
                  </ProDescriptions.Item>
                  <ProDescriptions.Item label="Capacity Limit">
                    60,000
                  </ProDescriptions.Item>
                </ProDescriptions>
              </ProCard>
            </ProCard>
          </ProCard>

          {/* Sections Details */}
          <ProCard title="Sections Details" bordered>
            <ProDescriptions
              column={3}
              bordered
              colon={false}
              contentStyle={{ fontWeight: 600 }}
            >
              <ProDescriptions.Item label="Section Name">
                Wing A
              </ProDescriptions.Item>
              <ProDescriptions.Item label="Capacity">250</ProDescriptions.Item>
              <ProDescriptions.Item label="Gate">A</ProDescriptions.Item>
            </ProDescriptions>
            <ProDescriptions
              column={3}
              bordered
              colon={false}
              contentStyle={{ fontWeight: 600 }}
            >
              <ProDescriptions.Item label="Section Name">
                Wing A
              </ProDescriptions.Item>
              <ProDescriptions.Item label="Capacity">250</ProDescriptions.Item>
              <ProDescriptions.Item label="Gate">A</ProDescriptions.Item>
            </ProDescriptions>
          </ProCard>
        </Space>
      </ProCard.TabPane>
      <ProCard.TabPane key="tab3" tab="Event Dashboard">
        <EventDashboard />
      </ProCard.TabPane>
      <ProCard.TabPane key="tab2" tab="Event Tickets Sales">
        Event Tickets
      </ProCard.TabPane>
    </ProCard>
  );
};

export default EventDetails;
