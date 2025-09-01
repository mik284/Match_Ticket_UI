import {
  DollarOutlined,
  EyeOutlined,
  TagOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Card, Col, Row, Table, Tag } from 'antd';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const EventDashboard = () => {
  // Revenue over time data
  const revenueData = [
    { month: 'J', value: 400 },
    { month: 'F', value: 500 },
    { month: 'M', value: 450 },
    { month: 'A', value: 600 },
    { month: 'M', value: 876 },
    { month: 'J', value: 300 },
    { month: 'J', value: 650 },
    { month: 'A', value: 750 },
    { month: 'S', value: 700 },
    { month: 'O', value: 600 },
    { month: 'N', value: 550 },
    { month: 'D', value: 500 },
  ];

  // Ticket sales pie chart data
  const ticketSalesData = [
    { name: 'Regular', value: 775, percentage: 63, color: '#52c41a' },
    { name: 'VVIP', value: 197, percentage: 16, color: '#1890ff' },
    { name: 'VIP', value: 110, percentage: 9, color: '#eb2f96' },
    { name: 'Complimentary', value: 98, percentage: 8, color: '#fa8c16' },
    { name: 'Early Bird', value: 24, percentage: 2, color: '#fadb14' },
  ];

  // Event attendance bar chart data
  const attendanceData = [
    { event: 'Event 1', attendance: 9000 },
    { event: 'Event 2', attendance: 7500 },
    { event: 'Event 3', attendance: 2500 },
    { event: 'Event 4', attendance: 1800 },
    { event: 'Event 5', attendance: 800 },
  ];

  // Ticket list data
  const ticketColumns = [
    {
      title: 'Ticket No.',
      dataIndex: 'ticketNo',
      key: 'ticketNo',
    },
    {
      title: 'Ticket Type',
      dataIndex: 'ticketType',
      key: 'ticketType',
      render: (type) => {
        const colors = {
          Regular: 'green',
          VVIP: 'blue',
          VIP: 'magenta',
        };
        return <Tag color={colors[type]}>{type}</Tag>;
      },
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => <span style={{ fontWeight: 'bold' }}>{price}</span>,
    },
    {
      title: 'Action',
      key: 'action',
      render: () => <Button type="link" icon={<EyeOutlined />} />,
    },
  ];

  const ticketData = [
    {
      key: '1',
      ticketNo: 'BA2345',
      ticketType: 'Regular',
      price: 'Kes 250',
    },
    {
      key: '2',
      ticketNo: 'BA2345',
      ticketType: 'VVIP',
      price: 'Kes 1500',
    },
    {
      key: '3',
      ticketNo: 'BA2345',
      ticketType: 'VIP',
      price: 'Kes 1000',
    },
  ];

  const StatCard = ({ title, value, icon, color = '#1890ff' }) => (
    <Card
      className="stat-card"
      style={{
        borderRadius: '12px',
        border: 'none',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div
            style={{ color: '#8c8c8c', fontSize: '14px', marginBottom: '8px' }}
          >
            {title}
          </div>
          <div
            style={{ fontSize: '24px', fontWeight: 'bold', color: '#262626' }}
          >
            {value}
          </div>
        </div>
        <div
          style={{
            backgroundColor: color,
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '20px',
          }}
        >
          {icon}
        </div>
      </div>
    </Card>
  );

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    if (percent < 0.05) return null; // Don't show label for very small slices
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize="12px"
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div
      style={{
        padding: '24px',
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
      }}
    >
      {/* Top Stats Cards */}
      <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
        <Col xs={24} sm={8}>
          <StatCard
            title="Total Attendance"
            value="1230"
            icon={<UserOutlined />}
            color="#fa8c16"
          />
        </Col>
        <Col xs={24} sm={8}>
          <StatCard
            title="Ticket Sold"
            value="1230"
            icon={<TagOutlined />}
            color="#fadb14"
          />
        </Col>
        <Col xs={24} sm={8}>
          <StatCard
            title="Revenue Collected"
            value="$1000"
            icon={<DollarOutlined />}
            color="#52c41a"
          />
        </Col>
      </Row>

      {/* Charts Row */}
      <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
        <Col xs={24} lg={12}>
          <Card
            title="Revenue Over Time"
            style={{
              borderRadius: '12px',
              border: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#8c8c8c' }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#8c8c8c' }}
                  tickFormatter={(value) => `${value}K`}
                />
                <Tooltip
                  formatter={(value) => [`${value}K`, 'Revenue']}
                  labelStyle={{ color: '#8c8c8c' }}
                  contentStyle={{
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#1890ff"
                  strokeWidth={3}
                  dot={{ fill: '#1890ff', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: '#1890ff', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card
            title="Ticket Sales"
            style={{
              borderRadius: '12px',
              border: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <Row>
              <Col span={12}>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={ticketSalesData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      innerRadius={40}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {ticketSalesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [value, 'Tickets']} />
                  </PieChart>
                </ResponsiveContainer>
                <div
                  style={{
                    textAlign: 'center',
                    marginTop: '-60px',
                    fontSize: '12px',
                    color: '#8c8c8c',
                  }}
                >
                  Total Value
                  <br />
                  <span
                    style={{
                      fontSize: '20px',
                      fontWeight: 'bold',
                      color: '#262626',
                    }}
                  >
                    1230
                  </span>
                </div>
              </Col>
              <Col span={12}>
                <div style={{ padding: '20px' }}>
                  {ticketSalesData.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '12px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div
                          style={{
                            width: '12px',
                            height: '12px',
                            backgroundColor: item.color,
                            borderRadius: '50%',
                            marginRight: '8px',
                          }}
                        ></div>
                        <span style={{ fontSize: '14px', color: '#262626' }}>
                          {item.name}
                        </span>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div
                          style={{
                            fontSize: '14px',
                            fontWeight: 'bold',
                            color: '#262626',
                          }}
                        >
                          {item.value}
                        </div>
                        <div style={{ fontSize: '12px', color: '#8c8c8c' }}>
                          {item.percentage}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* Bottom Row */}
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={12}>
          <Card
            title="Event Attendance"
            style={{
              borderRadius: '12px',
              border: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={attendanceData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="event"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#8c8c8c' }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#8c8c8c' }}
                  tickFormatter={(value) => `${value / 1000}K`}
                />
                <Tooltip
                  formatter={(value) => [value.toLocaleString(), 'Attendance']}
                  labelStyle={{ color: '#8c8c8c' }}
                  contentStyle={{
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  }}
                />
                <Bar
                  dataKey="attendance"
                  fill="#8884d8"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card
            title={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>List of Tickets</span>
                <Button type="link" style={{ color: '#fa8c16' }}>
                  See All
                </Button>
              </div>
            }
            style={{
              borderRadius: '12px',
              border: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <Table
              columns={ticketColumns}
              dataSource={ticketData}
              pagination={false}
              size="middle"
              style={{ marginTop: '16px' }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EventDashboard;
