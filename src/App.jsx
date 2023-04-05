import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  return (
    <div>
      <div className='bg_background'>
        <Navbar className='width'>
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="https://preview.colorlib.com/theme/transcend/images/logo.svg"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Text>
              <span className='menu'>Menu</span>
              <MenuIcon className='menu' />
            </Navbar.Text>
          </Container>
        </Navbar>
        <h1 className='hero_h1'>Hello folks, we are <br />
          Transcend Studio.</h1>
        <h2 className='hero_h2'>We create stunning digital experiences<br />that will help your business stand out.</h2>
        div
        <div>
          <span className='id'>Follow Us</span><span className='id'>Facebook</span><span className='id'>Twitter</span><span className='id'>LinkedIn</span>
        </div>
      </div>
    </div>

  )
}

export default App
