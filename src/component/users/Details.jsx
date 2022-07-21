import { Form, Input, Typography, Space, Button } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { initialState, SelectedRowContext } from "../../App";
const { Text } = Typography;

const Details = () => {
  let { selectedRow, setSelectedRow } = useContext(SelectedRowContext)
  let user = selectedRow.selectedRow
  let navigate = useNavigate()

  const handleList = () => {
    setSelectedRow(initialState)
    navigate("/users")
  }

  return (
    <Form className="details-form" >
      <div className="details-form-item">
        <label className="form-label">
          <Text strong>Full Name:</Text>
        </label>
        <Input disabled value={user.firstname + " " + user.lastname} />
      </div>
      <div className="details-form-item">
        <label>
          <Text strong>Employment ID:</Text>
        </label>
        <Input disabled value={user.employmentid} />
      </div>
      <div className="details-form-item">
        <label>
          <Text strong>Email:</Text>
        </label>
        <Input disabled value={user.email} />
      </div>
      <div className="details-form-item">
        <label>
          <Text strong>Status:</Text>
        </label>
        <Input disabled value={user.status} />
      </div>
      <div className="details-form-item">
        <Space>
          <Button type="primary" onClick={handleList}>
            List
          </Button >
        </Space>
      </div>
    </Form >
  );
}

export default Details