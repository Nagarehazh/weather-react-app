import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import styles from './currentweather.module.css';


export function CurrentWeather(props: { data: {
    wind: any;
    main: any;
    weather: any; city: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; 
}; }) {
  return (
    <div className={styles.weather}>
        <div className={styles.top}>
            <div>
            <p className={styles.city}>{props.data.city}</p>
            <p className={styles.weatherDescription}>{props.data.weather[0].description}</p>
        </div>
        <img src={`icons/${props.data.weather[0].icon}.png`} alt="weather" className={styles.weatherIcon} />
        </div>
        <div className={styles.bottom}>
            <p className={styles.temperature}>{Math.round(props.data.main.temp)}°C</p>
            <div className={styles.details}>
                <div className={styles.parameterRow}>
                    <span className={styles.parameterLabelDetails}>Details</span>
                </div>
                <div className={styles.parameterRow}>
                    <span className={styles.parameterLabel}>Feels like</span>
                    <span className={styles.parameterValue}>{Math.round(props.data.main.feels_like)}°C</span>
                </div>
                <div className={styles.parameterRow}>
                    <span className={styles.parameterLabel}>Wind</span>
                    <span className={styles.parameterValue}>{props.data.wind.speed} m/s</span>
                </div>
                <div className={styles.parameterRow}>
                    <span className={styles.parameterLabel}>Humidity</span>
                    <span className={styles.parameterValue}>{props.data.main.humidity}%</span>
                </div>
                <div className={styles.parameterRow}>
                    <span className={styles.parameterLabel}>Pressure</span>
                    <span className={styles.parameterValue}>{props.data.main.pressure} hPa</span>
                </div>
            </div>
        </div>
    </div>
  );
}