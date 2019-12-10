import React from 'react';
import GoogleMapReact from 'google-map-react';

const isClient = typeof window !== 'undefined';

 const GoogleMap = ({address, googleMapsApiKey}) => {
  const lat = parseFloat(address.lat);
  const lng = parseFloat(address.lng);
  return (
    <section className="google-map">
      <div className="map" style={{ height: '500px', width: '500px' }}>
        { isClient && (
          <GoogleMapReact
            bootstrapURLKeys={{ key: googleMapsApiKey }}
            defaultCenter={[lat, lng]}
            defaultZoom={14}
          >
            <div
              className="marker"
              lat={lat}
              lng={lng}
            />
          </GoogleMapReact>
        )}
      </div>
    </section>
  );
}

export default GoogleMap;