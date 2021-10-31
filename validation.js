$(function() {

  jQuery.validator.setDefaults({
    errorElement: 'span',
    errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
    }
});

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