var homePage = {}
var shopPage = {}
var configPage = {}
let chooseHardware = require('../testAssets/chooseHardware')
let chooseCooling = require('../testAssets/chooseCooling')
let chooseRgbOp = require('../testAssets/chooseRgbOp')
let chooseTubing = require('../testAssets/chooseTubing')
let chooseStyle = require('../testAssets/chooseStyle')
let chooseRes = require('../testAssets/chooseRes')



module.exports = {
    beforeEach: browser => {
        homePage = browser.page.homePage()
        shopPage = browser.page.shopPage()
        configPage = browser.page.configPage()
        configPage.navigate()
        .maximizeWindow()
    },
    afterEach: browser=> {
        configPage.end()
    },


    
    'User can complete the configuration wizard with an Intel solution': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp2','@azureBlue','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@mbVerify','EK-Quantum MSI MPG Z490 CARBON EK X D-RGB')
        

    },
     
    'User can complete the configuration wizard with an AMD solution': browser => {  
        chooseHardware(configPage,'@monoRadio','amd','@noGpuRadio','1','@ramOp2')
        chooseCooling(configPage,'True','False')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp2','@azureBlue','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@mbVerify','ASUS ROG Crosshair VIII Impact')
        

    },

    'User can complete the configuration wizard with multiple graphics cards': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','3','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp2','@azureBlue','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.elementPresent('@gpu2Verify')
        .verify.elementPresent('@gpu3Verify')
        

    },

    'User can complete the configuration wizard with a single graphics card': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','1','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp2','@azureBlue','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.elementPresent('@gpuVerify')
        .verify.elementNotPresent('@gpu3Verify')
    },

    'User can complete the configuration wizard with - RAM sticks': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','1','@ramOp0')
        chooseCooling(configPage,'True','False')
        chooseRgbOp(configPage,'Both','No')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp2','@azureBlue','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@ramVerify','0')
    },

    'User can complete the configuration wizard with soft tubing': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Soft')
        chooseStyle(configPage,'@tubeOp2','@azureBlue','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@tubeVerify','Soft')
        

    },

    'User can complete the configuration wizard after selecting pump/res combo option': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Soft')
        chooseStyle(configPage,'@tubeOp2','@azureBlue','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Combo')
        configPage
        .verify.containsText('@pumpResVerify','Pump reservoir combo')
        

    },

    'User can complete the configuration wizard after selecting seperate pump and res option': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Soft')
        chooseStyle(configPage,'@tubeOp2','@azureBlue','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@pumpResVerify','Separate pump & reservoir')
        

    },
//Style Tests

//Tube Size

        'User can complete the configuration wizard with 10 mm / 12 mm tube size': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp0','@azureBlue','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@tubeSizeVerify','10 mm / 12 mm')
        

    },
    'User can complete the configuration wizard with 10 mm / 14 mm tube size': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp1','@azureBlue','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@tubeSizeVerify','10 mm / 14 mm')
        

    },
    'User can complete the configuration wizard with 12 mm / 16 mm tube size': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp2','@azureBlue','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@tubeSizeVerify','12 mm / 16 mm')
        

    },
    'User can complete the configuration wizard with 10 mm / 13 mm tube size': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Soft')
        chooseStyle(configPage,'@tubeOp0','@azureBlue','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@tubeSizeVerify','10 mm / 13 mm')
        

    },
    'User can complete the configuration wizard with 12 mm / 16 mm tube size': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Soft')
        chooseStyle(configPage,'@tubeOp1','@azureBlue','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@tubeSizeVerify','12 mm / 16 mm')
        

    },
    'User can complete the configuration wizard with 10 mm / 16 mm tube size': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Soft')
        chooseStyle(configPage,'@tubeOp2','@azureBlue','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@tubeSizeVerify','10 mm / 16 mm')
        

    },

// Coolant Color
        'User can complete the configuration wizard with Cloud White coolant': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp0','@cloudWhite','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@coolantVerify','Cloud White')
        

    },
    'User can complete the configuration wizard with Scarlet Red coolant': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp0','@scarletRed','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@coolantVerify','Scarlet Red')
        

    },
    'User can complete the configuration wizard with Fire Orange coolant': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp0','@fireOrange','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@coolantVerify','Fire Orange')
        

    },
    'User can complete the configuration wizard with Laguna Yellow coolant': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp0','@lagunaYellow','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@coolantVerify','Laguna Yellow')
        

    },
    'User can complete the configuration wizard with Neon Green coolant': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp0','@neonGreen','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@coolantVerify','Neon Green')
        

    },
    'User can complete the configuration wizard with Azure Blue coolant': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp0','@azureBlue','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@coolantVerify','Azure Blue')
        

    },
    'User can complete the configuration wizard with Electric Purple coolant': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp0','@electricPurple','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@coolantVerify','Electric Purple')
        

    },
    'User can complete the configuration wizard with Clear coolant': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp0','@clearColor','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@coolantVerify','Clear')
        

    },
    'User can complete the configuration wizard with Blood Red coolant': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp0','@bloodRed','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@coolantVerify','Blood Red')
        

    },
    'User can complete the configuration wizard with Amber Orange coolant': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp0','@amberOrange','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@coolantVerify','Amber Orange')
        

    },
    'User can complete the configuration wizard with Lime Yellow coolant': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp0','@limeYellow','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@coolantVerify','Lime Yellow')
        

    },
    'User can complete the configuration wizard with Acid Green coolant': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp0','@acidGreen','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@coolantVerify','Acid Green')
        

    },
    'User can complete the configuration wizard with Navy Blue coolant': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp0','@navyBlue','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@coolantVerify','Navy Blue')
        

    },
    'User can complete the configuration wizard with Indigo Violet coolant': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp0','@indigoViolet','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@coolantVerify','Indigo Violet')
        

    },
    'User can complete the configuration wizard with Power Pink coolant': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp0','@powerPink','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@coolantVerify','Power Pink')
        

    },
//Fittings Color
      
    'User can complete the configuration wizard with Black fittings': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp0','@powerPink','@fittingBlack','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@fittingVerify','Black')
        

    },
    'User can complete the configuration wizard with Walnut fittings': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp0','@powerPink','@fittingWalnut','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@fittingVerify','Walnut')
        

    },
    'User can complete the configuration wizard with Black Nickel fittings': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp0','@powerPink','@fittingBlackNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@fittingVerify','Black Nickel')
        

    },
    'User can complete the configuration wizard with Nickel fittings': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp0','@powerPink','@fittingNickel','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@fittingVerify','Nickel')
        

    },
    'User can complete the configuration wizard with Satin Titanium fittings': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp0','@powerPink','@fittingSatinTitanium','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@fittingVerify','Satin Titanium')
        

    },
//Block Color 
    'User can complete the configuration wizard with a Clear block color': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp0','@powerPink','@fittingSatinTitanium','@blockClear','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@blockVerify','Plexi - Clear')
        

    },
    'User can complete the configuration wizard with a Black block color': browser => {
        configPage
        chooseHardware(configPage,'@moboRadio','intel','@noGpuRadio','2','@ramOp4')
        chooseCooling(configPage,'True','True')
        chooseRgbOp(configPage,'Both','Visual')
        chooseTubing(configPage,'Hard')
        chooseStyle(configPage,'@tubeOp0','@powerPink','@fittingSatinTitanium','@blockBlack','@blockBaseCopper')
        chooseRes(configPage,'Separate')
        configPage
        .verify.containsText('@blockVerify','Acetal - Black')
        

    },

}