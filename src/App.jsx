import { Outlet } from "react-router-dom"
import Footer from "./Pages/Footer/Footer"
import Header from "./Pages/Header/Header"

function App() {


  return (
    <div>
      
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
</div>
  )
}

export default App
