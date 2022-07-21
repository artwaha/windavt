import { CheckOutlined } from "@ant-design/icons";
import { Button, Space, Tag } from "antd";
import { data } from "./graphdata";

function GraphTableActions() {
  return (
    <div className="action-group">
      <Tag color="#87d068" icon={<CheckOutlined />}>
        {data.length} records found
      </Tag>
      <div className="button-group">
        <Space>
          <Button size="small">Download</Button>
          {/* <Button size="small">Enable</Button>
          <Button size="small">Disable</Button> */}
        </Space>
      </div>
    </div>
  );
}

export default GraphTableActions;
