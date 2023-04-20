import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './error/Error';
import Content from './component/Content';
import Loginform from './component/Loginform';
import Signup from './component/Signup';
import SignupYup from './component/SignupYup';
import Formikcomponent from './component/Formikcomponent';
import Formikcomponentwitherrortag from './component/Formikcomponentwitherrortag';
import  FriendList  from './component/FriendList';


const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    errorElement : <Error/>,
    children : [
      {
        path : '/',
        element : <Content/>
      },
      {
      path : 'login',
      element : <Loginform/>,
      errorElement : <Error/>
      },
      {
      path : 'signup',
      element : <Signup/>,
      errorElement : <Error/>
      },
      {
      path : 'signupyup',
      element : <SignupYup/>,
      errorElement : <Error/>
      },
      {
      path : 'formik',
      element : <Formikcomponent/>,
      errorElement : <Error/>
      },
      {
      path : 'formikwitherrortag',
      element : <Formikcomponentwitherrortag/>,
      errorElement : <Error/>
      },
      {
      path : 'fieldarray',
      element : <FriendList/>,
      errorElement : <Error/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
