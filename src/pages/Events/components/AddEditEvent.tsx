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
import React, { useState } from 'react';

const AddEditEvent: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Create Event
      </Button>

      <ModalForm
        title="Create Event"
        open={open}
        modalProps={{
          width: 1000,
          destroyOnClose: true,
          onCancel: () => setOpen(false),
          styles: {
            body: { padding: '24px' },
            header: { borderBottom: '1px solid #f0f0f0', marginBottom: '24px' },
          },
        }}
        onFinish={async (values) => {
          console.log('Form Values:', values);
          setOpen(false);
          return true;
        }}
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
                  { label: 'Sport', value: 'sport' },
                  { label: 'Music', value: 'music' },
                  { label: 'Conference', value: 'conference' },
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
                name="venue"
                width={'md'}
                label="Venue"
                placeholder="Select venue"
                options={[
                  { label: 'Kasarani Stadium', value: 'kasarani' },
                  { label: 'Nyayo Stadium', value: 'nyayo' },
                ]}
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
