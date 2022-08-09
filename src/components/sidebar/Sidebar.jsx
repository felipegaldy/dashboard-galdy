import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import AlignVerticalBottomOutlinedIcon from '@mui/icons-material/AlignVerticalBottomOutlined';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">LOGO</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Menu</p>
          <li>
            <DashboardIcon className="icon icon-home"  />
            <span>Dashboard</span>  
          </li>
          <li>
            <AccountCircleIcon className="icon icon-user" />
            <span >Usuarios</span>
          </li>
          <li>
            <AddBusinessOutlinedIcon className="icon icon-settings" />
            <span >Produtos</span>
          </li>
          <li>
            <AddCardOutlinedIcon className="icon icon-logout" />
            <span >Vendas</span>
          </li>
          <li>
            <AirOutlinedIcon className="icon icon-logout" />
            <span >Delivery</span>
          </li>
          <li>
            <AlignVerticalBottomOutlinedIcon className="icon icon-logout" />
            <span >Estatísticas</span>
          </li>
          <li>
            <AnnouncementOutlinedIcon className="icon icon-logout" />
            <span >Notificações</span>
          </li>
          <li>
            <span >System health</span>
          </li>
          <li>
            <span >Logs</span>
          </li>
          <li>
            <SettingsApplicationsOutlinedIcon className="icon icon-logout" />
            <span >Configurações</span>
          </li>
          <li>
            <AccountBoxOutlinedIcon className="icon icon-logout" />
            <span >Perfil</span>
          </li>
          <li>
            <PowerSettingsNewOutlinedIcon className="icon icon-logout" />
            <span >Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};
