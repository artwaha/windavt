import { Form, Input, Typography, Select, Space, Button } from "antd";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataSourceContext, initialState, SelectedRowContext } from "../../App";
const { Text } = Typography;

const Edit = () => {
    let navigate = useNavigate()
    const { selectedRow, setSelectedRow } = useContext(SelectedRowContext)
    const { dataSource, setDataSource } = useContext(DataSourceContext)
    let user = selectedRow.selectedRow
    const [employmentId, setEmploymentId] = useState(user.employmentid)
    const [status, setStatus] = useState(user.status)
    const [firstName, setFirstName] = useState(user.firstname)
    const [lastName, setLastName] = useState(user.lastname)
    const [email, setEmail] = useState(user.email)

    const handleList = () => {
        setSelectedRow(initialState)
        navigate("/users")
    }

    const handleSave = () => {
        let index = selectedRow.selectedRow.key
        // 1. Make a shallow copy of the array
        let temp_state = [...dataSource];

        // 2. Make a shallow copy of the element you want to mutate
        let temp_element = {
            ...temp_state[index],
        };

        // 3. Update the property you're interested in
        temp_element = {
            ...temp_element,
            email: email,
            employmentid: employmentId,
            firstname: firstName,
            lastname: lastName,
            status: status
        }

        // // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
        temp_state[index] = temp_element;

        // // 5. Set the state to our new copy
        setDataSource(temp_state);
        navigate("/users")
        //Supposedly below
        // navigate("/user")
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleStatus = (e) => {
        setStatus(e)
    }

    const handleEmploymentId = (e) => {
        setEmploymentId(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    return (
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
                    <Text strong>Employment ID:</Text>
                </label>
                <Input onChange={handleEmploymentId} value={employmentId} />
            </div>
            <div className="details-form-item">
                <label>
                    <Text strong>Email:</Text>
                </label>
                <Input onChange={handleEmail} value={email} />
            </div>
            <div className="details-form-item">
                <label>
                    <Text strong>Status</Text>
                </label>
                <Select value={status} onChange={handleStatus}>
                    <Select.Option value="active">Active</Select.Option>
                    <Select.Option value="inactive">Inactive</Select.Option>
                </Select>
            </div>
            <div className="details-form-item-special">
                <Space>
                    <Button type="primary" onClick={handleList}>
                        List
                    </Button >
                    <Button type="primary" onClick={handleSave} >
                        Save
                    </Button>
                </Space>
            </div>
        </Form >
    );

    // return (
    //     <Form className="details-form" >
    //         <div className="details-form-item">
    //             <label className="form-label">
    //                 <Text strong>Full Name</Text>
    //             </label>
    //             <Input />
    //         </div>
    //         <div className="details-form-item">
    //             <label>
    //                 <Text strong>Employment ID</Text>
    //             </label>
    //             <Input />
    //         </div>
    //         <div className="details-form-item">
    //             <label>
    //                 <Text strong>Email</Text>
    //             </label>
    //             <Input />
    //         </div>
    //         <div className="details-form-item">
    //             <label>
    //                 <Text strong>Status</Text>
    //             </label>
    //             <Select>
    //                 <Select.Option value="admin">Admin</Select.Option>
    //                 <Select.Option value="user">User</Select.Option>
    //             </Select>
    //         </div>
    //         <div className="details-form-item">
    //             <Space>
    //                 <Button type="primary" onClick={handleSave} >
    //                     Save
    //                 </Button>
    //                 <Button type="primary" onClick={handleList}>
    //                     List
    //                 </Button >
    //             </Space>
    //         </div>
    //     </Form >
    // );
}

export default Edit