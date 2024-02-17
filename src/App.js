import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUserData(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" bg-pink-700 flex justify-center items-center w-[100vw] h-[100vh]">

      {userData && <Card userData={userData} />}

    </div>
  );
}

export default App;
