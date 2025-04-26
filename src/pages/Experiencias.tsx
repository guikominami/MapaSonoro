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

  const [idMapIcon, setIdMapIcon] = useState<string>('');

  function handleButtonClick(id: string) {
    setIdMapIcon(id);
    setOpenPanel(true);
  }

  function handleIconCloseClick() {
    setOpenPanel(false);
  }

  return (
    <section
      className='
        bg-[url(/images/map/mapa-mobile.jpg)] 
        md:bg-[url(/images/map/mapa-desktop.jpg)]
        bg-cover bg-no-repeat h-[690px]
      '
    >
      {openPanel && (
        <MapPanel iconId={idMapIcon} onCloseIconClick={handleIconCloseClick} />
      )}

      <div className='pt-2 pl-2'>
        <Link to='/'>
          <img className='w-20' src={iconVoltar} alt='voltar' />
        </Link>
      </div>
      <div id='map'>
        <div id='superior' className='grid grid-cols-6 mt-8'>
          <IconMapButton
            position='ml-10 w-18'
            iconName={iconCarroca}
            alternativeText='Carroça'
            onButtonClick={() => handleButtonClick('carroca')}
          />
          <IconMapButton
            position='mt-10 ml-10 w-16'
            iconName={iconBruxas}
            alternativeText='Bruxas'
            onButtonClick={() => handleButtonClick('bruxas')}
          />
          <IconMapButton
            position='mt-24 ml-8 w-16'
            iconName={iconBarao}
            alternativeText='Barão'
            onButtonClick={() => handleButtonClick('barao')}
          />
          <IconMapButton
            position='mt-12 w-18 ml-8'
            iconName={iconPadre}
            alternativeText='padre'
            onButtonClick={() => handleButtonClick('padre')}
          />
          <IconMapButton
            position='mt-2 w-18 ml-6'
            iconName={iconIgreja}
            alternativeText='igreja'
            onButtonClick={() => handleButtonClick('igreja')}
          />
        </div>
        <div id='inferior' className='grid grid-cols-6'>
          <IconMapButton
            position='col-3 w-16 ml-10'
            iconName={iconNoiva}
            alternativeText='Noiva'
            onButtonClick={() => handleButtonClick('noiva')}
          />
          <IconMapButton
            position='col-3 mt-66 w-16'
            iconName={iconDunga}
            alternativeText='Dunga Rodrigues'
            onButtonClick={() => handleButtonClick('bruxas')}
          />
        </div>
      </div>
    </section>
  );
};

export default Experiencias;
