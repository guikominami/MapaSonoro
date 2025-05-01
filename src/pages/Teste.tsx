import React from 'react';
import map from '../assets/imgs/map/mapa-mobile.jpg';

const Teste = () => {
  return (
    <section>
      <div id='superior' className='relative'>
        <img src={map} alt='' />

        <div className='bg-yellow-300 absolute top-[30%] left-[28%]'>01</div>
        <div className='bg-yellow-300 absolute top-[33%] left-[34%]'>02</div>
        <div className='bg-yellow-300 absolute top-[14%] left-[49%]'>03</div>
        <div className='bg-yellow-300 absolute top-[10%] left-[56%]'>04</div>
        <div className='bg-yellow-300 absolute top-[41%] left-[31%]'>05</div>
      </div>
    </section>
  );
};

export default Teste;
