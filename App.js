import Loading from "./components/Loading";
import * as Location from 'expo-location';
import React from "react";
import {Alert} from "react-native";

export default function App() {

  // const [location, setLocation] = React.useState(null);
  // const [errorMsg, setErrorMsg] = React.useState(null);
  // const getLocations = async ()=> {
  //   try {
  //     const response = await Location.requestForegroundPermissionsAsync()
  //     console.log(response)
  //     const location = await Location.getCurrentPositionAsync()
  //     console.log(location)
  //   }catch (err){
  //     Alert.alert('не могу определить местоположение', "сори")
  //   }
  // }
  // React.useEffect(() =>{
  //   getLocations()
  // })/
  // return (
  //    <Loading />
  // );

  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was deniedss');
        setIsLoading(false)
        return;
      };

      let location = await Location.getCurrentPositionAsync({});
      setIsLoading(true)
      setLocation(location.coords);
    })();
    console.log(location)
  }, []);

  // let text = 'Waiting..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }

  return (
      isLoading ? <Loading /> : null
  );
}


