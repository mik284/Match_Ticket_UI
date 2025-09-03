import showConfirm from '@/components/ModalConfirm';
import Notification from '@/components/Notification';
import { LockOutlined } from '@ant-design/icons';
import { ProForm, ProFormText } from '@ant-design/pro-components';
import { useSearchParams } from '@umijs/max';
import { Typography } from 'antd';
import { changePassword } from '../services/auth.api';
import bgImage from '/public/assets/images/football.jpg';
import logo from '/public/assets/images/icon.png';

const ChangePasswordPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="flex flex-1 overflow-hidden">
        {/* Left Side - Login Form */}
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-8 ">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="mb-6 text-center">
              <img
                src={logo}
                alt="Company Logo"
                className="mx-auto h-40 w-auto"
              />
              <Typography.Title level={3} className="mt-4 text-gray-800">
                Lango Pass
              </Typography.Title>
            </div>

            {/* Change Password Form */}
            <ProForm
              onFinish={async (values) => {
                console.log('Form values:', values);
                if (values.newPassword !== values.confirmPassword) {
                  return false; // Prevent submission if mismatch
                }
                const confirmed = await showConfirm({
                  title: 'Are you sure you want to reset your password?',
                });
                if (confirmed) {
                  try {
                    const response = await changePassword({
                      newPassword: values.newPassword,
                      token: searchParams.get('token'),
                    });
                    Notification({
                      type: 'success',
                      message: response?.createUser?.message,
                    });
                    console.log('response', response);
                    return true;
                  } catch (error) {
                    return false;
                  }
                }
              }}
              submitter={{
                searchConfig: { submitText: 'Change Password' },
                render: (_, dom) => dom[1],
                submitButtonProps: {
                  size: 'large',
                  style: {
                    width: '100%',
                    borderRadius: '8px',
                    height: '48px',
                    fontWeight: '600',
                    marginTop: '16px',
                  },
                },
              }}
            >
              <div className="space-y-6">
                {/* New Password Input */}
                <ProFormText.Password
                  name="newPassword"
                  fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined className="text-gray-400" />,
                  }}
                  placeholder="New Password"
                  label="New Password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your new password!',
                    },
                  ]}
                />

                {/* Confirm Password Input */}
                <ProFormText.Password
                  name="confirmPassword"
                  dependencies={['newPassword']}
                  fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined className="text-gray-400" />,
                  }}
                  placeholder="Confirm Password"
                  label="Confirm Password"
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('newPassword') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error('Passwords do not match!'),
                        );
                      },
                    }),
                  ]}
                />
              </div>

              {/* Terms of Service */}
              <div className="text-center text-xs text-gray-500 mt-8 mb-4">
                By signing in, you agree to Tracom Services Ltd&apos;s{' '}
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Privacy Policy
                </a>
              </div>
            </ProForm>
          </div>
        </div>

        {/* Right Side - Background Image with Overlay */}
        <div className="hidden lg:flex lg:w-full relative items-center justify-center">
          <img
            src={bgImage}
            alt="Background"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
