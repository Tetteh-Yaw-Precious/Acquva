
const pkey = "FLWPUBK_TEST-5c89de05df3a1e0115021878db37a5ac-X";
    function makePayment() {
        FlutterwaveCheckout({
          public_key: pkey,
          tx_ref: "RX1",
          amount: 10,
          currency: "GHS",
          country: "GH",
          payment_options: "card,mobile_money_ghana",
          redirect_url: // specified redirect URL
            "https://callbacks.piedpiper.com/flutterwave.aspx?ismobile=34",
          meta: {
            consumer_id: 23,
            consumer_mac: "92a3-912ba-1192a",
          },
          customer: {
            email: "cornelius@gmail.com",
            phone_number: "08102909304",
            name: "Flutterwave Developers",
          },
          callback: function (data) {
            console.log(data);
          },
          onclose: function() {
            // close modal
          },
          customizations: {
            title: "My store",
            description: "Payment for items in cart",
            logo: "https://assets.piedpiper.com/logo.png",
          },
        });
      }