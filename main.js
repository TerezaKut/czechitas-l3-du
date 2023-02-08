// tady je místo pro náš program

let jmeno = prompt('Zadejte svoje jméno:');
let prijmeni = prompt('Zadejte svoje příjmení:');
let vek = Number(prompt('Zadejte svůj věk:'));
let barva = prompt('Zadejte oblíbenou barvu (anglicky):');

let vystup = document.querySelector('.vystupProgramu');

vystup.innerHTML = '<p>'+ jmeno + ' ' + prijmeni + ', věk: ' + vek + '</p>'

vystup.style.color = barva;


