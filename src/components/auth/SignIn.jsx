import { useState} from 'react';

import { auth } from '../../db/firebase_config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate} from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  
  const handleRegister = (event) => {
    event.preventDefault();
    if (email && password.length >= 6) {
        // Envía los datos authv
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => console.log('Register done'))
        .catch((error) => console.log(error));
      } else {
        setErrorMessage('Ingrese un email válido y una contraseña de al menos 6 caracteres');
      }

   
  }

  const handleLogin = (event) => {
    event.preventDefault();
    if (email && password.length >= 6) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate('/home'); })
      .catch((error) => console.log(error));
    }
    else {
        setErrorMessage('Ingrese un email válido y una contraseña de al menos 6 caracteres');
      }
  }

  return (
    <div>
         <div className="p-3 mb-2 bg-dark bg-gradient text-dark">
      <h2 className='text-light'>Inicio de sesión</h2>
      </div>
      <h3>Registro</h3>
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Correo electrónico" value={email} onChange={(event) => setEmail(event.target.value)} />
        <input type="password" placeholder="Contraseña" value={password} onChange={(event) => setPassword(event.target.value)} />
        <button type="submit">Registrarse</button>
      </form>
      <br/>
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Correo electrónico" value={email} onChange={(event) => setEmail(event.target.value)} />
        <input type="password" placeholder="Contraseña" value={password} onChange={(event) => setPassword(event.target.value)} />
        <button type="submit">Iniciar sesión</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default SignIn;