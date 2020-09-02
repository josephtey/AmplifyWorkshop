import React, { useEffect, useState } from 'react';
import './App.css';
import { Hub, Auth } from 'aws-amplify'

import {getUserItems, deleteItem, addItem } from './api/db'
import TableCard from './components/TableCard'
import NavBar from './components/NavBar'
import AddItemCard from './components/AddItemCard'
import AboutCard from './components/AboutCard'
import PredictionsCard from './components/PredictionsCard'

import { Grid } from '@material-ui/core'


function App() {

  const [items, setItems] = useState([])


  Hub.listen('auth', (data) => {
    if (data.payload.event === 'signIn') {
      fetchData()
    }
  });

  useEffect(() => {
    fetchData()

  }, [])


  async function fetchData() {
    setItems(await getUserItems())
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
              text = "Welcome to my Smart Shopping List app. I made this during CISSA x CCA's AWS event."
              />
            
            <AddItemCard 
            addAction = {
              async (itemName) => {
                const response = await addItem(itemName)
                
                if (response){
                  setItems([...items, {
                    timestamp: new Date().getTime(),
                    itemName
                  }])  
                }
                
              }
            }      />
            
            <PredictionsCard 
              addAction = {
                async (itemName) => {
                  const response = await addItem(itemName)
                
                  if (response){
                    setItems([...items, {
                      timestamp: new Date().getTime(),
                      itemName
                    }])
                  }
                }
              }
            />
            
           <TableCard 
              data={items}
              removeAction={async (timestamp)=>{
                const response = await deleteItem(timestamp)
                if (response) {
                  setItems(items.filter(item => item.timestamp !== timestamp))  
                }
              }}
            />
        </Grid>
      </div>
    </div>
  );
}

export default App;
