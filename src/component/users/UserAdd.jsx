import { Typography, Form, Input, Button, Select, Space, } from "antd";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataSourceContext } from "../../App";

const { Title, Text } = Typography;

const UserAdd = () => {
    let navigate = useNavigate()
    const { dataSource, setDataSource } = useContext(DataSourceContext)
    let lastIndex = dataSource[dataSource.length - 1]
    const [employmentId, setEmploymentId] = useState("")
    const [role, setRole] = useState("Select Role")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleRole = (e) => {
        setRole(e)
    }

    const handleEmploymentId = (e) => {
        setEmploymentId(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleReset = () => {
        setFirstName("");
        setRole("Select Role");
        setEmploymentId("");
        setEmail("");
        setLastName("");
    }

    const handleSave = () => {
        setDataSource([...dataSource, {
            key: lastIndex.key + 1,
            sn: lastIndex.sn + 1,
            firstname: firstName,
            lastname: lastName,
            employmentid: employmentId,
            email: email,
            startdate: `${new Date().getTime()}`,
            status: "inactive",
            role: role
        }])
        // navigate("/user")
        navigate("/users")
    }

    return (
        <div>
            <Title align="left" level={3}>
                Add User
            </Title>
            <Form className="details-form" >
                <div className="details-form-item">
                    <label className="form-label">
                        <Text strong>Firstname</Text>
                    </label>
                    <Input value={firstName} onChange={handleFirstName} />
                </div>
                <div className="details-form-item">
                    <label className="form-label">
                        <Text strong>Lastname</Text>
                    </label>
                    <Input value={lastName} onChange={handleLastName} />
                </div>
                <div className="details-form-item">
                    <label>
                        <Text strong>Role</Text>
                    </label>
                    <Select value={role} onChange={handleRole}>
                        <Select.Option value="admin">Admin</Select.Option>
                        <Select.Option value="user">User</Select.Option>
                    </Select>
                </div>
                <div className="details-form-item">
                    <label>
                        <Text strong>Employment ID</Text>
                    </label>
                    <Input value={employmentId} onChange={handleEmploymentId} />
                </div>
                <div className="details-form-item">
                    <label>
                        <Text strong>Email</Text>
                    </label>
                    <Input value={email} onChange={handleEmail} />
                </div>

                <div className="details-form-item-special">
                    <Space>
                        <Button onClick={handleReset}>
                            Reset
                        </Button >
                        <Button type="primary" onClick={handleSave} >
                            Save
                        </Button>
                    </Space>
                </div>
            </Form >
        </div >
    )
}

export default UserAdd