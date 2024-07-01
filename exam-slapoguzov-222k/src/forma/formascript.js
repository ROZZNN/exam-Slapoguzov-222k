// проверка на ввод имени
const validateFullName = (fullName) => {
    // проверка на наличие хотя бы двух слов кириллицей
    const regex = /^[А-Яа-яЁё]+\s[А-Яа-яЁё]+(\s[А-Яа-яЁё]+)?$/;
  
    return regex.test(fullName);
  };  
  

  const validatePhoneNumber = (phoneNumber) => {
    const cleaned = phoneNumber.replace(/\D/g, '');
    return /^(?:\+7|8)\d{10}$/.test(cleaned);
  };
  
  const validateFutureDate = (date) => {
    const selectedDate = new Date(date);
    const currentDate = new Date();

    selectedDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);
  
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);
  
    return selectedDate >= nextDay;
  };
  function validateForm() {
    var agreeCheckbox = document.getElementById('agreeCheckbox');

    if (!agreeCheckbox.checked) {
        alert('Вы должны согласиться с условиями!');
        return false;
      }
    };
  
export {
    validateFullName, 
    validateFutureDate,
    validatePhoneNumber,
    validateForm
}