import { useState } from 'react';


import imgMapMobile from '../assets/imgs/map/mapa-mobile.jpg';
import imgMapDesktop from '../assets/imgs/map/mapa-desktop.jpg';

import MapLayer from '../components/MapLayer';
import BackButton from '../components/ui/BackButton';
import MapPanel from '../components/MapPanel/MapPanel';
import MapPanelDunga from '../components/MapPanel/MapPanelDunga';
import MapPanelBuilding from '../components/MapPanel/MapPanelBuilding';
import MapPanelExplanation from '../components/MapPanel/MapPanelExplanation';

const Experiencias = () => {
  const [openPanel, setOpenPanel] = useState<string>('');
  const [idMapIcon, setIdMapIcon] = useState<string>('');

  function handleButtonClick(id: string, panel: string) {
    setIdMapIcon(id);
    setOpenPanel(panel);
  }

  function handleIconCloseClick() {
    setOpenPanel('');
  }

  return (
    <section>
      <div id="map">

        {/* DESKTOP */}
        <div
          id="desktop"
          className="hidden md:block relative"
        >
          <img
            className="w-full block"
            src={imgMapDesktop}
            alt=""
          />

          <MapLayer
            device="desktop"
            onButtonClick={handleButtonClick}
          />
        </div>


        {/* MOBILE */}
        <div
          id="mobile"
          className="block md:hidden relative"
        >
          <img
            className="w-full block"
            src={imgMapMobile}
            alt=""
          />

          <MapLayer
            device="mobile"
            onButtonClick={handleButtonClick}
          />
        </div>

        {/* =====================================================
            PANELS / UI
        ====================================================== */}

        {openPanel === 'tale' && (
          <MapPanel
            iconId={idMapIcon}
            onCloseIconClick={handleIconCloseClick}
          />
        )}

        {openPanel === 'dunga' && (
          <MapPanelDunga
            onCloseIconClick={handleIconCloseClick}
          />
        )}

        {openPanel === 'building' && (
          <MapPanelBuilding
            iconId={idMapIcon}
            onCloseIconClick={handleIconCloseClick}
          />
        )}

        {openPanel === 'information' && (
          <MapPanelExplanation
            iconId={idMapIcon}
            onCloseIconClick={handleIconCloseClick}
          />
        )}

        <BackButton linkToGoBack="/" />

      </div>
    </section>
  );
};

export default Experiencias;
