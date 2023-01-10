import logo from './logo.png';
import me from './beneface.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span className="sidespan">+</span>
          new chat
        </div>

      </aside>
      <section className="chatbox">
        <div className="chat-log">

          <div className="chat-message">
            <div className="chat-message-center">
              <div className="avatar">
                <img className="avatar-img" src={me} alt="avatar" />
              </div>
              Hello World
            </div>

            <div className="chat-message chat-gpt">
              <div className="chat-message-center">

                <div className="avatar">
                  <img className="avatar-imglogo" src={logo} alt="avatar" />
                </div>
                I am an AI
              </div>
            </div>
          </div>

        </div>
        <div className="chat-input-holder">
          <textarea className="chat-input-textarea" rows="1" placeholder="your question"></textarea>
        </div>
      </section>

    </div>
  );
}

export default App;
