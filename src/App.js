import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Header from './components/Header'
import Spinner from './components/Spinner'
import { fetchAuthUser } from './redux/slices/authSlice'
import './scss/App.scss'

const HomePage = lazy(() => import('./components/pages/HomePage'))
const RegistrationPage = lazy(() =>
    import('./components/pages/RegistrationPage')
)
const LoginPage = lazy(() => import('./components/pages/LoginPage'))
const SinglePostPage = lazy(() => import('./components/pages/SinglePostPage'))

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAuthUser())
    }, [dispatch])

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/auth/registration"
                            element={<RegistrationPage />}
                        />
                        <Route path="/auth/login" element={<LoginPage />} />
                        <Route path="/posts/:id" element={<SinglePostPage />} />
                    </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    )
}

export default App
