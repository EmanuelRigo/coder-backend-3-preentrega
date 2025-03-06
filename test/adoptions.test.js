import supertest from "supertest";
import { expect } from "chai";
const requester = supertest("http://localhost:8080");

describe("Testing de adoption", () => {
    describe("Testing del Router de adoptions", () => {

        it("Endpoint GET /api/adoptions debe traer todas las adopciones", async () => {
            const { status, body } = await requester.get("/api/adoptions");
            expect(status).to.equal(200);
            expect(body.payload).to.be.an("array");
        });

        it("Debe traer una adopción por id", async () => {
            let idAdoption = "67c9e0291cc807987f1069dd";
            const { status, body } = await requester.get(`/api/adoptions/${idAdoption}`);
            expect(status).to.equal(200);
            expect(body.payload).to.have.property("_id").that.equals(idAdoption);
        });

        it("Debe devolver un error si la adopción no existe", async () => {
            let idAdoption = "nonexistentid";
            const { status, body } = await requester.get(`/api/adoptions/${idAdoption}`);
            expect(status).to.equal(404);
            expect(body).to.have.property("error");
        });

        it("Debe crear una adopción", async () => {
            let uid = "67c9df801cc807987f10696e";
            let pid = "67c9df801cc807987f10699d";
            
            const { status, body } = await requester.post(`/api/adoptions/${uid}/${pid}`);
            expect(status).to.equal(200);
            expect(body).to.have.property("message").that.equals("Pet adopted");
        });

        it("Debe devolver un error si el usuario o la mascota no existen", async () => {
            let uid = "nonexistentuid";
            let pid = "nonexistentpid";
            
            const { status, body } = await requester.post(`/api/adoptions/${uid}/${pid}`);
            expect(status).to.equal(404);
            expect(body).to.have.property("error");
        });

    });
});