 import './Carserv.css'
 import carservice from  "../../assets/carservice.png"
import bikeservice from '../../assets/bikeservice.png'
import  tire from '../../assets/tire.jpg'
import  battery from '../../assets/battery.jpeg'
import  oil from '../../assets/oil.png'
import  clean from '../../assets/clean.png'
import  inspection from '../../assets/inspection.png'
import  repair from '../../assets/repair.png'

const Carserv = () => {
  return (
    <div className="container2">
      <div  className='service-text'><b>Trending</b> Automobile Services</div>
      <div className="row">
        <a href="/" className="box1">
          <img src={carservice} alt="Car Services" />
          <h3>Car Services</h3>
          <button>Book Now</button>
        </a>
        <div className="box1">
          <img src= {bikeservice} alt="Bike Services" />
          <h3>Bike Services</h3>
          <button>Book Now</button>
        </div>
        <div className="box1">
        <img src={tire} alt="Tire Services" />
          <h3>Tire Services</h3>
          <button>Book Now</button>
        </div>
        <div className="box1">
          <img src={battery} alt="Battery Services" />
          <h3>Battery Services</h3>
          <button>Book Now</button>
        </div>
      </div>
      <div className="row">
        <div className="box1">
          <img src= {oil} alt="Oil Change" />
          <h3>Oil Change</h3>
          <button>Book Now</button>
        </div>
        <div className="box1">
          <img src= {clean} alt="Cleaning" />
          <h3>Cleaning</h3>
          <button>Book Now</button>
        </div>
        <div className="box1">
          <img src= {inspection} alt="Inspection" />
          <h3>Inspection</h3>
          <button>Book Now</button>
        </div>
        <div className="box1">
          <img src= {repair} alt="Repair" />
          <h3>Repair</h3>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
  
}

export default Carserv
