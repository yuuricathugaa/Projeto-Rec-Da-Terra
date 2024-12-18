import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useContext } from 'react';
import { Flex, Box } from "@chakra-ui/react"

/*Importação dos componentes*/
import NavbarVisi from './components/NavbarVisi/NavbarVisi'
import NavbarLogin from './components/NavbarLogin/NavbarLogin'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Topo from './components/TopoPag/TopoDaPag'
import { UserProvider, UserContext } from './components/TipoUsuario/TipoUsuario';

/*Importação das Páginas*/
import Home from './pages/Home/Home';
import PaginaInicial from './pages/PaginaInicial/PaginaInicial';
import Cadastro from './pages/Cadastro/Cadastro'
import CadastroCliente from './pages/CadastroCliente/CadastroCliente';
import CadastroProdutor from './pages/CadastroProdutor/CadastroProdutor';
import Chat from './pages/Chat/Chat';
import ConscientizAterra from './pages/ConscientizATerra/ConscientizATerra';
import Login from './pages/Login/Login';
import PerfilCliente from './pages/PerfilCliente/PerfilCliente';
import VerCliente from './pages/PerfilCliente/VerCliente';
import PerfilProdutor from './pages/PerfilProdutor/PerfilProdutor';
import VerProdutor from './pages/PerfilProdutor/VerProdutor';
import Produtos from './pages/Produtos/Produtos';
import Sobre from './pages/Sobre/Sobre';
import EsqueciSenha from './pages/EsqueciSenha/EsqueciSenha';
import RedefinirSenha from './pages/RedefinirSenha/RedefinirSenha';
import RecuperaSenha from './pages/RecuperaSenha/RecuperaSenha';
import Contato from './pages/Contato/Contato';
import Post from './pages/Post/AdicionarPosts';
import Pag404 from './pages/PaginaErro/Pag404';
import BotaoPost from './components/BotaoPost/BotaoPost';

function App() {
  const location = useLocation();
  const { userType } = useContext(UserContext);
  const isHome = location.pathname === '/home';

  return (
      <>
        <Flex flexDirection={"column"} minHeight={"100vh"}>
          <Box>
            {location.pathname === '/' ? <NavbarVisi /> :
            location.pathname === '/login' ||
            location.pathname === '/esquecisenha' ||
            location.pathname === '/recuperasenha' ||
            location.pathname === '/redefinirsenha' ||
            location.pathname === '/cadastro' ||
            location.pathname === '/cadastroCliente' ||
            location.pathname === '/cadastroProdutor' ||
            location.pathname === '*' ? <NavbarLogin /> :
            <Navbar />}
          </Box>
          <Box as={"main"} flex={"1"}>
            <Topo />
            <Routes>
              {userType === 'cliente' && <Route path='/home' element={<Home />} />}
              {userType === 'produtor' && <Route path='/home' element={<Home />} />}
              <Route path='/' element={<PaginaInicial />} />
              <Route path='/login' element={<Login />} />
              <Route path='/esquecisenha' element={<EsqueciSenha />} />
              <Route path='/recuperasenha' element={<RecuperaSenha />} />
              <Route path='/redefinirsenha' element={<RedefinirSenha />} />
              <Route path='/sobre' element={<Sobre />} />
              <Route path='/cadastro' element={<Cadastro />} />
              <Route path='/cadastrocliente' element={<CadastroCliente />} />
              <Route path='/cadastroprodutor' element={<CadastroProdutor />} />
              <Route path='/chat' element={<Chat />} />
              <Route path='/conscientizaterra' element={<ConscientizAterra />} />
              <Route path='/contato' element={<Contato />} />
              <Route path='/produtos' element={<Produtos />} />
              <Route path='/post' element={<Post />} />
              <Route path='/post' element={<Post />} />
              {userType === 'cliente' ? (
                <>
                  <Route path='/perfilcliente/:clienteId' element={<PerfilCliente />} />
                  <Route path='/vizualizaprodutor' element={<VerProdutor />} />
                </>
              ) : userType === 'produtor' ? (
                <>
                  <Route path='/perfilprodutor/:produtorId' element={<PerfilProdutor />} />
                  <Route path='/visualizacliente' element={<VerCliente />} />
                </>
              ) : null}
              <Route path='*' element={<Pag404 />} />
            </Routes>
          </Box>
          <Box as={"footer"}>
            <Footer />
            {/* Renderiza o componente AddPostButton apenas para usuários do tipo 'produtor' */}
          {userType === 'produtor' && isHome && <BotaoPost />}
          </Box>
        </Flex>
      </>
  );
}

const AppWrapper = () => (
  <UserProvider>
    <App />
  </UserProvider>
);

export default AppWrapper;