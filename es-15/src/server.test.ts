import supertest from "supertest";
import app from "./app";

const req = supertest(app);

test("GET /planets", async () => {
  const res = await req
    .get("/planets")
    .expect(200)
    .expect("Content-Type", /application\/json/);

  expect(res.body).toEqual(
        [
            { name: "Mercury" },
            { name: "Venus" }
        ]
    );
});

//npm test