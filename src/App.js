
import { useEffect,useState } from 'react';
import './App.css';
import Axios from 'axios';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';


function App() {
  const[data,setDate]=useState([])
  useEffect(()=>{
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      console.log(res.data)
    setDate(res.data)
  }).catch(err=>console.log(err))
  },[])

  const arr=data.map((data,index)=>{
    return(
      <tbody><tr>
      <td>{data.id}<button><AccessAlarmIcon/></button></td>
      <td>{data.title}</td>
      <td>{data.body}</td>
    </tr>
    </tbody>
    )
  })
  return (
    <div className="App" >
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>BODY</th>
        </tr>
        </thead>
        {arr}
        
      </table>
    </div>
  );
}

export default App;
