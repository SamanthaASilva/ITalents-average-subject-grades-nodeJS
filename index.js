const prompt = require('prompt-sync')();

console.log("Bem vindo ao cálculo de média das notas, comece inserindo notas para no mínimo 3 matérias");
getNote();

function getNote() {
    let averageNotes = [];
    let input = [];
    let discipline = 1;

    do {
        const disciplineName = prompt(`Insira o nome da ${discipline++}ª matéria: `);
        var totalNotes = +prompt(`Quantas notas deseja calcular para ${disciplineName}? `);

        const notes = [];
        for (let i = 0; i < totalNotes; i++) {
            notes.push(+prompt(`Insira a ${i + 1}ª nota de ${disciplineName}: `));
        }

        input.push({
            disciplina: disciplineName,
            notas: notes
        });

        if (input.length > 3) {
            var moreDisciplines = prompt("Deseja inserir mais matérias? [Y/n]");
        }
    } while (input.length < 3  || (moreDisciplines && moreDisciplines.toUpperCase() === "Y"));

    averageNotes = calculatesAverageNotes(input, totalNotes);

    return console.log(averageNotes);
}

function calculatesAverageNotes(input) {
    for (let i = 0; i < input.length; i++) {
      
        var average = 0;
        var totalNotes = 0;
        var averageAll = 0;

        const notas = input[i].notas;
      
        for (let j = 0; j < notas.length; j++) {
            average += notas[j];
            averageAll += notas[j];
            totalNotes++;
        }

        
        average = average / notas.length;
        input[i].mediaDisciplina = average;
    }
    
    averageAll = averageAll / totalNotes;
    input['mediaGeral'] = averageAll;
      
    return input;
}
