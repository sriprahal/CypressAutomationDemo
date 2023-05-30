Feature: Negative Scene demo 

    I want to login the website with wrong credentials

    Scenario: Login with wrong email id
        Given I navigate to the website
        And I click on user login icon
        And I provide wrong email id
        And I provide password
        Then I click Sign In
        Then I validate the username