import { useState } from 'react';
import axios from 'axios';

export default useFetchData(path) {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:3001' + path)
    .then(response => {
      setData(response.data);
    });
  }, []);
  return { data };
}