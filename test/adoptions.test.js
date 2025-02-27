import supertest from "supertest";
import { expect } from "chai";
const requester = supertest("http://localhost:8080");

describe("Testing de adoption", () => {
    describe("Testing del Router de adoptions", () => {

        it("Endpoint GET /api/adoptions debe traer todas las adoptiones", async () => {
            const { status, _body } = await requester.get("/api/adoptions");
            expect(status).to.equal(200);
            expect(_body.payload).to.be.an("array");
        });

        it("traamos una adopcion por id", async () => {
            let idAdoption = "67bf8fbcdca6273dc312ca7f";
            const { status, _body } = await requester.get(`/api/adoptions/${idAdoption}`);
            expect(status).to.equal(200);
            expect(_body.payload).to.be.have.property("_id").that.equal(idAdoption);
        })

        it("Crearemos una adopcion", async () => {
            let uid = "67a37e1f82843110cca248ba";
            let pid = "67a37e1f82843110cca248bd";
            
            const {status} = await requester.post(`/api/adoptions/${uid}/${pid}`)
            expect(status).to.equal(200)
    });


})})