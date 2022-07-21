import SummariesSearchForm from "./SummariesSearchForm";
import { Divider, Typography } from "antd";
import SummariesTableActions from "./SummariesTableActions";
import SummariesTable from "./SummariesTable";
const { Title } = Typography;

function Summaries() {
  return (
    <div className="layout-content site-layout-background">
      <Title align="left" level={3}>
        Summaries
      </Title>
      <SummariesSearchForm />
      <div className="table-container">
        <SummariesTableActions />
        <Divider />
        <SummariesTable />
        <Divider />
      </div>
    </div>
  );
}

export default Summaries;
