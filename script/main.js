let inputVal = document.querySelector("#inputVal");
let converFrom = document.querySelector("#convertFrom");
let convertTo = document.querySelector("#convertTo");
let result = document.querySelector("#result");


function convert () {
    let CFrom = converFrom.value;
    let CTo = convertTo.value;

    if (inputVal.value == ''){
        result.innerHTML = "Please Enter a Value";
      alert("type value")
    }

    //for toCentimeters Conversion
    else if (CFrom == "centimeters" && CTo == "centimeters"){
        result.innerHTML = "Select other conversion"
    }
    else if (CFrom == "centimeters" && CTo == "feet"){
        result.innerHTML = inputVal.value / 30.48 + " ft";
    }
    else if (CFrom == "centimeters" && CTo == "meters"){
        result.innerHTML = inputVal.value / 100 + " m";
    }

    //for toFeet Conversion
    else if (CFrom == "feet" && CTo == "feet"){
        result.innerHTML = "Select other conversion"
    }
    else if (CFrom == "feet" && CTo == "centimeters"){
        result.innerHTML = inputVal.value *  30.48 + " cm";
    }
    else if (CFrom == "feet" && CTo == "meters"){
        result.innerHTML = inputVal.value / 3.281 + " m";
    }

    //for toMeters Conversion
    else if (CFrom == "meters" && CTo == "meters"){
        result.innerHTML = "Select other conversion"
    }
    else if (CFrom== "meters" && CTo == "centimeters"){
        result.innerHTML = inputVal.value * 100 + " FT";
    }
    else if (CFrom == "meters" && CTo == "feet"){
        result.innerHTML = inputVal.value * 3.28 + " M";
    }
}
