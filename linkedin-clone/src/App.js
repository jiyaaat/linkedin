import React, {useEffect } from 'react';
import{ useDispatch, useSelector } from "react-redux";
import './App.css';
import{ auth } from "./firebase";
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { login,logout, selectUser } from './features/userSlice';
import Login from './Login';
import Widgets from './Widgets';

function App() {
  const user=useSelector(selectUser);
  const dispatch= useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          email:userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }))
      }else{
        dispatch(logout());
      }
    })
  },[])
  return (
    <div className="App">
      {/*header*/}
      <Header/>

      {!user ? (
        <Login />
      ) : (
        // App body
        <div className="appBody">
          <Sidebar />
          <Feed />
          <Widgets/>
        </div>
      )}
    </div>
  );
}

export default App;
