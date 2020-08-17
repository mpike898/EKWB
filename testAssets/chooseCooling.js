

module.exports = (page,coolCpu,coolRam) => {
    page
        .waitForElementVisible('@coolTitle')
        if(coolCpu==='False'){
            page
            .waitForElementVisible('@cpuCheck')
            .click('@cpuCheck')

        }
        if(coolRam==='True'){
            page
            .waitForElementPresent('@ramCheck')
            .click('@ramCheck')

        }
    page
        .click('@nextBtn')
}
