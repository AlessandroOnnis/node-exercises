import express from 'express';
import 'express-async-errors';

const app = express();

function getPlanets() {
	const planets = [ 
        {name:'Mercury'},
        {name:'Venus'}
    ];

	return planets;
}

app.get('/', (req, res) => {
	res.send('There are planets?');
});

//curl localhost:3000 -v

app.get('/planets', (req, res) => {
	const planets = getPlanets();
	res.json(planets);
});

//curl localhost:3000/planets -v

export default app;