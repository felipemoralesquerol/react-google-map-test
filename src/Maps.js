import React from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap
} from 'react-google-maps';

const Map = (props)=> {
    return(
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{lat: -34.887896, lng: -58.008219}}
       
      />
    )
};

export default withScriptjs(
  withGoogleMap(
    Map
  )
)