import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
const PrivateRoutes = () => {

    const authVal = useSelector((store) => store.loginAuth.auth)
  let auth = {'token':authVal}


return (
    auth.token ? <Outlet/> : <Navigate to='/'/>
  )
}

export default PrivateRoutes;