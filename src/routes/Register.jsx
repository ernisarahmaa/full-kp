import React, { useState } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png'
 import './style.css'
import Login from './Login';
import {Routes, Router } from 'react-router-dom';

function Register() {
  const navigate = useNavigate(); // deklarasi hook useNavigate
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number_phone, setNumberPhone] = useState('')
  const [alamat, setAlamat] = useState('')
  const [gambar_profil, setProfil] = useState('')
  const [registrationStatus, setRegistrationStatus] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch('http://34.101.113.12/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password,
        number_phone,
        alamat,
        gambar_profil
      })
    });

    if (response.ok) {
      setRegistrationStatus(
        alert('User registered successfully!')
      )
      navigate("/login")
    } else {
      setRegistrationStatus(
        alert("failed to Registered")
      );
    }
  };
  const handleLogin = () => {
    navigate('/login')// menggunakan fungsi navigate untuk pindah ke halaman Login
  };
  return(
    <div class="bg-blue-900 text-gray-100 px-10 py-4 h-screen">
      {/* {registrationStatus && <p>{registrationStatus}</p>} */}
          <div class="text-center w-full">
          </div>
          <div 
            class="max-w-screen-xl mt-4 px-4 grid gap-8 grid-cols-1 md:grid-cols-2 bg-slate-400 md:px-12 lg:px-16 xl:px-16 py-8 mx-auto text-gray-900 rounded-lg box shadow-2xl shadow-transparent">
            <div class="flex flex-col justify-between" >
              <div>
                <div class="object-center">
                  <div className="imgs-register">
                  <div className="container-image-register">
                    <img src={Logo} alt="logo" className="logo"/>
                  </div>
                </div>
                    <h2 class= "text-2xl lg:text-2xl font-bold leading-tight text-center">UMKM Juara, UMKM Goes to Digital Marketing</h2>
                    <div className="text-black mt-8 text-center text-xl font-mono">
                      You Have Acccount? <button className="text-blue-900 font-mono" onClick={handleLogin}>Log-in</button>
                    </div>
                </div>
              </div>
              <div class="mt-8 text-center">
              </div>
            </div>
            <div className='input-register'>
              <form onSubmit={handleRegister}>
                <h1 class=" appearance-none text-center font-bold text-4xl pb-8 pt-4 text-white font-sans" >Create Account</h1>
                  <div class=" items-center border-b border-black py-2 border-t">
                      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} class="bg-transparent border-none w-96 text-gray-700 mr-3 py-2 px-2 focus:outline-none " placeholder="User Name" aria-label="Full name" />
                  </div>
                  <div class=" items-center border-b border-black py-2">
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} class="bg-transparent border-none w-96 text-gray-700 mr-3 py-2 px-2 focus:outline-none " placeholder="E-Mail" aria-label="E-Mail" />
                  </div>
                  <div class=" items-center border-b border-black py-2">
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} class=" bg-transparent border-none w-96 text-gray-700 mr-3 py-2 px-2  focus:outline-none" placeholder="Password" aria-label="Password" />    
                  </div>
                  <div class=" items-center border-b border-black py-2">
                    <input type="text" value={number_phone} onChange={(e) => setNumberPhone(e.target.value)} class="bg-transparent border-none w-96 text-gray-700 mr-3 py-2 px-2 focus:outline-none " placeholder="Number Phone" aria-label="Number Phone" />            
                  </div>
                  <div class=" items-center border-b border-black py-2">
                    <input type="text" value={alamat} onChange={(e) => setAlamat(e.target.value)} class=" bg-transparent border-none w-96 text-gray-700 mr-3 py-2 px-2 focus:outline-none "  placeholder="Adress" aria-label="Adress" />
                  </div>
                  <div class=" items-center border-b border-black py-2">
                    <input type="text" value={gambar_profil} onChange={(e) => setProfil(e.target.value)} class=" bg-transparent border-none w-96 text-gray-700 mr-3 py-2 px-2 focus:outline-none "  placeholder="Url Profil" aria-label="Url Profil" />
                  </div>
                <div class="mt-8">
                  <button
                    class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                    Create
                  </button>
                </div>
              </form>
            </div>           
          </div>
      </div>
      )
}

export default Register;
