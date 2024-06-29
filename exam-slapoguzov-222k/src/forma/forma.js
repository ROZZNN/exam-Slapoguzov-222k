import Script from './formascript'
import React, { useState } from 'react';
import {
  validateDateOfBirth, validateFullName, validatePhoneNumber, validateEmail, validateFutureDate,
} from './nomber';

const Farmm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const handlePhoneNumberChange = (value) => {
    const cleaned = value.replace(/[^0-9+-]{11}/g, ''); // only allow digits, +, and -
    const formattedValue = formatPhoneNumber(cleaned);
    setPhoneNumber(formattedValue);
  
    if (value.trim() === '') {
      setPhoneNumberError('Номер телефона не может быть пустым');
    } else {
      setPhoneNumberError('');
    }
  };
  const formatPhoneNumber = (value) => {
    const cleaned = (`${value}`).replace(/\D/g, '');
    const match = cleaned.match(/^(7|8)?(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
      const intlCode = (match[1] ? '+7' : '');
      return [intlCode, match[2], match[3], match[4], match[5]].filter(Boolean).join('-');
    }
    return value;
  };
  return (
    <div class='form-reg'>
    <form class='class-style'>
    <label for="name">Имя:</label>
    <input type="text" id="name" name="name" placeholder="Иван"/>
    
    <label for="phone">Телефон:</label>
    <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => handlePhoneNumberChange(e.target.value)}
            //onBlur={handleBlur}
            placeholder="+7-XXX-XXX-XX-XX"
            required
          />
    
    <label for="dateTimeStart">Дата и время начала брони:</label>
    <input type="datetime-local" id="dateTimeStart" name="dateTimeStart" min="2022-04-18T00:00"/>
    
    <label for="duration">Длительность брони:</label>
    <select id="duration" name="duration" required>
        <option value="1">1 час</option>
        <option value="3">3 часа</option>
        <option value="5">5 часов</option>
    </select>

    <input type="checkbox" id="agreeTerms" name="agreeTerms" required checked/>
    <label for="agreeTerms">Я согласен(-на) с условиями</label>
    
    <button id="submitButton" type="submit" onClick={Script}>Забронировать</button>
    </form>
    </div>
    )

    };
export default Farmm