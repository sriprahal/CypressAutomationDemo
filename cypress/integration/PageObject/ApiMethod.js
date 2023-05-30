const dataJSON_1 = require('../../fixtures/apiData_1');
const dataJSON_2 = require('../../fixtures/apiData_2');

const token = 'Bearer ebf35da851aa68654fd17d7bcf7bfff66559ff9a53fa1d2ec6d8c5537fe3c730';
let randomEmail = '';
let finalEmail = '';
let ans, userId

var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklmnopqrstuvwxyz";
for (var i = 0; i < 10; i++)
    randomEmail += pattern.charAt(Math.floor(Math.random() * pattern.length));
finalEmail = randomEmail + '@gmail.com';

class ApiMethod {
    postMethod() {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization': token
            },
            body: {
                "name": dataJSON_1.name,
                "email": finalEmail,
                "gender": dataJSON_1.gender,
                "status": dataJSON_1.status
            }
        }).then((res) => {
            expect(res.status).to.eq(201);
            expect(res.body).has.property('name', dataJSON_1.name);
            expect(res.body).has.property('email', finalEmail);

            ans = (JSON.stringify(res.body.id)); //returning the id in JSON format
            userId = ans;
            cy.log("User id is " + userId);
        })
        return this;
    }
    getMethod() {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/' + userId,
            headers: {
                'Authorization': token
            },
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).has.property('name', dataJSON_1.name);
            expect(res.body).has.property('email', finalEmail);
        })
        return this;
    }
    putMethod() {
        cy.request({
            method: 'PUT',
            url: 'https://gorest.co.in/public/v2/users/' + userId,
            headers: {
                'Authorization': token
            },
            body: {
                "name": dataJSON_2.name,
                "gender": dataJSON_2.gender,
                "status": dataJSON_2.status
            }
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).have.property('name', dataJSON_2.name);
            expect(res.body).have.property('gender', dataJSON_2.gender);
            expect(res.body).have.property('status', dataJSON_2.status);
        })
        return this;
    }
    deleteMethod() {
        cy.request({
            method: 'DELETE',
            url: 'https://gorest.co.in/public/v2/users/' + userId,
            headers: {
                'Authorization': token
            }
        }).then((res) => {
            expect(res.status).to.eq(207);
            cy.log(" The user id " + userId + ' is deleted.');
        })
        return this;
    }
}
export default ApiMethod