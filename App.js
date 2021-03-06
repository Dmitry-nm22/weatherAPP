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
        try {
            // запрашиваем погоду и сетаем ответ в стейт
            const {
                data: {
                    main: {temp},
                    weather
                }
            } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
            setTemp(temp)
            setCondition(weather[0].main)
            setIsLoading(false)
        } catch (error) {
            // обрабатываем ошибку,если запрос не прошел
            setErrorMsg(error)
            setIsLoading(false)
        }
    }

    React.useEffect(() => {
        (async () => {
            //запрашиваем раззрешение использовать геопозицию
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status === 'granted') {
                //получаем текущее местоположение
                let location = await Location.getCurrentPositionAsync({});
                //сетаем широту и долготу в стэйт
                await getWeather(location.coords.latitude, location.coords.longitude)
                setLocation(location.coords);
                setIsLoading(false)
            } else {
                //обрабатываем ошибку
                setErrorMsg('Permission to access location was denied');
                return;
            }
        })();
    }, []);

    let text = 'получение погоды...';
    if (errorMsg) {
        text = errorMsg;
    }

    return (
        isLoading ? <Loading text={text}/> : <Weather temp={Math.round(temp)} condition={condition}></Weather>
    )
}


