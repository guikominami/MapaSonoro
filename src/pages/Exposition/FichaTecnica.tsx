import BackButton from '../../components/BackButton';
import Paragraph from '../../components/Paragraph';

const FichaTecnica = () => {
  return (
    <section
      className='
        bg-[url(/images/background/main-bg-white-map-vertical.jpg)] 
        md:bg-[url(/images/background/main-bg-white-map-vertical.jpg)] 
        bg-cover bg-no-repeat h-[690px] md:h-[878px]
      '
    >
      <BackButton linkToGoBack='/exposicao' />
      <div className='py-20 px-6 md:py-40 md:px-20'>
        <h1 className='text-2xl md:text-4xl font-bold mb-6'>
          Ficha Ténica da Exposição
        </h1>
        <Paragraph>
          <b>Curadoria: </b>Naine Terena, Fernanda Gandes e Jefferson Jarcem
        </Paragraph>
        <Paragraph>
          <b>Site/exposição Virtual: </b>Guilherme Kominami
        </Paragraph>
        <Paragraph>
          <b>Imagens: </b>Cortesia da família de Dunga Rodrigues, dos familiares
          do artista plástico Antônio João de Jesus, Casa Barão, Elizabeth
          Madureira Siqueira e Conservatório Dunga Rodrigues.
        </Paragraph>
        <Paragraph>
          <b>Agradecimentos: </b>Para família de Dunga Rodrigues, familiares do
          ilustrador Antônio João de Jesus, Casa Barão de Melgaço, Elizabeth
          Madureira Siqueira e Conservatório Dunga Rodrigues.
        </Paragraph>
      </div>
    </section>
  );
};

export default FichaTecnica;
