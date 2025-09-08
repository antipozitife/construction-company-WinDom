import React, { useEffect, useState } from 'react';
import img1 from '../../img/IMGMap1.svg';
import img2 from '../../img/IMGMap2.svg';
import img3 from '../../img/IMGMap3.svg';
import frame from '../../img/orangeLine.svg'
import './css/SalesOfficeMap.css';

declare global {
  interface Window {
    ymaps: any;
  }
}

const OFFICE_COORDS = [55.755160, 49.274615]; // Координаты офиса

const SalesOfficeMap = () => {
  const [map, setMap] = useState<any>(null);
  const [multiRoute, setMultiRoute] = useState<any>(null);

  useEffect(() => {
    const ymapsScriptSrc = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';

    const initMap = () => {
      const ymaps = window.ymaps;

      const mapInstance = new ymaps.Map('map', {
        center: OFFICE_COORDS,
        zoom: 17,
        controls: ['zoomControl', 'fullscreenControl'],
      });

      const placemark = new ymaps.Placemark(
        OFFICE_COORDS,
        {
          balloonContent: 'Win Dom ★3.5<br>ул. Яркая 31 Б<br>Строительная компания',
        },
        {
          preset: 'islands#redDotIcon',
          iconColor: '#f07c00',
        }
      );

      mapInstance.geoObjects.add(placemark);
      setMap(mapInstance);
    };

    if (window.ymaps) {
      window.ymaps.ready(initMap);
    } else {
      const existingScript = document.querySelector(`script[src="${ymapsScriptSrc}"]`);
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = ymapsScriptSrc;
        script.async = true;
        script.onload = () => window.ymaps.ready(initMap);
        document.head.appendChild(script);
      } else {
        existingScript.addEventListener('load', () => window.ymaps.ready(initMap));
      }
    }

    return () => {
      if (map) {
        map.destroy();
      }
    };
  }, []);

  const buildRoute = () => {
    if (!map || !window.ymaps) return;
    const ymaps = window.ymaps;

    // Удалить предыдущий маршрут
    if (multiRoute) {
      map.geoObjects.remove(multiRoute);
      setMultiRoute(null);
      return;
    }

    const createRoute = (userCoords: number[]) => {
      const route = new ymaps.multiRouter.MultiRoute(
        {
          referencePoints: [userCoords, OFFICE_COORDS],
          params: {
            routingMode: 'auto',
            results: 1,
          },
        },
        {
          boundsAutoApply: true,
          panelMaxWidth: 300,
        }
      );

      route.model.events.add('requestsuccess', () => {
        console.log('✅ Маршрут успешно построен');
      });

      map.geoObjects.add(route);
      setMultiRoute(route);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = [position.coords.latitude, position.coords.longitude];
          createRoute(coords);
        },
        (error) => {
          console.warn('⚠️ Geolocation error:', error);
          alert('Не удалось определить ваше местоположение. Используется центр Казани.');
          createRoute([55.8304307, 49.0660806]); // Казань центр
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000,
        }
      );
    } else {
      alert('Ваш браузер не поддерживает геолокацию');
      createRoute([55.8304307, 49.0660806]);
    }
  };

  return (
    <div className="sales-office-section">
      <h2 className="section-title">
        <span className="orange">ОФИС </span>
        <span className='black'>ПРОДАЖ</span>
        <img src={frame}/>
      </h2>

      <div className="map-content">
        <div className="map-block">
          <div id="map" style={{ width: '100%', height: '100%' }} />

          <div className="info-block">
            <h3>Центральный офис</h3>
            <p>Вы можете обратиться к нашим менеджерам по любому вопросу</p>

            <ul>
              <li>
                <img src={img1} alt="location" />
                <span>г. Казань, ул. Яркая 31 Б</span>
              </li>
              <li>
                <img src={img2} alt="clock" />
                <span>Пн-Сб: с 9:00 до 18:00</span>
              </li>
              <li>
                <img src={img3} alt="phone" />
                <span>+7 (962) 555-25-25</span>
              </li>
            </ul>

            <a
                className="route-button"
                href="https://yandex.ru/maps/43/kazan/?from=api-maps&ll=49.274615%2C55.755160&mode=routes&origin=jsapi_2_1_79&rtext=~55.755160%2C49.274615&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DIgoNNRlFQhVJBV9C&z=17"
                target="_blank"
                rel="noopener noreferrer"
                >
                Проложить маршрут
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOfficeMap;
