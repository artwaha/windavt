import { Card, Statistic, Layout } from "antd";
import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

function Dashboard() {
  return (
    <Layout className="layout-content site-layout-background">
      <Title align="left" level={3}>
        Dashboard
      </Title>
      <div className="card-contaienr">
        <Card style={styles.card} bordered>
          <Statistic title="Active Users" value={112893} />
        </Card>
        <Card style={styles.card}>
          <Statistic title="Wind Graphs" value={10234} />
        </Card>
        <Card style={styles.card}>
          <Statistic title="Wind Summaries" value={12345} />
        </Card>
      </div>
    </Layout>
  );
}

// Styles
const styles = {
  card: {
    textAlign: "center",
    borderRadius: "10px",
    border: "1px solid lightgrey"
    // boxShadow: "10px 5px 10px 10px rgba(208, 216, 243, 0.6)",
  },
};

export default Dashboard;
