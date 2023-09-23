import React, { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [telefono, setTelefono] = useState('');
  const [registros, setRegistros] = useState([]);
  const [errorNombre, setErrorNombre] = useState('');
  const [errorApellidoPaterno, setErrorApellidoPaterno] = useState('');
  const [errorTelefono, setErrorTelefono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de nombre: solo letras
    if (!/^[A-Za-z\s]+$/.test(nombre)) {
      setErrorNombre('Ingrese un nombre');
      return;
    } else {
      setErrorNombre('');
    }

    // Validación de apellido paterno: solo letras
    if (!/^[A-Za-z\s]+$/.test(apellidoPaterno)) {
      setErrorApellidoPaterno('Ingrese un apellido paterno válido');
      return;
    } else {
      setErrorApellidoPaterno('');
    }

    // Validación de teléfono
    if (!/^[0-9]+$/.test(telefono) || telefono.length < 10) {
      setErrorTelefono('Número de teléfono');
      return;
    } else {
      setErrorTelefono('');
    }

    // Crear un nuevo registro
    const nuevoRegistro = {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      telefono,
    };

    // Agregar el registro a la lista de registros
    setRegistros([...registros, nuevoRegistro]);

    // Limpiar después de guardar
    setNombre('');
    setApellidoPaterno('');
    setApellidoMaterno('');
    setTelefono('');
  };

  const handleCancelar = () => {
    // Limpiar al cancelar
    setNombre('');
    setApellidoPaterno('');
    setApellidoMaterno('');
    setTelefono('');
  };

  return (
    <div>
      <h1>Mi Formulario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          {errorNombre && <p>{errorNombre}</p>}
        </div>
        <div>
          <label>Apellido Paterno:</label>
          <input
            type="text"
            value={apellidoPaterno}
            onChange={(e) => setApellidoPaterno(e.target.value)}
          />
          {errorApellidoPaterno && <p>{errorApellidoPaterno}</p>}
        </div>
        <div>
          <label>Apellido Materno:</label>
          <input
            type="text"
            value={apellidoMaterno}
            onChange={(e) => setApellidoMaterno(e.target.value)}
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
          {errorTelefono && <p>{errorTelefono}</p>}
        </div>
        <div>
          <button type="submit">Guardar</button>
          <button type="button" onClick={handleCancelar}>
            Cancelar
          </button>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((registro, index) => (
            <tr key={index}>
              <td>{registro.nombre}</td>
              <td>{registro.apellidoPaterno}</td>
              <td>{registro.apellidoMaterno}</td>
              <td>{registro.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Formulario;
