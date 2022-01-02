import selectors from '../support/selectors.js';

Cypress.Commands.add('visitHomepage', () => {
    cy.visit('/', {
        headers: {
            'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
        }
    });
})

Cypress.Commands.add('acceptCookies', () => {
    cy.get(selectors.AcceptCookiesBtn).click();
})

Cypress.Commands.add('closeSelectCountryModal', () => {
    if (cy.get(selectors.SelectCountryModal)) {
        cy.get(selectors.CloseModal).click();
      }
})

Cypress.Commands.add('closeSelectLanguageModal', () => {
    if (cy.get(selectors.SelectLanguageModal)) {
        cy.wait(2000);
        cy.get(selectors.CloseModal).click();
      }
})

Cypress.Commands.add('openHeaderMenu', () => {
    cy.get(selectors.HeaderMenu).click();
})

Cypress.Commands.add('selectBeautyCategory', () => {
    cy.get(selectors.BeautyCategory).click();
})

Cypress.Commands.add('selectMakeUpSubCategory', () => {
    cy.get(selectors.MakeUpSubCategory).click();
})

Cypress.Commands.add('selectTheFirstItemOnThePage', () => {
    cy.get(selectors.TheFirstItem).first().click();
})

Cypress.Commands.add('addAnItemToBasket', () => {
    cy.get(selectors.AddToBasketBtn).click();
})

Cypress.Commands.add('navigateToBasket', () => {
    cy.get(selectors.GoToBasketBtn).click();
})

Cypress.Commands.add('navigateToCheckout', () => {
    cy.get(selectors.CheckoutBtn).first().click();
    cy.get(selectors.LoginPage).should('be.visible');
})

Cypress.Commands.add('loginWithValidCredentials', function () {
    cy.get(selectors.EmailInput).type(this.userData.email);
    cy.get(selectors.PasswordInput).type(this.userData.password);
    cy.get(selectors.SubmitLoginBtn).click();
    cy.url().should('include', 'confirmation');
})

Cypress.Commands.add('returnToYourInformationPage', function () {
    cy.get(selectors.YourInformationBtn).type(this.userData.streetHouseNumber);
})

Cypress.Commands.add('fillInAddressForm', function () {
    cy.get(selectors.StreetHouseInput).clear().type(this.userData.streetHouseNumber);
    cy.get(selectors.ZipCodeInput).clear().type(this.userData.zipCode);
    cy.get(selectors.CityInput).clear().type(this.userData.city);
    cy.get(selectors.SubmitBtn).click();
    cy.url().should('include', 'confirmation');
})

Cypress.Commands.add('selectPaymentMethod', () => {
    cy.get(selectors.VisaPaymentMethod).click();
    cy.scrollTo('bottom').get(selectors.SubmitOrderBtn).click();
    cy.url().should('include', 'computop-paygate');
})

Cypress.Commands.add('providePayment', function () {
    cy.get(selectors.CardholderNameInput).type(this.userData.name);
    cy.get(selectors.ContinuePaymentDetails).click();
    cy.get(selectors.CardNumberInput).type(this.userData.cardNumber);
    cy.get(selectors.ContinuePaymentDetails).click();
    cy.get(selectors.MonthExpirationCardDropdown).click().get(selectors.SelectMonthOfExpriration3).click();
    cy.get(selectors.YearExpirationCardDropdown).click().get(selectors.SelectYearOfExpiration2030).click();
    cy.get(selectors.ContinuePaymentDetails).click();
    cy.get(selectors.CvvInput).type(this.userData.cvv);
    cy.get(selectors.SubmitPayment).click();
})
