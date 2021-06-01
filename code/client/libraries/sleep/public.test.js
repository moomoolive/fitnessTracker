const { sleep } = require("./public")

describe("Sleep function", () => {
    global.window = { setTimeout: global.setTimeout }
    
    it('returns after predicted time', async () => {
        const milliseconds = 2_000
        let time = false
        expect(time).toBe(false)
        global.setTimeout(() => { expect(time).toBe(true) }, milliseconds + 100)
        time = await sleep(milliseconds)
    })
})