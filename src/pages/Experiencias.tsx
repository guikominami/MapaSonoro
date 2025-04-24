import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import iconVoltar from '../assets/imgs/icon-voltar.png';
import iconCarroca from '../assets/imgs/map/icons/icon-carroca.png';
import iconBruxas from '../assets/imgs/map/icons/icon-bruxas.png';
import iconBarao from '../assets/imgs/map/icons/icon-barao.png';
import iconPadre from '../assets/imgs/map/icons/icon-padre.png';
import iconNoiva from '../assets/imgs/map/icons/icon-noiva.png';
import iconDunga from '../assets/imgs/map/icons/icon-dunga.png';
import iconIgreja from '../assets/imgs/map/icons/icon-igreja.png';

import IconMapButton from '../components/IconMapButton';
import MapPanel from '../components/MapPanel';
import MapPanelDunga from '../components/MapPanelDunga';

const Experiencias = () => {
  const [openPanel, setOpenPanel] = useState<boolean>(false);

  function handleButtonClick(id: string) {
    console.log(id);
    setOpenPanel(true);
  }

  return (
    <section
      className='
        bg-[url(/images/map/mapa-mobile.jpg)] 
        md:bg-[url(/images/map/mapa-desktop.jpg)]
        bg-cover bg-no-repeat h-[690px]
      '
    >
      {openPanel && <MapPanel />}

      <div className='pt-2 pl-2'>
        <Link to='/'>
          <img className='w-20' src={iconVoltar} alt='voltar' />
        </Link>
      </div>
      <div id='icons' className='grid grid-cols-6 mt-8'>
        <IconMapButton
          position='ml-10 w-18'
          iconName={iconCarroca}
          alternativeText='Carroça'
          onButtonClick={() => handleButtonClick('carroca')}
        />

        <div id='bruxa-dunga' className='mt-15 ml-8'>
          <IconMapButton
            position='w-16'
            iconName={iconBruxas}
            alternativeText='Bruxas'
            onButtonClick={() => handleButtonClick('bruxas')}
          />
          <IconMapButton
            position='mt-88 w-16'
            iconName={iconDunga}
            alternativeText='Dunga Rodrigues'
            onButtonClick={() => handleButtonClick('bruxas')}
          />
        </div>
        <div id='barao-noiva' className='mt-25 ml-8 w-16'>
          <IconMapButton
            position='mt-4'
            iconName={iconBarao}
            alternativeText='Barão'
            onButtonClick={() => handleButtonClick('barao')}
          />
          <IconMapButton
            position='mt-1'
            iconName={iconNoiva}
            alternativeText='Noiva'
            onButtonClick={() => handleButtonClick('noiva')}
          />
        </div>
        <IconMapButton
          position='mt-14 w-18 ml-8'
          iconName={iconPadre}
          alternativeText='padre'
          onButtonClick={() => handleButtonClick('padre')}
        />
        <IconMapButton
          position='mt-4 w-18 ml-5'
          iconName={iconIgreja}
          alternativeText='igreja'
          onButtonClick={() => handleButtonClick('igreja')}
        />
      </div>
    </section>
  );
};

export default Experiencias;
