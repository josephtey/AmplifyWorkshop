import React, { useEffect, useState } from 'react';
import './App.css';
import { Hub, Auth } from 'aws-amplify'

import { getAboutInfo, getUserTasks, removeTask, addTask } from './api/db'
import TableCard from './components/TableCard'
import NavBar from './components/NavBar'
import AddItemCard from './components/AddItemCard'
import AboutCard from './components/AboutCard'


function App() {

  const [aboutInfo, setAboutInfo] = useState()
  const [userTasks, setUserTasks] = useState([])
  const [refresh, setRefresh] = useState(false)


  Hub.listen('auth', (data) => {
    if (data.payload.event === 'signIn') {
      setRefresh(!refresh)
    }
  });

  useEffect(() => {
    fetchData()

  }, [refresh])


  async function fetchData() {
    const about = await getAboutInfo()
    const tasks = await getUserTasks()

    setAboutInfo(about)
    setUserTasks(tasks)
  }

  return (
    <div className="app">
      <NavBar 
        logoutAction={async ()=>{
          await Auth.signOut();
        }}
      />
      
      <AboutCard 
        text={aboutInfo}
      />
      
      <AddItemCard 
        addAction={(id, itemName)=>{
          addTask(id, itemName)
          setRefresh(!refresh)
        }}  
      />
      
      <TableCard 
        data={userTasks}
        removeAction={(id)=>{
          removeTask(id)
          setRefresh(!refresh)
        }}
      />
    </div>
  );
}

export default App;
