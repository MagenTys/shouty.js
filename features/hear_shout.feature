Feature: Hear Shout

  Shouts have a range of approximately 1000m

  Background:
    Given Lucy is at [0, 0]

  @wip
  Scenario Outline: <description>
    Given Sean is at [0, <distance>]
    When Sean shouts
    Then Lucy should hear <lucy_hears>

    Examples:
    | distance | lucy_hears | description                     |
    | 900      |  Sean      | In range shout is heard         |
    | 1100     | nothing    | Out of range shout is not heard |

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

 Scenario: Multiple shouts from one person
   Given Sean is at [0, 500]
   When Sean shouts
   And Sean shouts
   Then Lucy should hear 2 shouts from Sean
