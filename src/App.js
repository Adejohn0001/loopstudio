import './App.css';
import Button from './components/Button';
import Copyright from './components/Copyright';
import Creation from './components/Creation';
import Creationimg from './components/Creationimg';
import Hero from './components/Hero';
import Links from './components/Links';
import Logo from './components/Logo';
import Mainimg from './components/Mainimg';
import Maintxt from './components/Maintxt';
import deep from './images/desktop/image-deep-earth.jpg';
import night from './images/desktop/image-night-arcade.jpg';
import soccer from './images/desktop/image-soccer-team.jpg';
import grid from './images/desktop/image-grid.jpg';
import above from './images/desktop/image-from-above.jpg';
import borealis from './images/desktop/image-pocket-borealis.jpg';
import curiosity from './images/desktop/image-curiosity.jpg';
import fisheye from './images/desktop/image-fisheye.jpg';
import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import pinterest from './images/icon-pinterest.svg';
import instagram from './images/icon-instagram.svg';
import Socials from './components/Socials';

function App() {
  return (
    <div className="app">
      <div className="bg-[url('../src/images/desktop/image-hero.jpg')] bg-no-repeat bg-contain h-screen p-[130px] pt-[30px]">
        <div className='flex justify-between mb-[150px]'>
           <Logo />
           <Links />
        </div>
        <Hero />
      </div>

      <div className='p-[130px] flex pb-[50px]'>
        <Mainimg />
        <Maintxt />
      </div>


      <div className='flex justify-between p-[130px] pt-[0px] pb-[40px]'>
        <Creation />
        <Button title={" SEE ALL "} />
      </div>

      <div className='flex justify-between p-[130px] pt-[10px] pb-[30px]'>
        <Creationimg image={ deep } name={"Deep earth"} />
        <Creationimg image={ night } name={" Night arcade"} />
        <Creationimg image={ soccer } name={"Soccer team VR"}/>
        <Creationimg image={ grid } name={"The grid"}/>
      </div>

      <div className='flex justify-between p-[130px] pt-[10px] '>
        <Creationimg image={ above } name={"From up above VR"}/>
        <Creationimg image={ borealis } name={"Pocket borealis"}/>
        <Creationimg image={ curiosity } name={"The curiosity"}/>
        <Creationimg image={ fisheye } name={"Make it fisheye"}/>
      </div>


      <div className='bg-black flex justify-between p-[130px] pt-[40px] pb-[30px] flex-wrap'>

        <div>
           <Logo />
           <Links />
        </div>

        <div>
          <div className='flex justify-end '>
            <Socials icons={facebook}/>
            <Socials icons={twitter}/>
            <Socials icons={pinterest}/>
            <Socials icons={instagram}/>
          </div>
          <Copyright />
        </div>

      </div>
    </div>
  );
}

export default App;
