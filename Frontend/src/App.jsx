import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { ResourcesPage } from "./pages/ResourcesPage"
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Chat } from './pages/Chat'
import { Resourcedetails } from './pages/Resourcedetails'
import { Logout } from './pages/Logout'
import { Error } from './pages/Error'
import { useAuth } from './Context'

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  const shouldShowError = isLoggedIn && isAuthPage;
  const isChatPage=location.pathname==='/chat'
  const chatError=!isLoggedIn && isChatPage

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={shouldShowError ? <Error /> : <Register />} />
        <Route path="/login" element={shouldShowError ? <Error /> : <Login />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/chat" element={chatError?<Error/>:<Chat/>} />
        <Route path="/resources/:id" element={<Resourcedetails />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {location.pathname !== '/chat' && <Footer />}
    </>
  );
}



export default App;
