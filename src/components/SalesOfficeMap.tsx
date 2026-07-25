import React, { useEffect, useRef, useState } from 'react';
import img1 from '../../img/IMGMap1.svg';
import img2 from '../../img/IMGMap2.svg';
import img3 from '../../img/IMGMap3.svg';
import frame from '../../img/orangeLine.svg';
import './css/SalesOfficeMap.css';

// Интерфейс пропсов для компонента SalesOfficeMap
interface SalesOfficeMapProps {
  id?: string; // Необязательный пропс id
}

declare global {
  interface Window {
    ymaps: any;
  }
}

const OFFICE_COORDS = [55.755160, 49.274615]; // Координаты офиса

const SalesOfficeMap: React.FC<SalesOfficeMapProps> = ({ id }) => {
  const mapRef = useRef<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [mapUnavailable, setMapUnavailable] = useState(false);


  useEffect(() => {
    if (!__YANDEX_MAPS_API_KEY__) {
      setMapUnavailable(true);
      return;
    }
    const ymapsScriptSrc = `https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=${encodeURIComponent(__YANDEX_MAPS_API_KEY__)}`;

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
          balloonContent: 'Win Dom ★3.5<br>ул. Яркая 31 Б',
        },
        {
          preset: 'islands#redDotIcon',
          iconColor: '#f07c00',
        }
      );

      placemark.events.add('click', () => {
        if (window.innerWidth <= 768) {
          setShowModal(true);
        }
      });


      mapInstance.geoObjects.add(placemark);
      mapRef.current = mapInstance;
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
        script.onerror = () => setMapUnavailable(true);
        document.head.appendChild(script);
      } else {
        existingScript.addEventListener('load', () => window.ymaps.ready(initMap));
      }
    }

    return () => {
      mapRef.current?.destroy();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="sales-office-section" id={id}>
      <h2 className="section-title">
        <span className="orange">ОФИС </span>
        <span className="black">ПРОДАЖ</span>
        <img src={frame} alt="frame" className="frame-img" />
      </h2>

      <div className="map-content">
        <div className="map-block">
          <div id="map" style={{ width: '100%', height: '100%' }}>
            {mapUnavailable && (
              <p className="map-fallback">
                Интерактивная карта доступна в production-конфигурации. Адрес офиса указан рядом.
              </p>
            )}
          </div>

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

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
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
      )}

    </div>
  );
};

export default SalesOfficeMap;
