/* eslint-disable react-hooks/rules-of-hooks */
import { useFechtData } from "../hook/useFechtData";

const FechtData = () => {

  const url = "https://jsonplaceholder.typicode.com/users";


  const { dataFecht, error, isLoading } = useFechtData(url);

  return (
    <>
      <h2>Lista de usuario</h2>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  {
    isLoading
    ? <h4>Cargando</h4>
    : error
    ? <h4>Error{error}</h4>
    : <tbody>
        {
            dataFecht.map(usuario => {
                return (
                  <tr key={usuario.id}>
                    <th scope="row">{usuario.id}</th>
                    <td>{usuario.name}</td>
                    <td>{usuario.username}</td>
                    <td>{usuario.email}</td>
                  </tr>
                )
            })
        }
   
    </tbody>
  }
  
</table>
    </>
  );
};

export default FechtData;
