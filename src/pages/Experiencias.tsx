import { useState } from 'react';

import iconCarroca from '../assets/imgs/map/icons/icon-carroca.png';
import iconBruxas from '../assets/imgs/map/icons/icon-bruxas.png';
import iconBarao from '../assets/imgs/map/icons/icon-barao.png';
import iconPadre from '../assets/imgs/map/icons/icon-padre.png';
import iconNoiva from '../assets/imgs/map/icons/icon-noiva.png';
import iconDunga from '../assets/imgs/map/icons/icon-dunga.png';
import iconIgreja from '../assets/imgs/map/icons/icon-igreja.png';
import iconDuvida from '../assets/imgs/map/icons/icon-duvidas.png';
import iconFicha from '../assets/imgs/map/icons/icon-ficha-mapa.png';
import imgMapMobile from '../assets/imgs/map/mapa-mobile.jpg';
import imgMapDesktop from '../assets/imgs/map/mapa-desktop.jpg';

import IconMapButton from '../components/IconMapButtonTales';
import IconMapButtonBuildings from '../components/IconMapButtonBuildings';
import BackButton from '../components/BackButton';
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
    <section>
      <div id='map' className='relative'>
        <div id='desktop' className='hidden md:block'>
          <img className='w-full' src={imgMapDesktop} alt='' />
        </div>
        <div id='mobile' className='block md:hidden'>
          <img src={imgMapMobile} alt='' />
        </div>
        {openPanel === 1 && (
          <MapPanel
            iconId={idMapIcon}
            onCloseIconClick={handleIconCloseClick}
          />
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
        <BackButton linkToGoBack='/' />
        <IconMapButton
          position='
            w-18 absolute top-[10%] left-[13%]
            md:w-45 md:top-[3%] md:left-[70%]
          '
          iconName={iconCarroca}
          alternativeText='Carroça'
          onButtonClick={() => handleButtonClick('carroca', 1)}
        />
        <IconMapButton
          position='
            w-16 absolute top-[15%] left-[30%]
            md:w-45 md:top-[13%] md:left-[80%]  
          '
          iconName={iconBruxas}
          alternativeText='Bruxas'
          onButtonClick={() => handleButtonClick('bruxa', 1)}
        />
        <IconMapButton
          position='
            w-18 absolute top-[23%] left-[39%]
            md:w-45 md:top-[28%] md:left-[70%] 
          '
          iconName={iconBarao}
          alternativeText='Barão'
          onButtonClick={() => handleButtonClick('barao', 1)}
        />
        <IconMapButton
          position='
            w-18 absolute top-[14%] left-[56%]
            md:w-45 md:top-[44%] md:left-[70%]             
          '
          iconName={iconPadre}
          alternativeText='padre'
          onButtonClick={() => handleButtonClick('padre', 1)}
        />
        <IconMapButton
          position='
            w-18 absolute top-[9%] right-[8%]
            md:w-45 md:top-[60%] md:left-[80%]    
          '
          iconName={iconIgreja}
          alternativeText='igreja'
          onButtonClick={() => handleButtonClick('igreja', 1)}
        />
        <IconMapButton
          position='
            w-16 absolute top-[32%] left-[42%]
            md:w-40 md:top-[35%] md:left-[58%]    
          '
          iconName={iconNoiva}
          alternativeText='Noiva'
          onButtonClick={() => handleButtonClick('noiva', 1)}
        />
        <IconMapButton
          position='
            w-16 absolute top-[83%] left-[30%]
            md:w-40 md:top-[38%] md:left-[9%] 
          '
          iconName={iconDunga}
          alternativeText='Dunga Rodrigues'
          onButtonClick={() => handleButtonClick('dunga', 2)}
        />
        <IconMapButtonBuildings
          position='
            absolute top-[13%] left-[46%]
            md:w-50 md:top-[37%] md:left-[80%]    
          '
          onButtonClick={() => handleButtonClick('mandioca', 3)}
        />
        <IconMapButtonBuildings
          position='
            absolute top-[6%] left-[54%]
            md:w-50 md:top-[40%] md:left-[87%]              
          '
          onButtonClick={() => handleButtonClick('relogio', 3)}
        />
        <IconMapButtonBuildings
          position='
            absolute top-[26%] left-[23%]
            md:w-50 md:top-[13%] md:left-[64%]              
          '
          onButtonClick={() => handleButtonClick('cine', 3)}
        />
        <IconMapButtonBuildings
          position='
            absolute top-[32%] left-[32%]
            md:w-50 md:top-[26%] md:left-[62%]             
          '
          onButtonClick={() => handleButtonClick('catedral', 3)}
        />
        <IconMapButtonBuildings
          position='
            absolute top-[40%] left-[27%]
            md:w-50 md:top-[22%] md:left-[54.5%]             
            '
          onButtonClick={() => handleButtonClick('palacio', 3)}
        />
        <IconMapButtonBuildings
          position='
            absolute top-[56%] left-[34%]
            md:w-50 md:top-[40%] md:left-[39.5%] 
          '
          onButtonClick={() => handleButtonClick('santuario', 3)}
        />
        <IconMapButtonBuildings
          position='
            absolute top-[80%] left-[12%]
            md:w-50 md:top-[24%] md:left-[11%] 
          '
          onButtonClick={() => handleButtonClick('sesc', 3)}
        />
        <IconMapButtonBuildings
          position='
            absolute top-[92%] left-[14%]
            md:w-50 md:top-[31%] md:left-[0.5%] 
          '
          onButtonClick={() => handleButtonClick('paroquia', 3)}
        />
        <IconMapButton
          position='
            w-10 absolute top-[89%] right-[14%]
            md:w-24 md:top-[82%] md:left-[90%] 
          '
          iconName={iconDuvida}
          alternativeText='Dúvidas'
          onButtonClick={() => handleButtonClick('doubts', 4)}
        />
        <IconMapButton
          position='
            w-10 absolute top-[89%] right-[5%]
            md:w-24 md:top-[82%] md:left-[94%]             
          '
          iconName={iconFicha}
          alternativeText='Ficha técnica'
          onButtonClick={() => handleButtonClick('team', 4)}
        />
      </div>
    </section>
  );
};

export default Experiencias;
