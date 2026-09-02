import iconCarroca from '../../assets/imgs/map/icons/icon-carroca.png';
import iconBruxas from '../../assets/imgs/map/icons/icon-bruxas.png';
import iconBarao from '../../assets/imgs/map/icons/icon-barao.png';
import iconPadre from '../../assets/imgs/map/icons/icon-padre.png';
import iconNoiva from '../../assets/imgs/map/icons/icon-noiva.png';
import iconDunga from '../../assets/imgs/map/icons/icon-dunga.png';
import iconIgreja from '../../assets/imgs/map/icons/icon-igreja.png';
import iconDuvida from '../../assets/imgs/map/icons/icon-duvidas.png';
import iconFicha from '../../assets/imgs/map/icons/icon-ficha-mapa.png';

export const mapExperiences = {
  tales: [
    {
      id: 'carroca',
      icon: iconCarroca,
      alternativeText: 'Carroça',
      panel: 'tale',
      position: {
        mobile: 'w-18 absolute top-[10%] left-[13%]',
        desktop: 'w-45 absolute top-[3%] left-[70%]',
      },
    },
    {
      id: 'bruxa',
      icon: iconBruxas,
      alternativeText: 'Bruxas',
      panel: 'tale',
      position: {
        mobile: 'w-16 absolute top-[15%] left-[30%]',
        desktop: 'w-45 absolute top-[13%] left-[80%]',
      },
    },
    {
      id: 'barao',
      icon: iconBarao,
      alternativeText: 'Barão',
      panel: 'tale',
      position: {
        mobile: 'w-18 absolute top-[23%] left-[39%]',
        desktop: 'w-45 absolute top-[28%] left-[70%]',
      },
    },
    {
      id: 'padre',
      icon: iconPadre,
      alternativeText: 'Padre',
      panel: 'tale',
      position: {
        mobile: 'w-18 absolute top-[14%] left-[56%]',
        desktop: 'w-45 absolute top-[44%] left-[70%]',
      },
    },    
    {
      id: 'igreja',
      icon: iconIgreja,
      alternativeText: 'Igreja',
      panel: 'tale',
      position: {
        mobile: 'w-18 absolute top-[9%] right-[8%]',
        desktop: 'w-45 absolute top-[60%] left-[80%]',
      },
    },   
    {
      id: 'noiva',
      icon: iconNoiva,
      alternativeText: 'Noiva',
      panel: 'tale',
      position: {
        mobile: 'w-16 absolute top-[32%] left-[42%]',
        desktop: 'w-40 absolute top-[35%] left-[58%]',
      },
    }, 
    {
      id: 'dunga',
      icon: iconDunga,
      alternativeText: 'Dunga',
      panel: 'dunga',
      position: {
        mobile: 'w-16 absolute top-[83%] left-[30%]',
        desktop: 'w-40 absolute top-[38%] left-[9%]',
      },
    },           
  ],

  buildings: [
    {
      id: 'mandioca',
      panel: 'building',
      position: {
        mobile: 'absolute top-[13%] left-[46%]',
        desktop: 'w-50 absolute top-[37%] left-[80%]',
      },
    },

    {
      id: 'relogio',
      panel: 'building',
      position: {
        mobile: 'absolute top-[6%] left-[54%]',
        desktop: 'w-50 absolute top-[40%] left-[87%]',
      },
    },
    {
      id: 'cine',
      panel: 'building',
      position: {
        mobile: 'absolute top-[26%] left-[23%]',
        desktop: 'absolute top-[13%] left-[64%]',
      },
    },
    {
      id: 'catedral',
      panel: 'building',
      position: {
        mobile: 'absolute top-[32%] left-[32%]',
        desktop: 'absolute top-[26%] left-[62%]',
      },
    },  
    {
      id: 'palacio',
      panel: 'building',
      position: {
        mobile: 'absolute top-[40%] left-[27%]',
        desktop: 'absolute top-[22%] left-[54.5%]',
      },
    },
    {
      id: 'santuario',
      panel: 'building',
      position: {
        mobile: 'absolute top-[56%] left-[34%]',
        desktop: 'absolute top-[40%] left-[39.5%]',
      },
    },
    {
      id: 'sesc',
      panel: 'building',
      position: {
        mobile: 'absolute top-[80%] left-[12%]',
        desktop: 'absolute top-[24%] left-[11%]',
      },
    },
    {
      id: 'paroquia',
      panel: 'building',
      position: {
        mobile: 'absolute top-[92%] left-[14%]',
        desktop: 'absolute top-[31%] left-[0.5%]',
      },
    },   
  ],

  information: [
    {
      id: 'doubts',
      icon: iconDuvida,
      alternativeText: 'Dúvidas',
      panel: 'information',
      position: {
        mobile: 'w-10 absolute top-[89%] right-[14%]',
        desktop: 'w-24 absolute top-[82%] left-[90%]',
      },
    },
    {
      id: 'team',
      icon: iconFicha,
      alternativeText: 'Ficha técnica',
      panel: 'information',
      position: {
        mobile: 'w-10 absolute top-[89%] right-[5%]',
        desktop: 'w-24 absolute top-[82%] left-[94%]',
      },
    },
  ],
};