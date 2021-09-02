import './App.css';
import Background from "./neutral-hills-mountain.jpg"
import Background2 from "./afternoon-mountain.jpg"
import Background3 from "./night-sky.jpg"
import TemperatureMain from './TemperatureMain';
import Footer from './Footer';

function App() {

  let now = new Date();
  let hours = now.getHours();
  
  if (hours === 0){
      return (
          hours=`00`
      );
  }


   if (hours === `00`){
    return (
      <div className="App">
          <div className="p-5" style={{backgroundImage: `url(${Background})`}}> 
          <div className="container-for-app">
            <TemperatureMain />
            <Footer />


          </div>
        </div>
      </div> 
    );
  }
  
  if (hours <= 12 && hours >= 1){
    return (
      <div className="App">
          <div className="p-5" style={{backgroundImage: `url(${Background})`}}>
          <div className="container-for-app">
            <TemperatureMain />
            <Footer />


          </div>
        </div>
      </div>
    );

  }
  if (hours <= 18 && hours >= 12){
    return (
      <div className="App">
          <div className="p-5" style={{backgroundImage: `url(${Background2})`}}>
          <div className="container-for-app">
            <TemperatureMain />
            <Footer />


          </div>
        </div>
      </div>
    );

  }
  if (hours <= 23 && hours >= 18){
    return (
      <div className="App">
          <div className="p-5" style={{backgroundImage: `url(${Background3})`}}>
          <div className="container-for-app">
            <TemperatureMain />
            <Footer />


          </div>
        </div>
      </div>
    ); 

  } 

  return (
        <div className="App">
            <div className="p-5" style={{backgroundImage: `url(${Background})`}}> 
            <div className="container-for-app">
              <TemperatureMain />
              <Footer />


            </div>
          </div>
        </div> 
  );
}

export default App;