import React from 'react';
import Style from 'styled-components';
import { Redirect, Link } from 'react-router-dom';
import InputMask from 'react-input-mask';

//  ------- VARIABLES --------

var operatorName = null;

//  -------   COMPONENT   --------

export default function Pay() {

    //var [phoneNumber, setPhoneNumber] = useState();
    //var [amount, setAmount] = useState();

    operatorName = sessionStorage.getItem('operatorName')

    return (
      <PayPage>
        <BackToOperator>
          <Link to="/" onClick={() => sessionStorage.removeItem('operatorName')}>Вернуться к выбору оператора</Link>
        </BackToOperator>
        <OperatorName>
          <span>Выбранный оператор: {operatorName}</span>
        </OperatorName>
        <PhoneNumber>
          <InputMask id="phone" mask="8 (999) 999-99-99" className="form-control" title="Номер телефона" placeholder="Номер телефона"/>
        </PhoneNumber>
        <Amount>
          <InputMask id="amount" mask="9999" maskChar="" className="form-control" title="Сумма оплаты (руб)" placeholder="Сумма оплаты (руб)"/>
        </Amount>
        <Button className="form-control" onClick={checkData}>Оплатить</Button>
      </PayPage>
    );
  };

  function checkData() {
    var phone = document.getElementById("phone").value;
    var amount = document.getElementById("amount").value;

    if(operatorName == null) return alert('Невоможно продолжить без выбора оператора!')

    if(phone.match(/^$/)) return alert('Введите номер телефона!');
    if(!phone.match(/^8 \([0-9][0-9][0-9]\) [0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$/)) return alert('Введите номер телефона полностью!');

    if(amount.match(/^$/)) return alert('Введите сумму!');
    if(parseFloat(amount) < 1 || parseFloat(amount) > 1000) return alert('Введите сумму от 1 до 1000!');

    if((phone.match(/^8 \(982\) [0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$/) || phone.match(/^8 \(912\) [0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$/)) && operatorName != 'MTS') return alert('Выберите оператора MTS!');
    if((phone.match(/^8 \(929\) [0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$/) || phone.match(/^8 \(922\) [0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$/)) && operatorName != 'Megafon') return alert('Выберите оператора Megafon!');
    if((phone.match(/^8 \(909\) [0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$/) || phone.match(/^8 \(963\) [0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$/)) && operatorName != 'Beeline') return alert('Выберите оператора Beeline!');
    if((phone.match(/^8 \(904\) [0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$/) || phone.match(/^8 \(951\) [0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$/)) && operatorName != 'Tele2') return alert('Выберите оператора Tele2!');

    setTimeout(postPay(), 3000);
  };

  function postPay() {
      if(Math.random() > 0.5) {
        alert('Успешно');
        return (<Redirect to="/"/>)
      } 
      return alert('Ошибка оплаты. Повторите снова.');
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