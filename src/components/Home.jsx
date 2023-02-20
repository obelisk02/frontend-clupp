import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';


function VehicleList() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    async function fetchVehicles() {
      try {
        const response = await axios.get('http://localhost:3001/api/vehicle/');
        setVehicles(response.data.data);

        console.log(`[GET api/vehicle] - All Vehicle`)
        console.log(response.data.data)
      } catch (error) {
        console.error(error);
      }
    }

    fetchVehicles();
  }, []);


  const handleDelete = (id) => {
    console.log(`[DELETE api/vehicle/:id] - Vehicle id: ${id}`);
    axios.delete(`http://localhost:3001/api/vehicle/${id}`)
    .then(response => {
      console.log(response);
      alert(`Vehiculo ${id} ha sido eliminado`)

      //actualizar state => actualiza tabla listado en tiempo
      setVehicles( vehicles.filter((item) => item.id !== id));
   
    })
    .catch(error => {
      console.log(error);
    });
  } 

  const printData = () => {
    return (
        
     vehicles.map((vehicle) => (
        vehicle.data.deleted !== true ?
        <tr key={vehicle.data.id}>
          <td> {vehicle.data.brand}</td>
          <td> {vehicle.data.model}</td>
          <td> {vehicle.data.year}</td>
          <td><button onClick={() => handleDelete(vehicle.id)}>Eliminar</button></td>
        </tr>
        : '' 
      ))
    
    )}
  

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
      
      <h1 >Lista de vehículos</h1>
      

      <table className="table table-light table-striped">
      <thead>
        <tr className="table-primary">
          <th>Marca</th>
          <th>Modelo</th>
          <th>Año</th>
          <th>Estatus</th>
        </tr>
      </thead>
      <tbody>
      {printData()}
      </tbody>
    </table>
    </div>
  );
}

export default VehicleList