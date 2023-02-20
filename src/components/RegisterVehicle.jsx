//import { database } from '../firebase';
import { auth } from '../db/firebase_config';
import { useAuthState } from 'firebase/auth';
import { useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function VehicleForm() {
    //form vehicle
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleReset = () => {
    Array.from(document.querySelectorAll('input'));
    setBrand('');
    setModel('');
    setYear('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let newVehicle = {
        brand,
        model,
        year
    }

     
    if (brand && model && year.length === 4 ) {
        setErrorMessage(null)

        try {
            const response = await axios.post('http://localhost:3001/api/vehicle/', newVehicle).then(async (r) =>{
                console.log(`[POST api/vehicle] - Vehicle:  ${JSON.stringify(newVehicle, null, 2)}`)
                alert(`Vehiculo Guardado con Exito: ${JSON.stringify(newVehicle, null, 2)}`)});
                handleReset();
                await console.log(response)
    
            
          } catch (error) {
            console.error(error);
          }
    }
    else {
        setErrorMessage('Ingrese una marca, modelo y año de 4 digitos');
    }
  }

  return (
    <div>
    <div className="p-3 mb-2 bg-dark bg-gradient text-dark">
 <ul className="list-group list-group-horizontal-sm">
    <ol>
      {/* Routes */}
      <Link to="/" className="fs-4 fw-bold text-light text-decoration-none">Login</Link>
    </ol >
    <ol >
      <Link to="/home" className="fs-4 fw-bold text-light text-decoration-none">Home</Link>
    </ol >
    <ol >
      <Link to="/register" className="fs-4 fw-bold text-light text-decoration-none">Registro vehiculo</Link>
    </ol>
  </ul>
  </div>

      <h1>Dar de alta vehículo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Marca" value={brand} onChange={(event) => setBrand(event.target.value)} />
        <input type="text" placeholder="Modelo" value={model} onChange={(event) => setModel(event.target.value)} />
        <input type="number" placeholder="Año" value={year} onChange={(event) => setYear(event.target.value)} />
        <button type="submit">Registrar</button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}


export default VehicleForm;