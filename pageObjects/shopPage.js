module.exports = {
    url: 'https://www.ekwb.com/shop/',
    elements: {
    
//Product Navigation
    quantNav: {selector: '#509'},
    classicNav: {selector: '#513'},
    lignumNav: {selector: '#535'},
    kitsNav: {selector: '#327'},
    aioNav: {selector: '#647'},
    waterNav: {selector: '#78'},
    resNav: {selector: '#114'},
    pumpNav: {selector: '#73'},
    fittingNav: {selector: '#55'},
    radNav: {selector: '#176'},
    accessNav: {selector: '#54'},
    clearanceNav: {selector: '#322'},

//Search bar
    searchBar: {selector: '#search'},
    searchButton: {selector: '.search-button'},

//Top right bar
    accountBar: {selector: '//a[contains(@title,"Account")]', locateStrategy: 'xpath'},
    wishlistBar: {selector: '//a[contains(@title,"Wishlist")]', locateStrategy: 'xpath'},
    logoutBar: {selector: '//a[contains(@title,"Log Out")]', locateStrategy: 'xpath'},
    loginBar: {selector: '//a[contains(@title,"Log In")]', locateStrategy: 'xpath'},
    cartBar: {selector: '.ic-cart'},
    cartProceed: {selector: '//span[text()="Proceed to Cart"]', locateStrategy: 'xpath'},

//Login Fields
    emailField: {selector: '#email'},
    passField: {selector: '#pass'},
    loginBtn: {selector: '#send2'},
       

    
        }
    }

