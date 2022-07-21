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
        name: "June.pdf",
        dateissued: `${new Date()}`,
    },
    {
        key: 2,
        sn: 2,
        name: "July.pdf",
        dateissued: `${new Date()}`,
    },
    {
        key: 3,
        sn: 3,
        name: "Aug.pdf",
        dateissued: `${new Date()}`,
    },
    {
        key: 4,
        sn: 4,
        name: "Sept.pdf",
        dateissued: `${new Date()}`,
    },
    {
        key: 5,
        sn: 5,
        name: "Oct.pdf",
        dateissued: `${new Date()}`,
    },
];

