Feature: Hear Shout

  Shouts have a range of approximately 1000m

  Background:
    Given Lucy is at [0, 0]

  Scenario: In range shout is heard
    Given Sean is at [0, 900]
    When Sean shouts
    Then Lucy should hear Sean

  Scenario: Out of range shout is not heard
    Given Sean is at [0, 1100]
    When Sean shouts
    Then Lucy should hear nothing

  Scenario: Multiple shouters
    Given people are located at
      | name  | x    | y   |
      | Sean  | 0    | 500 |
      | Oscar | 1100 | 0   |
    When Sean shouts
    And Oscar shouts
    Then Lucy should not hear Oscar
    But Lucy should hear Sean

 Scenario: Shouter does not hear echoes
   When Lucy shouts
   Then Lucy should hear nothing
