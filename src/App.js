import "./App.css";
import logo from "./images/logo.png";
import zel from "./images/zel.png";
import camera from "./images/camera.png";
import locat from "./images/locat.png";

// Фото отелей — временные заглушки, замени на свои
const img = (n, w, h) => `https://picsum.photos/seed/lanka${n}/${w}/${h}`;

const picked = [
  { name: "Blue Origin Fams", city: "Galle, Sri Lanka", price: 50 },
  { name: "Ocean Land", city: "Trincomalee, Sri Lanka", price: 22 },
  { name: "Stark House", city: "Dehiwala, Sri Lanka", price: 856 },
  { name: "Vinna Vill", city: "Beruwala, Sri Lanka", price: 62 },
  { name: "Bobox", city: "Kandy, Sri Lanka", price: 72 },
];

const hotels = [
  { name: "Shangri-La", city: "Colombo, Sri Lanka", popular: true },
  { name: "Top View", city: "Hikkaduwe, Sri Lanka" },
  { name: "Green Villa", city: "Kandy, Sri Lanka" },
  { name: "Wodden Pit", city: "Ambalangode, Sri Lanka" },
  { name: "Boutiqe", city: "Kandy, Sri Lanka" },
  { name: "Modern", city: "Nuwereliya, Sri Lanka" },
  { name: "Silver Rain", city: "Dehiwala, Sri Lanka" },
  { name: "Cashville", city: "Ampara, Sri Lanka", popular: true },
];

function App() {
  return (
    <div>
   
      <header>
        <div className="header_left">
          Lanka<b>Stay.</b>
        </div>
        <div className="header_right">
          <a className="active">Home</a>
          <a>Hotels</a>
          <a>Rooms</a>
          <a>About</a>
          <a>Contact</a>
          <button>Login</button>
        </div>
      </header>

   
      <div className="box">
        <div className="text_box">
          <span>Forget Busy Work, Start Next Vacation</span>
          <p>
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <button>Show More</button>

          <div className="stats">
            <div className="stat">
              <img src={zel} alt="" />
              <p><b>2500</b> Users</p>
            </div>
            <div className="stat">
              <img src={camera} alt="" />
              <p><b>200</b> treasure</p>
            </div>
            <div className="stat">
              <img src={locat} alt="" />
              <p><b>100</b> cities</p>
            </div>
          </div>
        </div>

        <div className="logo">
          <img src={logo} alt="room" />
        </div>
      </div>

      
      <div className="search">
        <div className="search_item">Check Available</div>
        <div className="search_item"> Person 2 ⌄</div>
        <div className="search_item">
          <img src={locat} alt="" /> Select Location
        </div>
        <button>Search</button>
      </div>

     
      <section className="section">
        <h2>Most Picked</h2>
        <div className="picked">
          {picked.map((h, i) => (
            <div className={"picked_card" + (i === 0 ? " big" : "")} key={h.name}>
              <img src={img(i + 1, 400, 500)} alt={h.name} />
              <span className="price">
                <b>${h.price}</b> per night
              </span>
              <div className="picked_text">
                <h3>{h.name}</h3>
                <p>{h.city}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

     
      <section className="section hotels">
        {hotels.map((h, i) => (
          <div className="hotel" key={h.name}>
            <div className="hotel_img">
              <img src={img(i + 10, 300, 200)} alt={h.name} />
              {h.popular && (
                <span className="popular">
                  <b>Popular</b> Choice
                </span>
              )}
            </div>
            <h3>{h.name}</h3>
            <p>{h.city}</p>
          </div>
        ))}
      </section>


      <footer>
        <div className="footer_top">
          <div>
            <div className="header_left footer_logo">
              Lanka<b>Stay.</b>
            </div>
            <p>
              We kaboom your beauty holiday <br /> instantly and memorable.
            </p>
          </div>
          <div className="owner">
            <h4>Become hotel Owner</h4>
            <button>Register Now</button>
          </div>
        </div>
        
      </footer>
    </div>
  );
}

export default App;
