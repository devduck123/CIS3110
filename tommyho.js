document.addEventListener("DOMContentLoaded", () => {
  // live loading of userID via #name
  document.querySelector("#name").onkeyup = () => {
    let name = document.querySelector("#name").value;
    let number = document.querySelector("#number").value;

    let userID = (name + "" + number).replace(/\s+/g, "");

    document.querySelector("#user-id").innerHTML =
      "Hello, your username is: " + userID;
    document.querySelector("#user-id").style.display = "block";
  };

  // live loading for userID via #number
  document.querySelector("#number").onkeyup = () => {
    let name = document.querySelector("#name").value;
    let number = document.querySelector("#number").value;

    let userID = (name + "" + number).replace(/\s+/g, "");

    document.querySelector("#user-id").innerHTML =
      "Hello, your username is: " + userID;
    document.querySelector("#user-id").style.display = "block";
  };

  // live loading for userID via #prompt
  document.querySelector("#prompt").onkeyup = () => {
    let name = document.querySelector("#name").value;
    let number = document.querySelector("#number").value;

    let userID = (name + "" + number).replace(/\s+/g, "");

    document.querySelector("#user-id").innerHTML =
      "Hello, your username is: " + userID;
    document.querySelector("#user-id").style.display = "block";
  };

  document.querySelector("#btn-prompt").onclick = () => {
    let promptInput = document.querySelector("#prompt").value;
    promptInput = promptInput[0].toUpperCase();
    console.log(promptInput[0]);

    if (promptInput.toString() === "Y") {
      console.log("FIND OUT MORE!");
      document.querySelector("#more-info").style.display = "block";
    }
  };

  document.querySelector("form").onsubmit = () => {
    fetch("https://api.coinbase.com/v2/exchange-rates?currency=BTC")
      .then((response) => response.json())
      .then((d) => {
        // d wraps the JSON response

        // sanitize user input
        const currency = document
          .querySelector("#currency")
          .value.toUpperCase();

        // get value corresponding to key of currency
        const rate = d.data.rates[currency];

        // for assignment -- required to log an input
        console.log(currency);
        console.log(rate);

        if (rate !== undefined) {
          document.querySelector(
            "#currency_result"
          ).innerHTML = `1 BTC is equal to ${rate} ${currency}`;
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
