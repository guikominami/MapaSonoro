import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import IconMap from '../components/IconMap';

import iconVoltar from '../assets/imgs/icon-voltar.png';
import iconCarroca from '../assets/imgs/map/icon-carroca.png';
import iconBruxas from '../assets/imgs/map/icon-bruxas.png';
import iconBarao from '../assets/imgs/map/icon-barao.png';
import iconPadre from '../assets/imgs/map/icon-padre.png';
import iconNoiva from '../assets/imgs/map/icon-noiva.png';
import iconDunga from '../assets/imgs/map/icon-dunga.png';
import iconIgreja from '../assets/imgs/map/icon-igreja.png';

import IconMapButton from '../components/IconMapButton';

const Experiencias = () => {
  const [openPanel, setOpenPanel] = useState<boolean>(false);

  function handleButtonClick(id: string) {
    console.log(id);
  }

  return (
    <section
      className='
        bg-[url(/images/map/mapa-mobile.jpg)] 
        md:bg-[url(/images/map/mapa-desktop.jpg)]
        bg-cover bg-no-repeat h-[690px]
      '
    >
      <div className='pt-2 pl-2'>
        <Link to='/'>
          <img className='w-20' src={iconVoltar} alt='voltar' />
        </Link>
      </div>
      <div id='icons' className='grid grid-cols-6'>
        <div className='mt-4 ml-10 w-18'>
          <IconMapButton
            iconName={iconCarroca}
            alternativeText='Carroça'
            onButtonClick={() => handleButtonClick('carroca')}
          />
        </div>
        <div id='bruxa-dunga'>
          <div className='mt-14 ml-8 w-16'>
            <IconMapButton
              iconName={iconBruxas}
              alternativeText='Bruxas'
              onButtonClick={() => handleButtonClick('bruxas')}
            />
          </div>
          <div className='mt-88 ml-6 w-16'>
            <img src={iconDunga} alt='Dunga Ropdrigues' />
            <IconMapButton
              iconName={iconDunga}
              alternativeText='Dunga Rodrigues'
              onButtonClick={() => handleButtonClick('bruxas')}
            />
          </div>
        </div>
        <div id='barao-noiva' className='mt-25 ml-8 w-16'>
          <div className='mt-4'>
            <IconMapButton
              iconName={iconBarao}
              alternativeText='Barão'
              onButtonClick={() => handleButtonClick('barao')}
            />
          </div>
          <div className='mt-1'>
            <IconMapButton
              iconName={iconNoiva}
              alternativeText='Noiva'
              onButtonClick={() => handleButtonClick('noiva')}
            />
          </div>
        </div>
        <div className='mt-14 w-18 ml-8'>
          <IconMapButton
            iconName={iconPadre}
            alternativeText='padre'
            onButtonClick={() => handleButtonClick('padre')}
          />
        </div>
        <div className='mt-4 w-18 ml-5'>
          <IconMapButton
            iconName={iconIgreja}
            alternativeText='igreja'
            onButtonClick={() => handleButtonClick('igreja')}
          />
        </div>
      </div>
    </section>
  );
};

export default Experiencias;
