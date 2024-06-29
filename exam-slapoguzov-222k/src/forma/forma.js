import React from 'react';

const formm = () => {
    const handleSubmit = async (event) => {
        event.preventDefault(); // Предотвращаем стандартное поведение формы
    
        const formData = new FormData(event.target); // Получаем данные формы
        const data = Object.fromEntries(formData); // Преобразуем FormData в объект
    
        try {
          alert('Дорожка успешно забронирована'); // Выводим сообщение
        } catch (error) {
          console.error('Ошибка при отправке данных:', error);
        }
    }
  return (
    <div class='form-reg'>
    <form action="/process-reservation" method="post" class='class-style'>
    <label for="name">Имя:</label>
    <input type="text" id="name" name="name" required pattern="[А-Яа-я]+"/>
    
    <label for="phone">Телефон:</label>
    <input type="tel" id="phone" name="phone" list="tel-list" placeholder="+7 (900) 123-45-67" required pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"/>
    
    <label for="dateTimeStart">Дата и время начала брони:</label>
    <input type="datetime-local" id="dateTimeStart" name="dateTimeStart" min="2022-04-17T00:00"/>
    
    <label for="duration">Длительность брони:</label>
    <select id="duration" name="duration" required>
        <option value="1">1 час</option>
        <option value="3">3 часа</option>
        <option value="5">5 часов</option>
    </select>

    <input type="checkbox" id="agreeTerms" name="agreeTerms" required checked/>
    <label for="agreeTerms">Я согласен(-на) с условиями</label>
    
    <button id="submitButton" type="submit">Забронировать</button>
    </form>
    </div>
    )

    };
export default formm