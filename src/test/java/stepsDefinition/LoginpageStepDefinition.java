package stepsDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.LoginPage;
import util.BrowserFactory;

public class LoginpageStepDefinition {

	WebDriver driver;
	LoginPage loginpage;

	@Before
	public void initializeBrowser() {
		driver = BrowserFactory.launchBrowser();
		loginpage = PageFactory.initElements(driver, LoginPage.class);
	}

	@Given("^User is on techfios login page$")
	public void user_is_on_techfios_login_page() {
		driver.get("https://techfios.com/billing/?ng=login");
	}

	@When("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password) throws Throwable {
		loginpage.enterUserCredentials(username, password);

	}

	@When("^User click on signin button$")
	public void user_click_on_signin_button() throws Throwable {

		loginpage.clickSiginButton();
	}

	@Then("^User should land on DashBoard Page$")
	public void user_should_land_on_DashBoard_Page() throws Throwable {
		loginpage.verifyDashBoardPage();
		Thread.sleep(3000);

	}

	@When("^User click on Bank and Cash$")
	public void User_click_on_Bank_and_Cash() {
		loginpage.clickOnBankAndCash();

	}

	@When("^User click on New Account$")
	public void user_click_on_New_Account() {

		loginpage.clickonNewAccount();
	}

	@Then("^User Should land on NewAccount Page$")
	public void user_Should_land_on_NewAccount_Page() {
		loginpage.verifyNewAccountdPage();
	}

	@When("^User enters the \"([^\"]*)\"and\"([^\"]*)\"and (\\d+) and (\\d+) and \"([^\"]*)\" and (\\d+) and \"([^\"]*)\"$")
	public void user_enters_the_and_and_and_and_and_and(String accountTitle, String description, int initialBalance,
			int accountNumber, String contactPerson, int phone, String interBankingUrl) throws Throwable {
		loginpage.enterUserDetails(accountTitle, description, initialBalance, accountNumber, contactPerson, phone,
				interBankingUrl);
	}

	@And("^User clicks on submit button$")
	public void user_clicks_on_submit_button() throws Throwable {
		loginpage.clickSubmitButton();

	}

	@Then("^User should verify is account created$")
	public void user_should_verify_is_account_created() throws Throwable {
		Thread.sleep(5000);
		loginpage.verifyaccountcreated();
		loginpage.takeScreenShotAtEndOfTheTest(driver);
	}

	@After
	public void teardown() {
		driver.close();
		driver.quit();

	}

}
