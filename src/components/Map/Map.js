import React, {Component} from "react";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import {compose, withProps} from "recompose";
import {map} from "underscore";

const Map = compose(withProps({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyD_vysGBcAkp6DMhvF0xbubCjhLWdUxrXw&v=3.exp&libraries=geometry,drawing,places",
  loadingElement: <div className="map__loading-el"/>,
  containerElement: <div className="map__container-el"/>,
  mapElement: <div className="map__element"/>
}), withScriptjs, withGoogleMap)(props => (
  <GoogleMap zoom={props.zoom} center={{
    lat: props.center[1],
    lng: props.center[0]
  }}>
    {
    props.isMarkerShown && (<React.Fragment>
      {
        map(props.markers, (marker, i) => {
          return (<Marker key={i} position={{
              lat: marker[1],
              lng: marker[0]
            }}/>);
        })
      }
    </React.Fragment>)
  }
  </GoogleMap>));

export default Map;
