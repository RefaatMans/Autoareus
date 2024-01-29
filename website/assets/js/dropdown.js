// // fill years
// let currentYear = new Date().getFullYear();
// let yearsContainer = document.getElementById("myDropdown1");
// for (let year = currentYear; year >= 1960; year--) {
//   (function (year) {
//     let link = document.createElement("a");
//     link.textContent = year;
//     link.onclick = function () {
//       getYear(year);
//     };
//     yearsContainer.appendChild(link);
//   })(year);
// }

// // car makes names
let carMakes = [
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "Volkswagen",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Nissan",
  "Hyundai",
  "Kia",
  "Subaru",
  "Mazda",
  "Jeep",
  "Volvo",
  "Fiat",
  "Jaguar",
  "Land Rover",
  "Porsche",
  "Tesla",
  "Cadillac",
  "Lexus",
  "Buick",
  "Lincoln",
  "Maserati",
  "Alfa Romeo",
  "MINI",
  "Fiat",
  "Rolls-Royce",
  "Bentley",
  "Bugatti",
  "Lamborghini",
  "Ferrari",
  "Maserati",
  "Aston Martin",
];

// // fill car Makes
// function generateCarMakes() {
//   let dropdownContent = document.getElementById("myDropdown2");
//   carMakes.forEach(function (make) {
//     let makeLink = document.createElement("a");
//     makeLink.textContent = make;
//     makeLink.setAttribute("onclick", "getMake('" + make + "')");
//     dropdownContent.appendChild(makeLink);
//   });
// }
// generateCarMakes();

// // fill car models

// function generateCarModels(make) {
//   var carMakesAndModels = {
//     Toyota: ["Camry", "Corolla", "Rav4", "Prius"],
//     Honda: ["Accord", "Civic", "CR-V", "Pilot"],
//     Ford: ["Fusion", "Focus", "Escape", "Mustang"],
//     Chevrolet: ["Malibu", "Cruze", "Equinox", "Silverado"],
//     Volkswagen: ["Jetta", "Passat", "Tiguan", "Atlas"],
//     BMW: ["3 Series", "5 Series", "X3", "X5"],
//     "Mercedes-Benz": ["C-Class", "E-Class", "GLC", "GLE"],
//     Audi: ["A4", "A6", "Q5", "Q7"],
//     Nissan: ["Altima", "Maxima", "Rogue", "Pathfinder"],
//     Hyundai: ["Sonata", "Elantra", "Santa Fe", "Tucson"],
//     Kia: ["Optima", "Forte", "Sorento", "Sportage"],
//     Subaru: ["Outback", "Forester", "Impreza", "Crosstrek"],
//     Mazda: ["Mazda3", "Mazda6", "CX-5", "MX-5"],
//     Jeep: ["Grand Cherokee", "Cherokee", "Wrangler", "Renegade"],
//     Volvo: ["S60", "XC60", "S90", "XC90"],
//     Fiat: ["500", "500X", "124 Spider"],
//     Jaguar: ["XE", "XF", "F-PACE", "I-PACE"],
//     "Land Rover": ["Range Rover", "Discovery", "Defender"],
//     Porsche: ["911", "Cayenne", "Panamera", "Macan"],
//     Tesla: ["Model S", "Model 3", "Model X", "Model Y"],
//     Cadillac: ["CT4", "CT5", "Escalade", "XT5"],
//     Lexus: ["IS", "ES", "RX", "NX"],
//     Buick: ["Regal", "Enclave", "Encore", "Envision"],
//     Lincoln: ["Continental", "Nautilus", "Navigator", "Aviator"],
//     Maserati: ["Ghibli", "Quattroporte", "Levante"],
//     "Alfa Romeo": ["Giulia", "Stelvio"],
//     MINI: ["Cooper", "Countryman", "Clubman"],
//     "Rolls-Royce": ["Phantom", "Cullinan", "Ghost"],
//     Bentley: ["Continental GT", "Bentayga", "Flying Spur"],
//     Bugatti: ["Chiron", "Veyron"],
//     Lamborghini: ["Huracán", "Aventador", "Urus"],
//     Ferrari: ["488 GTB", "812 Superfast", "F8 Tributo"],
//     "Aston Martin": ["Vantage", "DB11", "DBS Superleggera"],
//   };

//   let dropdownContent = document.getElementById("myDropdown3");
//   dropdownContent.innerHTML = `<input
//   type="text"
//   placeholder="Search.."
//   id="myInput3"
//   class="myInput"
//   onkeyup="filterFunction(3)"
// />`;
//   let models = carMakesAndModels[make];
//   models.forEach(function (model) {
//     let modelLink = document.createElement("a");
//     modelLink.textContent = model;
//     modelLink.setAttribute("onclick", "getModel('" + model + "')");
//     dropdownContent.appendChild(modelLink);
//   });
// }

// open select dropdown
function openDropDown(nb) {
  if (nb == 4) {
    if (document.getElementById(`myDropdown4`).classList.contains("show")) {
      document.getElementById(`myDropdown4`).classList.remove("show");
      return;
    }
    document.getElementById(`myDropdown4`).classList.add("show");
    document.getElementById(`myDropdown5`).classList.remove("show");
    document.getElementById(`myDropdown6`).classList.remove("show");
  } else if (nb == 5) {
    if (document.getElementById(`myDropdown5`).classList.contains("show")) {
      document.getElementById(`myDropdown5`).classList.remove("show");
      return;
    }
    document.getElementById(`myDropdown4`).classList.remove("show");
    document.getElementById(`myDropdown5`).classList.add("show");
    document.getElementById(`myDropdown6`).classList.remove("show");
  } else if (nb == 6) {
    if (document.getElementById(`myDropdown6`).classList.contains("show")) {
      document.getElementById(`myDropdown6`).classList.remove("show");
      return;
    }
    document.getElementById(`myDropdown4`).classList.remove("show");
    document.getElementById(`myDropdown6`).classList.add("show");
    document.getElementById(`myDropdown5`).classList.remove("show");
  }
}

// function filterFunction(nb) {
//   let input, filter, a, i;
//   input = document.getElementById(`myInput${nb}`);
//   filter = input.value.toUpperCase();
//   div = document.getElementById(`myDropdown${nb}`);
//   a = div.getElementsByTagName("a");
//   for (i = 0; i < a.length; i++) {
//     txtValue = a[i].textContent || a[i].innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       a[i].style.display = "";
//     } else {
//       a[i].style.display = "none";
//     }
//   }
// }

// // get selected year
// function getYear(year) {
//   document.getElementById("yearText").innerHTML = year;
//   document.getElementById("myDropdown1").classList.remove("show");
//   document.getElementById("makeBtn").onclick = function () {
//     openDropDown(2);
//   };
//   document.getElementById("makeBtn").classList.remove("disabledBtn");
// }
// // get selected make
// function getMake(make) {
//   document.getElementById("makeText").innerHTML = make;
//   document.getElementById("myDropdown2").classList.remove("show");
//   generateCarModels(make);
//   document.getElementById("modelBtn").onclick = function () {
//     openDropDown(3);
//   };
//   document.getElementById("modelBtn").classList.remove("disabledBtn");
// }
// // get selected model
// function getModel(model) {
//   document.getElementById("modelText").innerHTML = model;
//   document.getElementById("myDropdown3").classList.remove("show");
// }

// // scroll btn
// const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// // Show or hide the button based on scroll position
// window.addEventListener("scroll", () => {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     scrollToTopBtn.style.display = "block";
//   } else {
//     scrollToTopBtn.style.display = "none";
//   }
// });

// // Scroll to the top when the button is clicked
// scrollToTopBtn.addEventListener("click", () => {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// });
const openForm = () => {
  document.getElementById("submitForm").remove();
  document.getElementById("confirmationMsg").classList.add("d-none");
  document.getElementById("clientInfo").classList.remove("d-none");
};
const carInfo = () => {
  if (
    document.getElementById("cuName").value == "" ||
    document.getElementById("cuPhone").value == "" ||
    document.getElementById("cuZipcode").value == ""
  ) {
    document.getElementById("confirmationMsg").classList.remove("d-none");
    document.getElementById(
      "confirmationMsg"
    ).innerHTML = `Please Fill The Required Fields*`;
    return;
  }
  validateEmail();
  validatePhone();
  validateZipcode();
  if (
    formInfo.phone == false ||
    formInfo.email == false ||
    formInfo.zipcode == false
  ) {
    document.getElementById("confirmationMsg").classList.remove("d-none");
    document.getElementById(
      "confirmationMsg"
    ).innerHTML = `Please Enter Valid Info*`;
    return;
  }

  document.getElementById("confirmationMsg").classList.add("d-none");

  document.getElementById("clientInfo").classList.add("d-none");
  document.getElementById("carInfo").classList.remove("d-none");
  let currentYear = new Date().getFullYear();
  let yearsContainer = document.getElementById("myDropdown4");
  for (let year = currentYear; year >= 1960; year--) {
    (function (year) {
      let link = document.createElement("a");
      link.textContent = year;
      link.onclick = function () {
        cuGetYear(year);
      };
      yearsContainer.appendChild(link);
    })(year);
  }
};
const cuGetYear = (year) => {
  document.getElementById("yearText2").innerHTML = year;
  document.getElementById("myDropdown4").classList.remove("show");
};

const cuGetMake = (make) => {
  document.getElementById("makeText2").innerHTML = make;
  document.getElementById("myDropdown5").classList.remove("show");
  cuGenerateCarModels(make);
};
function generateCuCarMakes() {
  let dropdownContent = document.getElementById("myDropdown5");
  carMakes.forEach(function (make) {
    let makeLink = document.createElement("a");
    makeLink.textContent = make;
    makeLink.setAttribute("onclick", "cuGetMake('" + make + "')");
    dropdownContent.appendChild(makeLink);
  });
}
generateCuCarMakes();

function cuGenerateCarModels(make) {
  var carMakesAndModels = {
    Toyota: ["Camry", "Corolla", "Rav4", "Prius"],
    Honda: ["Accord", "Civic", "CR-V", "Pilot"],
    Ford: ["Fusion", "Focus", "Escape", "Mustang"],
    Chevrolet: ["Malibu", "Cruze", "Equinox", "Silverado"],
    Volkswagen: ["Jetta", "Passat", "Tiguan", "Atlas"],
    BMW: ["3 Series", "5 Series", "X3", "X5"],
    "Mercedes-Benz": ["C-Class", "E-Class", "GLC", "GLE"],
    Audi: ["A4", "A6", "Q5", "Q7"],
    Nissan: ["Altima", "Maxima", "Rogue", "Pathfinder"],
    Hyundai: ["Sonata", "Elantra", "Santa Fe", "Tucson"],
    Kia: ["Optima", "Forte", "Sorento", "Sportage"],
    Subaru: ["Outback", "Forester", "Impreza", "Crosstrek"],
    Mazda: ["Mazda3", "Mazda6", "CX-5", "MX-5"],
    Jeep: ["Grand Cherokee", "Cherokee", "Wrangler", "Renegade"],
    Volvo: ["S60", "XC60", "S90", "XC90"],
    Fiat: ["500", "500X", "124 Spider"],
    Jaguar: ["XE", "XF", "F-PACE", "I-PACE"],
    "Land Rover": ["Range Rover", "Discovery", "Defender"],
    Porsche: ["911", "Cayenne", "Panamera", "Macan"],
    Tesla: ["Model S", "Model 3", "Model X", "Model Y"],
    Cadillac: ["CT4", "CT5", "Escalade", "XT5"],
    Lexus: ["IS", "ES", "RX", "NX"],
    Buick: ["Regal", "Enclave", "Encore", "Envision"],
    Lincoln: ["Continental", "Nautilus", "Navigator", "Aviator"],
    Maserati: ["Ghibli", "Quattroporte", "Levante"],
    "Alfa Romeo": ["Giulia", "Stelvio"],
    MINI: ["Cooper", "Countryman", "Clubman"],
    "Rolls-Royce": ["Phantom", "Cullinan", "Ghost"],
    Bentley: ["Continental GT", "Bentayga", "Flying Spur"],
    Bugatti: ["Chiron", "Veyron"],
    Lamborghini: ["Huracán", "Aventador", "Urus"],
    Ferrari: ["488 GTB", "812 Superfast", "F8 Tributo"],
    "Aston Martin": ["Vantage", "DB11", "DBS Superleggera"],
  };

  let dropdownContent = document.getElementById("myDropdown6");
  dropdownContent.innerHTML = `<input
  type="text"
  placeholder="Search.."
  id="myInput6"
  class="myInput"
  onkeyup="filterFunction(6)"
/>`;
  let models = carMakesAndModels[make];
  models.forEach(function (model) {
    let modelLink = document.createElement("a");
    modelLink.textContent = model;
    modelLink.setAttribute("onclick", "cuGetModel('" + model + "')");
    dropdownContent.appendChild(modelLink);
  });
}

const cuGetModel = (model) => {
  document.getElementById("modelText2").innerHTML = model;
  document.getElementById("myDropdown6").classList.remove("show");
};

const carCondition = () => {
  if (
    document.getElementById("yearText2").innerHTML == "Year" ||
    document.getElementById("makeText2").innerHTML == "Make" ||
    document.getElementById("modelText2").innerHTML == "Model"
  ) {
    document.getElementById("confirmationMsg").classList.remove("d-none");
    document.getElementById(
      "confirmationMsg"
    ).innerHTML = `Please Fill The Required Fields*`;
    return;
  }
  document.getElementById("confirmationMsg").classList.add("d-none");
  document.getElementById("carInfo").classList.add("d-none");
  document.getElementById("carCondition").classList.remove("d-none");
};
