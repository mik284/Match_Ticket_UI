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

const CreateEventForm = () => {
  const eventCategories = [
    { label: 'Sport', value: 'Sport' },
    { label: 'Music', value: 'Music' },
    { label: 'Conference', value: 'Conference' },
    { label: 'Theater', value: 'Theater' },
    { label: 'Comedy', value: 'Comedy' },
    { label: 'Festival', value: 'Festival' },
    { label: 'Workshop', value: 'Workshop' },
    { label: 'Networking', value: 'Networking' },
  ];

  const venues = [
    { label: 'Kasarani Stadium', value: 'Kasarani Stadium' },
    { label: 'KICC', value: 'KICC' },
    {
      label: 'Kenyatta International Conference Centre',
      value: 'Kenyatta International Conference Centre',
    },
    { label: 'Carnivore Grounds', value: 'Carnivore Grounds' },
    { label: 'Uhuru Gardens', value: 'Uhuru Gardens' },
    { label: 'Nairobi National Museum', value: 'Nairobi National Museum' },
  ];

  const sections = [
    { label: 'Wing A', value: 'Wing A' },
    { label: 'Wing B', value: 'Wing B' },
    { label: 'VIP Section', value: 'VIP Section' },
    { label: 'Regular Section', value: 'Regular Section' },
    { label: 'Balcony', value: 'Balcony' },
    { label: 'Ground Floor', value: 'Ground Floor' },
  ];

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
        initialValues={{
          category: 'Sport',
          eventName: 'Gor Mahia vs AFC Leopards',
          description: 'The fiercest rivalry returns. Experienc...',
          venue: 'Kasarani Stadium',
          ticketTypes: [
            {
              name: 'Regular',
              price: 'Kes 250',
              quantity: '2000',
              section: 'Wing A',
            },
          ],
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
              <ProFormText
                name="venueName"
                width={'md'}
                label={'Geographical Location'}
                placeholder="Enter Venue Geographical Location"
                rules={[
                  { required: true, message: 'Please enter Venue Location' },
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
                name="venue"
                label={'Venue Capacity'}
                placeholder="Add Venue Capacity"
                rules={[
                  { required: true, message: 'Please add venue capacity' },
                ]}
              />
            </Col>
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

        <Divider style={{ margin: '32px 0 24px 0' }} />

        {/* Configure Ticket Types using ProFormList */}
        <ProFormList
          name="ticketTypes"
          label="Configure Sections"
          min={1}
          copyIconProps={false}
          alwaysShowItemLabel
          creatorButtonProps={{
            creatorButtonText: 'Add Tickets Types',
            icon: <PlusOutlined />,
            type: 'dashed',
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

export default CreateEventForm;
