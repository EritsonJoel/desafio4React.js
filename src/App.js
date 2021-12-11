

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import ItemDetailsContainer from './detalle/ItemContainerDetails';


import ItemListContainer from './ItemListContainer';
import ItemListDetails from './ItemListDetails';


function App() {
  return (
    
   
   <BrowserRouter>
   
      <Routes>
        <Route  exact  path='/'  element={<ItemListContainer/>}/>
        <Route  exact  path='/detalle/:idcategoria'  element={<ItemDetailsContainer/>}/>
        
      </Routes>
   </BrowserRouter>
 


  );
}

export default App;
