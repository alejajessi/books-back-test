const axios =require ('axios');
const {expect} = require('chai');

let response;

describe("When the user ants to list books", () => {

    before (async() => {
        response = await axios.get('https://books-back-jess.herokuapp.com/books');
    });

    it ("Then should return an OK status code", () =>{

        expect(response.status).eql(200);
    });

    it("Then it should return books with id, name and author", () => {
        expect(response.data.length).to.be.greaterThan(0);
        const book = response.data[0];
        expect(book).to.have.property("id");
        expect(book).to.have.property("name");
        expect(book).to.have.property("author");
    });
}); 