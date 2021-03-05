import Temperature from './Temperature';

const WeatherCard = (props) => {
    return (
        <div>
            {props.children}
            <p>Current Temp: <Temperature temp={props.currentTemp} /></p>
            <p>High: <Temperature temp={props.highTemp} /></p>
            <p>Low: <Temperature temp={props.lowTemp} /></p>
        </div>
    )
}

export default WeatherCard;