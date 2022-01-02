import selectors from "../support/selectors";

describe('BuyAnItem', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.fixture('userData').then(function (userData) {
            this.userData = userData
        })
    });

    it('Checks buying an item as returning user (unlogged) with change delivery address', () => {
        cy.visitHomepage();
        cy.acceptCookies();
        cy.closeSelectCountryModal(); // user is visiting web from Czech Republic
        cy.closeSelectLanguageModal(); // user is visiting web from Czech Republic
        cy.openHeaderMenu();
        cy.selectBeautyCategory();
        cy.selectMakeUpSubCategory();
        cy.selectTheFirstItemOnThePage()
        cy.addAnItemToBasket();
        cy.navigateToBasket();
        cy.navigateToCheckout();
        cy.loginWithValidCredentials();
        cy.returnToYourInformationPage();
        cy.fillInAddressForm();
        cy.selectPaymentMethod();
        cy.providePayment();
        //cy.checkPaymentSuccessful();
    });
});
