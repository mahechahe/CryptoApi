import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar, HomePage, Exchanges, News, Cryptocurrencies, CryptoDetails } from "./components";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar></Navbar>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<HomePage/>}></Route>
              <Route exact path="/exchanges" element={<Exchanges/>}></Route>
              <Route exact path="/news" element={<News/>}></Route>
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>}></Route>
              <Route exact path="/crypto/:coinId" element={<CryptoDetails/>}></Route>
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title level={5} style={{color: "white", textAlign: 'center'}}>
            Cryptoverse <br />
            All rights reservered
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
