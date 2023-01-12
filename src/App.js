import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddMedicine } from './components/Customer/AddMedicine';
import { Home } from './components/Customer/Home';
import { MedicinesList } from './components/Customer/MedicinesList';
import { NavigationBar } from './components/Customer/NavigationBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/medicines-list' element={<MedicinesList/>}></Route>
          <Route path='/add-medicine' element={<AddMedicine/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
