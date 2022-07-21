import { Layout, Menu } from "antd";
import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { initialState, SelectedRowContext } from "../App";
const { Header, Content, Sider } = Layout;

const navItems = ['Home', 'Dashboard', 'Users', 'Graphs', 'Summaries', 'Workspace', 'History'].map((item, key) => ({
  key,
  label: item,
}));

export const LayoutWrapper = () => {
  const { setSelectedRow } = useContext(SelectedRowContext)

  let navigate = useNavigate();

  const handleMenuItems = (menu) => {
    switch (menu.key) {
      case '0':
        // setSelectedRow(initialState)
        navigate('/')
        break;
      case '1':
        // setSelectedRow(initialState)
        navigate('/dashboard')
        break;
      case '2':
        setSelectedRow(initialState)
        navigate('/users')
        break;
      case '3':
        // setSelectedRow(initialState)
        navigate('/graphs')
        break;
      case '4':
        // setSelectedRow(initialState)
        navigate('/summaries')
        break;
      case '5':
        // setSelectedRow(initialState)
        navigate('/workspace')
        break;
      case '6':
        // setSelectedRow(initialState)
        navigate('/history')
        break;
      default:
        break;
    }
  }

  return (
    <Layout className="container">
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout className="main-content">
        <Sider width={250} className="layout-sider site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['0']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={navItems}
            onClick={handleMenuItems}
          />
        </Sider>

        <Layout
          // className="color-three"
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            className="site-layout-background "
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default LayoutWrapper;
