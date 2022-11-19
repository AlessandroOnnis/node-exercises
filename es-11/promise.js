function luckyDraw(player) {
    return new Promise((resolve, reject) => {
        const win = Boolean(Math.round(Math.random()));

        process.nextTick(() => {
            if (win) {
                resolve(`${player} won a prize in the draw!`);
            } else {
                reject(new Error(`${player} lost the draw.`));
            }
        });
    });
}
//=====Questa è quella che trovo più sensata visto la funzione di base


const players = ['Joe', 'Carolina', 'Sabrina']
players.forEach(user => luckyDraw(user).then(result => console.log(result)).catch(error => console.log(error)))


//=====Volevate questa roba qua sotto?Perché dovrei concatenare dei then che richiamano la funzione?


// luckyDraw('joe')
//     .then(result => console.log(result))
//     .then(()=> luckyDraw('Carolina'))
//     .then(result => console.log(result))
//     .then(()=> luckyDraw('Sabrina'))
//     .catch(error => console.log(error))


//====Anche questa non credo sia corretta ma ha più senso dei then che richiamano la funzione
//====almeno gestisce tutti gli errori, ed ognuno sa se ha vinto senza impallare il gioco.


// luckyDraw('joe')
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))

// luckyDraw('Carolina')
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))

// luckyDraw('Sabrina')
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))
