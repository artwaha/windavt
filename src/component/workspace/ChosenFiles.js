export const columns = [
    {
        title: "S/N",
        dataIndex: "sn",
    },
    {
        title: "Wind Direction",
        dataIndex: "wd",
        render: (text) => <a href="#home">{text}</a>,
    },
    {
        title: "Wind Speed",
        dataIndex: "ws",
        render: (text) => <a href="#home">{text}</a>,
    },
];

