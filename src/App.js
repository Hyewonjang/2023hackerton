import './App.css';
import Admin from './components/Admin/Admin';
import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import HomeLog from './components/Customer/Home_log';
import MyPage from './components/Customer/MyPage';
import Charge from './components/Customer/Charge';
import Pay from './components/Customer/Pay';
import Detail from './components/Customer/Detail';
import Caution from './components/Customer/Caution';
import BuyList from './components/Customer/BuyList';
import SellList from './components/Customer/SellList';
import Home from './components/Customer/Home';
import Login from './components/Customer/Login';
import SignUp from './components/Customer/SignUp';

function App() {
  return (
    <div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path="/admin/*" element={<Admin />}></Route>
					<Route path="/" element={<Home />}></Route>
					<Route path="/homeLog" element={<HomeLog />}></Route>
					<Route path="/mypage" element={<MyPage />}></Route>
					<Route path="/charge" element={<Charge />}></Route>
					<Route path="/pay" element={<Pay />}></Route>
					<Route path="/product/:id" element={<Detail/>}></Route>
					<Route path="/info" element={<Caution/>}></Route>
					<Route path="/mypage/buylist" element={<BuyList/>}></Route>
					<Route path="/selllist" element={<SellList/>}></Route>	
					<Route path="/login" element={<Login/>}></Route>
					<Route path="/signup" element={<SignUp/>}></Route>				
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
