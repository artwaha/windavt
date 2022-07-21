import { GraphsSearchForm } from "./GraphsSearchForm";
import { Divider, Typography } from "antd";
import GraphTableActions from "./GraphTableActions";
import GraphsTable from "./GraphsTable";

const { Title } = Typography;

function Graphs() {
  return (
    <div className="layout-content site-layout-background temp">
      <Title align="left" level={3}>
        Graphs
      </Title>
      <GraphsSearchForm />
      <div className="table-container">
        <GraphTableActions />
        <Divider />
        <GraphsTable />
        <Divider />
      </div>
    </div>
  );
}

export default Graphs;
