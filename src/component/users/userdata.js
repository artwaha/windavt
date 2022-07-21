export const columns = [
    {
        title: "S/N",
        dataIndex: "sn",
    },
    {
        title: "Firstname",
        dataIndex: "firstname",
    },
    {
        title: "Lastname",
        dataIndex: "lastname",
    },
    {
        title: "Employment ID",
        dataIndex: "employmentid",
    },
    {
        title: "Email",
        dataIndex: "email",
    },
    {
        title: "Start Date",
        dataIndex: "startdate",
    },
    {
        title: "Status",
        dataIndex: "status",
    },
    {
        title: "Role",
        dataIndex: "role",
    },
];

export const data = [
    {
        key: 0,
        sn: 1,
        firstname: "Sherlock",
        lastname: "Holmes",
        employmentid: `TMA001`,
        email: "sholmes@yahoo.co.uk",
        startdate: `${new Date().getTime()}`,
        status: "inactive",
        role: "user"
    },
    {
        key: 1,
        sn: 2,
        firstname: "James",
        lastname: "Bond",
        employmentid: `TMA002`,
        email: "jbond@yahoo.co.uk",
        startdate: `${new Date().getTime()}`,
        status: "inactive",
        role: "user"
    },

    {
        key: 2,
        sn: 3,
        firstname: "John",
        lastname: "Doe",
        employmentid: `TMA003`,
        email: "johndoe@yahoo.co.uk",
        startdate: `${new Date().getTime()}`,
        status: "inactive",
        role: "user"
    },

    {
        key: 3,
        sn: 4,
        firstname: "Jane",
        lastname: "Doe",
        employmentid: `TMA004`,
        email: "janedoe@yahoo.co.uk",
        startdate: `${new Date().getTime()}`,
        status: "inactive",
        role: "user"
    },
];

