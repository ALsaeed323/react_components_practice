
import LocalStorage from './LocalStorage';
import UpdateLocalstorge from './UpdateLocalStorge';



export default function App() {
  
  const [name ,setName] = LocalStorage('Name ','');
  UpdateLocalstorge(name);
  return (
    <input value={name} onChange={e=>setName(e.target.value)}/>
  );
}
