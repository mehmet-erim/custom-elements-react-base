import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  margin-right: 10%;
  margin-left: 10%;
`;
const Button = styled.button``;

function App() {
  const [isModalShow, setModalShow] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = './elements/modal.js';

    script.onload = (() => {
      setLoaded(true);
      setTimeout(() => {
        modalRef.current.addEventListener('close', () => setModalShow(false));
      }, 1000);
    })();
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (modalRef.current) modalRef.current.show = isModalShow;
  }, [isModalShow]);

  return (
    <Container>
      <Button className="btn btn-primary" onClick={() => setModalShow(true)}>
        Open modal
      </Button>
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
    </Container>
  );
}

export default App;
