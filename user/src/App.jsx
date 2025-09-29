import UserContextProvider from './context/UserContextProvider';
import Login from './component/Login';
import Profile from './component/Profile';

function App() {
return (
    <UserContextProvider>
    {/* <Count/> */}
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
