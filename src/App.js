import { useEffect, useState } from 'react';
import './App.css';
import getAllUsers from './Services/getAllUsers';
import UserForm from './Components/UserForm';
import UserList from './Components/UserList';
import createNewUser from './Services/createNewUser';
import deleteUser from './Services/deleteUser';

function App() {

  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState({})
  const [deleteId, setDeleteId] = useState('')
  const [edit, setEdit] = useState(null)
  

  useEffect(() => {
    getAllUsers()
    .then((res) => {
      setUsers(res.data)
      
    })
  }, [])

  useEffect(() => {
    if (newUser.first_name) {
      createNewUser(newUser)
      .then((res) => {
        setUsers([res, ...users])
        setNewUser({})
      })
    } else {
      console.log('No hay nuevos usuarios')
    }
  }, [newUser, users])

  const filterUser = (id) => {
    const newArr = users.filter((user) => id !== user.id)
    return newArr
  }

  useEffect(() => {
    if(deleteId) {
      deleteUser(deleteId)
      .then(() => {
        setUsers(filterUser(deleteId))
      })
    }
  }, [deleteId, filterUser])

  

  const handlerOnCreateUser = (e) => {
    setNewUser(e)
  }

  const handlerOnDelete = (id) => {
    setDeleteId(id)
  }

  const handlerOnEdit = (user) => {
    setEdit(null);
    setEdit(user)
  }

  const userList = users.map((i) => <UserList userObj={i} editUser={() => handlerOnEdit(edit)} onDelete={handlerOnDelete} key={i.id} />)
  return (
    <div className="App">
      <h2>NEW USERS</h2>
        <UserForm  onCreate={handlerOnCreateUser} />
        {userList}
      
    </div>
  );
}

export default App;
