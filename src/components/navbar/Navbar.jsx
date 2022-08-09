import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import AbcIcon from '@mui/icons-material/Abc';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import ContrastIcon from '@mui/icons-material/Contrast';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

export const Navbar = () => {
  return (
    <div className="navbar" >
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Buscar...' />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <AbcIcon className='icon' />
            Português
          </div>
          <div className="item">
            <ContrastIcon className='icon' />
            Modo escuro
          </div>
          <div className="item">
            <FullscreenExitIcon className='icon' />
          </div>
          <div className="item">
            <CrisisAlertIcon className='icon' />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleIcon />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <DensityMediumIcon className='icon' />
          </div>
          <div className="item">
            <img src="https://avatars.githubusercontent.com/u/99551212?v=4" alt="avatara" className='avatar' />
          </div>

        </div>
      </div>
    </div>
  )
} 
