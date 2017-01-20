Feature: Hear Shout

  Rules:
    - hear shout within 1000m

  Scenario: Bill hears a shout
    Given Bill is at location (0,0)
    And Ben is at location (0,700)
    When Ben shouts "Let's Kickstart"
    Then Bill should hear the shout
