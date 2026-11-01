# Project memory

## Product intent & audience

- Project uses Next.js framework
- User communicates in Hindi (Romanized/Hinglish); prefers conversational, direct responses
- User expects to request changes conversationally; assistant implements them in the Bolt environment

## Brand personality & voice

- Respond in Hinglish (Romanized Hindi) to match user's communication style
- Tone: helpful, direct, no jargon overload
- Be upfront about what can/cannot be done (e.g., can't push directly to GitHub from Bolt)

## Visual design & UX direction

- Not yet inferred — awaiting user's specific change requests

## Decisions, constraints & rationale

- Changes are made within Bolt project files, not directly on GitHub
- Bolt has its own deployment system; GitHub push requires separate setup
- Next.js is the chosen framework

## Open questions & assumptions

- What specific changes does the user want to make?
- Is there an existing codebase or is this a fresh project?
- Will GitHub integration be needed later?