
import './App.css';
import LoanForm from './LoanForm';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{marginTop:"125px"}}>
      <LoanForm />
      <Routes>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
