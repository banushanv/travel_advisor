import React from 'react';

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

 const SimpleMap=()=>{
  const defaultProps = {
    center: {
      lat: 6.9271,
      lng: 79.8612
    },
    zoom: 13
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '85vh', width: '100%',paddingTop: '12px'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={6.9271}
          lng={79.8612}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
export default SimpleMap; 