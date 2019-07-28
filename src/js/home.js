import React from 'react';
import Style from 'styled-components';
import { Link } from 'react-router-dom';

//  ------ VARIABLES  ---------

const Title = Style.h2``;
var operators = [
  {
    name: 'MTS'
  },
  {
    name: 'Megafon'
  },
  {
    name: 'Beeline'
  }
]

// -------    CLASS   ----------

export default function Home() {

    return (
      <Container>
        <div id="operatorPage">
          <Title>Онлайн терминал</Title>
          <p>Выберите оператора для оплаты</p>
          <List>
            <ListObject><Link to="/pay" onClick={saveName('MTS')}>МТS</Link></ListObject>
            <ListObject><Link to="/pay" onClick={saveName('Beeline')}>Beeline</Link></ListObject>
            <ListObject><Link to="/pay" onClick={saveName('Megafon')}>Megafon</Link></ListObject>
          </List>
          <span>Добавить оператора</span>
        </div>
      </Container>
    )

  }

  function saveName(name) {
    sessionStorage.setItem('operatorName', name)
  }

// ----- STYLED COMPONENTS  -----

const ListObject = Style.li`
  cursor: pointer;
  list-style: none;
  font-size: 2rem;
  font-family: 'Courier New', Courier, monospace;
`;

const List = Style.ul`
  padding-inline-start: 0px;
  max-width: 20rem;
  margin:auto;
`;

const Container = Style.div`
  text-align: center;
  padding: 3rem;
  height: 100%;
`;