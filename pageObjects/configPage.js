module.exports = {
    url: 'https://www.ekwb.com/custom-loop-configurator/',
    elements: {
//Title check
    coolTitle: {selector: '(//div[contains(@class,"heading")])[text()="Which components do you wish to liquid cool?"]', locateStrategy: 'xpath'},
    rgbTitle: {selector: '(//div[contains(@class,"heading")])[text()="Want to add some RGB visual enhancement?"]', locateStrategy: 'xpath'},
    tubeTitle: {selector: '(//div[contains(@class,"heading")])[text()="What is your desired tubing type"]', locateStrategy: 'xpath'},
    styleTitle: {selector: '(//div[contains(@class,"heading")])[text()="Personalize your custom loop"]', locateStrategy: 'xpath'},
    resTitle: {selector: '(//div[contains(@class,"heading")])[text()="Select your desired pump and reservoir configuration"]', locateStrategy: 'xpath'},

    
//Chasis
    chasisInput: {selector: '#chasis'},
    chasisSelect: {selector: '(//a[contains(@class,"ui-corner-all")])[text()="ASUS ROG Strix Helios"]', locateStrategy: 'xpath'}, 
//Motherboard
    monoRadio: {selector: '#mbRadioNoSku'},
    //moboRadio: {selector: '#mbRadioSku'},
    moboRadio: {selector: '(//div[contains(@class,"radioMB")]/input)[2]', locateStrategy: 'xpath'},
    moboInput: {selector: '#mb'},
    moboSelect: {selector: '(//a[contains(@class,"ui-corner-all")])[text()="ASUS ROG Crosshair VIII Impact"]', locateStrategy: 'xpath'},
//CPU
    cpuInput: {selector: '#cpu'},
    cpuSelectIntel: {selector: '(//a[contains(@class,"ui-corner-all")])[text()="Intel Core i9-10900"]', locateStrategy: 'xpath'}, 
    cpuSelectAmd: {selector: '(//a[contains(@class,"ui-corner-all")])[text()="AMD Ryzen 5 3600XT"]', locateStrategy: 'xpath'},
    cpuCheck: {selector: '(//div[contains(@class,"cboxWrap")])[1]', locateStrategy: 'xpath'},
//GPU
    noGpuRadio: {selector: '#gpuRadioNoSku'},
    yesGpuRadio: {selector: '#gpuRadioSku'},
    gpuInput: {selector: '#gpu1text'},
    addGpu: {selector: '#addGpuField'},
    removeGpu: {selector: '#removeGpuField'},
    gpuSelect: {selector: '(//a[contains(@class,"ui-corner-all")])[text()="ASUS Radeon RX 5700 XT TUF O8G, 8192 MB GDDR6 (90YV0DA0-M0NA00)"]', locateStrategy: 'xpath'},
//RAM
    ramDrop: {selector: '#ram1'},
    ramOp0: {selector: '//option[contains(@value,"0")]', locateStrategy: 'xpath'},
    ramOp2: {selector: '//option[contains(@value,"2")]', locateStrategy: 'xpath'},
    ramOp4: {selector: '//option[contains(@value,"4")]', locateStrategy: 'xpath'},
    ramCheck: {selector: '(//div[contains(@class,"cboxWrap")])[3]', locateStrategy: 'xpath'},

//Next / Previous / Add to Cart Buttons
    nextBtn: {selector: '#cc__nextStep'},
    prevBtn: {selector: '#cc__prevStep'},
    atcBtn: {selector: '#cc__addToCart'},
    cookieBtn: {selector: '#catapultCookie'},
    
// Reason for Liquid Cooling Checkboxes
    silentCheck: {selector: '(//div[contains(@class,"cboxWrap")])[1]', locateStrategy: 'xpath'},
    bothCheck: {selector: '(//div[contains(@class,"cboxWrap")])[2]', locateStrategy: 'xpath'},
    overclockCheck: {selector: '(//div[contains(@class,"cboxWrap")])[3]', locateStrategy: 'xpath'},
// RGB checkboxes
    addressRgbCheck: {selector: '(//div[contains(@class,"radioBoxWrap")])[1]', locateStrategy: 'xpath'},
    visualCheck: {selector: '(//div[contains(@class,"radioBoxWrap")])[2]', locateStrategy: 'xpath'},
    noRgbCheck: {selector: '(//div[contains(@class,"radioBoxWrap")])[3]', locateStrategy: 'xpath'},
//Tubing Type
    softCheck: {selector: '(//div[contains(@class,"cboxWrap")])[1]', locateStrategy: 'xpath'},
    hardCheck: {selector: '(//div[contains(@class,"cboxWrap")])[2]', locateStrategy: 'xpath'},
 
//Choose your Style

//Tube Size
    tubeSize: {selector: '//div[text()="Size of tube"]', locateStrategy: 'xpath'},
    tubeOp0: {selector: '//div[contains(@data-id,"0")]', locateStrategy: 'xpath'},
    tubeOp1: {selector: '//div[contains(@data-id,"1")]', locateStrategy: 'xpath'},
    tubeOp2: {selector: '//div[contains(@data-id,"2")]', locateStrategy: 'xpath'},
    tubeOp3: {selector: '//div[contains(@data-id,"3")]', locateStrategy: 'xpath'},
//Tube Color
    tubeColor1: {selector: '//div[contains(@class,"colorName")])[text()="matte Black"]', locateStrategy: 'xpath'},
    tubeColor2: {selector: '//div[contains(@class,"colorName")])[text()="clear"]', locateStrategy: 'xpath'},
//Coolant Color
    coolantColor: {selector: '//div[text()="Color of coolant"]', locateStrategy: 'xpath'},
    cloudWhite: {selector: '(//div[contains(@class,"colorName")])[text()="cloud White"]', locateStrategy: 'xpath'},
    scarletRed: {selector: '(//div[contains(@class,"colorName")])[text()="scarlet Red"]', locateStrategy: 'xpath'},
    fireOrange: {selector: '(//div[contains(@class,"colorName")])[text()="fire Orange"]', locateStrategy: 'xpath'},
    lagunaYellow: {selector: '(//div[contains(@class,"colorName")])[text()="laguna Yellow"]', locateStrategy: 'xpath'},
    neonGreen: {selector: '(//div[contains(@class,"colorName")])[text()="neon green"]', locateStrategy: 'xpath'},
    azureBlue: {selector: '(//div[contains(@class,"colorName")])[text()="azure blue"]', locateStrategy: 'xpath'},
    electricPurple: {selector: '(//div[contains(@class,"colorName")])[text()="electric purple"]', locateStrategy: 'xpath'},
    clearColor: {selector: '(//div[contains(@class,"colorName")])[text()="clear"]', locateStrategy: 'xpath'},
    bloodRed: {selector: '(//div[contains(@class,"colorName")])[text()="blood Red"]', locateStrategy: 'xpath'},
    amberOrange: {selector: '(//div[contains(@class,"colorName")])[text()="amber Orange"]', locateStrategy: 'xpath'},
    limeYellow: {selector: '(//div[contains(@class,"colorName")])[text()="lime Yellow"]', locateStrategy: 'xpath'},
    acidGreen: {selector: '(//div[contains(@class,"colorName")])[text()="acid Green"]', locateStrategy: 'xpath'},
    navyBlue: {selector: '(//div[contains(@class,"colorName")])[text()="navy Blue"]', locateStrategy: 'xpath'},
    indigoViolet: {selector: '(//div[contains(@class,"colorName")])[text()="indigo Violet"]', locateStrategy: 'xpath'},
    powerPink: {selector: '(//div[contains(@class,"colorName")])[text()="power Pink"]', locateStrategy: 'xpath'}, 
//Fittings Color
    fittingColor: {selector: '//div[text()="Color of fittings"]', locateStrategy: 'xpath'},
    fittingBlack: {selector: '(//div[contains(@class,"colorName")])[text()="black"]', locateStrategy: 'xpath'}, 
    fittingBlackNickel: {selector: '(//div[contains(@class,"colorName")])[text()="black Nickel"]', locateStrategy: 'xpath'},
    fittingWalnut: {selector: '(//div[contains(@class,"colorName")])[text()="walnut"]', locateStrategy: 'xpath'},  
    fittingNickel: {selector: '(//div[contains(@class,"colorName")])[text()="nickel"]', locateStrategy: 'xpath'}, 
    fittingSatinTitanium: {selector: '(//div[contains(@class,"colorName")])[text()="satin Titanium"]', locateStrategy: 'xpath'}, 
//Block Top Material
    blockMaterial: {selector: '//div[text()="Block top material choice"]', locateStrategy: 'xpath'},
    blockClear: {selector: '(//div[contains(@class,"colorName")])[text()="plexi - clear"]', locateStrategy: 'xpath'},
    blockBlack: {selector: '(//div[contains(@class,"colorName")])[text()="acetal - black"]', locateStrategy: 'xpath'},
    blockNickel: {selector: '(//div[contains(@class,"colorName")])[text()="nickel Plating - nickel"]', locateStrategy: 'xpath'},
//Base Finish
    baseFinish: {selector: '//div[text()="Copper base finish choice"]', locateStrategy: 'xpath'},
    blockBaseNickel: {selector: '(//div[contains(@class,"colorName")])[text()="nickel - Plating"]', locateStrategy: 'xpath'},
    blockBaseCopper: {selector: '(//div[contains(@class,"colorName")])[text()="bare Copper"]', locateStrategy: 'xpath'},

// Resevoir type Checkbox
    resComboCheck: {selector: '(//div[contains(@class,"cboxWrap")])[1]', locateStrategy: 'xpath'},
    resSepCheck: {selector: '(//div[contains(@class,"cboxWrap")])[2]', locateStrategy: 'xpath'},

//Verification Elements


//Hardware
    caseVerify: {selector: '//*[@id="step9form"]/div[1]/div[2]/div[1]/div[1]/div/div[2]/div[2]/div[1]', locateStrategy: 'xpath'},
    mbVerify: {selector: '//*[@id="step9form"]/div[1]/div[2]/div[1]/div[1]/div/div[2]/div[2]/div[2]', locateStrategy: 'xpath'},
    gpuVerify: {selector: '//*[@id="step9form"]/div[1]/div[2]/div[1]/div[1]/div/div[2]/div[2]/div[3]', locateStrategy: 'xpath'},
    gpu2Verify: {selector: '//*[@id="step9form"]/div[1]/div[2]/div[1]/div[1]/div/div[2]/div[2]/div[4]', locateStrategy: 'xpath'},
    gpu3Verify: {selector: '//*[@id="step9form"]/div[1]/div[2]/div[1]/div[1]/div/div[2]/div[2]/div[5]', locateStrategy: 'xpath'},
    ramVerify: {selector: '//*[@id="step9form"]/div[1]/div[2]/div[1]/div[1]/div/div[2]/div[2]/div[4]', locateStrategy: 'xpath'},
//Components you wish to cool
    compVerify: {selector: '//*[@id="step9form"]/div[1]/div[2]/div[1]/div[2]/div/div[2]/div[2]/div', locateStrategy: 'xpath'},
//Reason for liquid Cooling
    choiceVerify: {selector: '//*[@id="step9form"]/div[1]/div[2]/div[1]/div[3]/div/div[2]/div[2]/div[1]', locateStrategy: 'xpath'},
//RGB selection
    rgbVerify: {selector: '//*[@id="step9form"]/div[1]/div[2]/div[1]/div[3]/div/div[2]/div[4]/div', locateStrategy: 'xpath'},
//Desired tube hardness
    tubeVerify: {selector: '//*[@id="step9form"]/div[1]/div[2]/div[1]/div[4]/div/div[2]/div[2]/div', locateStrategy: 'xpath'},
//Personalize your custom Loop
    tubeSizeVerify: {selector: '//*[@id="step9form"]/div[1]/div[2]/div[2]/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[2]', locateStrategy: 'xpath'},
    tubeColorVerify: {selector: '//*[@id="step9form"]/div[1]/div[2]/div[2]/div[1]/div/div[2]/div[2]/div[2]/div[2]/div[2]', locateStrategy: 'xpath'},
    coolantVerify: {selector: '//*[@id="step9form"]/div[1]/div[2]/div[2]/div[1]/div/div[2]/div[2]/div[3]/div[2]/div[2]', locateStrategy: 'xpath'},
    fittingVerify: {selector: '//*[@id="step9form"]/div[1]/div[2]/div[2]/div[1]/div/div[2]/div[2]/div[4]/div[2]/div[2]', locateStrategy: 'xpath'},
    blockVerify: {selector: '//*[@id="step9form"]/div[1]/div[2]/div[2]/div[1]/div/div[2]/div[2]/div[5]/div[2]/div[2]', locateStrategy: 'xpath'},
    baseVerify: {selector: '//*[@id="step9form"]/div[1]/div[2]/div[2]/div[1]/div/div[2]/div[2]/div[6]/div[2]/div[2]', locateStrategy: 'xpath'},  
//pump res config
    pumpResVerify: {selector: '//*[@id="step9form"]/div[1]/div[2]/div[2]/div[3]/div/div[2]/div[2]/div[1]', locateStrategy: 'xpath'},
    //Expert Mode
    expertMode: {selector: '//div[text()="Expert Mode"]', locateStrategy: 'xpath'},
        }
    }

