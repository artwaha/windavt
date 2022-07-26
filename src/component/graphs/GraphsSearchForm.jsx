import { Form, Input, DatePicker, Button, Space } from "antd";
import { Typography } from "antd";
import { useState } from "react";
const { Text } = Typography;

export const GraphsSearchForm = () => {
  const [generatedBy, setGeneratedBy] = useState("")
  const [fromDate, setFromDate] = useState("")
  const [toDate, setToDate] = useState("")

  const handleGeneratedBy = (e) => {
    setGeneratedBy(e.target.value)
  }

  const handleFromDate = (date, dateString) => {
    setFromDate(dateString)
  }

  const handleToDate = (date, dateString) => {
    setToDate(dateString)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Generated By: " + generatedBy);
    console.log("From Date: " + fromDate);
    console.log("To Date: " + toDate);
  }

  const handleReset = () => {
    setGeneratedBy("")
    setFromDate("");
    setToDate("");
  }

  return (
    <Form className="search-form">
      <div className="form-item">
        <label>
          <Text strong>From Date</Text>
        </label>
        <DatePicker onChange={handleFromDate} />
      </div>

      <div className="form-item">
        <label className="form-label">
          <Text strong>To Date</Text>
        </label>
        <DatePicker onChange={handleToDate} />
      </div>

      <div className="form-item">
        <label className="form-label">
          <Text strong>Generated By</Text>
        </label>
        <Input value={generatedBy} onChange={handleGeneratedBy} />
      </div>

      <div className="form-item-special">
        <Space>
          <Button onClick={handleReset} >
            Reset
          </Button>
          <Button type="primary" htmlType="submit" onClick={handleSearch}>
            Search
          </Button>
        </Space>
      </div>
    </Form>
  );
};

// export default () => <GraphsSearchForm />;
