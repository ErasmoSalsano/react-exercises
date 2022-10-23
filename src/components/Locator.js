import { useCurrentLocation } from "./useCurrentLocation";


export const Locator = ()=>{

  const {location, getLocation, error, loading} = useCurrentLocation();

  return(
    <div>
      <button onClick={getLocation}>Get Location</button>
      {loading && <h4>Loading...</h4>}
      {location && <p>Latitude: {location.coords.latitude} Longitude: {location.coords.longitude}</p>}
      {error && <p>{error}</p>}
    </div>
  )
}