import viswasam from '../src/images/viswasam.png'
import valimai from '../src/images/valimai.png'
import veeram from  '../src/images/veeram.png'
import leo from '../src/images/leo.png'
import sivakaasi from '../src/images/sivakaasi.png'
import gilli from '../src/images/gilli.png'
import theri from '../src/images/theri.png'
import varisu from '../src/images/varisu.png'
import vanagam from '../src/images/vanagam.png'
import sooraraipottru from '../src/images/sooraraipottru.png'
import jaibhim from '../src/images/jaibhim.png'
import twofour from '../src/images/twofour.png'
import ksingam from '../src/images/ksingam.png'
import japan from '../src/images/japan.png'
import komban from '../src/images/komban.png'
import dheeran from '../src/images/dheeran.png'
import './App.css';
import { Link } from 'react-router-dom';

function Movie() {
  return (
    <>
    <div className='recipetitle'>Movies</div>
    <div className='recipe'>

        <div className='firstrecipebox'>
        <img src={viswasam} width={250} height={125} ></img>
        <center>
          <h4 className='recipename'>Viswasam</h4>
          <div><Link to='https://en.wikipedia.org/wiki/Viswasam'><button className='buttonborder'>Explore More</button></Link></div>
        </center>
      </div>

      <div className='firstrecipebox'>
        <img src={valimai} width={250} height={125} ></img>
        <center>
          <h4 className='recipename'>valimai</h4>
          <div><Link to='https://en.wikipedia.org/wiki/Valimai'><button className='buttonborder'>Explore More</button></Link></div>
        </center>
      </div>


      <div className='firstrecipebox'>
        <img src={veeram} width={250} height={125} ></img>
        <center>
          <h4 className='recipename'>veeram</h4>
          <div><Link to='https://en.wikipedia.org/wiki/Veeram_(2014_film)'><button className='buttonborder'>Explore More</button></Link></div>
        </center>
      </div>

      <div className='firstrecipebox'>
        <img src={leo} width={250} height={125} ></img>
        <center>
          <h4 className='recipename'>leo</h4>
          <div><Link to='https://en.wikipedia.org/wiki/Leo_(2023_Indian_film)'><button className='buttonborder'>Explore More</button></Link></div>
        </center>
      </div>

      <div className='firstrecipebox'>
        <img src={sivakaasi} width={250} height={125} ></img>
        <center>
          <h4 className='recipename'>sivakaasi</h4>
          <div><Link to='https://en.wikipedia.org/wiki/Sivakasi_(film)'><button className='buttonborder'>Explore More</button></Link></div>
        </center>
      </div>

      <div className='firstrecipebox'>
        <img src={gilli} width={250} height={125} ></img>
        <center>
          <h4 className='recipename'>gilli</h4>
          <div><Link to='https://en.wikipedia.org/wiki/Ghilli'><button className='buttonborder'>Explore More</button></Link></div>
        </center>
      </div>

      <div className='firstrecipebox'>
        <img src={theri} width={250} height={125} ></img>
        <center>
          <h4 className='recipename'>theri</h4>
          <div><button className='buttonborder'>Explore More</button></div>
        </center>
      </div>

      <div className='firstrecipebox'>
        <img src={varisu} width={250} height={125} ></img>
        <center>
          <h4 className='recipename'>varisu</h4>
          <div><button className='buttonborder'>Explore More</button></div>
        </center>
      </div>
      <div className='firstrecipebox'>
        <img src={vanagam} width={250} height={125} ></img>
        <center>
          <h4 className='recipename'>vanagam</h4>
          <div><button className='buttonborder'>Explore More</button></div>
        </center>
      </div>

      <div className='firstrecipebox'>
        <img src={sooraraipottru} width={250} height={125} ></img>
        <center>
          <h4 className='recipename'>sooraraipottru</h4>
          <div><button className='buttonborder'>Explore More</button></div>
        </center>
      </div>

      <div className='firstrecipebox'>
        <img src={jaibhim} width={250} height={125} ></img>
        <center>
          <h4 className='recipename'>jaibhim</h4>
          <div><button className='buttonborder'>Explore More</button></div>
        </center>
      </div>

      <div className='firstrecipebox'>
        <img src={twofour} width={250} height={125} ></img>
        <center>
          <h4 className='recipename'>twofour</h4>
          <div><button className='buttonborder'>Explore More</button></div>
        </center>
      </div>

      <div className='firstrecipebox'>
        <img src={ksingam} width={250} height={125} ></img>
        <center>
          <h4 className='recipename'>ksingam</h4>
          <div><button className='buttonborder'>Explore More</button></div>
        </center>
      </div>

      <div className='firstrecipebox'>
        <img src={japan} width={250} height={125} ></img>
        <center>
          <h4 className='recipename'>japan</h4>
          <div><button className='buttonborder'>Explore More</button></div>
        </center>
      </div>

      <div className='firstrecipebox'>
        <img src={komban} width={250} height={125} ></img>
        <center>
          <h4 className='recipename'>komban</h4>
          <div><button className='buttonborder'>Explore More</button></div>
        </center>
      </div>

      <div className='firstrecipebox'>
        <img src={dheeran} width={250} height={125} ></img>
        <center>
          <h4 className='recipename'>dheeran</h4>
          <div><button className='buttonborder'>Explore More</button></div>
        </center>
      </div>









    

      </div>
    </>
  );
}

export default Movie;
