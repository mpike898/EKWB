

module.exports = (page,moboOp,cpuOp,gpuOp,gpuNum,ramOp) => {
    page
        .waitForElementVisible('@cookieBtn')
        .click('@cookieBtn')  
        .waitForElementVisible('@chasisInput')
        .setValue('@chasisInput','ASUS')
        //.pause(1000)
        .waitForElementVisible('@chasisSelect')
        .click('@chasisSelect')
        .click('@moboInput')
        //.pause(2000)
        .waitForElementVisible('#mbRadio')
        if(moboOp==='@monoRadio'){
            page
            .setValue('@moboInput','asus crosshair')
            .waitForElementVisible('@moboSelect')
            .click('@moboSelect')
        }
        else{
            page
            .click('#mbRadio')
            .pause(2000)
        }
        page
        .setValue('@cpuInput',cpuOp)
        if(cpuOp==='intel'){
            page
            .waitForElementVisible('@cpuSelectIntel')
            .click('@cpuSelectIntel')
        }
        else{
            page
            .waitForElementVisible('@cpuSelectAmd')
            .click('@cpuSelectAmd')
            //.pause(2000)
        }
        page
        .click('@gpuInput')
        if(gpuOp==='@noGpuRadio'){
            page
            .setValue('@gpuInput','asus')
            .waitForElementVisible('@gpuSelect')
            .click('@gpuSelect')
            if(gpuNum==='2'){
                page
                .waitForElementVisible('@addGpu')
                .click('@addGpu')
            }
            else if(gpuNum==='3'){
                page
                .waitForElementVisible('@addGpu')
                .click('@addGpu')
                //.pause(2000)
                .click('@addGpu')
                //.pause(2000)

            }
            }
        else{
            page
            .click('#gpuRadio')
            //.pause(2000)
            if(gpuNum==='2'){
                page
                .waitForElementVisible('@addGpu')
                .click('@addGpu')
            }
            else if(gpuNum==='3'){
                page
                .waitForElementVisible('@addGpu')
                .click('@addGpu')
                .pause(2000)
                .click('@addGpu')
                .pause(2000)

            }
        }
        page
        .click('@ramDrop')
        if(ramOp==='@ramOp0'){
            page
            .waitForElementVisible('@ramOp0')
            .click('@ramOp0')
            }
        else if(ramOp==='@ramOp2'){
            page
            .waitForElementVisible('@ramOp2')
            .click('@ramOp2')
            
        }
        else{
            page
            .waitForElementVisible('@ramOp4')
            .click('@ramOp4')
        }
        page
        .waitForElementVisible('@nextBtn')
        .click('@nextBtn')
        .waitForElementVisible('@prevBtn')
        


}
