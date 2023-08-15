
function createData(
    id,
    username,
    img,
    status,
    email,
    age
) {
    return { id, username, img, status, email, age };
}



export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'user', headerName: 'User', width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImage">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            )
        }
    },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'age', headerName: 'Age', width: 100 },
    {
        field: 'status', headerName: 'Status', width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },

]
export const userRows = [
    createData(1, 'razer blade', "https://xsgames.co/randomusers/assets/avatars/male/63.jpg", "active", "March@gna.com", 20),
    createData(2, 'razer blade', "https://xsgames.co/randomusers/assets/avatars/male/63.jpg", "active", "MJunech@gna.com", 20),
    createData(3, 'razer blade', "https://xsgames.co/randomusers/assets/avatars/male/63.jpg", "passive", "March@gna.com", 20),
    createData(4, 'razer blade', "https://xsgames.co/randomusers/assets/avatars/male/63.jpg", "pending", "March@gna.com", 20),
    createData(5, 'razer blade', "https://xsgames.co/randomusers/assets/avatars/male/63.jpg", "active", "March@gna.com", 20),
    createData(6, 'razer blade', "https://xsgames.co/randomusers/assets/avatars/male/63.jpg", "active", "March@gna.com", 20),
    createData(7, 'razer blade', "https://xsgames.co/randomusers/assets/avatars/male/63.jpg", "pending", "March@gna.com", 20),

];