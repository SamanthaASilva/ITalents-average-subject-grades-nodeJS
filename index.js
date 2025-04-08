const prompt = require('prompt-sync')();

if (prompt("Deseja calcular a média das notas?[Y/n] ") === "Y") {
    getNote();
}

function getNote() {
    var avarageNotes = [];
    do {
        var disciplines = [];
        disciplines.push(prompt("Insira o nome da matéria: "));
        var totalNotes = +prompt(`Quantas notas deseja calcular para ${disciplines}? `);
        var notes = [];
        for (let i = 0; i < totalNotes; i++) {
            notes.push(+prompt(`Insira a ${i + 1}ª nota: `));
        }
        avarageNotes.push(calculatesAverageNotes(disciplines, notes, totalNotes));
        var moreDiscipline = prompt("Deseja inserir mais notas?[Y/n] ");
    }
    while (moreDiscipline === "Y");
    const avarageAll = calculatesAverageAll(avarageNotes);
    return console.log(avarageNotes, `A média geral é de: ${avarageAll}`);
}

function formatterDisciplineNotesAvarage(disciplines, notes, avarage) {
    var disciplineNotesAvarageList = [];
    var disciplineNotesAvarage = new Object();
    for (let i = 0; i < disciplines.length; i++) {
        disciplineNotesAvarageList.push(disciplineNotesAvarage[`${disciplines}`] = `[${notes}]`);
    }
    disciplineNotesAvarage['média'] = avarage.toFixed(2);
    return disciplineNotesAvarage;
}

function calculatesAverageNotes(disciplines, notes, totalNotes) {
    var avarage = 0;
    for (let i = 0; i < notes.length; i++) {
        avarage += notes[i];
    }
    avarage = avarage / totalNotes;
    disciplineNotesAvarage = formatterDisciplineNotesAvarage(disciplines, notes, avarage);
    return disciplineNotesAvarage;
}

function calculatesAverageAll(avarageNotes) {
    var avarageAll = 0;
    for (let i = 0; i < avarageNotes.length; i++) {
        avarageAll += parseFloat(avarageNotes[i]['média']);
    }
    avarageAll = avarageAll / avarageNotes.length;

    return avarageAll.toFixed(2);
}