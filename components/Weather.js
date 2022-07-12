import React from "react";
import propTypes from "prop-types"
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const Weather = ({temp, condition}) => {
    const WeatherOptions = {
        Thunderstorm:{ iconName:'thunderstorm-outline'},
        Drizzle:{iconName:'rainy'},
        Rain:{iconName:'rainy'},
        Snow:{iconName:'snow'},
        Mist:{iconName:'cloudy'},
        Smoke:{iconName:'cloudy'},
        Haze:{iconName:'cloudy'},
        Dust:{iconName:'sunny'},
        Fog:{iconName:'cloudy'},
        Sand:{iconName:'sunny'},
        Clear:{iconName:'sunny-sharp'},
        Clouds:{iconName:'cloud'},
    }
    return (
        <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.container}
        >
            <StatusBar barStyle='light-content'/>
            <View style={styles.halfContainer}>
                <Ionicons name={WeatherOptions[condition].iconName} size={96} color='white'/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer}>

            </View>
        </LinearGradient>
    )
}

export default Weather

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Clear', 'Clouds']).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp:{
        fontSize: 42,
        color: 'white'
    }
});