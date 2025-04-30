import { useState } from 'react';

import { Link } from 'react-router-dom';

import Section from '../components/Section';

import iconVoltar from '../assets/imgs/icon-voltar.png';
import iconCarroca from '../assets/imgs/map/icons/icon-carroca.png';
import iconBruxas from '../assets/imgs/map/icons/icon-bruxas.png';
import iconBarao from '../assets/imgs/map/icons/icon-barao.png';
import iconPadre from '../assets/imgs/map/icons/icon-padre.png';
import iconNoiva from '../assets/imgs/map/icons/icon-noiva.png';
import iconDunga from '../assets/imgs/map/icons/icon-dunga.png';
import iconIgreja from '../assets/imgs/map/icons/icon-igreja.png';
import iconDuvida from '../assets/imgs/map/icons/icon-duvidas.png';
import iconFicha from '../assets/imgs/map/icons/icon-ficha-mapa.png';

import IconMapButton from '../components/IconMapButtonTales';
import IconMapButtonBuildings from '../components/IconMapButtonBuildings';
import MapPanel from '../components/MapPanel/MapPanel';
import MapPanelDunga from '../components/MapPanel/MapPanelDunga';
import MapPanelBuilding from '../components/MapPanel/MapPanelBuilding';
import MapPanelExplanation from '../components/MapPanel/MapPanelExplanation';

const Experiencias = () => {
  const [openPanel, setOpenPanel] = useState<number>(0);

  const [idMapIcon, setIdMapIcon] = useState<string>('');

  function handleButtonClick(id: string, panelType: number) {
    setIdMapIcon(id);
    setOpenPanel(panelType);
  }

  function handleIconCloseClick() {
    setOpenPanel(0);
  }

  return (
    <Section imgMobile='mapa-mobile' imgDesktop='mapa-desktop'>
      {openPanel === 1 && (
        <MapPanel iconId={idMapIcon} onCloseIconClick={handleIconCloseClick} />
      )}

      {openPanel === 2 && (
        <MapPanelDunga onCloseIconClick={handleIconCloseClick} />
      )}

      {openPanel === 3 && (
        <MapPanelBuilding
          iconId={idMapIcon}
          onCloseIconClick={handleIconCloseClick}
        />
      )}

      {openPanel === 4 && (
        <MapPanelExplanation
          iconId={idMapIcon}
          onCloseIconClick={handleIconCloseClick}
        />
      )}

      <div className='pt-2 pl-2'>
        <Link to='/'>
          <img className='w-20' src={iconVoltar} alt='voltar' />
        </Link>
      </div>
      <div id='map'>
        <IconMapButton
          position='w-18 relative top-8 left-13'
          iconName={iconCarroca}
          alternativeText='Carroça'
          onButtonClick={() => handleButtonClick('carroca', 1)}
        />
        <IconMapButton
          position='w-16 relative top-4 left-29'
          iconName={iconBruxas}
          alternativeText='Bruxas'
          onButtonClick={() => handleButtonClick('bruxa', 1)}
        />
        <IconMapButton
          position='w-18 relative top-4 left-38'
          iconName={iconBarao}
          alternativeText='Barão'
          onButtonClick={() => handleButtonClick('barao', 1)}
        />
        <IconMapButton
          position='w-18 absolute top-30 left-56'
          iconName={iconPadre}
          alternativeText='padre'
          onButtonClick={() => handleButtonClick('padre', 1)}
        />
        <IconMapButton
          position='w-18 absolute top-18 right-6'
          iconName={iconIgreja}
          alternativeText='igreja'
          onButtonClick={() => handleButtonClick('igreja', 1)}
        />
        <IconMapButton
          position='w-16 absolute top-52 left-40'
          iconName={iconNoiva}
          alternativeText='Noiva'
          onButtonClick={() => handleButtonClick('noiva', 1)}
        />
        <IconMapButton
          position='w-16 absolute bottom-10 left-30'
          iconName={iconDunga}
          alternativeText='Dunga Rodrigues'
          onButtonClick={() => handleButtonClick('dunga', 2)}
        />
        <IconMapButtonBuildings
          position='absolute top-24 left-46'
          onButtonClick={() => handleButtonClick('mandioca', 3)}
        />
        <IconMapButtonBuildings
          position='absolute top-12 left-52'
          onButtonClick={() => handleButtonClick('relogio', 3)}
        />
        <IconMapButtonBuildings
          position='absolute top-48 left-23'
          onButtonClick={() => handleButtonClick('cine', 3)}
        />
        <IconMapButtonBuildings
          position='absolute top-54 left-30'
          onButtonClick={() => handleButtonClick('catedral', 3)}
        />
        <IconMapButtonBuildings
          position='absolute top-68 left-26'
          onButtonClick={() => handleButtonClick('palacio', 3)}
        />
        <IconMapButtonBuildings
          position='absolute bottom-56 left-32'
          onButtonClick={() => handleButtonClick('santuario', 3)}
        />
        <IconMapButtonBuildings
          position='absolute bottom-17 left-11'
          onButtonClick={() => handleButtonClick('sesc', 3)}
        />
        <IconMapButtonBuildings
          position='absolute top-158 left-14'
          onButtonClick={() => handleButtonClick('paroquia', 3)}
        />
        <IconMapButton
          position='w-10 absolute top-154 right-13'
          iconName={iconDuvida}
          alternativeText='Dúvidas'
          onButtonClick={() => handleButtonClick('doubts', 4)}
        />
        <IconMapButton
          position='w-10 absolute top-154 right-4'
          iconName={iconFicha}
          alternativeText='Ficha técnica'
          onButtonClick={() => handleButtonClick('team', 4)}
        />
      </div>
    </Section>
  );
};

export default Experiencias;
