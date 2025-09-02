import { getAllVenues } from '@/pages/Venues/services/venues.api';
import {
  ModalForm,
  ProFormDatePicker,
  ProFormDigit,
  ProFormGroup,
  ProFormList,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  ProFormTimePicker,
} from '@ant-design/pro-components';
import { Button, Col, Row } from 'antd';
import React from 'react';

const AddEditEvent: React.FC = () => {
  return (
    <>
      <ModalForm
        title="Create Event"
        modalProps={{
          width: 1000,
          destroyOnClose: true,
          styles: {
            body: { padding: '24px' },
            header: { borderBottom: '1px solid #f0f0f0', marginBottom: '24px' },
          },
        }}
        onFinish={async (values) => {
          console.log('Form Values:', values);

          // return true;
        }}
        trigger={<Button type="primary">Create Event</Button>}
        submitter={{
          searchConfig: {
            submitText: 'Save Details',
            resetText: 'Cancel',
          },
        }}
      >
        {/* Event Details */}
        <ProFormGroup>
          <Row gutter={[16, 8]}>
            <Col span={8}>
              <ProFormSelect
                name="category"
                label="Event Category"
                width={'md'}
                placeholder="Select category"
                options={[
                  { label: 'Sports', value: 'SPORTS' },
                  { label: 'Film', value: 'FILM' },
                  { label: 'Other', value: 'OTHER' },
                  { label: 'theatre', value: 'THEATRE' },
                  { label: 'Concerts', value: 'CONCERT' },
                  { label: 'Music', value: 'MUSIC' },
                ]}
                rules={[
                  { required: true, message: 'Please select event category' },
                ]}
              />
            </Col>
            <Col span={8}>
              <ProFormText
                name="name"
                width={'md'}
                label="Event Name"
                placeholder="Enter event name"
                rules={[{ required: true, message: 'Please enter event name' }]}
              />
            </Col>
            <Col span={8}>
              <ProFormSelect
                name="venueId"
                width={'md'}
                label="Venue"
                placeholder="Select venue"
                request={async (params) => {
                  try {
                    const data = await getAllVenues({ name: params.keywords });
                    return data?.getAllVenues?.venues.map((venue) => {
                      return { label: venue.name, value: venue.id };
                    });
                  } catch (e) {
                    console.log(e);
                    return false;
                  }
                }}
                rules={[{ required: true, message: 'Please select venue' }]}
              />
            </Col>
          </Row>
        </ProFormGroup>

        <ProFormGroup>
          <Row gutter={[16, 8]}>
            <Col span={8}>
              <ProFormDatePicker
                width={'md'}
                name="date"
                label="Date"
                rules={[{ required: true, message: 'Please select a date' }]}
              />
            </Col>
            <Col span={8}>
              <ProFormTimePicker.RangePicker
                name="timeRange"
                label="Event Time"
              />
            </Col>
            <Col span={8}>
              <ProFormTextArea
                name="description"
                width={'md'}
                label="Description"
                placeholder="Enter event description"
                rules={[
                  { required: true, message: 'Please enter description' },
                ]}
              />
            </Col>
          </Row>
        </ProFormGroup>

        {/* Ticket Types */}
        <ProFormGroup title="Configure Ticket Types" />

        <ProFormList
          name="tickets"
          alwaysShowItemLabel
          copyIconProps={false}
          creatorButtonProps={{
            creatorButtonText: 'Add Tickets Types',
          }}
          initialValue={[
            {
              ticketName: 'Regular',
              price: 250,
              quantity: 2000,
              section: 'wingA',
            },
          ]}
        >
          <ProFormGroup key="ticket">
            <ProFormText
              name="ticketName"
              label="Ticket Type"
              rules={[{ required: true, message: 'Enter ticket name' }]}
            />
            <ProFormDigit
              name="price"
              width="sm"
              label="Price"
              rules={[{ required: true, message: 'Enter price' }]}
            />
            <ProFormDigit
              name="quantity"
              label="Total Maximum Tickets"
              rules={[{ required: true, message: 'Enter ticket quantity' }]}
            />
            <ProFormSelect
              name="section"
              label="Venue Section"
              placeholder="Select section"
              width="xs"
              options={[
                { label: 'Wing A', value: 'wingA' },
                { label: 'Wing B', value: 'wingB' },
                { label: 'VIP', value: 'vip' },
              ]}
              rules={[{ required: true, message: 'Select section' }]}
            />
          </ProFormGroup>
        </ProFormList>
      </ModalForm>
    </>
  );
};

export default AddEditEvent;
