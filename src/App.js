import { useState, useCallback, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);




  const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

  const fetchCocktailHandler = useCallback(() => {
    setLoading(true);

    axios.get(url).then(res=> {
      console.log(res.data);
      setData(res.data.drinks);
    }).catch(e=>console.log(e))
    .finally(()=>setLoading(false))
  }, [])

  useEffect(() => {
    fetchCocktailHandler();
  }, [fetchCocktailHandler]);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
