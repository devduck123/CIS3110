document.addEventListener("DOMContentLoaded", () => {
  // live loading of userID via #name
  document.querySelector("#name").onkeyup = () => {
    let name = document.querySelector("#name").value;
    let number = document.querySelector("#number").value;

    let userID = (name + "" + number).replace(/\s+/g, "");

    document.querySelector("#user-id").innerHTML = userID;
    document.querySelector("#user-id").style.display = "block";
  };

  // live loading for userID via #number
  document.querySelector("#number").onkeyup = () => {
    let name = document.querySelector("#name").value;
    let number = document.querySelector("#number").value;

    let userID = (name + "" + number).replace(/\s+/g, "");

    document.querySelector("#user-id").innerHTML = userID;
    document.querySelector("#user-id").style.display = "block";
  };

  document.querySelector("form").onsubmit = () => {
    fetch(
      "http://api.exchangeratesapi.io/v1/latest?access_key=78c5d28e78cb6dc299c4b898d3b495f7"
    )
      .then((response) => response.json())
      .then((data) => {
        // sanitize user input
        const currency = document
          .querySelector("#currency")
          .value.toUpperCase();

        // get value corresponding to key of currency
        const rate = data.rates[currency];

        // for assignment -- required to log an input
        console.log(currency);
        console.log(rate);

        if (rate !== undefined) {
          document.querySelector(
            "#currency_result"
          ).innerHTML = `1 EUR is equal to ${rate} ${currency}`;
        } else {
          document.querySelector("#currency_result").innerHTML =
            "Unable to convert that currency.";
        }
      })

      // catch errors with fetching API
      .catch((error) => {
        console.log("Error: ", error);
      });

    return false;
  };
});
