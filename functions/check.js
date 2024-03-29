function check() {
  let correctlength;
  let points;
  let strength;
  let stringCheck;
  let extraifall;

  const matchesregex = /^[a-zA-Z0-9!$%^&*()-_=+]+$/.test(
    document.getElementById("pswd_to_check").value
  );
  if (25 > document.getElementById("pswd_to_check").value.length) {
    correctlength = document.getElementById("pswd_to_check").value.length > 7;
  } else {
    correctlength = false;
  }
  const ucl = /^(?=.*[A-Z])/.test(
    document.getElementById("pswd_to_check").value
  );
  const lcl = /^(?=.*[a-z])/.test(
    document.getElementById("pswd_to_check").value
  );
  const digit = /^(?=.*[0-9])/.test(
    document.getElementById("pswd_to_check").value
  );
  const allowedsymbols = /^(?=.*[!$%^&*()_=+-])/.test(
    document.getElementById("pswd_to_check").value
  );
  const onlyLetters = /^[a-zA-Z]+$/.test(
    document.getElementById("pswd_to_check").value
  );
  const onlyDigits = /^[0-9]+$/.test(
    document.getElementById("pswd_to_check").value
  );
  const onlySymbols = /^[!$%^&*()_=+-]+$/.test(
    document.getElementById("pswd_to_check").value
  );

  const qwerty1 = ["qwe", "wer", "ert", "rty", "tyu", "yui", "uio", "iop"];
  const qwerty2 = ["asd", "sdf", "dfg", "fgh", "ghj", "hjk", "jkl"];
  const qwerty3 = ["zxc", "xcv", "cvb", "vbn", "bnm"];
  console.clear();

  extraifall = !!(
    matchesregex &&
    correctlength &&
    ucl &&
    lcl &&
    digit &&
    allowedsymbols
  );

  if (!correctlength) {
    document.getElementById("points").innerHTML =
      "Your password must be between 8 and 24 characters.";
  } else if (!matchesregex) {
    document.getElementById("points").innerHTML =
      "Your password may only contain the following symbols: ! $ % ^ & * ( ) - _ = +";
  } else {
    points = document.getElementById("pswd_to_check").value.length;

    if (ucl) {
      points += 5;
    }
    if (lcl) {
      points += 5;
    }
    if (digit) {
      points += 5;
    }
    if (allowedsymbols) {
      points += 5;
    }
    if (extraifall) {
      points += 10;
    }
    if (onlyLetters) {
      points += -5;
    }
    if (onlyDigits) {
      points += -5;
    }
    if (onlySymbols) {
      points += -5;
    }

    for (i = 0, len = qwerty1.length, text = ""; i < len; i++) {
      stringCheck = qwerty1[i];
      if (
        document
          .getElementById("pswd_to_check")
          .value.toLowerCase()
          .includes(stringCheck)
      ) {
        points += -5;
      }
    }

    for (i = 0, len = qwerty2.length, text = ""; i < len; i++) {
      stringCheck = qwerty2[i];
      if (
        document
          .getElementById("pswd_to_check")
          .value.toLowerCase()
          .includes(stringCheck)
      ) {
        points += -5;
      }
    }

    for (i = 0, len = qwerty3.length, text = ""; i < len; i++) {
      stringCheck = qwerty3[i];
      if (
        document
          .getElementById("pswd_to_check")
          .value.toLowerCase()
          .includes(stringCheck)
      ) {
        points += -5;
      }
    }

    if (points > 20) {
      strength = "Strong";
    } else if (points < 1) {
      strength = "Weak";
    } else {
      strength = "Medium";
    }

    document.getElementById("points").innerHTML =
      "<b>Password strength:</b> " + strength + " (" + points + ")";
  }
}
