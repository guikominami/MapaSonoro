import IconMapButton from './ui/IconMapButton';
import { mapExperiences } from '../assets/data/mapExperience';

type MapLayerProps = {
    device: 'desktop' | 'mobile';
    onButtonClick: (id: string, panel: string) => void;
};

const MapLayer = ({
    device,
    onButtonClick,
}: MapLayerProps) => {
    return (
        <>
            {mapExperiences.tales.map((experience) => (
                <IconMapButton
                    key={experience.id}
                    position={experience.position[device]}
                    iconName={experience.icon}
                    alternativeText={experience.alternativeText}
                    onButtonClick={() =>
                        onButtonClick(
                            experience.id,
                            experience.panel
                        )
                    }
                />
            ))}

            {mapExperiences.buildings.map((building) => (
                <IconMapButton
                    key={building.id}
                    position={building.position[device]}
                    hotspot
                    onButtonClick={() =>
                        onButtonClick(
                            building.id,
                            building.panel
                        )
                    }
                />
            ))}

            {mapExperiences.information.map((information) => (
                <IconMapButton
                    key={information.id}
                    position={information.position[device]}
                    iconName={information.icon}
                    alternativeText={information.alternativeText}
                    onButtonClick={() =>
                        onButtonClick(
                            information.id,
                            information.panel
                        )
                    }
                />
            ))}
        </>
    );
};

export default MapLayer;