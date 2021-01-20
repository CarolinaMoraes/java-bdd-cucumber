$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('cucumberJava\cucumberJava.feature');
formatter.feature({
  "line": 1,
  "name": "TesteFacebook",
  "description": "",
  "id": "testefacebook",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login functionality exists",
  "description": "",
  "id": "testefacebook;login-functionality-exists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I open Facebook website",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Login button should exits",
  "keyword": "Then "
});
formatter.match({
  "location": "TesteFacebook.openBrowser()"
});
formatter.result({
  "duration": 6275590000,
  "status": "passed"
});
formatter.match({
  "location": "TesteFacebook.goToFacebook()"
});
formatter.result({
  "duration": 2566016000,
  "status": "passed"
});
formatter.match({
  "location": "TesteFacebook.loginButton()"
});
formatter.result({
  "duration": 166047400,
  "status": "passed"
});
});