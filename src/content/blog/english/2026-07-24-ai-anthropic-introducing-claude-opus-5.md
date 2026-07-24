---
title: "Anthropic releases Claude Opus 5"
meta_title: ""
description: ""
date: 2026-07-24T10:00:00-05:00
image: "/images/blog/ai/ai_anthropic_introducing_claude_opus_5_thumbnail.png"
categories: ["Anthropic"]
author: "Maxime Hiez"
tags: ["AI", "Claude", "API", "Agentic"]
draft: false
---
---

##### Introduction
*Anthropic* made *Claude Opus 5* generally available on July 24, 2026, as the successor to *Claude Opus 4.8*. Pricing remains unchanged at 5$ / 1M input tokens and 25$ / 1M output tokens, but the model aims to rival *Claude Fable 5*, Anthropic's frontier model, at half the price. It is the first time a major Opus line upgrade comes with no price increase.

Check the Claude Opus 4.8 article [HERE](https://maxime.hiez.ca/en/blog/2026-05-28-ai-anthropic-introducing-claude-opus-4-8).

---

##### The Claude family in 2026
The Opus 5 announcement is part of a full lineup refresh, with the shift away from sub-version numbering in favour of proper names for the flagship models. The current hierarchy has five tiers :
- <u>Claude Mythos 5</u> : Invitation-only model dedicated to defensive cybersecurity under the *Glasswing* project. Priced at 10$ / 50$ per 1M tokens.
- <u>Claude Fable 5</u> : Most powerful model in general access, identifier *claude-fable-5*. Priced at 10$ / 50$ per 1M tokens.
- <u>Claude Opus 5</u> : Designed for complex agentic tasks and enterprise work, identifier *claude-opus-5*. Priced at 5$ / 25$ per 1M tokens.
- <u>Claude Sonnet 5</u> : Best balance of speed and intelligence, identifier *claude-sonnet-5*. Priced at 3$ / 15$ per 1M tokens (promotional rate of 2$ / 10$ until August 31, 2026).
- <u>Claude Haiku 4.5</u> : Fastest in the lineup, identifier *claude-haiku-4-5-20251001*. Priced at 1$ / 5$ per 1M tokens.

---

##### What's new with Claude Opus 5
The most structural change is the introduction of native *Adaptive thinking*. Unlike Claude Fable 5, which reasons intensively at all times, Opus 5 scales its reasoning effort to the complexity of the task. The *effort* parameter defaults to *high* in the *API* and in *Claude Code* ; teams can adjust it explicitly to control the speed versus depth trade-off.

Two additional improvements are highlighted by Anthropic :
- Enhanced self-verification : The model iterates on its own outputs more systematically, reducing silent errors in multi-step agentic workflows.
- Visual outputs : Opus 5 can generate visual content as part of its responses, a capability absent from Opus 4.8.

The training data cutoff is set to May 2026, which is more recent than Claude Fable 5 and *Claude Sonnet 5* (January 2026 for both).

![image](/images/blog/ai/ai_anthropic_introducing_claude_opus_5_001.png)

---

##### Benchmarks
Anthropic cites several proprietary or partner benchmarks to position Opus 5. No results on classic academic evaluations (*MMLU*, *GPQA*, *SWE-bench*, *HumanEval*) are published in the launch announcement :
- <u>CursorBench 3.2</u> : Results within 0.5% of Fable 5 at half the cost.
- <u>ARC-AGI 3</u> : Score three times higher than the next-best competing model.
- <u>Zapier AutomationBench</u> : Pass rate approximately 1.5 times higher than the next model.
- <u>OSWorld 2.0</u> : Surpasses Fable 5 on computer use tasks at approximately one-third of the cost.
<br/><br/>

On scientific domains, two specific gains are indicated compared to Opus 4.8 :

|                    | Delta vs Opus 4.8 |
|--------------------|------------------:|
| Organic chemistry  | +10.2 pts         |
| Protein prediction | +7.7 pts          |
<br/><br/>

Three launch partners have shared their experience :
- <u>Devin</u> : Qualifies Claude Opus 5 *"as approaching Fable-level performance at half the cost"*.
- <u>Cursor</u> : Describes Claude Opus 5 as offering *"near Fable 5 intelligence at Opus speed and cost"*.
- <u>Zapier</u> : Reports that Opus 5 *"hit 100% on full automation workflows"*, where previous models failed.

---

##### Pricing and availability
The base price of Opus 5 is identical to Opus 4.8 : 5$ / 1M input tokens and 25$ / 1M output tokens. A *Fast* mode is available as a research preview at 10$ / 50$ per 1M tokens, for a speed gain of approximately 2.5 times. This mode is only accessible via the direct Anthropic API and is not yet available on third-party platforms. The *Batch API* offers a 50% discount, at 2.50$ / 12.50$ per 1M tokens. Prompt caching is available at 0.50$ / 1M tokens per cache hit.

The model is accessible under the identifier *claude-opus-5* on the direct Anthropic API, *Google Cloud Vertex AI*, *Claude.ai*, *Claude Code*, and *Claude Cowork*. It is also available on *AWS Bedrock* and *Microsoft Foundry*.

---

##### Conclusion
Claude Opus 5 is the most straightforward upgrade available to teams running Opus 4.8 on the Anthropic API : identical pricing, measurable improvements on agentic and scientific tasks, and adaptive reasoning without permanent overhead. Teams whose workflows do not require the absolute power of Fable 5 now have a rational entry point into the high-end lineup. For use cases demanding the best absolute performance, Fable 5 remains the choice, at the cost of accepting double the price.

---

##### Sources
[Anthropic - Claude Opus 5](https://www.anthropic.com/news/claude-opus-5)

[Chat with Claude Opus 5](https://claude.ai)

[Anthropic - Available models](https://platform.claude.com/docs/en/docs/about-claude/models/overview)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.