import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import { useState } from 'react';
import UserList from './components/UserList/UserList';
import NewUser from "./components/NewUser/NewUser";
function App() {
  const [users,setUsers] = useState([])
  const [showModal , setModal] =useState(false)
  const deleteUser = (id)=>{
    setUsers((prev)=>{
     return prev.filter((user)=>{
        return (
          user.id !==id
        )
      })
    })
  }
  // Close
  const closeModal = (e)=>{
    if(e.target.className ==="overlay"){
      setModal(false)
    }
    if(e.code ==="Escape"){
      setModal(false)
    }
  }
  const addUser = (user)=>{
    setUsers((prev)=>{
      return [...prev , user];
    })
    setModal(false)
  }
  return (
   <div className='App' onClick={closeModal} onKeyDown={closeModal}>
   <Header usersLength = {users.length}/>
   <main>
    <div className="no-users">
      {users.length === 0 && <h3>Not users</h3> }
    </div>
    <UserList users={users} deleteUser={deleteUser}/>
    
    {showModal && <NewUser addUser={addUser}/>}
    <button onClick={()=> setModal(true)} className="create-user">Create User</button>
   </main>
   <Footer/>
   </div>
  )
}

export default App
