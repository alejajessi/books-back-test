const axios = require('axios');
const {expect} = require('chai');
const {random} = require('faker');

let response;
const bookDelete = {
    "name": `The ${random.words(2)}`,
    "author": "Gabriel García Marquéz"
};

describe ("When the user wants to add an book", () =>{
    before(async() =>{
        response = await axios.post('https://books-back-jess.herokuapp.com/books', bookDelete);
    });

    describe("When the user wants to delete the book that it was add", () => {

        before('When user wants to delete that created book',async()=> {
            let id = response.data.id;
            response = await axios.delete(`https://books-back-jess.herokuapp.com/books/${id}`);
        });


        it('Then should return a delete status code', () => {
        expect(response.status).eql(200);
        });  

        it('Then shouldnt return a json as content type',() => {
        expect(response.headers['content-type']).to.be.undefined;
        });
    
    });

});