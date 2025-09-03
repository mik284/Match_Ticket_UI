import { notification } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps {
  type: NotificationType;
  message: string;
  description?: string;
  duration?: number;
  onClick?: () => void;
}

const Notification = ({
  type,
  message,
  description,
  duration,
  onClick,
}: NotificationProps) => {
  notification[type]({
    message: message,
    description: description,
    duration: duration || 4.5,
    onClick: onClick,
    style: {
      cursor: 'pointer',
    },
  });
};

export default Notification;
