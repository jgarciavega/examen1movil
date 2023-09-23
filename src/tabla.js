
function Formulario() {
    
    return (
      <div>
        <h1>Mi Formulario</h1>
        <form onSubmit={handleSubmit}>
          {}
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
  