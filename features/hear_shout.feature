Feature: Hear Shout

  Shouts have a range of approximately 1000m

  Scenario: In range shout is heard
    Given Lucy is at [0, 0]
    And Sean is at [0, 900]
    When Sean shouts
    Then Lucy should hear Sean

  Scenario: Out of range shout is not heard
    Given Lucy is at [0, 0]
    And Sean is at [0, 1100]
    When Sean shouts
    Then Lucy should hear nothing

  Scenario: Multiple shouters
    Given people are located at
      | name  | x    | y   |
      | Lucy  | 0    | 0   |
      | Sean  | 0    | 500 |
      | Oscar | 1100 | 0   |
    When Sean shouts
    And Oscar shouts
    Then Lucy should not hear Oscar
    But Lucy should hear Sean

 Scenario: Shouter does not hear echoes
   Given Lucy is at [300, 300]
   When Lucy shouts
   Then Lucy should hear nothing
