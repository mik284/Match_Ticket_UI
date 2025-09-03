import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

const { confirm } = Modal;

const showConfirm = (props) => {
  return new Promise((resolve, reject) => {
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: props.title,
      okButtonProps: { style: { backgroundColor: '#D48806' } },
      okText: 'Yes',
      onOk() {
        resolve(true);
      },
      onCancel() {
        resolve(false);
      },
    });
  });
};

export default showConfirm;
