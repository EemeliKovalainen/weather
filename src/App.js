import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import Weatherinfo from './Weatherinfo';

function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setIsLoaded(false);
      }, (error) => {
        alert(error);
      })
    }
    else {
      alert('Your browser does not support geolocation!')
    }
  }, [])

  if (!isLoaded) {
    return <p>Loading...</p> 
  }
   else {
    return (
      <div className="content">
      <p>
        Position:&nbsp;
        {lat.toFixed(3)},
        {lng.toFixed(3)}
      </p>
      <Weatherinfo lat={lat} lng={lng} />
      </div>
    );
  }
}

export default App();