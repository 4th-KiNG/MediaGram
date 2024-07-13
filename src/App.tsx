import LoadingPage from './components/LoadingPage/LoadingPage'
import InfoPage from './components/InfoPage/InfoPage'
import MainPage from './components/MainPage/MainPage'
import PayPage from './components/PayPage/PayPage'
import StatusPage from './components/StatusPage/StatusPage'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import VoucherPage from './components/VoucherPage/VoucherPage'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LoadingPage />}/>
        <Route path='/main' element={<MainPage />} />
        <Route path='/info' element={<InfoPage />} />
        <Route path='/voucher' element={<VoucherPage />} />
        <Route path='/pay' element={<PayPage />} />
        <Route path='/status' element={<StatusPage />} />
      </Routes>
    </>
  )
}

export default App
