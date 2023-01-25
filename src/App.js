import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Header,
  Main,
  Footer,
  Layout,
  Navbar,
  Container,
  Footerbar,
} from './components';
import Home from './pages/Home';
import Demo from './pages/Demo';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import NotFoundPage from './pages/NotFoundPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Header twClasses={'bg-gray-100'}>
            <Container FULL twClasses={'flex justify-center'}>
              <Navbar twClasses={'w-11/12 xl:w-4/5'} />
            </Container>
          </Header>
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/page-one" element={<PageOne />} />
              <Route path="/page-two" element={<PageTwo />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </Main>
          <Footer twClasses={'bg-gray-200'}>
            <Footerbar />
          </Footer>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
