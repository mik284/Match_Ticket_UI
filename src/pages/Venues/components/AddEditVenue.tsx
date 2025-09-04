import LocationPicker from '@/components/LocationPicker';
import { PlusOutlined } from '@ant-design/icons';
import {
  ModalForm,
  ProFormDigit,
  ProFormGroup,
  ProFormList,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  ProFormUploadButton,
} from '@ant-design/pro-components';
import { Button, Col, Divider, message, Row } from 'antd';

const AddEditVenue = () => {
  const handleSubmit = async (values) => {
    console.log('Form values:', values);
    message.success('Event created successfully!');
    return true;
  };

  return (
    <>
      <ModalForm
        trigger={<Button type="primary">Create Venue</Button>}
        title="Create Venue"
        width={1000}
        onFinish={handleSubmit}
        modalProps={{
          destroyOnClose: true,
          centered: true,
          styles: {
            body: { padding: '24px' },
            header: { borderBottom: '1px solid #f0f0f0', marginBottom: '24px' },
          },
        }}
        submitter={{
          searchConfig: {
            submitText: 'Save Details',
            resetText: 'Cancel',
          },
          submitButtonProps: {
            style: {
              backgroundColor: '#fa8c16',
              borderColor: '#fa8c16',
              borderRadius: '6px',
              padding: '0 24px',
            },
          },
          resetButtonProps: {
            style: {
              borderColor: '#fa8c16',
              color: '#fa8c16',
              borderRadius: '6px',
              padding: '0 24px',
            },
          },
        }}
      >
        {/* Basic Event Information */}
        <ProFormGroup>
          <Row gutter={[16, 8]}>
            <Col span={8}>
              <ProFormText
                name="venueName"
                width={'md'}
                label={'Name of Venue'}
                placeholder="Enter event name"
                rules={[{ required: true, message: 'Please enter Venue name' }]}
              />
            </Col>
            <Col span={8}>
              <ProFormText
                name="town"
                width={'md'}
                label={'Town/City'}
                placeholder="Enter Town/City name"
                rules={[
                  { required: true, message: 'Please enter Town/City name' },
                ]}
              />
            </Col>
            <Col span={8}>
              <ProFormDigit
                width={'md'}
                name="venue"
                label={'Venue Capacity'}
                placeholder="Add Venue Capacity"
                rules={[
                  { required: true, message: 'Please add venue capacity' },
                ]}
              />
            </Col>
          </Row>
        </ProFormGroup>

        <ProFormGroup style={{ marginTop: '16px' }}>
          <Row gutter={[16, 8]}>
            <Col span={8}>
              <ProFormDigit
                width={'md'}
                name="numberOfGates"
                label={'Number of gates'}
                placeholder="Number of gates"
                rules={[
                  { required: true, message: 'Please add number of gates' },
                ]}
              />
            </Col>
            <Col span={8}>
              <ProFormUploadButton
                name="venueImage"
                width={'md'}
                label="Upload Venue Image"
                title="Click to upload"
              />
            </Col>
            <Col span={8}>
              <ProFormSelect
                width={'md'}
                name="accessibility"
                label="Accesibility"
                options={[
                  { label: 'Wheelchair Accessible', value: 'wheelchair' },
                  { label: 'Restroom', value: 'restroom' },
                  { label: 'Fire Exit', value: 'fireExit' },
                  { label: 'First Aid', value: 'firstAid' },
                ]}
                placeholder="Select Accessibility options"
                rules={[
                  { required: true, message: 'Please select accessibility' },
                ]}
                mode="multiple"
              />
            </Col>
            <Col span={8}>
              <ProFormSwitch
                label={'Parking available?'}
                name="parkingAvailable"
                width={'md'}
                checkedChildren="Yes"
                unCheckedChildren="No"
              />
            </Col>
          </Row>
        </ProFormGroup>

        <LocationPicker />

        <Divider style={{ margin: '32px 0 24px 0' }} />

        {/* Configure Ticket Types using ProFormList */}
        <ProFormList
          name="ticketTypes"
          label="Configure Sections"
          copyIconProps={false}
          alwaysShowItemLabel
          creatorButtonProps={{
            creatorButtonText: 'Add Tickets Types',
            icon: <PlusOutlined />,
            type: 'dashed',
          }}
        >
          <Row gutter={16}>
            <Col span={8}>
              <ProFormText
                width={'md'}
                name="name"
                label={<span>Section Name</span>}
                placeholder="Enter Section name"
                rules={[
                  { required: true, message: 'Please enter section name' },
                ]}
              />
            </Col>
            <Col span={8}>
              <ProFormDigit
                name="capacity"
                width={'md'}
                label={<span>Capacity</span>}
                placeholder="Enter Capacity"
                rules={[
                  { required: true, message: 'Please enter section capacity' },
                ]}
              />
            </Col>
            <Col span={8}>
              <ProFormDigit
                name="gate"
                width={'md'}
                label={<span>Entry Gate Number/Name</span>}
                placeholder="Main Gate"
                rules={[{ required: true, message: 'Please enter gate' }]}
              />
            </Col>
          </Row>
        </ProFormList>
      </ModalForm>
    </>
  );
};

export default AddEditVenue;
