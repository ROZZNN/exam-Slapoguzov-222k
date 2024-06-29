const Script = () => {
    document.getElementById('submitButton').addEventListener('click', function(event) {
        function allFieldsAreValid() {
            var name = document.getElementById('name').value;
            var phone = document.getElementById('phone').value;
            var dateTimeStart = document.getElementById('dateTimeStart').value;
            var duration = document.getElementById('duration').value;
            var agreeTerms = document.getElementById('agreeTerms').checked;

        function validateName(name) {
            var pattern = /^[А-Яа-яЁё]+\s[А-Яа-яЁё]+(\s[А-Яа-яЁё]+)?$/;
            return pattern.test(name);
        }

        function validatePhone(phone) {
            var pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
            return pattern.test(phone);
        }

        // function validateDateTimeStart(dateTimeStart) {
        //     var minDate = new Date(date);
        //     var dateTime = new new Date();

        //     selectedDate.setHours(0, 0, 0, 0);
        //     currentDate.setHours(0, 0, 0, 0);
            
        //     const nextDay = new Date(currentDate);
        //     nextDay.setDate(currentDate.getDate() + 1);
          
        //     return selectedDate >= nextDay;
        
        // }

        function validateDuration(duration) {
            var validDurations = ['1', '3', '5'];
            return validDurations.includes(duration);
        }

        function validateAgreeTerms(agreeTerms) {
            return agreeTerms;
        }

        document.getElementById('submitButton').addEventListener('click', function(event) { 
            event.preventDefault();


        if (allFieldsAreValid) {
            this.form.submit();
        }
        });
        return validateName(name) && validatePhone(phone) && validateDuration(duration) && validateAgreeTerms(agreeTerms);
        }
        });
        const handleBlur = (e) => {
            const { id, value } = e.target;
            switch (id) {
              case 'phoneNumber':
                handlePhoneNumberChange(value);
                break;
              default:
                break;
            }
          };
    }
export default Script