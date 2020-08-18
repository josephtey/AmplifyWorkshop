import React, { useEffect, useState } from 'react';
import './App.css';
import { API, Hub } from 'aws-amplify';

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
    if (data.payload.event == 'signIn') {
      setRefresh(!refresh)
    }
  });

  async function fetchData() {
    const about = await getAboutInfo()
    const tasks = await getUserTasks()

    setAboutInfo(about)
    setUserTasks(tasks)
  }

  useEffect(() => {
    fetchData()
  }, [refresh])

  return (
    <div className="app">
      <NavBar />
      
      <AboutCard 
        text={aboutInfo}
      />
      
      <AddItemCard 
        addAction={(taskName)=>{
          addTask(taskName)
          setRefresh(!refresh)
        }}  
      />
      
      <TableCard 
        data={userTasks}
        removeAction={(taskName)=>{
          removeTask(taskName)
          setRefresh(!refresh)
        }}
      />
      
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </div>
  );
}

export default App;
