Feature: PremierInn Hotel Searching

#   Scenario Outline: PremierInn Hotel Searching
#     Given I am on the PremierInn Home page
#     When Accept Cookies if any
#     Then Verify PremierInn Home Page Title
#     When Entering Location or Hotel Name to Search <Hotel_or_Location>
#     When Select No of Guests and RoomType
#     When Clicking on Search button
#     # When Clearing Cookies
#     # When Redirecting to srp page
#     # When Accept srp Cookies if any
#     Then Verify PremierInn Home srp Page Title
#     Then Choose a Hotel from srp page

#     Examples: 
#       | Hotel_or_Location   |
#       | Holborn, London, UK |

  Scenario Outline: PremierInn Hotel Searching
    Given I am on the PremierInn Home page
    When Accept Cookies if any
    Then Verify PremierInn Home Page Title
    When Entering Location or Hotel Name to Search <Hotel_or_Location>
    # When Select No of Guests and RoomType
    When Clicking on Search button
    Then Verify PremierInn Home srp Page Title

    Examples: 
      | Hotel_or_Location   |
      | Luton Town Centre   |


  # Scenario Outline: PremierInn Hotel Searching
  #   Given I am on the PremierInn Home page
  #   When Accept Cookies if any
  #   Then Verify PremierInn Home Page Title
