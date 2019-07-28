import React from 'react';
import Style from 'styled-components';
import { Link } from 'react-router-dom';

//  ------ VARIABLES  ---------

var operators = [
  {
    id: '1',
    name: 'MTS'
  },
  {
    id: '2',
    name: 'Megafon'
  },
  {
    id: '3',
    name: 'Beeline'
  },
  {
    id: '4',
    name: 'Tele2'
  }
]

// -------  COMPONENT ---------

export default function Home() {

  return (
    <Container>
      <div id="operatorPage">
        <Title>Онлайн терминал</Title>
        <p>Выберите оператора для оплаты</p>
        <List>
          <GetList />
        </List>
      </div>
    </Container>
  )

}

function GetList() {
  const list = operators.map((el) => {
    return(
    <ListObject key={el.id} onClick={() => saveName(el.name)}><Link to="/pay">{el.name}</Link></ListObject>
    )
  })
  return list;
}

function saveName(name) {
  sessionStorage.setItem('operatorName', name);
}

// ----- STYLED COMPONENTS  -----

const Title = Style.h2``;

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