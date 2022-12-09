module.exports = async function (second = 0) {
    return new Promise(resolve => {
        const sleepTime = Math.round(second * 1000);
        setTimeout(() => resolve(true), sleepTime);
    })
};