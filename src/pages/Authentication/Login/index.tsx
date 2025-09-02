import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { ProForm, ProFormText } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Typography } from 'antd';
import bgImage from '/public/assets/images/football.jpg';
import logo from '/public/assets/images/icon.png';

const LoginPage = () => {
  const { initialState, setInitialState } = useModel('@@initialState');

  // const { run, loading: isPending } = useRequest(loginUser, {
  //   manual: true,
  //   onSuccess: async (data) => {
  //     await setInitialState({
  //       ...initialState,
  //       currentUser: data?.user,
  //     })
  //     message.success(`Welcome back, ${data?.user?.name}!`);
  //     history.push('/dashboard');
  //   },
  //   onError: (error: any) => {
  //     if (error.response?.status === 401) {
  //       message.error('Invalid username or password');
  //     } else if (error.response?.status === 403) {
  //       message.error('Invalid company code');
  //     } else {
  //       message.error('Login failed. Please try again later.');
  //     }
  //   },
  // });

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

            {/* Login Form */}
            <ProForm
              onFinish={async (values) => {
                try {
                  return true;
                } catch (error) {
                  return false;
                }
              }}
              submitter={{
                searchConfig: { submitText: 'Sign In' },

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
                  loading: false,
                },
              }}
            >
              <div className="space-y-6">
                {/* Username Input */}
                <ProFormText
                  name="username"
                  initialValue="michael@gmail.com"
                  fieldProps={{
                    size: 'large',
                    prefix: <UserOutlined className="text-gray-400" />,
                  }}
                  placeholder="Username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Username!',
                    },
                  ]}
                />

                {/* Password Input */}
                <ProFormText.Password
                  name="password"
                  initialValue="Kinuthia#98"
                  fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined className="text-gray-400" />,
                  }}
                  placeholder="Password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
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
        <div className="hidden lg:flex lg:w-full  relative items-center justify-center">
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

export default LoginPage;
