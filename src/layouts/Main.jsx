import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Main = () => {
  return (
    <section>
        <Navbar/>
        <Outlet/>
    </section>
  )
}

export default Main