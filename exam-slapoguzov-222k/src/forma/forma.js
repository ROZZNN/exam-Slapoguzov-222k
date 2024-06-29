import React from 'react';

const formm = () => {
  return (
    <div class='form-reg'>
    <form action="/process-reservation" method="post" class='class-style'>
    <label for="name">Имя:</label>
    <input type="text" id="name" name="name" placeholder="Иван" required pattern="[А-Яа-я]+"/>
    
    <label for="phone">Телефон:</label>
    <input type="tel" id="phone" name="phone" list="tel-list" placeholder="+7 (900) 123-45-67" required pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"/>
    
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
    
    <button>Забронировать</button>
    </form>
    </div>
    )

    };
export default formm