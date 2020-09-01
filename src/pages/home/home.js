import React, {Component} from 'react';
import ScaleText from 'react-scale-text';
import {isMobile} from 'react-device-detect';
import {Textfit} from 'react-textfit';
import ReactPlayer from 'react-player/youtube';

import './home.css';
import './animations.css';

import * as dashGif from '../../assets/dash.gif';
import * as mapGif from '../../assets/busymap.gif';
import * as ted from '../../assets/ted.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, orientation: '', oke: false, dash: false, others: false, };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  okeFalse = () => {
    this.setState({oke: false});
  }

  okeTrue = () => {
    this.setState({oke: true});
  }

  dashTrue = () => {
    this.setState({dash: true});
  }

  dashFalse = () => {
    this.setState({dash: false});
  }

  othersTrue = () => {
    this.setState({others: true});
  }

  othersFalse = () => {
    this.setState({others: false});
  }


  render() {
    if (!isMobile) {
      return(
        <div>
          {this.state.width >= 1000 && this.state.height >= 600 ? (
            <div className='home'>
              <div className='slides'>
                <div className='slide one' style={{overflow: 'hidden'}}>
                  <div className='introS1 swoosh'>
                    <ScaleText>
                      <h1 className='grey'>KAI<span className='lightBlue'> JUN</span><br/>ZHUAN<span className='tilted'>G</span>.</h1>
                    </ScaleText>
                  </div>
                  <div className='hint'>
                    <Textfit mode='single'>
                      <h1 className='grey'>psst... try scrolling!</h1>
                    </Textfit>
                  </div>
                </div>
                <div className='divider' id='about'>
                  <h1 className='dividerContent' style={{color: 'black', fontSize: '1.5vw'}}>ABOUT.<br/><span className='dgrey' style={{fontSize: '1.25vw'}}>DEVELOPER / CREATIVE / TEACHER / STUDENT /</span></h1>
                </div>
                <div className='space'/>
                <div className='slide two'>
                  <div className='ltriangle' style={{top: '-20vw', left: '-20vw', animationDuration:'70s'}}/>
                  <div className='introS2 window'>
                    <div className='dot' style={{top: '-20px', left: '0', backgroundColor: '#eb4034'}}/>
                    <div className='dot' style={{top: '-20px', left: '15px', backgroundColor: '#ebc034'}}/>
                    <div className='dot' style={{top: '-20px', left: '30px', backgroundColor: '#71eb34'}}/>
                    <Textfit mode='multi' style={{height: 'calc(60vh - 6vw)'}}>
                    <h1 style={{lineHeight: '95%'}}>Serious but playful. Detail oriented but not an absolute perfectionist. Stubborn but reasonable. Tech geek but also an avid adventure seeker. Honest but honest. Balanced as all things should be. For those curious,</h1>
                    </Textfit>
                  </div>
                  <div className='introS3'>
                    <Textfit mode='multi' style={{height: '90vh'}}>
                      <h1 className='centered'>THIS<br/>IS<br/>ME.</h1>
                    </Textfit>
                  </div>
                </div>
                <div className='slide three'>
                  <div className='ltriangle' style={{top: '-15vw', right: '-3vw', animationDuration:'100s'}}/>
                  <div className='ltriangle' style={{bottom: '-15vw', right: '-30vw', animationDuration:'90s'}}/>
                  <div className='introS4 window'>
                    <div className='dot' style={{top: '-20px', left: '0', backgroundColor: '#eb4034'}}/>
                    <div className='dot' style={{top: '-20px', left: '15px', backgroundColor: '#ebc034'}}/>
                    <div className='dot' style={{top: '-20px', left: '30px', backgroundColor: '#71eb34'}}/>
                  </div>
                  <div className='introS5 window'>
                    <div className='dot' style={{top: '-20px', left: '0', backgroundColor: '#eb4034'}}/>
                    <div className='dot' style={{top: '-20px', left: '15px', backgroundColor: '#ebc034'}}/>
                    <div className='dot' style={{top: '-20px', left: '30px', backgroundColor: '#71eb34'}}/>
                    <ReactPlayer url='https://www.youtube.com/watch?v=_JgAX5efG6Y&t=139s' width='48vw' height='27vw' light={ted} playing={true} controls={true} config={{youtube: {playerVars:{start: 557}}}}/>
                  </div>
                </div>
                <div className='space'/>
                <div className='divider' id='projects'>
                  <h1 className='dividerContent' style={{color: 'black', fontSize: '1.5vw'}}>PROJECTS.<br/><span className='dgrey' style={{fontSize: '1.25vw'}}>2020 - 2020</span></h1>
                </div>
                <div className='slide four'>
                    <div className='ltriangle' style={{top: '-18vw', left: '-5vw', animationDuration:'70s'}}/>
                    <div className='ltriangle' style={{bottom: '-20vw', left: '2vw'}}/>
                    <div className='ltriangle' style={{top: '-15vw', right: '2vw', animationDuration:'100s'}}/>
                    {!this.state.oke ? (
                      <div className='projectsS1'>
                        <div className='centered'>
                          <h1>FEATURED PROJECT:</h1>
                          <h1 className='hoverable' style={{fontSize:'15em', fontFamily:'oke'}} onMouseDown={this.okeTrue}>OKE</h1>
                        </div>
                      </div>
                    ) : (
                      <div className='projectsS1 bricks window' onMouseLeave={this.okeFalse}>
                        <div className='dot' style={{top: '-20px', left: '0', backgroundColor: '#eb4034'}}/>
                        <div className='dot' style={{top: '-20px', left: '15px', backgroundColor: '#ebc034'}}/>
                        <div className='dot' style={{top: '-20px', left: '30px', backgroundColor: '#71eb34'}}/>
                        <div className='okeInfo'>
                          <Textfit mode='multi' style={{height: 'calc(60vh - 7vw)'}}>
                            <h1 className='paragraph' style={{lineHeight: '1em'}}>OKE perfectly syncs video players across multiple devices so friends can listen and sing to the same music at the same time.<br/><br/>I did full stack development on this project, working with NodeJS and web sockets in the backend, and a ReactJS frontend. My friend Sam did the CSS and graphic designs.<br/><br/>Click the button below to visit the web-app.</h1>
                          </Textfit>
                        </div>
                        <div className='okeButtonWrapper'>
                          <button className='webButton centered paragraph' onMouseDown={() => window.open('https://okeraoke.herokuapp.com/')}>VISIT WEB-APP</button>
                        </div>
                      </div>
                    )}
                </div>
                <div className='slide five'>
                  <div className='ltriangle' style={{bottom: '-20vw', left: '-10vw'}}/>
                  <div className='ltriangle' style={{top: '-18vw', right: '0', animationDuration:'70s'}}/>
                  <div className='ltriangle' style={{bottom: '-20vw', right: '-20vw', animationDuration:'90s'}}/>
                    {!this.state.dash ? (
                      <div className='projectsS2'>
                        <h1>WORKING<br/>PROJECT:</h1>
                        <h1 className='hoverable' style={{fontSize:'12em', letterSpacing: '-10px'}} onMouseDown={this.dashTrue}><i>DASH</i></h1>
                      </div>
                    ) : (
                      <div className='projectsS1 window' onMouseLeave={this.dashFalse} style={{background: 'whitesmoke'}}>
                        <div className='dot' style={{top: '-20px', left: '0', backgroundColor: '#eb4034'}}/>
                        <div className='dot' style={{top: '-20px', left: '15px', backgroundColor: '#ebc034'}}/>
                        <div className='dot' style={{top: '-20px', left: '30px', backgroundColor: '#71eb34'}}/>
                        <div className='dashTitle'>
                          <h1 className='centered' style={{fontSize: '3em'}}><i>DASH</i></h1>
                        </div>
                        <div className='dashInfo'>
                          <Textfit mode='multi' style={{height: 'calc(60vh - 100px)'}}>
                            <h1 className='paragraph' style={{lineHeight: '1em'}}>This app translates live video feed from a driver's device into auditory cues. For example, if a car is approaching a red light, the app will recognize that and notify the driver to prepare to stop.<br/><br/>This app's goal is to create safer roads by providing an assistant to new or visually impaired drivers.</h1>
                          </Textfit>
                        </div>
                        <img className='dashgif' src={dashGif} alt='Dash Design Demo'/>
                        <div className='dashLog'>
                          <Textfit mode='multi' style={{height: 'calc(60vh - 100px)'}}>
                            <h1 className='paragraph' style={{lineHeight: '1em'}}>I am building this app using the Dart language and Flutter SDK. The final product will use a custom version of the SSD MobileNet V2 object recognition model (trained to suit my purposes).<br/><br/>This app is still in development, currently (08/28/2020) I am testing with a TFLite model made with Teachable Machine. You can read my detailed developer log by clicking the button below.</h1>
                          </Textfit>
                        </div>
                        <div className='dashButtonWrapper'>
                          <button className='webButton centered paragraph' onClick={() => window.open('https://docs.google.com/document/d/1s3ZU6XaUfkm0OBLx1GJ7eWVIZuEI1LOgTmKC5Usz0AE/edit?usp=sharing')}>VIEW LOG</button>
                        </div>
                      </div>
                    )}
                </div>
                <div className='slide six'>
                  <div className='ltriangle' style={{top: '-15vw', right: '2vw', animationDuration:'90s'}}/>
                  {!this.state.others ? (
                    <div>
                      <div className='projectsS2'>
                        <h1 className='hoverable' style={{fontSize:'12em', letterSpacing: '-10px'}} onMouseDown={this.othersTrue}><i>OTHER PROJECTS</i></h1>
                      </div>
                    </div>
                  ) : (
                    <div className='projectsS1 window' style={{background: 'whitesmoke'}} onMouseLeave={this.othersFalse}>
                      <div className='dot' style={{top: '-20px', left: '0', backgroundColor: '#eb4034'}}/>
                      <div className='dot' style={{top: '-20px', left: '15px', backgroundColor: '#ebc034'}}/>
                      <div className='dot' style={{top: '-20px', left: '30px', backgroundColor: '#71eb34'}}/>
                      <div className='projectsS1' style={{overflowY: 'scroll', scrollBehavior: 'smooth'}}>
                        <div className='busyMap prelative' id='busymap'>
                          <img className='mapgif' src={mapGif} alt='Busy Map Demo'/>
                          <div className='mapTitle'>
                            <Textfit mode='single'>
                              <h1><i>BUSY MAP</i></h1>
                            </Textfit>
                          </div>
                          <div className='mapInfo'>
                            <Textfit mode='multi' style={{height: 'calc(50vh - 4vw)'}}>
                              <h1 className='paragraph' style={{lineHeight: '1em'}}>This app’s goal is to provide Richmond shoppers with a reference for the busyness of a shopping location at the current time. Its primary focus is to prevent scenarios where maintaining 6 feet of social distance is unable to be practiced.<br/><br/>This web-app uses a web scraper built with Puppeteer. I built and designed the entire app by myself.</h1>
                            </Textfit>
                          </div>
                          <div className='mapButtonWrapper'>
                          <button className='webButton centered paragraph' style={{top: '1.5vw'}}onClick={() => window.open('https://busymap.herokuapp.com/')}>VISIT WEB-APP</button>
                          </div>
                        </div>
                        <div className='patientTracker prelative' id='patient'>
                          <div className='ptTitle'>
                            <Textfit mode='single'>
                              <h1><i>PATIENT TRACKER</i></h1>
                            </Textfit>
                          </div>
                          <div className='ptInfo'>
                            <Textfit mode='multi' style={{height: 'calc(65vh - 6vw)'}}>
                              <h1 className='paragraph' style={{lineHeight: '1em'}}>Many Alzheimer's patients wander out of their homes and go missing every year. Current solutions include GPS trackers but these are very expensive because they are kept on for extended periods even when they are not necessary.<br/><br/>This tracker differs in the way that it will not use data at all. Instead, it will be connected to the patient’s home wifi. If the patient strays from their home far enough the device will be forced to disconnect from the wifi. Once this happens a message is sent to a family member or guardian's mobile device, allowing them to approach the problem accordingly (call their neighbours for help, head home, call the police).</h1>
                            </Textfit>
                          </div>
                          <div className='ptInfo2'>
                            <Textfit mode='multi' style={{height: 'calc(23.5vh - 6vw)'}}>
                              <h1 className='paragraph' style={{lineHeight: '1em'}}>This device is currently (08/25/2020) in the planning phase. Its development will start once the electronic parts I ordered from Aliexpress arrive.</h1>
                            </Textfit>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div style={{width:'100vw', height:'100vh', background:'#2c58ee'}}>
              <h1 className='centered' style={{color: 'white', lineHeight: '100%'}}>PLEASE ENLARGE YOUR BROWSER</h1>
            </div>
          )}
        </div>
      )
    } else {
      return(
        <div style={{width:'100vw', height:'100vh', background:'#2c58ee'}}>
            <h1 className='centered' style={{color: 'white', lineHeight: '100%'}}>WEBSITE NOT YET OPTIMIZED FOR MOBILE</h1>
        </div>
      )
    }
  }
}

export default Home;