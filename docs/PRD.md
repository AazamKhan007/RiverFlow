# Product Requirements Document (PRD) — RiverFlow

## 1. Project summary
RiverFlow is a modern Q&A platform (StackOverflow-like) built with Next.js, TypeScript and Appwrite to let developers ask/answer questions, vote, comment and build reputation.

## 2. Goals & success metrics
- Goal: Enable a minimal, responsive Q&A web app with auth, questions, answers, votes, comments.
- Success metrics:
  - Signups/login working (end-to-end)
  - Create/answer questions: 80% of core flows covered in tests
  - <50 ms client-side navigation for main pages
  - Accessibility score >= 90 (Lighthouse)

## 3. Key features (MVP)
1. Authentication (signup/login/logout) — Appwrite
2. Ask question (title, body, tags, markdown)
3. Answer question (markdown), comments
4. Voting (upvote/downvote)
5. User profile & reputation
6. Search & filtering by tags
7. Responsive UI + dark mode

## 4. User personas
- New Developer: wants to ask simple questions and get answers fast.
- Experienced Dev: answers, upvotes, moderate tags.
- Maintainer: reviews reports, manages content.

## 5. User stories (examples)
- As a visitor I can view latest questions without login.
- As a signed-up user I can post a question.
- As a user I can upvote answers.

## 6. Acceptance criteria
- Signup -> immediate redirect to dashboard with user data loaded.
- Posting a question shows it in “Latest Questions” within 5s.
- Voting updates UI and persists in Appwrite.

## 7. Technical considerations & constraints
- Backend: Appwrite cloud, env via `.env.local`.
- Client: Next.js 14 (App Router) + shadcn/ui + Tailwind.
- Must provide `.env.sample` and README setup steps (already present).

## 8. TODO / Nice-to-have (future)
- Email notifications, Tags auto-suggest, Moderation queue, Rate limiting.

