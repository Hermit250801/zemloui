import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import classNames from 'classnames/bind';
import { HelmetProvider } from 'react-helmet-async';
import 'antd/dist/antd.min.css';

import Login from './pages/Login';
import Register from './pages/Register';
import ChatPage from '~/pages/Chat';
import FriendPage from '~/pages/Friend';
import styles from './components/GlobalStyle/GlobalStyles.module.scss';
import Home from './pages/Home';

const cx = classNames.bind(styles);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className={cx('app')}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/login" element={<Login />} exact />
            <Route path="/register" element={<Register />} exact />
            <Route path="/friend" element={<FriendPage />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
