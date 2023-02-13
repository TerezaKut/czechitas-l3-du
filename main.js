// tady je místo pro náš program

let jmeno = prompt('Zadejte svoje jméno:');
let prijmeni = prompt('Zadejte svoje příjmení:');
let rok = Number(prompt('Zadejte rok svého narození:'));
let barva = prompt('Zadejte oblíbenou barvu (anglicky):');

let vystup = document.querySelector('.vystupProgramu');

let vek = 2023 - rok;
vystup.innerHTML = '<p>'+ jmeno + ' ' + prijmeni + ', věk: ' + vek + '</p>'

vystup.style.color = barva;


