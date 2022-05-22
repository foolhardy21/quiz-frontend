import { useAuth } from "contexts"
import { Navigate, useLocation } from "react-router-dom"

const RequireAuth = ({ children }) => {
    const location = useLocation()
    const { loggedInUser } = useAuth()

    return loggedInUser.email ? children : <Navigate to='/login' state={{ from: location }} replace />
}

export default RequireAuth