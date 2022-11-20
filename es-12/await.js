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
//=====Questa è quella che trovo più sensata visto la funzione di base, è un gioco e ciclo tutti


const players = ['Joe', 'Carolina', 'Sabrina']

const getResult = async(x)=>{
    let result;
    try {
        result = await luckyDraw(x)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

players.forEach(player => getResult(player))


//avevo il promise.all ma cosi non credo vada bene viene chiesto che venga stampato il resolved
//devo rivedere un po' di roba.


// const getResult = async()=>{
//     try {
//         const result = await Promise.resolve([
//             luckyDraw('Joe'),
//             luckyDraw('Sabrina'),
//             luckyDraw('Carolina')
//         ])
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getResult()