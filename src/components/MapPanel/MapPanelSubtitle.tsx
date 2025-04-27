import ReactAudioPlayer from 'react-audio-player';
import parse from 'html-react-parser';

const MapPanelSubtitle: React.FC<{
  subtitle: string;

  audio: string;
}> = ({ subtitle, audio }) => {
  return (
    <div className='mt-1 mb-4'>
      <h2 className='text-sm mb-4'>{parse(subtitle)}</h2>
      <ReactAudioPlayer src={audio} controls />
    </div>
  );
};

export default MapPanelSubtitle;
