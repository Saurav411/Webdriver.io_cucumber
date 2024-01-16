Feature: Sign in PremierInn Website

  Scenario Outline: PremierInn New User Sign in
    Given I am on the PremierInn Home page
    When Accept Cookies if any
    Then Verify PremierInn Home Page Title
    When Clicking on Sign in button
    When Entering details for Sign in <firstname> <lastname> <email>

    Examples: 
      | firstname | lastname | email                   |
      | WB        | POC      | WB.POC.1@mailinator.com |
    
