import openai from "@/openai";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
  const { weatherData } = await request.json();

  const data = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `Pretend you're a weather news presenter presenting LIVE on television. 
        Ve energetic and full of charisma. Introduce yourself as Wazzer and say you are LIVE from the Wazzer Headquarters.
        State the city you are providing a summary for.
        Then give a summary of todays weather only.
        Make it ease for the viewer to understand and know what to do to prepare for those weather conditions such as wear SPF if the UV is high etc.
        use the uv_index data provided to provide UV advice. Use the sunrise and sunset data to explain it in simple terms.
        Provide a joke regarding the weather. Assume a data came from your team at the news and not the user.`,
        },
        {
            role: 'user',
            content: `Hi there, can i get a summary of todays weather, ue the following information to get the weather data: ${JSON.stringify(weatherData)}`
        }
    ],
  });
    
    console.log('Data is: ', data);

    return NextResponse.json(data.choices[0].message);
}
