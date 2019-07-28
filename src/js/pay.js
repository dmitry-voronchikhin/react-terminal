import React, { useRef, useState } from 'react';
import Style from 'styled-components';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import Axios from 'axios'

//  --------- VARIABLES  ----------

// name of operator
var operatorName = '';

//    -------   CLASS   --------

export default function Pay() {

    operatorName = sessionStorage.getItem('operatorName')

    return (
      <PayPage>
        <BackToOperator>
          <Link to="/" onClick={sessionStorage.removeItem('operatorName')}>Вернуться к выбору оператора</Link>
        </BackToOperator>
        <OperatorName>
          <span>Выбранный оператор: {operatorName}</span>
        </OperatorName>
        <PhoneNumber>
          <InputMask mask="8 (999) 999-99-99" className="form-control" title="Номер телефона" placeholder="Номер телефона"/>
        </PhoneNumber>
        <Amount>
          <InputMask mask="9999" className="form-control" title="Сумма оплаты (руб)" placeholder="Сумма оплаты (руб)"/>
        </Amount>
        <Button className="form-control" onClick={postPay}>Оплатить</Button>
      </PayPage>
    );
  };

  function postPay() {
    
  };

//    -------- STYLED COMPONENTS  -------

//  for page
const PayPage = Style.div`
  text-align: center;
  max-width: 20rem;
  margin: auto;
`;

//  for back link
const BackToOperator = Style.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

//  for name of operator
const OperatorName = Style.div`
  margin-bottom: 2rem;
`;

//  for phone number
const PhoneNumber = Style.div`
  margin-bottom: 2rem;
`;

//  for amount of pay
const Amount = Style.div`
  margin-bottom: 2rem;
  dispay: flex;
`;

const Button = Style.button`

`;