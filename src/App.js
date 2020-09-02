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

  useEffect(() => {
    fetchData()

  }, [])


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
