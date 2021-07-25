Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given the user opened an app 
And the list is shown
When user does not enter the number of events
Then 32 events will be shown by default

Scenario: User can change the number of events they want to see
Given the list of events is shown
When user enters the number of events to be listed
Then only that specific number of events will be shown
