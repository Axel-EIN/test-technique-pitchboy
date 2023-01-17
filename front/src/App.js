import './App.scss';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import requests from './config/Request';
import Row from './components/Row';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Row title="Populaires" anchor="trending" fetchUrl={requests.fetchTrending} isPoster={true} />
      <Row title="Dernières sorties" anchor="latests" fetchUrl={requests.fetchLatests} />
      <Row title="prochaine sorties" anchor="upcomings" fetchUrl={requests.fetchUpcomings} />
      <Footer />
    </>
  );
}

export default App;
