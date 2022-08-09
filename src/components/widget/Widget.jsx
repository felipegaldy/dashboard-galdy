import "./widget.scss";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { red } from "@mui/material/colors";

export const Widget = ({ type }) => {
  let data;

  //temporario
  const amount = 1000;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "Usuarios",
        isMoney: false,
        link: "Ver todos",
        icon: <AccountCircleIcon className="icon" style={{color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }} />,
      };
      break;
    case "order":
      data = {
        title: "Vendas",
        isMoney: false,
        link: "Ver todas",
        icon: <ShoppingCartIcon className="icon" style={{color: "goldenrod", backgroundColor: "rgba(218,165,32,0.2)" }} />,
      };
      break;
    case "earning":
      data = {
        title: "Ganhos",
        isMoney: true,
        link: "Ver todos",
        icon: <AttachMoneyIcon className="icon" style={{color: "green", backgroundColor: "rgb(0, 128, 0, 0.2)" }} />,
      };
      break;
    case "balance":
      data = {
        title: "Balanço",
        isMoney: true,
        link: "Ver detalhes",
        icon: <AccountBalanceWalletIcon className="icon" style={{color: "blue", backgroundColor: "rgb(0,0,128,0.2)" }}  />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "R$" } {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ArrowDropUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};
