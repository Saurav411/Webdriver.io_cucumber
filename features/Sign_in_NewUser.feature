Feature: Sign in PremierInn Website

@check
  Scenario Outline: PremierInn Sign in for New User
    Given I am on the PremierInn Home Sign up page
    When Accept Cookies if any
    Then Verify PremierInn New Registration Page Title
    When Entering details for New User Registration <firstname> <lastname> <email>

    Examples: 
      | firstname | lastname | email                   |
      | WB        | POC      | lkjh@mailinator.com |

    
