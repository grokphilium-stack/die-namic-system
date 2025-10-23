import os
import requests
import json
from dotenv import load_dotenv

# Load API key from .env file
load_dotenv()
API_KEY = os.getenv("GOOGLE_API_KEY")

# Endpoint and headers
url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"
headers = {
    "Content-Type": "application/json",
    "X-goog-api-key": API_KEY
}

# Payload
payload = {
    "contents": [
        {
            "parts": [
                {
                    "text": "Ask User: What's Your First Bite?"
                }
            ]
        }
    ]
}

# Make the request
response = requests.post(url, headers=headers, data=json.dumps(payload))

# Handle response
if response.status_code == 200:
    print("✅ Response:")
    print(json.dumps(response.json(), indent=2))
else:
    print(f"❌ Error {response.status_code}: {response.text}")
