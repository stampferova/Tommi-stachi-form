$(function () {
  function formHasError(form) {
    let isValid = true;
    $(form).find(".form__message").css("opacity", "0");
    $(form).find(".form__item").removeClass("error");
    $(form)
      .find(".form__item")
      .each(function () {
        validation($(this));
      });
    return isValid;
  }

  function validation(item) {
    let isValid = true;
    item.find(".form__message").css("opacity", "0");
    item.removeClass("error");

    //Required validation
    if (item.find("[data-validate='required']").length > 0) {
      if (item.find(".select").length > 0) {
        if (item.find(".select option:selected").val() == 0) {
          item.find(".form__message").css("opacity", "1");
          item.find(".form__item").addClass("error");
          isValid = false;
        }
      } else if (item.find(".checkbox").length > 0) {
        if (item.find(".checkbox input:checked").length === 0) {
          item.find(".form__message").css("opacity", "1");
          item.find(".form__item").addClass("error");
          isValid = false;
        }
      }
    }
    //Number validation
    if (item.find("[data-validate='number']").length > 0) {
      if (!validNumber(item.find("input").val())) {
        item.find(".form__message").css("opacity", "1");
        item.addClass("error");
        isValid = false;
      }
    }

    if (item.find("[data-validate='account']").length > 0) {
      if (
        !validAccount(item.find("input").val()) ||
        item.find("input").val() == ""
      ) {
        item.find(".form__message").css("opacity", "1");
        item.addClass("error");
        isValid = false;
      }
    }
  }

  /* * Hide validation message if the user check checkbox */

  $(document).on("change", ".js-checkbox", function () {
    $(this).closest(".form__item").find(".form__message").css("opacity", "0");
    $(this).closest(".form__item").removeClass("error");
  });

  /**
   * Number validation
   */
  function validNumber(number) {
    var re = /^(?!$)\d{0,10}(?:\.\d{1,2})?$/;
    return re.test(number);
  }

  function validAccount(number) {
    let weights = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
    let re = /^([0-9]{0,6}[-][0-9]{0,10}|[0-9]{0,10})?$/;

    let inputValue = number;
    inputValue = inputValue.replace(/-/g, "");
    let numWithZeros = inputValue.toString().padStart(16, "0");
    let num = numWithZeros.toString().split("");
    num = num.map(Number);
    let arr = [];
    let total = 0;

    for (let i = 0; i < num.length; i++) {
      arr.push(num[i] * weights[i]);
      total = total + num[i] * weights[i];
    }

    let modulo = total % 11;

    if (re.test(number)) {
      if (modulo > 0) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  $(".form__item .input").on("keyup", function (e) {
    validation($(this).parents(".form__item"));
  });

  $(document).on("click", ".form button[type=submit]", function (event) {
    event.preventDefault();

    var formbutton = $(this);
    var form = formbutton.closest(".form");
    formHasError(form);
  });
});
