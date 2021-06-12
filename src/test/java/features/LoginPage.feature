@BankAccountFeature
Feature: Validating TechFios User With Login Functionalities

Background: 
Given User is on techfios login page 


Scenario Outline: User should able login with valid credentials
When User enters "<username>" and "<password>"  
And User click on signin button
Then User should land on DashBoard Page
When User click on Bank and Cash
When User click on New Account
Then User Should land on NewAccount Page 
When User enters the "<accountTitle>"and"<description>"and <initialBalance> and <accountNumber> and "<contactPerson>" and <phone> and "<interBankingUrl>" 
And User clicks on submit button    
Then User should verify is account created    

Examples:

|username         |password|accountTitle|description       |initialBalance      |accountNumber               |contactPerson   |phone       |interBankingUrl|
|demo@techfios.com|abc123  |Launch5     | NewLaunchAccount1|10000	            |2473910                     |Vivek           |8483918616  |chase|


