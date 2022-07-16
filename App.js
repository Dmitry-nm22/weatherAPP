import Loading from "./components/Loading";
import * as Location from 'expo-location';
import React from "react";
import axios from "axios";
import Weather from "./components/Weather";

export default function App() {

    const [location, setLocation] = React.useState(null);
    const [errorMsg, setErrorMsg] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [temp, setTemp] = React.useState();
    const [condition, setCondition] = React.useState();

    const API_KEY = '9368b1c65dbff106a4c6c46794e2822b'

    const getWeather = async (latitude, longitude) => {
        const {data: {main:{temp}, weather}} = await axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
        setTemp(temp)
        setCondition(weather[0].main)
        setIsLoading(false)
    }

    React.useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                setIsLoading(false)
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            await getWeather(location.coords.latitude, location.coords.longitude)
            setLocation(location.coords);
        })();
    }, []);

    // let text = 'Waiting..';
    // if (errorMsg) {
    //   text = errorMsg;
    // } else if (location) {
    //   text = JSON.stringify(location);
    // }

    return (
        isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}></Weather>
    )
}


