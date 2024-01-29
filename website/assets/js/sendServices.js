// const sendForm = async () => {
//   const name = document.getElementById("name").value;
//   const phone = document.getElementById("phone").value;
//   const yearText = document.getElementById("yearText").innerHTML;
//   const makeText = document.getElementById("makeText").innerHTML;
//   const modelText = document.getElementById("modelText").innerHTML;
//   let subject = "CASH FOR CARS!";
//   const from = "info@autoareus.com";

//   if (
//     name == "" ||
//     phone == "" ||
//     yearText == "Year" ||
//     makeText == "Make" ||
//     modelText == "Model"
//   ) {
//     document.getElementById(
//       "confirmationMsg"
//     ).innerHTML = `Please Fill all the fields!!`;
//     return;
//   }
//   let apiBody = {
//     from: from,
//     to: "info@autoareus.com",
//     subject: subject,
//     text: `${
//       "Name: " +
//       name +
//       "\\nPhone Number: " +
//       phone +
//       "\\nyear: " +
//       yearText +
//       "\\nMake: " +
//       makeText +
//       "\\nModel: " +
//       modelText
//     }`,
//   };
//   apiBodyjson = JSON.stringify(apiBody);
//   let apiUrl = "https://autoareus.com/MailApi/demo/send-email";
//   await fetch(apiUrl, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     subject: subject,
//     body: apiBodyjson,
//   })
//     .then((response) => response.text())
//     .catch((error) => {
//       console.error("Error:", error);
//     });
//   document.getElementById(
//     "confirmationMsg"
//   ).innerHTML = `Thank you, We Will Contact You Soon`;
// };

const sendForm = async () => {
  const name = document.getElementById("cuName").value;
  const phone = document.getElementById("cuPhone").value;
  const email = document.getElementById("cuEmail").value;
  const zipcode = document.getElementById("cuZipcode").value;
  const year = document.getElementById("yearText2").innerHTML;
  const make = document.getElementById("makeText2").innerHTML;
  const model = document.getElementById("modelText2").innerHTML;
  const milage = document.getElementById("cuMilage").value;
  const title = document.getElementById("cuTitleSelect").value;
  const drivable = document.getElementById("cuDrivableSelect").value;
  const condition = document.getElementById("cuConditionSelect").value;
  if (title == "" || drivable == "" || condition == "") {
    document.getElementById("confirmationMsg").classList.remove("d-none");
    document.getElementById(
      "confirmationMsg"
    ).innerHTML = `Pleace Select All Fields*`;
    return;
  }
  const from = "info@autoareus.com";

  let apiBody = {
    from: from,
    to: "info@autoareus.com",
    subject: "AutoAreUs",
    text: `${
      "Name: " +
      name +
      "\\nEmail: " +
      email +
      "\\nPhone: " +
      phone +
      "\\nZipcode: " +
      zipcode +
      "\\nYear: " +
      year +
      "\\nMake: " +
      make +
      "\\nModel: " +
      model +
      "\\nMillage: " +
      milage +
      "\\nTitle: " +
      title +
      "\\nDrivale: " +
      drivable +
      "\\nCondition: " +
      condition
    }`,
  };
  apiBodyjson = JSON.stringify(apiBody);
  let apiUrl = "https://autoareus.com/MailApi/demo/send-email";
  await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    subject: "AutoAreUs",
    body: apiBodyjson,
  })
    .then((response) => response.text())
    .catch((error) => {
      console.error("Error:", error);
    });
  document.getElementById("confirmationMsg").classList.remove("d-none");
  // document.getElementById(
  //   "confirmationMsg"
  // ).innerHTML = `Thank You! We'll Contact You Soon.`;
  document.getElementById("cuDrivableSelect").classList.add("d-none");
  document.getElementById("cuConditionSelect").classList.add("d-none");
  document.getElementById("cuTitleSelect").classList.add("d-none");
  document.getElementById("confirmationMsg").classList.add("d-none");
  document.getElementById(
    "sendBtnDiv"
  ).innerHTML = `<div class=""><h4 style="color:#ed563b;">Thank You! We'll contact you soon.</h4><br><button style="text-size:14px; margin-bottom:5px;" class="main-button" onclick="location.reload();">Submit another form</button></div>`;
};

const sendMessage = () => {
  const name = document.getElementById("Name").value;
  const email = document.getElementById("Email").value;
  const subject = document.getElementById("Subject").value;
  const message = document.getElementById("Message").value;
  const from = "info@autoareus.com";

  if (name == "" || email == "" || subject == "" || message == "") {
    document.getElementById("confirm").classList.remove("d-none");
    document.getElementById(
      "confirm"
    ).innerHTML = `Please Fill All Required Fields*`;
    return;
  }

  let apiBody = {
    from: from,
    to: "info@autoareus.com",
    subject: subject,
    text: `${
      "Name: " + name + "\\nEmail: " + email + "\\nMessage: " + message
    }`,
  };
  apiBodyjson = JSON.stringify(apiBody);
  console.log(apiBodyjson);
  let apiUrl = "https://autoareus.com/MailApi/demo/send-email";
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    subject: subject,
    body: apiBodyjson,
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
  document.getElementById("confirm").classList.remove("d-none");
  document.getElementById(
    "confirm"
  ).innerHTML = `Thank You! We Will Contact You Soon.`;
};

const formInfo = {
  email: false,
  phone: false,
  zipcode: false,
};

const validatePhone = () => {
  const phoneInput = document.getElementById("cuPhone");
  const phoneNumber = phoneInput.value;

  // Check if the entered phone number has exactly 10 digits
  if (phoneNumber.replace(/\D/g, "").length !== 10) {
    document.getElementById("cuPhone").style.color = "red";
    formInfo.phone = false;
  } else {
    // If the number of digits is correct, reset the style to default
    document.getElementById("cuPhone").style.color = "";
    formInfo.phone = true;
  }
};

const validateEmail = () => {
  if (!document.getElementById("cuEmail").value.includes("@")) {
    document.getElementById("cuEmail").style.color = "red";
    formInfo.email = false;
  } else {
    document.getElementById("cuEmail").style.color = "";
    formInfo.email = true;
  }
};

const validateZipcode = () => {
  const zipcodeInput = document.getElementById("cuZipcode");
  const zipcode = zipcodeInput.value;

  if (zipcode == "") {
    document.getElementById("cuZipcode").style.color = "red";
    formInfo.zipcode = false;
  } else {
    document.getElementById("cuZipcode").style.color = "";
    formInfo.zipcode = true;
  }
};
