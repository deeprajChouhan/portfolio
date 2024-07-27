import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage1 from "./pages/HomePage1"
import HomePage2 from "./pages/HomePage2"
import HomePage3 from "./pages/HomePage3"
import BlogDetails from "./pages/BlogDetails"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage1/>}/>
        <Route path="/home-2" element={<HomePage2/>}/>
        <Route path="/home-3" element={<HomePage3/>}/>
        <Route path="/blog-details" element={<BlogDetails/>}/>
      </Routes>
    </Router>
  )
}

export default App
