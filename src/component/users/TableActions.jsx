import { Button, Space, Tag, Modal } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { data } from "./userdata";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataSourceContext, SelectedRowContext } from "../../App";

const TableActions = () => {
  const { selectedRow } = useContext(SelectedRowContext)
  const { dataSource, setDataSource } = useContext(DataSourceContext)
  let navigate = useNavigate();


  const handleAdd = () => {
    navigate("/add")
  }

  const handleEnable = () => {
    if (!selectedRow.selected) {
      Modal.error({
        title: 'Error',
        content: 'No Selected Row',
      })
    } else {
      // let index = dataSource.find((item) => item.key === selectedRow.selectedRow.key);
      let index = selectedRow.selectedRow.key

      if (selectedRow.selectedRow.status === "inactive") {
        // 1. Make a shallow copy of the array
        let temp_state = [...dataSource];

        // 2. Make a shallow copy of the element you want to mutate
        let temp_element = {
          ...temp_state[index],
        };

        // 3. Update the property you're interested in
        temp_element.status = "active";

        // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
        temp_state[index] = temp_element;

        // 5. Set the state to our new copy
        setDataSource(temp_state);
      } else {
        Modal.error({
          title: 'Error',
          content: 'User already enabled',
        })
      }
    }
  }

  const handleDisable = () => {
    if (!selectedRow.selected) {
      Modal.error({
        title: 'Error',
        content: 'No Selected Row',
      })
    } else {
      // let index = dataSource.find((item) => item.key === selectedRow.selectedRow.key);
      let index = selectedRow.selectedRow.key;

      if (selectedRow.selectedRow.status === "active") {
        // 1. Make a shallow copy of the array
        let temp_state = [...dataSource];

        // 2. Make a shallow copy of the element you want to mutate
        let temp_element = {
          ...temp_state[index],
        };

        // 3. Update the property you're interested in
        temp_element.status = "inactive";

        // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
        temp_state[index] = temp_element;

        // 5. Set the state to our new copy
        setDataSource(temp_state);
      } else {
        Modal.error({
          title: 'Error',
          content: 'User already disabled',
        })
      }
    }
  }


  const handleDetails = () => {
    if (!selectedRow.selected) {
      Modal.error({
        title: 'Error',
        content: 'No Selected Row',
      })
    } else {
      navigate("/user")
    }
  }

  return (
    <div className="action-group">
      <Tag color="#87d068" icon={<CheckOutlined />}>
        {data.length} records found
      </Tag>
      <div className="button-group">
        <Space>
          <Button size="small" onClick={handleDetails}>Details</Button>
          <Button size="small" onClick={handleAdd}>Add</Button>
          <Button size="small" onClick={handleEnable}>Enable</Button>
          <Button size="small" onClick={handleDisable}>Disable</Button>
        </Space>
      </div>
    </div>
  );
}

export default TableActions;
