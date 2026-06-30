# 🚀 Community Radar

> Built while learning Mastra. Broke it twice. Got it working. Learned a lot.

Community Radar is a tiny AI agent that scans community conversations, finds the actual wins hidden between all the noise, and turns them into a clean summary + a ready-to-post tweet.

Because let's be honest...

Someone ships a side project at 9:00 AM.

Someone lands their first open-source PR at 9:15 AM.

Someone deploys their first production app at 9:30 AM.

And by 10:00 AM the chat is discussing React state management and weekend plans. 😭

Community Radar helps surface the moments that matter.

---

## ✨ What It Does

### Input

A messy community chat:

<img width="1638" height="927" alt="Screenshot 2026-06-30 121810" src="https://github.com/user-attachments/assets/d64bad70-d9d6-4230-86dc-22a622cfda96" />

###WorkFlow : - 
<img width="1833" height="853" alt="Screenshot 2026-06-30 130925" src="https://github.com/user-attachments/assets/ab854d4a-aa10-4c1b-b072-704e944582ed" />

<img width="762" height="336" alt="Screenshot 2026-06-30 130938" src="https://github.com/user-attachments/assets/3e36b812-f8a1-4a1f-a458-9c5e91da0a65" />



---

## 🛠 Built With

* Mastra
* TypeScript
* Google Gemini
* Mastra Workflows
* Mastra Studio

---

## 🧠 Why I Built This

I wanted to learn Mastra by actually building something instead of reading docs for hours.

So I picked a simple idea:

**Find builder wins in community chats and turn them into shareable content.**

Small project.

Real use case.

Perfect excuse to learn agents and workflows.

---

## ⚙️ How It Works

```text
Community Chat
       ↓
Community Radar Agent
       ↓
Extract Builder Wins
       ↓
Generate Summary
       ↓
Generate Tweet
```

The workflow is intentionally simple:

1. Receive chat messages
2. Pass them to the agent
3. Identify meaningful achievements
4. Generate a summary
5. Draft a tweet

---

## 📂 Project Structure

```bash
src/
└── mastra/
    ├── agents/
    │   ├── weather-agent.ts
    │   └── community-radar-agent.ts
    │
    ├── workflows/
    │   ├── weather-workflow.ts
    │   └── community-radar-workflow.ts
    │
    └── index.ts
```

---

## 🚀 Running Locally

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key
```

Start the development server:

```bash
npm run dev
```

Open Mastra Studio:

```text
http://localhost:4111
```

---


Most importantly:

**Build first. Figure things out later.**

I learned more from one broken workflow than I would've from an hour of reading docs.


## 💛 Acknowledgements

Big shoutout to the team behind Mastra for building a TypeScript-first framework that made this project surprisingly fun to build.

---

Built with curiosity, caffeine, and a questionable amount of debugging.

— Khushiii 🌸
