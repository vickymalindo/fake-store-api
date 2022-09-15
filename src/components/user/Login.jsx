import axios from 'axios';
import { useState } from 'react'
import { Navigate } from "react-router-dom";
import Footer from '../front/Footer';
import Nav from '../front/Nav';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username,
        password
      });
      const token = response?.data?.token;
      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        localStorage.setItem('status', true)
        setLoginStatus((status) => !status)
      }
    } catch (error) {
      setErrorMessage('Username or Password Invalid')
    }
  }

  return (
    <>
      <Nav />
      {loginStatus ?
        <Navigate to='/user' />
        :
        <div className="w-full h-screen flex flex-col items-center justify-center px-5 md:px-0">
          <h1 className={errorMessage ? 'block py-1 px-2 bg-red-300 text-red-600 border-none rounded-lg mb-1' : 'hidden'}>{errorMessage}</h1>
          <form className="w-full md:w-1/3 bg-white rounded-lg border border-gray-500" onSubmit={handleSubmit}>
            <div className="flex font-bold justify-center mt-6">
              <img className="h-20 w-20" src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg" alt='gambar' />
            </div>
            <h2 className="text-3xl text-center text-gray-700 mb-4">Login Form</h2>
            <div className="px-12 pb-10">
              <div className="w-full mb-2">
                <div className="flex items-center">
                  <input type='text' placeholder="Username"
                    className="m-auto px-8 w-full border border-gray-500 rounded py-2 text-gray-700 focus:outline-none" onChange={(e) => setUsername(e.target.value)} />
                </div>
              </div>
              <div className="w-full mb-2">
                <div className="flex items-center">
                  <input type='password' placeholder="Password"
                    className="m-auto px-8 w-full border border-gray-500 rounded py-2 text-gray-700 focus:outline-none" onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>
              <button type="submit"
                className="w-full py-2 rounded-full bg-green-300 text-green-900 focus:outline-none">Submit
              </button>
            </div>
          </form>
        </div>
      }
      <Footer />
    </>
  )
}

export default Login