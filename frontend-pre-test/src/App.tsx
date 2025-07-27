// App.tsx or App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Inquiry } from './pages/Inquiry'
import { Invoice } from './pages/Invoice'
import { MyPage } from './pages/MyPage'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import ProtectedLayout from './layouts/ProtectedLayout'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (
    // <AuthProvider>
      <Router>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route element={<ProtectedRoute />}>
              <Route element={<ProtectedLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/inquiry" element={<Inquiry />} />
                <Route path="/invoice" element={<Invoice />} />
                <Route path="/mypage" element={<MyPage />} />
              </Route>
            </Route>
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
      </Router>
    // </AuthProvider>
  )
}

export default App
