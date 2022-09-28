import { GifItem } from './GifItem';
import { useFetchGifs } from '../Hooks/useFetchGifs';




export const GifGrid = ({ category }) => {


  const { images , isLoading } = useFetchGifs ( category );
    
 
  return (
    <>
     <h3>{ category }</h3>
     
     {
      // esto && es un and logico que se ejecuta si esta en true
      isLoading && <h2>...Cargando</h2> 
     }
     

     <div className='card-grid'>
     { 
     images.map((img) =>(
        <GifItem  
        key={img.id}
        {...img}
        
        
        />  
     ))
     
     }
            
      
    
     </div>
   

    </>
  )
}
