---
title: "Anthropic releases Claude Opus 4.8"
meta_title: ""
description: ""
date: 2026-05-28T10:00:00-05:00
image: "/images/blog/ai/ai_anthropic_introducing_claude_opus_4_8_thumbnail.png"
categories: ["Anthropic"]
author: "Maxime Hiez"
tags: ["AI", "Claude", "API", "Agentic"]
draft: false
---
---

##### Introduction
*Anthropic* made *Claude Opus 4.8* generally available on May 28, 2026, as the direct successor to *Claude Opus 4.7*. Pricing remains unchanged at 5$ / 1M input tokens and 25$ / 1M output tokens, but the release adds several agentic features and a *Fast* mode finally available on the Opus line. The main improvement announced concerns model honesty, which now flags errors in its own generated code four times more often.

Check the Claude Opus 4.7 article [HERE](https://maxime.hiez.ca/en/blog/2026-05-12-ai-anthropic-introducing-claude-opus-4-7).

---

##### What changed from Opus 4.7 ?
The most significant improvement in Opus 4.8 is behavioral. The model is approximately four times less likely than Opus 4.7 to let errors in self-written code pass unremarked. In agentic workflows, where silent errors propagate across multiple steps, this gain is directly observable.

On the alignment front, Opus 4.8 reaches new highs on measures of prosocial traits, with a rate of misaligned behavior substantially lower than Opus 4.7, according to the system card published by Anthropic.

![image](/images/blog/ai/ai_anthropic_introducing_claude_opus_4_8_001.png)

---

##### New agentic features
Three new capabilities accompany the model :
- <u>Dynamic Workflows</u> : Available as a research preview in *Claude Code*, this mode orchestrates hundreds of parallel subagents for large-scale tasks, such as migrating entire codebases.
- <u>Effort control</u> : On *claude.ai* and *Cowork*, the user selects the depth of reasoning applied to each response, from light to intensive.
- <u>System messages mid-task</u> : Via the *API*, it is now possible to inject system entries mid-conversation without interrupting prompt caching.

---

##### Benchmarks
One figure appears in the official announcement for direct comparison with Opus 4.7.

|                  | Opus 4.8 | Opus 4.7 | Delta    |
|------------------|---------:|---------:|---------:|
| OSWorld-Verified | 82.3%    | 78.0%    | +4.3 pts |

The system card contains a broader set of evaluations covering coding tasks, reasoning, and practical knowledge work, without an aggregated table in the launch announcement.

---

##### Pricing
The base price remains identical to Opus 4.7 ; 5$ / 1M input tokens and 25$ / 1M output tokens. The notable change is the arrival of Fast mode, absent from Opus 4.7. It is available at 10$ / 1M input tokens and 50$ / 1M output tokens, three times cheaper than the previous Fast mode reserved for Opus 4.6 (30$ / 150$ per 1M tokens). The model is accessible via the identifier *claude-opus-4-8* in the Anthropic API.

---

##### Conclusion
Claude Opus 4.8 builds on Opus 4.7 by adding measurable honesty gains, experimental agentic features, and a now cost-competitive fast mode. Migration from Opus 4.7 is less risky than the 4.6 to 4.7 transition, as there is no tokenizer change or documented behavioral break. For teams running agentic workflows on the Anthropic API, the arrival of Fast mode at 10$ / 1M tokens is the most concrete change to evaluate.

---

##### Sources
[Anthropic - Claude Opus 4.8](https://www.anthropic.com/news/claude-opus-4-8)

[Chat with Claude Opus 4.8](https://claude.ai)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.