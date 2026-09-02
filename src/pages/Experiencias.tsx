import { useState } from 'react';

import { mapExperiences } from '../assets/data/mapExperience';

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

        {/* =====================================================
            DESKTOP
        ====================================================== */}
        <div
          id="desktop"
          className="hidden md:block relative"
        >
          <img
            className="w-full block"
            src={imgMapDesktop}
            alt=""
          />

          {mapExperiences.tales.map((experience) => (
            <IconMapButton
              key={experience.id}
              position={experience.position.desktop}
              iconName={experience.icon}
              alternativeText={experience.alternativeText}
              onButtonClick={() =>
                handleButtonClick(
                  experience.id,
                  experience.panel
                )
              }
            />
          ))}

          {mapExperiences.buildings.map((building) => (
            <IconMapButtonBuildings
              key={building.id}
              position={building.position.desktop}
              onButtonClick={() =>
                handleButtonClick(
                  building.id,
                  building.panel
                )
              }
            />
          ))}

          {mapExperiences.information.map((information) => (
            <IconMapButton
              key={information.id}
              position={information.position.desktop}
              onButtonClick={() =>
                handleButtonClick(
                  information.id,
                  information.panel
                )
              }
            />
          ))}

        </div>


        {/* =====================================================
            MOBILE
        ====================================================== */}
        <div
          id="mobile"
          className="block md:hidden relative"
        >
          <img
            className="w-full block"
            src={imgMapMobile}
            alt=""
          />

          {mapExperiences.tales.map((experience) => (
            <IconMapButton
              key={experience.id}
              position={experience.position.mobile}
              iconName={experience.icon}
              alternativeText={experience.alternativeText}
              onButtonClick={() =>
                handleButtonClick(
                  experience.id,
                  experience.panel
                )
              }
            />
          ))}

          {mapExperiences.buildings.map((building) => (
            <IconMapButtonBuildings
              key={building.id}
              position={building.position.mobile}
              onButtonClick={() =>
                handleButtonClick(
                  building.id,
                  building.panel
                )
              }
            />
          ))}

          {mapExperiences.information.map((information) => (
            <IconMapButton
              key={information.id}
              position={information.position.mobile}
              iconName={information.icon}
              alternativeText={information.alternativeText}
              onButtonClick={() =>
                handleButtonClick(
                  information.id,
                  information.panel
                )
              }
            />
          ))}

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
