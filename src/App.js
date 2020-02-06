import React, { useState, useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [isShowModal, setShowModal] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = './elements/modal.js';

    script.onload = (() => {
      setLoaded(true);
      setTimeout(() => {
        console.log(
          modalRef.current.addEventListener('close', () => setShowModal(false))
        );
      }, 0);
    })();
    document.body.appendChild(script);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
          onClick={() => {
            setShowModal(!isShowModal);
            modalRef.current.show = !isShowModal;
          }}
        >
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {isLoaded ? (
        <modal-element ref={modalRef} width="800px" height="600px">
          <h1>Header</h1>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi,
            aperiam natus eius ipsa nemo ipsum temporibus veniam, laborum
            mollitia voluptates! Voluptate facilis quas maiores magni, nisi
            nobis minima reprehenderit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aut modi, aperiam natus eius ipsa nemo ipsum
            temporibus veniam, laborum mollitia voluptates! Voluptate facilis
            quas maiores magni, nisi nobis minima reprehenderit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Aut modi, aperiam natus
            eius ipsa nemo ipsum temporibus veniam, laborum mollitia voluptates!
            Voluptate facilis quas maiores magni, nisi nobis minima
            reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aut modi, aperiam natus eius ipsa nemo ipsum temporibus
            veniam, laborum mollitia voluptates! Voluptate facilis quas maiores
            magni, nisi nobis minima reprehenderit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aut modi, aperiam natus eius ipsa nemo
            ipsum temporibus veniam, laborum mollitia voluptates! Voluptate
            facilis quas maiores magni, nisi nobis minima reprehenderit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Aut modi, aperiam
            natus eius ipsa nemo ipsum temporibus veniam, laborum mollitia
            voluptates! Voluptate facilis quas maiores magni, nisi nobis minima
            reprehenderit.
          </div>
        </modal-element>
      ) : null}
    </div>
  );
}

export default App;
