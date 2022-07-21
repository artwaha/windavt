import { useContext } from "react";
import { Table } from "antd";
import { columns } from "./userdata";
import { DataSourceContext, SelectedRowContext } from "../../App";

const UsersTable = () => {
  const { setSelectedRow } = useContext(SelectedRowContext)

  const { dataSource } = useContext(DataSourceContext)

  const rowSelection = {
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
    
    onSelect: (_, selected, selectedRows) => {
      setSelectedRow({
        selected: selected,
        selectedRow: selectedRows[0]
      })
    },
  };

  return (
    <div className="user-table">
      <Table
        rowSelection={{
          ...rowSelection,
        }}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
};

export default UsersTable;
