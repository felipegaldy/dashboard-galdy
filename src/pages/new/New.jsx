import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';

export const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Cadastrar novo usuário</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div className="right">
            <form>
            <div className="formInput">
                <label htmlFor="file"><DriveFolderUploadOutlined /></label>
                <input type="file" id="file" style={{display: 'none'}} />
              </div>
              <div className="formInput">
                <label htmlFor="">Nome de usuário</label>
                <input type="text" placeholder='jon_trav' />
              </div>
              <div className="formInput">
                <label htmlFor="">Nome</label>
                <input type="text" placeholder='Digite seu nome completo' />
              </div>
              <div className="formInput">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='email@email.com' />
              </div>
              <div className="formInput">
                <label htmlFor="">Telefone</label>
                <input type="text" placeholder='(xx) xxxxx-xxxx' />
              </div>
              <div className="formInput">
                <label htmlFor="">Senha</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label htmlFor="">Endereço</label>
                <input type="text" placeholder='Informe seu endereço' />
              </div>
              <div className="formInput">
                <label htmlFor="">País</label>
                <input type="text" placeholder='Brasil' />
              </div>
              <button>Cadastrar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
