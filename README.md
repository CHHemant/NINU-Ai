# Ninu AI Assistant

Ninu is your personal AI assistant project, featuring a Python backend (Flask, OpenAI) and a Node.js CLI frontend. This assistant can answer questions, provide smart responses, and can be extended to include voice interaction, smart home integration, and more. The project is modular and easy to set up, making it ideal for developers and tech enthusiasts who want their own "Jarvis"-like assistant.

---

## Table of Contents

- [Features](#features)
- [How It Works](#how-it-works)
- [Setup Guide](#setup-guide)
  - [Prerequisites](#prerequisites)
  - [Python Backend Setup](#python-backend-setup)
  - [Node.js Frontend Setup](#nodejs-frontend-setup)
- [Usage](#usage)
  - [How to Ask Something](#how-to-ask-something)
  - [Sample Conversation](#sample-conversation)
- [Where It Can Be Used](#where-it-can-be-used)
- [Extending Ninu](#extending-ninu)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Conversational AI**: Ask questions and get intelligent responses using OpenAI.
- **Modular**: Python handles backend logic, Node.js provides an interactive CLI.
- **Customizable**: Expand with speech recognition, personal reminders, web search, smart home, and more.
- **Open Source**: Fully customizable and extendable for personal or educational use.

---

## How It Works

1. **User Interaction**: You type your questions or commands into the Node.js CLI.
2. **Frontend-Backend Communication**: The frontend sends your question to the Python backend via HTTP.
3. **AI Processing**: The backend uses OpenAI’s API to generate a relevant response.
4. **Response Display**: The answer is displayed in your CLI.

You can easily extend this project for voice interaction (speech-to-text/text-to-speech), or even a graphical/web interface.

---

## Setup Guide

### Prerequisites

- [Python 3.7+](https://www.python.org/downloads/)
- [Node.js (v16+ recommended)](https://nodejs.org/)
- [OpenAI API Key](https://platform.openai.com/account/api-keys)

### Python Backend Setup

```bash
cd python-backend
python -m venv venv
source venv/bin/activate # On Windows: venv\Scripts\activate
pip install -r requirements.txt
# In ninu.py, set openai.api_key = "YOUR_OPENAI_KEY"
python ninu.py
```

### Node.js Frontend Setup

```bash
cd node-frontend
npm install
node index.js
```

---

## Usage

- **Start the Python backend first**, then run the Node.js frontend.
- When prompted, type your question. For example:
  ```
  > Who is Albert Einstein?
  Ninu: Albert Einstein was a theoretical physicist, best known for his theory of relativity...
  ```
- Type `exit` to quit the program.

### How to Ask Something

- Just type your question or command in natural language:
  - "What is the weather today?"
  - "Tell me a joke."
  - "How do I set up a virtual environment in Python?"

Ninu will process your question and provide a relevant answer.

### Sample Conversation

```
Welcome to Ninu AI! Type your question:
> What is the capital of France?
Ninu: The capital of France is Paris.

> Tell me about the Python programming language.
Ninu: Python is a high-level, interpreted programming language known for its readability and versatility.

> exit
```

---

## Where It Can Be Used

- As a **personal knowledge assistant** on your computer.
- As a **learning project** for AI, Python, Node.js, and API integration.
- For **automation tasks** (with extensions).
- For **voice-controlled applications** (with speech modules).
- As a **foundation for smart home assistants**.
- As a **backend for web/mobile AI apps**.

---

## Extending Ninu

Some ideas to expand your assistant:

- **Speech Recognition**: Use libraries like `SpeechRecognition` (Python) and `pyttsx3` for voice input/output.
- **Smart Home Integration**: Add modules to control IoT devices (lights, thermostat, etc).
- **APIs**: Add modules for weather, news, calendar, reminders, or home automation.
- **GUI/Web App**: Build a web frontend using React, Vue, or Electron.
- **Memory/Personalization**: Add user profiles or memory of previous conversations.

---

## Troubleshooting

- **Backend not responding**: Ensure Python backend is running and not blocked by firewall.
- **OpenAI errors**: Check if your API key is valid and you have internet access.
- **Port conflicts**: By default, the backend runs on port 5000. Change it in `ninu.py` if needed.
- **Module not found**: Make sure all dependencies are installed using pip/npm.

---

## Contributing

Feel free to fork, customize, and enhance the project! Pull requests and issues are welcome.

---

## License

MIT License

---

**Enjoy building and using your own AI assistant, Ninu!**
