import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Layout, About, Home } from './components';
import './index.css';

function App() {
  return (
    <div className='bg-alice dark:bg-darkblue transition duration-500'>
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/portfolio/About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
