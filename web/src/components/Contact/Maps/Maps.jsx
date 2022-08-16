import React from 'react';
import {
<<<<<<< HEAD
	YMaps,
	Map,
	Placemark,
	FullscreenControl,
	ZoomControl,
	TrafficControl,
=======
   YMaps,
   Map,
   Placemark,
   FullscreenControl,
   ZoomControl,
   TrafficControl,
>>>>>>> dev
} from 'react-yandex-maps';
import style from './Maps.module.css';

export const Maps = () => {
<<<<<<< HEAD
	return (
		<div className={style.maps}>
			<YMaps>
				<div>
					<Map
						defaultState={{
							center: [55.75940649705946, 37.61112107239152],
							zoom: 17,
						}}
						width={800}
						height={800}
					>
						<Placemark geometry={[55.75940649705946, 37.61112107239152]} />
						<FullscreenControl option={{ float: 'left' }} />
						<TrafficControl option={{ float: 'left' }} />
						<ZoomControl option={{ float: 'left' }} />
					</Map>
				</div>
			</YMaps>
		</div>
	);
=======
   return (
      <div className={style.maps}>
         <YMaps>
            <div>
               <Map
                  defaultState={{
                     center: [55.75940649705946, 37.61112107239152],
                     zoom: 17,
                  }}
                  width={800}
                  height={800}
               >
                  <Placemark geometry={[55.75940649705946, 37.61112107239152]} />
                  <FullscreenControl option={{ float: 'left' }} />
                  <TrafficControl option={{ float: 'left' }} />
                  <ZoomControl option={{ float: 'left' }} />
               </Map>
            </div>
         </YMaps>
      </div>
   );
>>>>>>> dev
};
