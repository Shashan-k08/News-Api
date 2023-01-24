import './App.css';
import './index.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
const App = () => {
  const pagesize = 6;
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={5}
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} pageSize={pagesize} country="in" category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} pageSize={pagesize} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} pageSize={pagesize} country="in" category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} pageSize={pagesize} country="in" category="general" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} pageSize={pagesize} country="in" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} pageSize={pagesize} country="in" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} pageSize={pagesize} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} pageSize={pagesize} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App


