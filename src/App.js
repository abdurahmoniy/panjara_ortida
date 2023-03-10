import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom'
import { navLink } from './components/constant'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          {
            navLink.map((nav) => (
              <Route key={nav.id} path={nav.path} element={nav.element}/>
            ))
          }
        </Routes>
      </Router>
    </div>
  )
}