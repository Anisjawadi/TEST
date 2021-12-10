
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
//asserttion
chai.should();


chai.use(chaiHttp);

//test tache APIs
describe('tache APIs', () => {
    //test read
    describe('/GET taches', () => {
        it('it should GET all the tasks', (done) => {
            chai.request(server)
                .get('/tache')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.not.be.eql(0);
                    done();
                });
        });
    });
    //test create
    describe('/POST tache', () => {
        it('it should create a task', (done) => {
            let tache = {
                description: "taskForTesting",
                deadline: Date.now()
            }
            chai.request(server)
                .post('/tache')
                .send(tache)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    done();
                });
        });

    });
    //test update
    describe('/PATCH tache', () => {
        it('it should update a task', (done) => {
            let tache = {
                description: "taskForTesting Updated",
                deadline: Date.now()
            }
            let id = "61b360de2fd1d61eb4d36a8b"
            chai.request(server)
                .patch('/tache/updateTache/' + id)
                .send(tache)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('msg').eq('Task updated!')
                    done();
                });
        });

    });
    //test delete 
    describe('/DELETE tache', () => {
        it('it should delete a task', (done) => {
            let id = "61b23c19aa7e26122c956754"
            chai.request(server)
                .delete('/tache/delete/' + id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('msg').eq('Deleted Success!')
                    done();
                });
        });

    });
})


