import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server.js';

chai.use(chaiHttp);


describe('Test for Home Route', () => {
    it('should give status 200', async () => {
        const res = await chai.request(server)
            .get('/HomeRoute')
            .send()
        expect(res).to.have.status(200);
    });
});
describe('Test for AboutMe Route', () => {
    it('should give status 200', async () => {
        const res = await chai.request(server)
            .get('/AboutMeRoute')
            .send()
        expect(res).to.have.status(200);
    });
});
describe('Test for Education Route', () => {
    it('should give status 200', async () => {
        const res = await chai.request(server)
            .get('/EducationRoute')
            .send()
        expect(res).to.have.status(200);
    });
});
describe('Test for Experience Route', () => {
    it('should give status 200', async () => {
        const res = await chai.request(server)
            .get('/ExperienceRoute')
            .send()
        expect(res).to.have.status(200);
    });
});
describe('Test for Projects Route', () => {
    it('should give status 200', async () => {
        const res = await chai.request(server)
            .get('/ProjectsRoute')
            .send()
        expect(res).to.have.status(200);
    });
});