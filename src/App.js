import React, { useEffect, useState } from 'react';
import './App.css';

import { getUserItems, deleteItem, addItem } from './api/db'
import TableCard from './components/TableCard'
import NavBar from './components/NavBar'
import AddItemCard from './components/AddItemCard'
import PredictionsCard from './components/PredictionsCard'
import AboutCard from './components/AboutCard'

import { Grid } from '@material-ui/core'


function App() {

  const [items, setItems] = useState([])
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    fetchData()

  }, [refresh])


  async function fetchData() {
    setItems(await getUserItems())
  }

  return (
    <div className="app">
      <NavBar />
      
      <div className="content">
        <Grid container spacing={3}>
        
            <AboutCard 
              text = "This is an application I made during CCA x CISSA's AWS event!"
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
