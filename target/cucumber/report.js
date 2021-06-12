$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/LoginPage.feature");
formatter.feature({
  "line": 2,
  "name": "Validating TechFios User With Login Functionalities",
  "description": "",
  "id": "validating-techfios-user-with-login-functionalities",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BankAccountFeature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "User should able login with valid credentials",
  "description": "",
  "id": "validating-techfios-user-with-login-functionalities;user-should-able-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should land on DashBoard Page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User click on Bank and Cash",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User click on New Account",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User Should land on NewAccount Page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enters the \"\u003caccountTitle\u003e\"and\"\u003cdescription\u003e\"and \u003cinitialBalance\u003e and \u003caccountNumber\u003e and \"\u003ccontactPerson\u003e\" and \u003cphone\u003e and \"\u003cinterBankingUrl\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should verify is account created",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "validating-techfios-user-with-login-functionalities;user-should-able-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "phone",
        "interBankingUrl"
      ],
      "line": 21,
      "id": "validating-techfios-user-with-login-functionalities;user-should-able-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Launch5",
        "NewLaunchAccount1",
        "10000",
        "2473910",
        "Vivek",
        "8483918616",
        "chase"
      ],
      "line": 22,
      "id": "validating-techfios-user-with-login-functionalities;user-should-able-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3779658100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginpageStepDefinition.user_is_on_techfios_login_page()"
});
formatter.result({
  "duration": 1348301900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should able login with valid credentials",
  "description": "",
  "id": "validating-techfios-user-with-login-functionalities;user-should-able-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@BankAccountFeature"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should land on DashBoard Page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User click on Bank and Cash",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User click on New Account",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User Should land on NewAccount Page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enters the \"Launch5\"and\"NewLaunchAccount1\"and 10000 and 2473910 and \"Vivek\" and 8483918616 and \"chase\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should verify is account created",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 37
    }
  ],
  "location": "LoginpageStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 300531600,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageStepDefinition.user_click_on_signin_button()"
});
formatter.result({
  "duration": 2558335400,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageStepDefinition.user_should_land_on_DashBoard_Page()"
});
formatter.result({
  "duration": 3016227500,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageStepDefinition.User_click_on_Bank_and_Cash()"
});
formatter.result({
  "duration": 102588400,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageStepDefinition.user_click_on_New_Account()"
});
formatter.result({
  "duration": 632420100,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageStepDefinition.user_Should_land_on_NewAccount_Page()"
});
formatter.result({
  "duration": 6123900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Launch5",
      "offset": 17
    },
    {
      "val": "NewLaunchAccount1",
      "offset": 29
    },
    {
      "val": "10000",
      "offset": 51
    },
    {
      "val": "2473910",
      "offset": 61
    },
    {
      "val": "Vivek",
      "offset": 74
    },
    {
      "val": "8483918616",
      "offset": 85
    },
    {
      "val": "chase",
      "offset": 101
    }
  ],
  "location": "LoginpageStepDefinition.user_enters_the_and_and_and_and_and_and(String,String,int,int,String,int,String)"
});
formatter.result({
  "duration": 623873600,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageStepDefinition.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 2255057700,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageStepDefinition.user_should_verify_is_account_created()"
});
