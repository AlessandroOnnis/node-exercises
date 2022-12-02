import supertest from "supertest";
import app from "./app";
//importiamo supertest ed app

//import di prismaMock cosi da fare i test
import { prismaMock } from './lib/prisma/client.mock'

const req = supertest(app);
//assegnamo a req supertest che processa la nostra app

//il test ora diventa di tipo post perché si pusha la roba nel database, quindi vediamo se ci entra, l'elemento è singolo
//stessa route ma elemento singolo, si possono togliere id create ed update visto che vengono generati 

test("POST /planets", async () => {
    const planet =
    {
        name: "Venus",
        diameter: 5678,
        moons: 2,
    }

    //fatto l'oggetto da pushare si va a fare l'await della request come al solito, seguito da 
    //.post(route /planets)
    //.send(oggetto> planet)
    //.expect(codice quando la creazione va a buon fine201)
    const res = await req
        .post('/planets')
        .send(planet)
        .expect(201)
        .expect('Content-Type', /application\/json/);

    expect(res.body).toEqual(planet);
});