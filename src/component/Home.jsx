import { Layout, } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

function Home() {
  return (
    <Layout className="layout-content site-layout-background">
      <Title align="left" level={3}>
        Welcome, Sherlock Holmes
      </Title>
    </Layout>
  );
}

export default Home;
