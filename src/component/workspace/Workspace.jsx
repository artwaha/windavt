import React, { useState } from "react";
import { Button, Collapse, Typography, Card, Alert, Modal } from "antd";
import ChosenFilesTable from "./ChosenFilesTable";
import { DownloadOutlined } from "@ant-design/icons";
import ConfigurationsForm from "./ConfigurationsForm";
const { Panel } = Collapse;

const { Title } = Typography;

function Workspace() {
  const [winddirection, setWinddirection] = useState([]);
  const [windspeed, setWindspeed] = useState([]);
  const [files, setFiles] = useState({ wd: [], ws: [] });
  const [submitted, setsubmitted] = useState(false)

  const handleSubmit = (e) => {
    if (winddirection.length !== windspeed.length) {
      Modal.error({
        title: 'Error',
        content: 'Unequal number of wind direction and wind speed files!',
      });
    } else {
      e.preventDefault();
      setsubmitted(true);
      console.log(winddirection);
      console.log(windspeed);
      console.log(files);
    }
  }

  const handleWinddirection = (e) => {
    setsubmitted(false);
    setWinddirection(e.target.files);
    setFiles({ ...files, wd: e.target.files });
  }

  const handleWindspeed = (e) => {
    setsubmitted(false);
    setWindspeed(e.target.files);
    setFiles({ ...files, ws: e.target.files });
  }

  return (
    <div className="layout-content site-layout-background">
      <Title align="left" level={3}>
        Workspace
      </Title>

      {/* Files choser */}
      <div className="workspace-container">
        <Card title="Wind Direction" bordered={true} className="card-item">
          <input
            type="file"
            multiple
            onChange={handleWinddirection}
          />
        </Card>

        <Card title="Wind Speed" bordered={true} className="card-item">
          <input
            type="file"
            multiple
            onChange={handleWindspeed}
          />
        </Card>

        {/* Dropdown Menu/ Collapse */}
        {
          winddirection.length !== windspeed.length ? <Alert className="item-collapse warning-alert" message="Warning: The number of Wind Direction and Wind Speed Files must be equal" type="warning" /> :
            <Collapse
              className="item-collapse"
              style={{ backgroundColor: "white" }}
            >
              <Panel header="View Chosen Files" key="1">
                <ChosenFilesTable files={files} />
              </Panel>
            </Collapse>
        }

        {/* Form */}

        <ConfigurationsForm handleSubmit={handleSubmit} />

        {/* Results */}

        {submitted &&
          <Card title="Cliamte Summary" bordered={true} className="card-item">
            <Button type="primary" icon={<DownloadOutlined />} onClick={handleSubmit}>
              Download
            </Button>
          </Card>}

        {submitted &&
          <Card title="Wind Graphs" bordered={true} className="card-item">
            <Button type="primary" icon={<DownloadOutlined />}>
              Download
            </Button>
          </Card>
        }
      </div>
    </div>
  );
}

export default Workspace;
