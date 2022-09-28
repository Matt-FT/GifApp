import React, { useState } from 'react'
import { AddCategory, GifGrid } from './Components';


 export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = (onNewCategory) =>{

       if ( categories.includes(onNewCategory) ) return;
       
        setCategories([onNewCategory, ...categories]);


    }
    
  return (
    <>
      {/* Titulo */}
     <h1>Gif Expert App</h1>


      {/* Input */} 
      
      <AddCategory 
       //onAddCategories = { setCategories }
       onNewCategory = {event => {onAddCategory(event)}}
      />

      {/* Listado de GIF's... BTW ol significa order list*/}
      

    

        { categories.map( (category) => (
            
            <GifGrid key={ category } category = { category }/>
          )
         ) 
        }

      

         {/* GIF's item */}

    </>
  )
}

