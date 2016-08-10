var sonnet = document.getElementById("sonnet");
var sonnetStr = sonnet.innerHTML;

var orphanIndex = sonnetStr.indexOf("orphans");
console.log("orphanIndex", orphanIndex);

console.log("length",sonnetStr.length);

document.getElementById("sonnet").innerHTML = sonnetStr.replace("winter","yuletide").replace(/the/g, "a large");
