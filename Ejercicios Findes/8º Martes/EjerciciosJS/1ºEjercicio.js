
// puntuaciones primera ronda

const firstRound = [
    { team: "Toros Negros", scores: [1, 3, 4, 2, 10, 8] },
    { team: "Águilas Plateadas", scores: [5, 8, 3, 2, 5, 3] },
    { team: "Leones Carmesí", scores: [5, 4, 3, 1, 2, 3, 4] },
    { team: "Rosas Azules", scores: [2, 1, 3, 1, 4, 3, 4] },
    { team: "Mantis Verdes", scores: [1, 4, 5, 1, 3] },
    { team: "Ciervos Celestes", scores: [3, 5, 1, 1] },
    { team: "Pavos Reales Coral", scores: [2, 3, 2, 1, 4, 3] },
    { team: "Orcas Moradas", scores: [2, 3, 3, 4] },
  ];
  

const totalPoints = firstRound.map((equipo) => {
    return {
        team: equipo.team,
        totalScore: equipo.scores.reduce((acc, score) => {
            return acc + score;
        }, 0),
    };
});

totalPoints.sort((a, b)=> a.totalScore - b.totalScore)
console.log(totalPoints);

console.log(
    `El mejor equipos es ${totalPoints[totalPoints.length -1].team} y su puntuacion es ${totalPoints[totalPoints.length -1].totalScore} `
);
console.log(
    `El peor equipo es ${totalPoints[0].team} con un total de ${totalPoints[0].totalScore} puntos`
  );