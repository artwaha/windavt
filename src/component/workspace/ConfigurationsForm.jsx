import { Form, Input, Button, Space, Select } from "antd";
import { Typography } from "antd";
import { useState } from "react";
const { Text } = Typography;

const ConfigurationsForm = ({ handleSubmit }) => {

  const [stationName, setStationName] = useState("")
  const [timeAverage, setTimeAverage] = useState("Select Time Average")

  const handleStationName = (e) => {
    setStationName(e.target.value);
  }

  const handleTimeAverage = (e) => {
    setTimeAverage(e);
  }

  const handleReset = () => {
    setStationName("");
    setTimeAverage("Select Time Average");
  }

  return (
    <Form className="search-form item-collapse">
      <div className="form-item">
        <label className="form-label">
          <Text strong>Station Name</Text>
        </label>
        <Input value={stationName} onChange={handleStationName} />
      </div>
      <div className="form-item">
        <label className="form-label">
          <Text strong>Time Average</Text>
        </label>
        <Select value={timeAverage} onChange={handleTimeAverage}>
          <Select.Option value="5 Years" >5 Years</Select.Option>
          <Select.Option value="10 Years">10 Years</Select.Option>
          <Select.Option value="15 Years">15 Years</Select.Option>
          <Select.Option value="20 Years">20 Years</Select.Option>
        </Select>
      </div>

      <div className="form-item config-form-item-special">
        <Space>
          <Button onClick={handleReset} htmlType="reset" >
            Reset
          </Button>
          <Button onClick={handleSubmit} type="primary" htmlType="submit">
            Submit
          </Button>
        </Space>
      </div>
    </Form>
  );
};

export default ConfigurationsForm;
