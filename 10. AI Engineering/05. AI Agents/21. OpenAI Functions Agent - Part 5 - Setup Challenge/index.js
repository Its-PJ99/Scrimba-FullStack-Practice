import OpenAI from "openai"
import { getCurrentWeather, getLocation, tools } from "./tools"

export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
})

const availableFunctions = {
    getCurrentWeather,
    getLocation
}

async function agent(query) {
    const messages = [
        { role: "system", content: "You are a helpful AI agent. Give highly specific answers based on the information you're provided. Prefer to gather information with the tools provided to you rather than giving basic, generic answers." },
        { role: "user", content: query }
    ]

    const MAX_ITERATIONS = 5

    for (let i = 0; i < MAX_ITERATIONS; i++) {
        console.log(`Iteration #${i + 1}`)
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-1106",
            messages,
            tools
        })

        /**
         * Challenge: 
         * Write the logic for the first part of our loop 
         * (if finish_reason === "stop" condition)
         */
        console.log(response.choices[0])
        
        // Check finish_reason
        // if "stop"
            // return the result
        // else if "tool_calls"
            // call functions
            // append results
            // continue
        
    }
}

await agent("How are you today?")

/**
{
    "index": 0,
    "message": {
        "role": "assistant",
        "content": "As an AI, I don't have feelings, but I'm here to assist you with any questions or tasks you have. How can I help you today?"
    },
    "finish_reason": "stop"
}


{
    "index": 0,
    "message": {
        "role": "assistant",
        "content": null,
        "tool_calls": [
            {
                "id": "call_SDhXnJbvxSWwy1m1R1J43EmQ",
                "type": "function",
                "function": {
                    "name": "getLocation",
                    "arguments": "{}"
                }
            }
        ]
    },
    "finish_reason": "tool_calls"
}
 */