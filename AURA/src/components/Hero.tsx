
import grafico from '../assets/grafico1.png';
import './Hero.modules.css';


export default function Hero() {
  return (
    <>
      <div className='container-hero'>
        <div className='container-graf'>
          <h1 className='Title-graf'>Crescimento das Plantas</h1>
          <img src={grafico} alt="Crescimento das Plantas" className='graf-img' />
          <h1 className='descri-graf'>45.868 Plantas</h1>
          <h1 className='avali-graf'>estátisticas melhores que na passada</h1>
        </div>
        <div className='container-temp'>
          <h1 className='Title-temp'>Temperatura</h1>
          <h1 className='temp'>22ºC</h1>
        </div>
        <div className='container-umid'>
          <h1 className='Title-umid'>Saúde das Plantas</h1>
          <div className='box-umid'>
            <h1 className='umid'>85%</h1>
          </div>
          <h1 className='avali-umid'>estátisticas melhores que na passada</h1>
        </div>

        <h1 className='info-hero'>Acesso a gráficos gerados em tempo real</h1>

      </div>
    </>

  );
}
export { Hero };

