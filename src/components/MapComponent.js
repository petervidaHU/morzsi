import * as React from "react"
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"

const containerStyle = {
  width: "100%",
  height: "800px",
}

const center = {
  lat: 47.50758,
  lng: 21.66485,
}

export function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GOOGLE_MAP_API,
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <div id="section-map">
      {isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <div>loading...</div>
      )}
    </div>
  )
}
