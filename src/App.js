
import './App.css';
import Blogs from './components/QNA/QNA';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className='app'>
      <Header></Header>
      <Container></Container>
      <Blogs></Blogs>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
