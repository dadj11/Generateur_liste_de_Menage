

var Etudient =[]
var Niveaux=['L1','L2','L3']
var Zone_de_menage=[]


var select= document.getElementById('niveau');

Niveaux.forEach((element)=>{
  var option=document.createElement('option')
  option.textContent = element
  option.value = element
  select.appendChild(option);
})


function generatePDF() {
  let pdf = new jsPDF("p", "pt", "a4");
  let options = { pagesplit : true };
  pdf.addHTML($("#body"), options, () => {
    pdf.save("monDocument.pdf");
  });
}   










