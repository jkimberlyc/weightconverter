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
    var input1 = document.getElementById("input1");
    var input1Value = input1.value;
    var input2 = document.getElementById("input2");
    var input2Value = input2.value;
    var unit1 = document.getElementById("unitOptions1");
    let unit1Name = unit1.options[unit1.selectedIndex].text;
    var unit2 = document.getElementById("unitOptions2");
    let unit2Name = unit2.options[unit2.selectedIndex].text;

    if(field==="field1" || field==="select2"){
      if(unit1Name === "Pound (lbs)"){
        input2.value="";
        if(unit2Name === "Pound (lbs)") input2.value = input1Value;
        if(unit2Name === "Ounce (oz)") input2.value = parseFloat(parseFloat(input1Value)*16);
        if(unit2Name === "Kilogram (kg)") input2.value = parseFloat(parseFloat(input1Value)/2.205);
      }

      else if(unit1Name === "Ounce (oz)"){
        input2.value="";
        if(unit2Name === "Ounce (oz)") input2.value = input1Value;
        if(unit2Name === "Pound (lbs)") input2.value = parseFloat(parseFloat(input1Value)/16);
        if(unit2Name === "Kilogram (kg)") input2.value = parseFloat(parseFloat(input1Value)/35.274);
      } 

      else if(unit1Name === "Kilogram (kg)"){
        input2.value="";
        if(unit2Name === "Kilogram (kg)") input2.value = input1Value;
        if(unit2Name === "Pound (lbs)") input2.value = parseFloat(parseFloat(input1Value)*2.205);
        if(unit2Name === "Ounce (oz)") input2.value = parseFloat(parseFloat(input1Value)*35.274);
      } 
    }
    else if(field==="field2" || field==="select1"){
      if(unit2Name === "Pound (lbs)"){
        input1.value="";
        if(unit1Name === "Pound (lbs)") input1.value = input2Value;
        if(unit1Name === "Ounce (oz)") input1.value = parseFloat(parseFloat(input2Value)*16);
        if(unit1Name === "Kilogram (kg)") input1.value = parseFloat(parseFloat(input2Value)/2.205);
      }

      else if(unit2Name === "Ounce (oz)"){
        if(unit1Name === "Ounce (oz)") input1.value = input2Value;
        if(unit1Name === "Pound (lbs)") input1.value = parseFloat(parseFloat(input2Value)/16);
        if(unit1Name === "Kilogram (kg)") input1.value = parseFloat(parseFloat(input2Value)/35.274);
      } 

      else if(unit2Name === "Kilogram (kg)"){
        input1.value=""
        if(unit1Name === "Kilogram (kg)") input1.value = input2Value;
        if(unit1Name === "Pound (lbs)") input1.value = parseFloat(parseFloat(input2Value)*2.205);
        if(unit1Name === "Ounce (oz)") input1.value = parseFloat(parseFloat(input2Value)*35.274);
      } 
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