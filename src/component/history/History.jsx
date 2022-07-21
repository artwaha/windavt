import { Divider, Typography } from "antd";
import WindSummariesTable from "./WindSummariesTable";
import WindGraphsTable from "./WindGraphsTable";
import SearchForm from "./HistorySearchForm";
const { Title } = Typography;

function History() {
  return (
    <div className="layout-content site-layout-background">
      <Title align="left" level={3}>
        History
      </Title>
      <SearchForm />
      <div className="table-container">
        <Title align="left" level={5}>
          Wind Summaries
        </Title>
        <Divider />
        <WindSummariesTable />
      </div>
      <div className="table-container">
        <Title align="left" level={5}>
          Wind Graphs
        </Title>
        <Divider />
        <WindGraphsTable />
      </div>
    </div>
  );
}

export default History;
