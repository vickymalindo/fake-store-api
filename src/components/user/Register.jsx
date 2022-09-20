import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../front/Footer';
import Nav from '../front/Nav';

function Register() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [identity, setIdentity] = useState({
    firstname: '',
    lastname: ''
  })
  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setIdentity((prev) => {
      if (name === 'firstname') {
        return {
          firstname: value,
          lastname: prev.lastname
        }
      } else {
        return {
          firstname: prev.firstname,
          lastname: value
        }
      }
    })
  }

  const handleSubmit = async (e) => {
    const address = {
      city: 'kilcoole',
      street: '7835 new road',
      number: 3,
      zipcode: '12926-3874',
      geolocation: {
        lat: '-37.3159',
        long: '81.1496'
      }
    }
    const phone = '1-570-236-7033'
    const result = { email, username, password, identity, address, phone }
    e.preventDefault()
    try {
      const response = await axios.post('https://fakestoreapi.com/users', result)
      if (response) {
        toast.success('Data Successfully Added', { autoClose: 3000 })
      }
      setTimeout(() => {
        navigate('/login')
      }, 3730);
    } catch (error) {
      toast.error('Data Cannot Added', { autoClose: 1200 })
    }
  }

  return (
    <>
      <Nav />
      <div className="w-full h-screen flex items-center justify-center">
        <form className="w-full md:w-1/3 bg-white rounded-lg border border-gray-500" onSubmit={handleSubmit}>
          <div className="flex font-bold justify-center mt-6">
            <img className="h-20 w-20" src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg" alt="gambar" />
          </div>
          <h2 className="text-3xl text-center text-gray-700 mb-4">Regristation Form</h2>
          <div className="px-12 pb-10">
            <div className="w-full mb-2">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Email"
                  className="m-auto px-8  w-full border border-gray-500 rounded py-2 text-gray-700 focus:outline-none"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full mb-2">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Username"
                  className="m-auto px-8  w-full border border-gray-500 rounded py-2 text-gray-700 focus:outline-none"
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full mb-2">
              <div className="flex items-center">
                <input
                  type="password"
                  placeholder="Password"
                  className="m-auto px-8 w-full border border-gray-500 rounded py-2 text-gray-700 focus:outline-none"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full mb-2">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Firstname"
                  className="m-auto px-8  w-full border border-gray-500 rounded py-2 text-gray-700 focus:outline-none"
                  name='firstname'
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className="w-full mb-2">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Lastname"
                  className="m-auto px-8  w-full border border-gray-500 rounded py-2 text-gray-700 focus:outline-none"
                  name='lastname'
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded-full bg-green-600 text-gray-100 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Register;
