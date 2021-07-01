import { useSelector } from 'react-redux';

function App() {
  const state = useSelector((state) => ({ ...state }));
  console.log('state', state);
  return <div className='App'>Eioeio </div>;
}

export default App;
