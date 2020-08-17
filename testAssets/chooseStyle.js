let tubeSizeArray = ['@tubeOp0','@tubeOp1','@tubeOp2','@tubeOp3']
let colorArray = ['@cloudWhite','@scarletRed','@fireOrange','@lagunaYellow','@neonGreen','@azureBlue','@electricPurple','@clearColor','@bloodRed','@amberOrange','@limeYellow','@acidGreen','@navyBlue','@indigoViolet','@powerPink']
let fittingColorArray = ['@fittingBlack','@fittingBlackNickel','@fittingWalnut','@fittingNickel','@fittingSatinTitanium']
let blockMatArray = ['@blockClear','@blockBlack','@blockNickel']
let baseFinishArray = ['@blockBaseNickel','@blockBaseCopper']
var i  

module.exports = (page,tubeSize,coolColor,fittingColor,blockMat,baseFinish) => {
    page
        .waitForElementVisible('@styleTitle')
        .click('@tubeSize')
        //.pause(1000)
for(i=0; i<4; i++){

    if(tubeSize===tubeSizeArray[i]){
        page
        .waitForElementVisible(tubeSizeArray[i])
        .click(tubeSizeArray[i])
    }
}
    page
        .click('@coolantColor')
        //.pause(1000)
for(i=0; i<16; i++){

    if(coolColor===colorArray[i]){
        page
        .waitForElementVisible(colorArray[i])
        .click(colorArray[i])
    }
}
    page
        .click('@fittingColor')
        //.pause(1000)
for(i=0; i<5; i++){

    if(fittingColor===fittingColorArray[i]){
        page
        .waitForElementVisible(fittingColorArray[i])
        .click(fittingColorArray[i])
    }
}
    page
        .click('@blockMaterial')
        //.pause(1000)
for(i=0; i<3; i++){

    if(blockMat===blockMatArray[i]){
        page
        .waitForElementVisible(blockMatArray[i])
        .click(blockMatArray[i])
    }
}
    page
        .click('@baseFinish')
        //.pause(1000)
for(i=0; i<2; i++){

    if(baseFinish===baseFinishArray[i]){
        page
        .waitForElementVisible(baseFinishArray[i])
        .click(baseFinishArray[i])
    }
}
    page
        //.pause(1000)
        .click('@nextBtn')
}
