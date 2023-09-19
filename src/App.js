import './scss/App.scss'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import RegistrationPage from './components/pages/RegistrationPage'
import LoginPage from './components/pages/LoginPage'
import SinglePostPage from './components/pages/SinglePostPage'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/auth/registration"
                        element={<RegistrationPage />}
                    />
                    <Route path="/auth/login" element={<LoginPage />} />
                    <Route path="/posts/:id" element={<SinglePostPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
