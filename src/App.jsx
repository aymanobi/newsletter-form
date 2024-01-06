import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainCard from "./components/MainCard"
import Succes from './components/Succes';


function App() {


  return (
    <main className="min-h-screen bg-DarkSlateGrey lg:flex lg:items-center lg:justify-center">
      <Router>
        <Routes>
          <Route path='/' element={<MainCard />} />
          <Route path='/success' element={<Succes />} />
        </Routes>
      </Router>

    </main>
  )
}

export default App
