import { Tabs, Typography } from 'antd';
import { useNavigate, Outlet } from "react-router-dom";

const { TabPane } = Tabs;
const { Title } = Typography;

const UserTabs = () => {
    let navigate = useNavigate();

    const onChange = (key) => {
        switch (key) {
            case '1':
                navigate('/user')
                break;
            case '2':
                navigate('/user/edit')
                break;
            default:
                break;
        }
    };
    return (
        <>
            <Title align="left" level={3}>
                User: Sherlock Holmes
            </Title>
            <Tabs onChange={onChange} type="card" >
                <TabPane tab="Details" key="1">
                    <Outlet />
                </TabPane>
                <TabPane tab="Edit" key="2">
                    <Outlet />
                </TabPane>
            </Tabs>
        </>
    )
}

export default UserTabs