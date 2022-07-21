import { Divider, Typography } from "antd";
import { UserSearchForm } from "./UserSearchForm";
import UsersTable from "./UsersTable";
import TableActions from "./TableActions";

const { Title } = Typography;

const Users = () => {
  return (
    <div className="layout-content site-layout-background">
      <Title align="left" level={3}>
        Users
      </Title>
      <UserSearchForm />
      <div className="table-container">
        <TableActions />
        <Divider />
        <UsersTable />
        <Divider />
      </div>
    </div>);
}

export default Users;