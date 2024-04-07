import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./assets/pages/Home"
import About from "./assets/pages/About"
import Contact from "./assets/pages/Contact"
import MainLayout from "./layout/MainLayout"
function App() {
const routes = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children: [
      {
        index:true,
        element: <Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ]
  },
 
])
  return (
    <div className="container">
<RouterProvider router={routes}/>
    </div>
  )
}

export default App
