import "../css/userList.css";


const UserList = ({userObj, onDelete, editUser}) => {
    return (
        <ul className="users-list">
            <div className="container">
                <li className="users">
                    <div className="info">
                        <span className="name">{userObj.first_name} {userObj.last_name}</span>
                        <span className="email">{userObj.email}</span>
                        <span className="birthday"><i className="fa-duotone fa-cake-candles"></i>{userObj.birthday}</span>
                    </div>
                    <div className="buttons">
                        <button onClick={() => onDelete(userObj.id)}>
                        Trash
                        </button>
                    </div>
                </li>
            </div>
        </ul>
    )
}

export default UserList