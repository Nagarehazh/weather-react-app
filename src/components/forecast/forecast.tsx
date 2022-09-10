import React from 'react';
import { Accordion, AccordionItem, AccordionItemPanel, AccordionItemHeading, AccordionItemButton } from 'react-accessible-accordion';
import styles from './forecast.module.css';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export function ForeCast(props: { data: { list: any[]; }; })  {
    const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  
  return (
    <>
      {/* <label className={styles.title}>Daily</label> */}
      <Accordion allowZeroExpanded className={styles.mainItemContainer}>
        {props.data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className={styles.dailyItem}>
                  <img src={`icons/${item.weather[0].icon}.png`} className={styles.iconSmall} alt="weather" />
                  <label className={styles.dailyItemDay}>{forecastDays[idx]}</label>
                  <label className={styles.description}>{item.weather[0].description}</label>
                  <label className={styles.minMax}>{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className={styles.dailyDetailsGrid}>
                <div className={styles.dailyDetailsGridItem}>
                  <label>Pressure:</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className={styles.dailyDetailsGridItem}>
                  <label>Humidity:</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className={styles.dailyDetailsGridItem}>
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className={styles.dailyDetailsGridItem}>
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className={styles.dailyDetailsGridItem}>
                  <label>Sea level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className={styles.dailyDetailsGridItem}>
                  <label>Feels like:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
  
};