import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Receita Total</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={50} text={`${50}%`} strokeWidth={2} />
        </div>
        <p className="title">Total de vendas feitas hoje.</p>
        <p className="amount">R$420</p>
        <p className="desc">
          Processamento de transações anteriores. O último pagamento pode não
          ser incluído.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Objetivo</div>
            <div className="itemResult">
              <ArrowDropUpIcon fontSize="small" />
              <div className="resultAmount">R$5.3k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Última Semanaa</div>
            <div className="itemResult positive">
              <ArrowDropUpIcon fontSize="small" />
              <div className="resultAmount">R$5.3k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Último mês</div>
            <div className="itemResult negative">
              <ArrowDropDownIcon fontSize="small" />
              <div className="resultAmount">R$5.3k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
