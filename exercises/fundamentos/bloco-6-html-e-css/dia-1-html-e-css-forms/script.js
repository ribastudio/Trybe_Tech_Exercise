const btnClean = document.getElementById('btnClean');
const btnSubmit = document.getElementById('btnSubmit');
const forms = document.getElementById('formy');
const listOptions = document.getElementById('state-opt');

[{"AC":"Acre","AL":"Alagoas","AP":"Amap\u00e1","AM":"Amazonas","BA":"Bahia","CE":"Cear\u00e1","DF":"Distrito Federal","ES":"Esp\u00edrito Santo","GO":"Goi\u00e1s","MA":"Maranh\u00e3o","MT":"Mato Grosso","MS":"Mato Grosso do Sul","MG":"Minas Gerais","PR":"Paran\u00e1","PB":"Para\u00edba","PA":"Par\u00e1","PE":"Pernambuco","PI":"Piau\u00ed","RN":"Rio Grande do Norte","RS":"Rio Grande do Sul","RJ":"Rio de Janeiro","RO":"Rond\u00f4nia","RR":"Roraima","SC":"Santa Catarina","SE":"Sergipe","SP":"S\u00e3o Paulo","TO":"Tocantins"}];


/* for (let index = 0; index < states.length; index += 1) {
let options = document.createElement('option');
options.value = stateInitials[index];
options.innerText = states[index];
stateOptions.appendChild(options);
}  */



listOptions.forEach(element => {
  
});


function eraseFields() {
  forms.reset(); // referência aqui https://forum.imasters.com.br/topic/309946-limpando-campos-do-formulario-no-onclick/
}


// Ações dos botões do formulário

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dateString = document.querySelector('#input-date').value;
  let dateParts = dateString.split("/");
  
  let day = parseInt(dateParts[0]);
  let month = parseInt(dateParts[1]);
  let year = parseInt(dateParts[2]);
  
  
  if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
  monthLength[1] = 29;
  }
  
  if(year < 1950 || year > 2021 || month < 1 || month > 12 || day < 1 || day > monthLength[month]) {
  alert('Insira uma data válida!')
  }
  }) 

btnClean.addEventListener('click', eraseFields);
