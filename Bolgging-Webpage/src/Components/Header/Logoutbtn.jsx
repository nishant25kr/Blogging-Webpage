import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'


function Logoutbtn() {
    const dispatch = useDispatch()
    const logouthandler= () => {
        authService.logout().then(()=>{
            dispatch(logout());
        })
    }
  return (
    <button className='inline-block px-6 py-2 duration-200 rounded-full hovwe:bg-blue'>Logout</button>
  )
}

export default Logoutbtn
