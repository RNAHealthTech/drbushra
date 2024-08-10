// components/ClientSideMap.tsx
import React from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import MapComponent from './MapComponent';

const ClientSideMap: React.FC = () => {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    const apiKey = process.env.GOOGLE_MAPS_API_KEY || 'AIzaSyAVnYV6Yc5DN-17dinZ_hdtKJEdwpMfl9c';
    if (!apiKey) {
        console.error("Google Maps API key is not set");
        return <div>Error: Google Maps API key is not set</div>;
    }

    const render = (status: Status) => {
        switch (status) {
            case Status.LOADING:
                return <div>Loading...</div>;
            case Status.FAILURE:
                return <div>Error loading map</div>;
            case Status.SUCCESS:
                return <MapComponent />;
        }
    };

    return (
        <div className="w-full h-full min-h-[300px] bg-peacher">
            <Wrapper apiKey={apiKey} render={render} libraries={['maps', 'marker']} />
        </div>
    );
};

export default ClientSideMap;