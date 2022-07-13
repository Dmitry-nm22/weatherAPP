import React from "react";
import propTypes from "prop-types"
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const Weather = ({temp, condition}) => {
    const WeatherOptions = {
        Thunderstorm:{
            iconName:'thunderstorm-outline',
            color:['#4B79A1','#283E51'],
            title:'Сиди дома!',
            subTitle:'Тебя снесет!',
        },
        Drizzle:{
            iconName:'rainy',
            color:['#4B79A1','#283E51'],
            title:'Возьми зонт.',
            subTitle:'Возможно дождь усилится.',
        },
        Rain:{
            iconName:'rainy',
            color:['#2193b0','#6dd5ed'],
            title:'На улице дождь.',
            subTitle:'Возможно он скоро кончится...',
        },
        Snow:{
            iconName:'snow',
            color:['#E0EAFC','#CFDEF3'],
            title:'На улице снег.',
            subTitle:'Лепите снеговиков!',
        },
        Smoke:{
            iconName:'cloudy',
            color:['#F2F2F2','#DBDBDB','#EAEAEA'],
            title:'На улице смог.',
            subTitle:'Возможно плохая видимость!',
        },
        Haze:{
            iconName:'cloudy',
            color:['#fceabb','#f8b500'],
            title:'На улице снег.',
            subTitle:'Лепите снеговиков!',
        },
        Dust:{
            iconName:'sunny',
            color:['#fceabb','#f8b500'],
            title:'Пыльно!',
            subTitle:'Лучше закройте окна.',
        },
        Fog:{
            iconName:'cloudy',
            color:['#F2F2F2','#DBDBDB','#EAEAEA'],
            title:'На улице туман!',
            subTitle:'Видимость снижена.',
        },
        Sand:{
            iconName:'sunny',
            color:['#fceabb','#f8b500'],
            title:'Пыльно!',
            subTitle:'Лучше закройте окна.',
        },
        Clear:{
            iconName:'sunny-sharp',
            color:['#2980B9','#6DD5FA','#FFFFFF'],
            title:'На улице солнечно!',
            subTitle:'Не забудь очки.',
        },
        Clouds:{
            iconName:'cloud',
            color:['#D3CCE3','#E9E4F0','#E9E4F0'],
            title:'Облачно!',
            subTitle:'Возможно пойдет дождь.',
        },
    }
    return (
        <LinearGradient
            colors={WeatherOptions[condition].color}
            style={styles.container}
        >
            <StatusBar barStyle='light-content'/>
            <View style={styles.halfContainer}>
                <Ionicons name={WeatherOptions[condition].iconName} size={96} color='white'/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{WeatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{WeatherOptions[condition].subTitle}</Text>
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
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp:{
        fontSize: 42,
        color: 'white'
    },
    title:{
        color:"white",
        fontSize: 44,
        fontWeight: '300',
        marginBottom: 10,
        textAlign:'left'
    },
    subTitle:{
        color:"white",
        fontWeight: '600',
        fontSize: 24,
        textAlign:'left'

    },
    textContainer:{
        flex: 1,
        paddingHorizontal: 40,
        alignItems: 'flex-start',
        justifyContent: 'center'
    }
});