import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Chat from './components/chat'

import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from "./config/firebase"
function App() {
  const [user, setuser] = useState(null)

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => setuser(result._tokenResponse))
      .catch(error => console.console.log(error));

  };

  return (
    <div className="App">
      {user ?
        <Chat user={user} />
        :
        <div className='p-5 text-center'>
          <div>
            <img
              src='https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww'
              alt="logo"
              width={400}
              height={400}
              className='pr-2'
              style={{ borderRadius: 200 }}
            />
          </div>
          <div>
            <button
              className='btn btn-primary'
              style={{ marginTop: "50px" }}
              onClick={handleSignIn}
            >
              Login
            </button>
          </div>
        </div>
      }
    </div>
  )
}

export default App
