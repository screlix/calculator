var res = document.querySelector("h6");
var te = "";
var hh = document.querySelector("h1");
// var container = document.querySelector("");
// var fir = document.querySelector("#mymy");
// var table = document.getElementsByTagName("table")[0];
document.addEventListener("click", function (event) {
  var zz = event.target.getAttribute("name");
  switch (zz) {
    case "=":
      var result = eval(te);
      function isFloat(x) {
        return !!(x % 1);
      }
      if (isFloat(result)) hh.innerHTML = result.toFixed(2);
      else hh.innerHTML = result;
      te == result;
      // res.innerHTML = "";
      // var dd = document.createElement("h6");
      // hh.appendChild(dd);
      break;
    case "AC":
      hh.innerHTML = ".";
      res.innerHTML = ".";
      te = "";
      // var dd = document.createElement("h6");
      // hh.appendChild(dd);
      break;
    case "del":
      te = te.substring(0, te.length - 1);
      res.innerHTML = te;
      break;
    default:
      if (zz != null) {
        te += zz;
        res.innerHTML = te;
      }
      break;
  }
});
