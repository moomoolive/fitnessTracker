import axios from 'axios'

import { testRequestReturn } from "./interfaces"

async function testRequest(): Promise<testRequestReturn> {
    const errorRes: testRequestReturn = { name: "random" }
    try {
        const res = await axios.get("http://localhost:8080/")
        if (!res || !res.data || typeof res.data.name !== "string") {
            return errorRes
        } else {
            return res.data
        }
    } catch {
        return errorRes
    }
}


export default {
    testRequest
}