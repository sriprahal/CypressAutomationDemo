# Feature: E-commerce web automation demo

#     I want to login as a user and I add a item to the cart and I want to sign out

#     Scenario: Login as User with correct credentials and add item and signout
#         Given I navigate to the website
#         And I click on user login button
#         And I type valid username and password
#         And I click Sign In button
#         Then I validate the username
#         Given I search for the product
#         And I click the product
#         And I increase the count by 2
#         And I add the item to cart
#         Then I validate the cart count
#         Then I sign out
#         Then I validate whether the user is signed out



# API TESTING

Feature: Api Testing

    Creating a new user and updating it and deleting it

    Scenario: Api methods
        Given First I am creating a new user using POST method
        Then I am fetching that user usin GET method
        And I am updating that fetched user using PUT method
        And I am deleting that user using DELETE method
