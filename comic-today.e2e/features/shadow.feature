@shadow
@profiterole-timeline
Feature: Shadow dom Feature

Scenario: The app has shadow dom
  Given I am at the Initial page
  When I type "text" inside the input
   Then I check if the label has got that "text"
