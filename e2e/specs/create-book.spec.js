const axios = require('axios');
const {expect} = require('chai');
const {random} = require('faker');

let response;
const book = {
    "name": `The ${random.words(2)}`,
    "author": "Gabriel García Marquéz"
};
describe ("When the user wants to create an animal", () =>{
    before(async() =>{
        response = await axios.post('https://books-back-jess.herokuapp.com/books', book);
    });

    it('Then should return a created status code', () => {
        expect(response.status).eql(200);

    });  

    it('Then should return the created book', () => {
        const createdBook = response.data;
        expect(createdBook.name).eql(book.name);
        expect(createdBook.author).eql(book.author);

    });

    it('Then should return a json as content type', () => {
         expect(response.headers['content-type']).to.contain('application/json');
    });
});