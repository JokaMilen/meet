Feature: Show/Hide event details

Scenario: An event element is collapsed by default
Given the list of upcoming events is shown
When no action by user
Then event element is collapsed by default

Scenario: User can expand an event to see its details
Given the event list is shown
When user clicks on the collapsed event (“Show details” button)
Then event is expended showing details

Scenario: User can collapse an event to hide its details
Given the event is expended and showing details
When user clicks “Hide details” button
Then user can collapse and event to hide details