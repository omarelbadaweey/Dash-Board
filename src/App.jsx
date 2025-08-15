import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import UserCard from './assets/components/UserCard'
import Footer from './assets/components/Footer'
import Header from './assets/components/Header'
// import DarkUserDirectory from './Test'

function App() {

  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() =>{
    
  axios
  .get(`https://jsonplaceholder.typicode.com/users/${search}`)
  .then((res) => setUsers(res.data))
  // .catch((error) => alert(error))
  } , [])
  // 


  const handleDelete = (id) =>{
    setUsers(users.filter( prev => prev.id !== id))
  }
  const filterUsers = users.filter(user => user.name.toLowerCase().includes(search))
  return (
    <div className='mx-auto  bg-neutral-900'>
      <Header/>
        <input className='bg-neutral-900 my-3  w-[50%] block mx-[auto] border-2 px-5 py-1 rounded-lg outline-none focus:scale-[1.05] focus:bg-black font-bold text-blue-300 placeholder:text-blue-300' value={search} type="text" placeholder='search...' onInput={(e) => setSearch(e.target.value)} />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 '>
          {
            filterUsers.length > 0 ? (
              filterUsers.map((post) =>(
                <UserCard
                  id={post.id}
                  name={post.name}
                  email={post.email}
                  avatar={`https://i.pravatar.cc/150?img=${post.id}`}
                  onDelete={handleDelete}
               
                
                />
              ))):(
                <p className='absolute left-[50%] translate-x-[-50%]  text-center font-bold text-white w-[fit-content] border-b-2 border-red-500'>لا يوجد عملاء بهذا الاسم </p>
              )
          }
      </div>
    {/* <DarkUserDirectory/> */}
    <Footer/>
    </div>
    
  )
}
export default App