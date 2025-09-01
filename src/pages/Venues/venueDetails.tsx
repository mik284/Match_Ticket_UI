import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ProCard, ProDescriptions } from '@ant-design/pro-components';
import { Button, Image, Space } from 'antd';
import React from 'react';

const VenueDetails: React.FC = () => {
  return (
    <ProCard
      title="Venue Details"
      extra="View and manage your Venues"
      tabs={{
        type: 'card',
      }}
      headerBordered
      bordered
    >
      <ProCard.TabPane key="tab1" tab="Venue Details">
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {/* Venue Details Section */}
          <ProCard title="Venue Information" bordered>
            <ProCard split="vertical" bordered>
              {/* Venue Image */}
              <ProCard colSpan="300px" bordered>
                <Image
                  src="https://i0.wp.com/ghettoradio.co.ke/wp-content/uploads/2025/04/Kasarani-Stadium-Ready-for-Action.png?w=1200&ssl=1"
                  width="100%"
                />
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
                    Kasarani Stadium
                  </ProDescriptions.Item>
                  <ProDescriptions.Item label="Parking Availability">
                    Yes
                  </ProDescriptions.Item>

                  <ProDescriptions.Item label="Town">
                    Nairobi
                  </ProDescriptions.Item>
                  <ProDescriptions.Item label="No. of Gates">
                    4
                  </ProDescriptions.Item>

                  <ProDescriptions.Item label="Geographical Location">
                    Nairobi
                  </ProDescriptions.Item>
                  <ProDescriptions.Item label="Capacity Limit">
                    60,000
                  </ProDescriptions.Item>
                  <ProDescriptions.Item label="Accessibility">
                    Wheel Chair
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
      <ProCard.TabPane key="tab2" tab="Venue Events">
        Venue Events
      </ProCard.TabPane>
    </ProCard>
  );
};

export default VenueDetails;
