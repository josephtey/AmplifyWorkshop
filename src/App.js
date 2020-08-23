import React, { useEffect, useState } from 'react';
import './App.css';
import { Hub, Auth } from 'aws-amplify'

import { getAboutInfo, getUserItems, deleteItem, addItem } from './api/db'
import TableCard from './components/TableCard'
import NavBar from './components/NavBar'
import AddItemCard from './components/AddItemCard'
import AboutCard from './components/AboutCard'
import PredictionsCard from './components/PredictionsCard'

import { Grid } from '@material-ui/core'


function App() {

  const [aboutInfo, setAboutInfo] = useState()
  const [items, setItems] = useState([])
  const [refresh, setRefresh] = useState(false)


  Hub.listen('auth', (data) => {
    if (data.payload.event === 'signIn') {
      fetchData()
    }
  });

  useEffect(() => {
    fetchData()

  }, [refresh])


  async function fetchData() {
    const about = await getAboutInfo()
    const tasks = await getUserItems()

    setAboutInfo(about)
    setItems(tasks)
  }

  return (
    <div className="app">
      <NavBar 
        logoutAction={async ()=>{
          await Auth.signOut();
        }}
      />
      
      <div className="content">
        <Grid container spacing={3}>
            <AboutCard 
              text = { aboutInfo }
              />
            
            <AddItemCard 
            addAction = {
              (itemName) => {
                addItem(itemName)
                setRefresh(!refresh)
              }
            }      />
            
            <PredictionsCard 
              addAction = {
                (itemName) => {
                  addItem(itemName)
                  setRefresh(!refresh)
                }
              }
            />
            
           <TableCard 
              data={items}
              removeAction={(timestamp)=>{
                deleteItem(timestamp)
                setRefresh(!refresh)
              }}
            />
        </Grid>
      </div>
    </div>
  );
}

export default App;
