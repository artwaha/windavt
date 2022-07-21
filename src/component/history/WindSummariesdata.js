export const columns = [
    {
        title: "S/N",
        dataIndex: "sn",
    },
    {
        title: "Name",
        dataIndex: "name",
        render: (text) => <a href="#home">{text}</a>,
    },
    {
        title: "Date Issued",
        dataIndex: "dateissued",
    },
];

export const data = [
    {
        key: 1,
        sn: 1,
        name: "Jan.csv",
        dateissued: `${new Date()}`,
    },
    {
        key: 2,
        sn: 2,
        name: "Feb.csv",
        dateissued: `${new Date()}`,
    },
    {
        key: 3,
        sn: 3,
        name: "March.csv",
        dateissued: `${new Date()}`,
    },
    {
        key: 4,
        sn: 4,
        name: "April.csv",
        dateissued: `${new Date()}`,
    },
    {
        key: 5,
        sn: 5,
        name: "May.csv",
        dateissued: `${new Date()}`,
    },
];

