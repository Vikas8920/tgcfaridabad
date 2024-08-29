// Popups
$(document).ready(function () {
  // Popup1
  $("#openPopup").click(function () {
    $("#overlay").fadeIn();
    $("#popupForm").fadeIn();
  });

  $(".close").click(function () {
    $("#overlay").fadeOut();
    $("#popupForm").fadeOut();
  });

  // form1
  $("#form").submit(function (e) {
    e.preventDefault();
    let name = $("#name").val();
    let email = $("#email").val();
    let phone = $("#phone").val();
    $("#nameError").text("");
    $("#emailError").text("");
    $("#phoneError").text("");

    if (name.trim() === "") {
      $("#nameError").text("Name is required.");
      return;
    }

    if (email.trim() === "") {
      $("#emailError").text("Email is required.");
      return;
    }

    if (!isValidEmail(email)) {
      $("#emailError").text("Invalid email address.");
      return;
    }

    if (phone.trim() === "") {
      $("#phoneError").text("Phone number is required.");
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      $("#phoneError").text("Invalid phone number.");
      return;
    }

    $("#form").unbind("submit").submit();
  });

  function isValidEmail(email) {
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }

  function isValidPhoneNumber(phone) {
    let phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }

  // Popup2
  $("#openPopup2").click(function () {
    $("#overlay2").fadeIn();
    $("#popupForm2").fadeIn();
  });

  $(".close").click(function () {
    $("#overlay2").fadeOut();
    $("#popupForm2").fadeOut();
  });

  // form2
  $("#form2").submit(function (e) {
    e.preventDefault();
    let name = $("#name2").val();
    let email = $("#email2").val();
    let phone = $("#phone2").val();
    $("#nameError2").text("");
    $("#emailError2").text("");
    $("#phoneError2").text("");

    if (name.trim() === "") {
      $("#nameError2").text("Name is required.");
      return;
    }

    if (email.trim() === "") {
      $("#emailError2").text("Email is required.");
      return;
    }

    if (!isValidEmail(email)) {
      $("#emailError2").text("Invalid email address.");
      return;
    }

    if (phone.trim() === "") {
      $("#phoneError2").text("Phone number is required.");
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      $("#phoneError2").text("Invalid phone number.");
      return;
    }

    $("#form2").unbind("submit").submit();
  });

  function isValidEmail(email) {
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }

  function isValidPhoneNumber(phone) {
    let phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }

  // Popup3
  $("#openPopup3").click(function () {
    $("#overlay3").fadeIn();
    $("#popupForm3").fadeIn();
  });

  $(".close").click(function () {
    $("#overlay3").fadeOut();
    $("#popupForm3").fadeOut();
  });

  // form3
  $("#form3").submit(function (e) {
    e.preventDefault();
    let name = $("#name3").val();
    let email = $("#email3").val();
    let phone = $("#phone3").val();
    $("#nameError3").text("");
    $("#emailError3").text("");
    $("#phoneError3").text("");

    if (name.trim() === "") {
      $("#nameError3").text("Name is required.");
      return;
    }

    if (email.trim() === "") {
      $("#emailError3").text("Email is required.");
      return;
    }

    if (!isValidEmail(email)) {
      $("#emailError3").text("Invalid email address.");
      return;
    }

    if (phone.trim() === "") {
      $("#phoneError3").text("Phone number is required.");
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      $("#phoneError3").text("Invalid phone number.");
      return;
    }

    $("#form3").unbind("submit").submit();
  });

  function isValidEmail(email) {
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }

  function isValidPhoneNumber(phone) {
    let phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }

  // Popup4
  $("#openPopup4").click(function () {
    $("#overlay4").fadeIn();
    $("#popupForm4").fadeIn();
  });

  $(".close").click(function () {
    $("#overlay4").fadeOut();
    $("#popupForm4").fadeOut();
  });

  // form4
  $("#form4").submit(function (e) {
    e.preventDefault();
    let name = $("#name4").val();
    let email = $("#email4").val();
    let phone = $("#phone4").val();
    $("#nameError4").text("");
    $("#emailError4").text("");
    $("#phoneError4").text("");

    if (name.trim() === "") {
      $("#nameError4").text("Name is required.");
      return;
    }

    if (email.trim() === "") {
      $("#emailError4").text("Email is required.");
      return;
    }

    if (!isValidEmail(email)) {
      $("#emailError4").text("Invalid email address.");
      return;
    }

    if (phone.trim() === "") {
      $("#phoneError4").text("Phone number is required.");
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      $("#phoneError4").text("Invalid phone number.");
      return;
    }

    $("#form4").unbind("submit").submit();
  });

  function isValidEmail(email) {
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }

  function isValidPhoneNumber(phone) {
    let phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }


  // Popup5
  $("#openPopup5").click(function () {
    $("#overlay5").fadeIn();
    $("#popupForm5").fadeIn();
  });

  $(".close").click(function () {
    $("#overlay5").fadeOut();
    $("#popupForm5").fadeOut();
  });

  // form5
  $("#form5").submit(function (e) {
    e.preventDefault();
    let name = $("#name5").val();
    let email = $("#email5").val();
    let phone = $("#phone5").val();
    $("#nameError5").text("");
    $("#emailError5").text("");
    $("#phoneError5").text("");

    if (name.trim() === "") {
      $("#nameError5").text("Name is required.");
      return;
    }

    if (email.trim() === "") {
      $("#emailError5").text("Email is required.");
      return;
    }

    if (!isValidEmail(email)) {
      $("#emailError5").text("Invalid email address.");
      return;
    }

    if (phone.trim() === "") {
      $("#phoneError5").text("Phone number is required.");
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      $("#phoneError5").text("Invalid phone number.");
      return;
    }

    $("#form5").unbind("submit").submit();
  });

  function isValidEmail(email) {
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }

  function isValidPhoneNumber(phone) {
    let phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }


  // Popup6
  $("#openPopup6").click(function () {
    $("#overlay6").fadeIn();
    $("#popupForm6").fadeIn();
  });

  $(".close").click(function () {
    $("#overlay6").fadeOut();
    $("#popupForm6").fadeOut();
  });

  // form6
  $("#form6").submit(function (e) {
    e.preventDefault();
    let name = $("#name6").val();
    let email = $("#email6").val();
    let phone = $("#phone6").val();
    $("#nameError6").text("");
    $("#emailError6").text("");
    $("#phoneError6").text("");

    if (name.trim() === "") {
      $("#nameError6").text("Name is required.");
      return;
    }

    if (email.trim() === "") {
      $("#emailError6").text("Email is required.");
      return;
    }

    if (!isValidEmail(email)) {
      $("#emailError6").text("Invalid email address.");
      return;
    }

    if (phone.trim() === "") {
      $("#phoneError6").text("Phone number is required.");
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      $("#phoneError6").text("Invalid phone number.");
      return;
    }

    $("#form6").unbind("submit").submit();
  });

  function isValidEmail(email) {
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }

  function isValidPhoneNumber(phone) {
    let phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }

  // Popup7
  $("#openPopup7").click(function () {
    $("#overlay7").fadeIn();
    $("#popupForm7").fadeIn();
  });

  $(".close").click(function () {
    $("#overlay7").fadeOut();
    $("#popupForm7").fadeOut();
  });

  // form7
  $("#form7").submit(function (e) {
    e.preventDefault();
    let name = $("#name7").val();
    let email = $("#email7").val();
    let phone = $("#phone7").val();
    $("#nameError7").text("");
    $("#emailError7").text("");
    $("#phoneError7").text("");

    if (name.trim() === "") {
      $("#nameError7").text("Name is required.");
      return;
    }

    if (email.trim() === "") {
      $("#emailError7").text("Email is required.");
      return;
    }

    if (!isValidEmail(email)) {
      $("#emailError7").text("Invalid email address.");
      return;
    }

    if (phone.trim() === "") {
      $("#phoneError7").text("Phone number is required.");
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      $("#phoneError7").text("Invalid phone number.");
      return;
    }

    $("#form7").unbind("submit").submit();
  });

  function isValidEmail(email) {
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }

  function isValidPhoneNumber(phone) {
    let phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }


  // form8
  $("#form8").submit(function (e) {
    e.preventDefault();
    let name = $("#name8").val();
    let email = $("#email8").val();
    let phone = $("#phone8").val();
    $("#nameError8").text("");
    $("#emailError8").text("");
    $("#phoneError8").text("");

    if (name.trim() === "") {
      $("#nameError8").text("Name is required.");
      return;
    }

    if (email.trim() === "") {
      $("#emailError8").text("Email is required.");
      return;
    }

    if (!isValidEmail(email)) {
      $("#emailError8").text("Invalid email address.");
      return;
    }

    if (phone.trim() === "") {
      $("#phoneError8").text("Phone number is required.");
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      $("#phoneError8").text("Invalid phone number.");
      return;
    }

    $("#form8").unbind("submit").submit();
  });

  function isValidEmail(email) {
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }

  function isValidPhoneNumber(phone) {
    let phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }

});
