import React from 'react'
import Footer from '../front/Footer'
import Nav from '../front/Nav'

const Register = () => {
  return (
    <>
        <Nav />
        <div className="w-full h-screen flex items-center justify-center">
            <form className="w-full md:w-1/3 bg-white rounded-lg border border-gray-500">
                <div className="flex font-bold justify-center mt-6">
                    <img className="h-20 w-20" src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg" alt='gambar'/>
                </div>
                <h2 className="text-3xl text-center text-gray-700 mb-4">Regristation Form</h2>
                <div className="px-12 pb-10">
                    <div className="w-full mb-2">
                        <div className="flex items-center">
                            <input type='text' placeholder="Email"
                                className="m-auto px-8  w-full border border-gray-500 rounded py-2 text-gray-700 focus:outline-none" />
                        </div>
                    </div>
                    <div className="w-full mb-2">
                        <div className="flex items-center">
                            <input type='text' placeholder="Username"
                                className="m-auto px-8  w-full border border-gray-500 rounded py-2 text-gray-700 focus:outline-none" />
                        </div>
                    </div>
                    <div className="w-full mb-2">
                        <div className="flex items-center">
                            <input type='password' placeholder="Password"
                                className="m-auto px-8 w-full border border-gray-500 rounded py-2 text-gray-700 focus:outline-none" />
                        </div>
                    </div>
                    <div className="w-full mb-2">
                        <div className="flex items-center">
                            <input type='text' placeholder="Firstname"
                                className="m-auto px-8  w-full border border-gray-500 rounded py-2 text-gray-700 focus:outline-none" />
                        </div>
                    </div>
                    <div className="w-full mb-2">
                        <div className="flex items-center">
                            <input type='text' placeholder="Lastname"
                                className="m-auto px-8  w-full border border-gray-500 rounded py-2 text-gray-700 focus:outline-none" />
                        </div>
                    </div>
                    <button type="submit"
                        className="w-full py-2 rounded-full bg-green-600 text-gray-100 focus:outline-none">Submit
                    </button>
                </div>
            </form>
        </div>
        <Footer />
    </>
  )
}

export default Register