import { Table } from "antd";
import { columns } from "./ChosenFiles";

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};

const ChosenFilesTable = ({ files }) => {
  let wd = [...files.wd]
  let ws = [...files.ws]

  let data = ws.map((file, index) => {
    return {
      key: index + 1,
      sn: index + 1,
      wd: wd[index].name,
      ws: file.name,
    }
  })

  return (
    <div>
      {
        wd.length <= 0 || ws.length <= 0 ? <Table
          rowSelection={{
            ...rowSelection,
          }}
          columns={columns}
          dataSource={null}
        /> : <Table
          rowSelection={{
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
        />
      }
    </div>
  );
};

export default ChosenFilesTable;
