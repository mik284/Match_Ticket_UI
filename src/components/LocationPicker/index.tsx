import { ProFormSelect } from '@ant-design/pro-form';
import { Map, Marker, useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import { Form, Spin } from 'antd';
import { debounce } from 'lodash';
import { useCallback, useEffect, useState } from 'react';

const DefaultLocation = { lat: -1.286389, lng: 36.817223 };
const DefaultZoom = 15;
const MapHandler = ({ place }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !place) return;

    if (place.geometry?.viewport) {
      map.fitBounds(place.geometry?.viewport);
    }
  }, [map, place]);

  return null;
};

const CustomMapPicker = (props) => {
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    [],
  );
  const [loading, setLoading] = useState(false);
  const places = useMapsLibrary('places');
  const [defaultLocation, setDefaultLocation] = useState<{
    lat: number;
    lng: number;
  }>(DefaultLocation);
  const [selectedLocation, setSelectedLocation] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState();

  function handleChangeLocation(lat, lng, name, place_id) {
    props.onChange({ name, lat, lng, place_id });
  }

  const fetchPredictions = useCallback(
    debounce((input: string) => {
      if (!places || !input) {
        setOptions([]);
        return;
      }

      setLoading(true);
      const service = new places.AutocompleteService();
      service.getPlacePredictions(
        {
          input,
          componentRestrictions: { country: 'ke' },
        },
        (predictions: google.maps.places.AutocompletePrediction[] | null) => {
          setLoading(false);
          if (predictions) {
            const newOptions = predictions.map((prediction) => ({
              value: prediction.place_id,
              label: prediction.description,
            }));
            setOptions(newOptions);
          } else {
            setOptions([]);
          }
        },
      );
    }, 300),
    [places],
  );

  const handleSelect = (placeId: string) => {
    if (!places) return;

    const service = new places.PlacesService(document.createElement('div'));
    service.getDetails(
      {
        placeId,
        fields: ['geometry', 'name', 'formatted_address', 'place_id'],
      },
      (place: google.maps.places.PlaceResult | null) => {
        if (place) {
          setSelectedPlace(place);
          handleChangeLocation(
            place.geometry.location.lat(),
            place.geometry.location.lng(),
            place?.name,
            place?.place_id,
          );
          setDefaultLocation({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          });
          setSelectedLocation(true);
        }
      },
    );
  };

  useEffect(() => {
    if (places) {
      if (props?.value) {
        handleChangeLocation(
          props?.value?.lat,
          props?.value?.lng,
          props?.value?.name,
          props?.value?.place_id,
        );
        setDefaultLocation({ lat: props?.value?.lat, lng: props?.value?.lng });
        setSelectedLocation(true);
      }

      // Places library is loaded, you can initialize any additional setup here if needed
    }
  }, [places]);

  if (!places) return <div>Loading Places library...</div>;

  return (
    <div>
      <ProFormSelect
        className="map-search"
        showSearch
        placeholder="Search Venue location"
        options={options}
        fieldProps={{
          onSearch: fetchPredictions,
          onChange: handleSelect,
          value: props?.value?.name ? props?.value?.name : '',
          loading,
          notFoundContent: loading ? <Spin /> : null,
        }}
      />
      {selectedLocation && (
        <Map
          style={{ height: '300px' }}
          defaultZoom={DefaultZoom}
          defaultCenter={defaultLocation}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        >
          <Marker
            onDrag={(coordinates) => {
              handleChangeLocation(
                coordinates.latLng.lat(),
                coordinates.latLng.lng(),
                props?.value?.name ? props?.value?.name : '',
              );
              setDefaultLocation({
                lat: coordinates.latLng.lat(),
                lng: coordinates.latLng.lng(),
              });
            }}
            draggable
            position={defaultLocation}
          />
        </Map>
      )}
      <MapHandler place={selectedPlace} />
    </div>
  );
};

function LocationPicker() {
  return (
    <Form.Item
      label="Search Venue location"
      rules={[{ message: 'Kindly select location', required: true }]}
      name="location"
      hasFeedback
    >
      <CustomMapPicker />
    </Form.Item>
  );
}

export default LocationPicker;
