import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Store from './components/Store';
import { Products } from './components/Products';

function App() {
  return (
    <BrowserRouter>

        
   <Store>
   <Routes>
      <Route path='/' element={<Products />} />


      </Routes>
    
   </Store>
   </BrowserRouter>
  );
}

export default App;
