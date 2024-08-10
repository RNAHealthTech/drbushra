import React, { useEffect, useRef } from 'react';


const center = { lat: 28.5894561904398, lng : 77.24568595637429};

const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const initMap = async () => {
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

      const map = new Map(mapRef.current!, {
        center,
        zoom: 15,
        mapId: 'd95230b11102f13',
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        zoomControl: false,

      });
      
      new AdvancedMarkerElement({
        map,
        position: center,
        title: 'Location Marker',
      });
    };

    initMap();
  }, []);

  return <div ref={mapRef} className='w-full h-full' />;
};

export default MapComponent;