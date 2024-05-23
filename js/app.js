function getAlert() {
  let fullName = {
    firstName: "Shota",
    lastName: "Oboladze",
  };

  alert(fullName.firstName + " " + fullName.lastName);
}

function getLog() {
  console.log("Hello World from Log");
}
function getPc() {
  let my_pc = {
    brand: "Apple",
    memory: "18Gb",
  };

  console.log(my_pc);
}

function getCheck(params) {
  console.log(params);

  if (params > 50) {
    console.log("მეტია 50-ზე");
  } else if (params < 50) {
    console.log("ნაკლებია 50-ზე");
  } else {
    console.log("ტოლია 50-ზე");
  }
}
