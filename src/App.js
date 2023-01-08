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
import deepM from './images/mobile/image-deep-earth.jpg';
import nightM from './images/mobile/image-night-arcade.jpg';
import soccerM from './images/mobile/image-soccer-team.jpg';
import gridM from './images/mobile/image-grid.jpg';
import aboveM from './images/mobile/image-from-above.jpg';
import borealisM from './images/mobile/image-pocket-borealis.jpg';
import curiosityM from './images/mobile/image-curiosity.jpg';
import fisheyeM from './images/mobile/image-fisheye.jpg';
import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import pinterest from './images/icon-pinterest.svg';
import instagram from './images/icon-instagram.svg';
import Socials from './components/Socials';
import Hamburger from './components/Hamburger';

function App() {
    return (
        <div className="app">
            <div className="bg-[url('../src/images/mobile/image-hero.jpg')] bg-cover w-full h-screen p-[30px] pt-[30px] md:bg-[url('../src/images/desktop/image-hero.jpg')] md:bg-no-repeat md:bg-contain md:h-screen md:p-[130px] md:pt-[30px]">
                <div className='flex justify-between mb-[150px]'>
                    <div>
                        <Logo/>
                    </div>
                    <div className='hidden md:block'>
                        <Links/>
                    </div>
                    <div className='md:hidden'>
                        <Hamburger/></div>
                </div>
                <Hero/>
            </div>

            <div className='p-[5px] md:p-[130px]'>
                <div className='p-[30px] md:flex p-[130px] pb-[50px]'>
                    <Mainimg/>
                    <Maintxt/>
                </div>


                <div className='flex justify-between p-[30px] pt-[0px] pb-[40px]'>
                    <div>
                        <Creation/>
                    </div>
                    <div className='hidden md:block'>
                        <Button title={" SEE ALL "}/>
                    </div>
                </div>

                <div className='p-[30px] md:flex justify-between p-[130px] pt-[10px] pb-[0px] flex-wrap'>
                    <div className='hidden md:block'>
                        <Creationimg image={deep}
                            name={"Deep"}
                            subname={"earth"}/>
                    </div>
                    <div className='mb-8 md:hidden'>
                        <Creationimg image={deepM}
                            name={"Deep"}
                            subname={"earth"}/>
                    </div>

                    <div className='hidden md:block'>
                        <Creationimg image={night}
                            name={" Night"}
                            subname={"arcade"}/>
                    </div>
                    <div className='mb-8 md:hidden'>
                        <Creationimg image={nightM}
                            name={" Night"}
                            subname={"arcade"}/>
                    </div>

                    <div className='hidden md:block'>
                        <Creationimg image={soccer}
                            name={"Soccer"}
                            subname={"team VR"}/>
                    </div>
                    <div className='mb-8 md:hidden'>
                        <Creationimg image={soccerM}
                            name={"Soccer"}
                            subname={"team VR"}/>
                    </div>

                    <div className='hidden md:block'>
                        <Creationimg image={grid}
                            name={"The"}
                            subname={"grid"}/>
                    </div>
                    <div className='mb-8 md:hidden'>
                        <Creationimg image={gridM}
                            name={"The"}
                            subname={"grid"}/>
                    </div>
                </div>

                <div className='relative p-[30px] pt-[-10px] md:flex justify-between p-[130px] pt-[50px] pb-[80px] flex-wrap md:mt-[-50px]'>
                    <div className='hidden md:block'>
                        <Creationimg image={above}
                            name={"From up"}
                            subname={"above VR"}/>
                    </div>
                    <div className='mb-8 mt-[-47px] md:hidden'>
                        <Creationimg image={aboveM}
                            name={"From up"}
                            subname={"above VR"}/>
                    </div>

                    <div className='hidden md:block'>
                        <Creationimg image={borealis}
                            name={"Pocket"}
                            subname={"borealis"}/>
                    </div>
                    <div className='mb-8 md:hidden'>
                        <Creationimg image={borealisM}
                            name={"Pocket"}
                            subname={"borealis"}/>
                    </div>

                    <div className='hidden md:block'>
                        <Creationimg image={curiosity}
                            name={"The"}
                            subname={"curiosity"}/>
                    </div>
                    <div className='mb-8 md:hidden'>
                        <Creationimg image={curiosityM}
                            name={"The"}
                            subname={"curiosity"}/>
                    </div>

                    <div className='hidden md:block'>
                        <Creationimg image={fisheye}
                            name={"Make it"}
                            subname={"fisheye"}/>
                    </div>
                    <div className=' mb-8 md:hidden'>
                        <Creationimg image={fisheyeM}
                            name={"Make it"}
                            subname={"fisheye"}/>
                    </div>
                </div>

                <div className='mt-[-60px] mb-[100px] flex justify-center md:hidden'>
                    <Button title={" SEE ALL "}/>
                </div>
            </div>

                <div className='bg-black flex justify-between p-[130px] pt-[40px] pb-[30px] flex-wrap'>

                    <div>
                        <Logo/>
                        <Links/>
                    </div>

                    <div className='mt-[50px] md:mt-[0px]'>
                        <div className='flex justify-end flex-wrap'>
                            <Socials icons={facebook}/>
                            <Socials icons={twitter}/>
                            <Socials icons={pinterest}/>
                            <Socials icons={instagram}/>
                        </div>
                        <Copyright/>
                    </div>

                </div>


        </div>
    );
}

export default App;
