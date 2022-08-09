import './home.scss'
import { Sidebar } from '../../components/sidebar/Sidebar'

export const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        container
      </div>
    </div>
  )
}
