$(function() {

    $("#register-form").validate({
        rules: {
          name: {
            required: true,
            lettersonly: true
          },
          date: {
              required: true,
          },
          email: {
            required: true,
            email: true,
          },
          number: {
            required: true,
            digits: true,
          },
          brand: {
            required: true
          },
        },
      });
});