import supertest from "supertest";
import { expect } from "chai";
const requester = supertest("http://localhost:8080");

describe("Testing de adoption", () => {
    describe("Testing del Router de adoptions", () => {
        it("Endpoint GET /api/adoptions debe traer todas las adoptiones", async () => {
            const { status, body } = await requester.get("/api/adoptions");
            expect(status).to.equal(200);
            expect(body.payload).to.be.an("array");
        });
    });
});