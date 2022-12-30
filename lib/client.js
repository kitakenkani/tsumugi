import { createClient } from "microcms-js-sdk"

export const client = createClient({
    serviceDomain:"g6f58cwbb6",
    apiKey: process.env.API_KEY
})