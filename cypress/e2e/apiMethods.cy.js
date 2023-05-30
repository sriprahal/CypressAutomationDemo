/// <reference types="Cypress" />
const dataJSON = require('../fixtures/apiData.json');
const dataJSON_2 = require('../fixtures/apiData_2.json');
const dataJSON_3 = require('../fixtures/apiData_3.json');

describe('api methods', () => {
    const token = 'Bearer ebf35da851aa68654fd17d7bcf7bfff66559ff9a53fa1d2ec6d8c5537fe3c730';
    let randomEmail = '';
    let finalEmail = '';
    let ans, userId;

    var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 10; i++)
        randomEmail += pattern.charAt(Math.floor(Math.random() * pattern.length));
    finalEmail = randomEmail + '@gmail.com';  //function for random email generation

    it('POST,GET,PUT,DELETE method', () => {

        //Creating a new user
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization': token
            },
            body: {
                "name": dataJSON.name,
                "email": finalEmail,
                "gender": dataJSON.gender,
                "status": dataJSON.status
            }
        }).then((res) => {
            expect(res.status).to.eq(201);
            expect(res.body).has.property('name', dataJSON.name);
            expect(res.body).has.property('email', finalEmail);

            ans = (JSON.stringify(res.body.id)); //returning the id in JSON format
            userId = ans;
            cy.log("User id is " + userId);
        })

            //Getting the created users
            .then((res) => {
                cy.request({
                    method: 'GET',
                    url: 'https://gorest.co.in/public/v2/users/' + userId,
                    headers: {
                        'Authorization': token
                    },
                }).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body).has.property('name', dataJSON.name);
                    expect(res.body).has.property('email', finalEmail);

                    //Updating the user which we got
                    cy.request({
                        method: 'PUT',
                        url: 'https://gorest.co.in/public/v2/users/' + userId,
                        headers: {
                            'Authorization': token
                        },
                        body: {
                            "name": dataJSON_2.name,
                            "status": dataJSON_2.status
                        }
                    }).then((res) => {
                        expect(res.status).to.eq(200);
                        expect(res.body).have.property('name', dataJSON_2.name);
                        expect(res.body).have.property('status', dataJSON_2.status);
                        cy.request({
                            method: 'DELETE',
                            url: 'https://gorest.co.in/public/v2/users/' + userId,
                            headers: {
                                'Authorization': token
                            }
                        }).then((res) => {
                            cy.log(" The user id " + userId + ' is deleted.');
                        })
                    })
                })
            })
    })
})