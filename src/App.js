import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import classNames from 'classnames/bind';

import Login from './pages/Login';
import Register from './pages/Register';
import ChatPage from '~/pages/Chat';
import FriendPage from '~/pages/Friend';
import styles from './components/GlobalStyle/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function App() {
  return (
    <Router>
      <div className={cx('app')}>
        <Routes>
          <Route path="/login" element={<Login />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/" element={<ChatPage />} />
          <Route path="/friend" element={<FriendPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
