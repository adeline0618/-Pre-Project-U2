import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './action';

const ChangeValueButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #61dafb;
  border: 0;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  margin: 1rem;
  font-size: 3rem;
`;

const ButtonWrapper = styled.div`
  margin: 1rem;
`;

function App() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{count}</span>
        <ButtonWrapper>
          <ChangeValueButton onClick={() => dispatch(increment())}>
            +
          </ChangeValueButton>
          <ChangeValueButton onClick={() => dispatch(decrement())}>
            -
          </ChangeValueButton>
        </ButtonWrapper>
      </header>
    </div>
  );
}

export default App;
