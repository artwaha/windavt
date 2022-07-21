import { Form, Input, Select, DatePicker, Button, Space } from "antd";
import { Typography } from "antd";
import { useState } from "react";
const { Text } = Typography;
const { RangePicker } = DatePicker;

export const UserSearchForm = () => {
  const [name, setName] = useState("")
  const [employmentId, setEmploymentId] = useState("")
  const [fromDate, setFromDate] = useState("")
  const [toDate, setToDate] = useState("")
  const [role, setRole] = useState("Select Role")
  

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleRole = (e) => {
    setRole(e)
  }

  const handleDate = (date, dateString) => {
    setToDate(dateString[1])
    setFromDate(dateString[0])
  }

  const handleEmploymentId = (e) => {
    setEmploymentId(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Name: " + name);
    console.log("Employment Id: " + employmentId);
    console.log("From Date: " + fromDate);
    console.log("To Date: " + toDate);
    console.log("Role: " + role);
  }

  const handleReset = () => {
    setName("");
    setRole("Select Role");
    setEmploymentId("");
    setFromDate("");
    setToDate("");
  }

  return (
    <Form className="search-form" >
      <div className="form-item">
        <label className="form-label">
          <Text strong>Name</Text>
        </label>
        <Input value={name} onChange={handleName} />
      </div>
      <div className="form-item">
        <label>
          <Text strong>Employment ID</Text>
        </label>
        <Input value={employmentId} onChange={handleEmploymentId} />
      </div>

      <div className="form-item">
        <label className="form-label">
          <Text strong>Role</Text>
        </label>
        <Select value={role} onChange={handleRole} >
          <Select.Option value="admin">Admin</Select.Option>
          <Select.Option value="user">User</Select.Option>
        </Select>
      </div>
      <div className="form-item">
        <label>
          <Text strong>Range</Text>
        </label>
        <RangePicker onChange={handleDate} />
      </div>
      <div className="form-item config-form-item-special">
        <Space>
          <Button onClick={handleReset}>
            Reset
          </Button>
          <Button type="primary" htmlType="submit" onClick={handleSearch} >
            Search
          </Button >
        </Space>
      </div>
    </Form >
  );
};
