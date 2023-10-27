import "./App.css";
import gptlogo from './assets/chatgpt.svg'
import addbtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import upgrade from './assets/rocket.svg'
function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperside ">
          <div className="uppersidetop">
            <img src={gptlogo} alt="logo" className="logo" />
            <span className="brand ">ChatGPT</span>
          </div>
          <button className="midbtn">
            <img src={addbtn} alt="new chat" className="addbtn" />
            New Chat
          </button>
          <div className="uppersidebottom">
            <button className="query">
              <img src={msgIcon} alt="" />
              What is programming?
            </button>
            <button className="query">
              <img src={msgIcon} alt="" />
              How to use a API?
            </button>
          </div>
        </div>
        <div className="lowerside">
            <div className="listitmes"><img src={home} alt="" className="listitemimg" />Home</div>
            <div className="listitmes"><img src={saved} alt="" className="listitemimg" />Saved</div>
            <div className="listitmes"><img src={upgrade} alt="" className="listitemimg" />Upgrade to pro</div>


        </div>
      </div>
      <div className="main"></div>
    </div>
  );
}

export default App;
