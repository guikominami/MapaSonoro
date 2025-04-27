import iconLocal from '../../assets/icon/iconLocal.png';

const MapPanelLocal: React.FC<{ coordinates: string; localUrl: string }> = ({
  coordinates,
  localUrl,
}) => {
  return (
    <div className='flex flex-row items-center mb-6'>
      {coordinates}
      <a className='cursor-auto text-blue-800' href={localUrl} target='_blank'>
        <img
          src={iconLocal}
          alt='ícone de localização com as coordenadas'
          className='w-8 ml-4'
        />
      </a>
    </div>
  );
};

export default MapPanelLocal;
