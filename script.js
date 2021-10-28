function calculatebmi() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;

  height *= 30.48;
  height /= 10;

  var bmivalue = weight / (height * height);
  bmivalue *= 100;
  bmivalue = bmivalue.toFixed(1);

  if (bmivalue < 18.5) {
    document.getElementById("card-ans").innerHTML =
      bmivalue + " kg/m <sup>2</sup>" + "<br />" + "(Underweight)";
  } else if (bmivalue > 24.9 && bmivalue < 30) {
    document.getElementById("card-ans").innerHTML =
      bmivalue + " kg/m <sup>2</sup>" + "<br />" + "(Overweight)";
  } else if (bmivalue > 30.0) {
    document.getElementById("card-ans").innerHTML =
      bmivalue + " kg/m <sup>2</sup>" + "<br />" + "(Obesity)";
  } else {
    document.getElementById("card-ans").innerHTML =
      bmivalue + " kg/m <sup>2</sup>" + "<br />" + "(Normal)";
  }
}
