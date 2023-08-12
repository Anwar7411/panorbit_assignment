import React from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({data}) => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
    
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '400px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyAVIMA3htA504YDjkYqU_biEZAPyEIuEWU" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={data?.address?.geo?.lat}
              lng={data?.address?.geo?.lng}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      );
}

export default Map