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

    // for (let i = 0; i < MAX_ITERATIONS; i++) {
    //     console.log(`Iteration #${i + 1}`)
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-1106",
            messages,
            tools
        })

        console.log(response.choices[0])
        const { finish_reason: finishReason, message } = response.choices[0]
        
        if (finishReason === "stop") {
            console.log(message.content)
            console.log("AGENT ENDING")
            return
        }
        
        /**
         * Challenge:
         * Write the logic for the "tool_calls" finish reason. 
         * Console.log the function response.
         * Notes:
         * - Assume our functions won't ever have any arguments. We'll
         *   update this later
         * - Notice that "tool_calls" is an array, and account for that
         *   when writing your code
         * - Don't worry about pushing any messages to the messages array yet
         */
        
        
        // Check finish_reason
        // if "stop"
            // return the result
        // else if "tool_calls"
            // call functions
            // append results
            // continue
        
    // }
}

await agent("What's the current weather?")

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