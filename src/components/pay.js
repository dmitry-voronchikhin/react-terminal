import React from 'react';
import Style from 'styled-components';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import {push} from 'react-router-redirect';

//  ------- VARIABLES --------

var operator = null;
var codes = null;

//  -------   COMPONENT   --------

export default function Pay() {

    operator = sessionStorage.getItem('operatorName');
    codes = (sessionStorage.getItem('codes')).split(',');

    return (
      <PayPage>
        <BackToOperator>
          <Link to="/" onClick={() => resetOperator()}>&larr; Вернуться к выбору оператора</Link>
        </BackToOperator>
        <OperatorName>
          <span>Выбранный оператор: {operator}</span>
        </OperatorName>
        <PhoneNumber>
          <InputMask id="phone" mask="8 (999) 999-99-99" className="form-control" title="Номер телефона" placeholder="Номер телефона"/>
        </PhoneNumber>
        <Amount>
          <InputMask id="amount" mask="9999" maskChar="" className="form-control" title="Сумма оплаты (руб)" placeholder="Сумма оплаты (руб)"/>
        </Amount>
        <Button className="form-control" onClick={clickButton}>Оплатить</Button>
      </PayPage>
    );
  };

  function checkData() {
    var phone = document.getElementById("phone").value;
    var amount = document.getElementById("amount").value;

    if(operator == null) return alert('Невоможно продолжить без выбора оператора!')

    if(phone.match(/^$/)) return alert('Введите номер телефона!');
    if(!phone.match(/^8 \([0-9][0-9][0-9]\) [0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$/)) return alert('Введите номер телефона полностью!');

    if(amount.match(/^$/)) return alert('Введите сумму!');
    if(parseFloat(amount) < 1 || parseFloat(amount) > 1000) return alert('Введите сумму от 1 до 1000!');

    if(!checkOperator(phone)) return alert('Телефонный код не соответствует оператору.\r\nВыберите соответствующего оператора!');
  
    return true;
  };

  function postPay() {
      if(Math.random() > 0.5) {
        alert('Успешно');
        return true;
      } 
      else{
        alert('Ошибка оплаты. Повторите снова.');
        return false;
      }
  }

  function checkOperator(phone) {
    var flag = false;
    for(var i = 0; i < codes.length; i++) {
      if(phone.substring(3,6) === codes[i]) {
        flag = true;
        break;  
      }
    }
    return flag;
  }

   function clickButton() {
    if(checkData())
      if(postPay())
        push('/');
   }

   function resetOperator() {
    sessionStorage.removeItem('operatorName')
    sessionStorage.removeItem('codes')
   }

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

// for button
const Button = Style.button`

`;