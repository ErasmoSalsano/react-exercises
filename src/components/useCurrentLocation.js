import { useState } from "react";

export function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const fetchLocation = async ()=>{
    setLoading(true)
    try{navigator.geolocation.getCurrentPosition(
     (position)=>setLocation(position), (error)=>setError(error)
    );}catch(e){
      console.log(e);
    }
    setLoading(false)
  }

  return({
    location: location,
    getLocation: fetchLocation,
    error: error,
    loading: loading
  })
}