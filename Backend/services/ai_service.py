import os
from pathlib import Path

from dotenv import load_dotenv
from groq import Groq

# Load .env
env_path = Path(__file__).resolve().parent.parent / ".env"
load_dotenv(dotenv_path=env_path)

api_key = os.getenv("GROQ_API_KEY")

if not api_key:
    raise ValueError("GROQ_API_KEY not found in .env")

client = Groq(api_key=api_key)


def get_ai_response(user_message: str) -> str:
    prompt = f"""
You are an AI College Guidance Assistant.

Help students with:
- College recommendations
- Admissions
- Placements
- Scholarships
- Courses
- Career guidance

User Question:
{user_message}
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": "You are an expert AI College Guidance Assistant.",
            },
            {
                "role": "user",
                "content": prompt,
            },
        ],
        temperature=0.7,
        max_tokens=1024,
    )

    return response.choices[0].message.content