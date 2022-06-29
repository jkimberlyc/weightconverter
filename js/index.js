var currentField;
var currentFieldValue;
var targetField;
var fromUnit;
var toUnit;

function simpleConvert() {
    var selectedUnitName = "";
    let input = document.getElementById("input").value;
    let selectedUnit = document.getElementById("targetUnitOptions");

    if (isNaN(parseFloat(input))) {
      alert("Please enter a number to convert.");
      return false;
    }

    selectedUnitName =
      selectedUnit.options[selectedUnit.selectedIndex].text;

    document.getElementById("result").innerHTML =
      parseFloat(input) * parseFloat(selectedUnit.value) +
      " " +
      selectedUnitName;

    document.getElementById("rate").innerHTML =
      "1 kg is equals to " +
      selectedUnit.value +
      " " +
      selectedUnitName +
      '<br><button class="m-3 btn text-danger" onclick="simpleReset()">Reset</button>';
  }

  function simpleReset() {
    document.getElementById("result").innerHTML =
      "<span class='invisible'>Result</span>";

    document.getElementById("rate").innerHTML =
      "<span class='invisible'><br /><button class='m-3 btn text-danger' onclick='simpleReset()'>Reset</button></span>";

    document.getElementById("input").value = "";

    document.getElementById("targetUnitOptions").selectedIndex = 0;
  }


  function advConvert(field) {
    let unit1 = document.getElementById("unitOptions1");
    let unit1Name = unit1.options[unit1.selectedIndex].text;
    let unit2 = document.getElementById("unitOptions2");
    let unit2Name = unit2.options[unit2.selectedIndex].text;
    
    if (field==='field1' || field==='select1' || field==='select2'){
      currentField = "field1";
      currentFieldValue = document.getElementById("input1").value;
      targetField = document.getElementById("input2");
      fromUnit = unit1Name;
      toUnit = unit2Name;
    } 
    
    else if (field==='field2') {
      currentField = 'field2';
      currentFieldValue = document.getElementById("input2").value;
      targetField = document.getElementById("input1");
      fromUnit = unit2Name;
      toUnit = unit1Name;
    }

    targetField.value="";

    if(fromUnit === "Pound (lbs)"){
      if(toUnit === "Pound (lbs)") targetField.value = currentFieldValue;
      if(toUnit === "Ounce (oz)") targetField.value = parseFloat(parseFloat(currentFieldValue)*16);
      if(toUnit === "Kilogram (kg)") targetField.value = parseFloat(parseFloat(currentFieldValue)/2.205);
    }

    else if(fromUnit === "Ounce (oz)"){
      if(toUnit === "Ounce (oz)") targetField.value = currentFieldValue;
      if(toUnit === "Pound (lbs)") targetField.value = parseFloat(parseFloat(currentFieldValue)/16);
      if(toUnit === "Kilogram (kg)") targetField.value = parseFloat(parseFloat(currentFieldValue)/35.274);
    }

    else if(fromUnit === "Kilogram (kg)"){
      if(toUnit === "Kilogram (kg)") targetField.value = currentFieldValue;
      if(toUnit === "Pound (lbs)") targetField.value = parseFloat(parseFloat(currentFieldValue)*2.205);
      if(toUnit === "Ounce (oz)") targetField.value = parseFloat(parseFloat(currentFieldValue)*35.274);
    }

    document.getElementById("reset2").innerHTML = "<button class='btn text-danger m-3' onclick='advReset()'>Reset</button>"
  }

  function advReset() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("reset2").innerHTML = "<button class='btn text-danger m-3 invisible' onclick='advReset()'>Reset</button>";
    document.getElementById("unitOptions1").selectedIndex = 0
    document.getElementById("unitOptions2").selectedIndex = 0
  }