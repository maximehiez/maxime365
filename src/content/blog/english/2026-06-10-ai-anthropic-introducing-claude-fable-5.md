---
title: "Anthropic launches Claude Fable 5 and Claude Mythos 5"
meta_title: ""
description: ""
date: 2026-06-10T10:00:00-05:00
image: "/images/blog/ai/ai_anthropic_introducing_claude_fable_5_thumbnail.png"
categories: ["Anthropic"]
author: "Maxime Hiez"
tags: ["AI", "Claude", "API"]
draft: false
---
---

##### Introduction
*Anthropic* announces the launch of *Claude Fable 5* and *Claude Mythos 5*, two models built on the same foundation, with capabilities surpassing those of any previously released model. Fable 5 is generally available, while Mythos 5 remains restricted to a limited circle of authorized partners.

---

##### Two models, one shared foundation
Claude Fable 5 and Claude Mythos 5 share the same underlying model, referred to as *Mythos-class* by Anthropic.

- <u>Claude Fable 5</u> : Generally available variant with active safety mechanisms. Available via the *API* and Claude subscriptions.
- <u>Claude Mythos 5</u> : Same underlying model with certain restrictions lifted in specific domains. Initially deployed via *Project Glasswing* for cybersecurity professionals and infrastructure providers. Access remains limited to trusted partners authorized by Anthropic.

This distinction marks an evolution in Anthropic's approach : offering a state-of-the-art model to the general public while providing a partially unrestricted version to qualified professionals.

---

##### Capabilities
Fable 5 achieves state-of-the-art performance on nearly all tested benchmarks. Key areas highlighted by Anthropic include :
- Software engineering : Reduction of months of work to days, according to partner feedback.
- Knowledge work : Financial analysis, complex reasoning across long contexts spanning millions of tokens with persistent memory.
- Vision : Data extraction from scientific figures, source code reconstruction from screenshots ; completion of *Pokémon FireRed* in vision-only mode, where previous models required complex auxiliary tools.
- Scientific research : Tenfold acceleration in drug design and protein research ; 9 out of 14 protein targets yielding strong drug candidates ; first Claude model preferred in 80% of cases in blinded comparisons against Opus-class models for molecular biology hypothesis generation.

---

##### Benchmarks
Fable 5 sets new records across several reference evaluations :
- <u>FrontierCode (Cognition)</u> : Highest score among frontier models, including at medium effort levels.
- <u>FrontierBench</u> : Highest score for frontier coding evaluation.
- <u>Hebbia Finance Benchmark</u> : Highest score for senior-level analytical reasoning.
- <u>Analytics (Bloomberg)</u> : First model to exceed 90% on their core analytics benchmark, a 10-point jump over *Opus*.
- <u>Frontier physics</u> : Results comparable to *GPT-5.5* using one third of the reasoning tokens.

![image](/images/blog/ai/ai_anthropic_introducing_claude_fable_5_001.png)

---

##### Customer testimonials
Several partners shared their experience with Fable 5 :
- <u>Cursor</u> : Describes Fable 5 as *"state of the art"* and reports access to categories of problems previously out of reach.
- <u>GitHub</u> : States that Fable 5 *"exceeded previous benchmarks"* on autonomous coding tasks.
- <u>Stripe</u> : Highlights the ability to complete full codebase migrations in a single day rather than months.
- <u>Bloomberg</u> : Notes strong performance on frontier physics research with reduced token consumption.

---

##### Safety mechanisms
Fable 5 includes classifiers that automatically redirect requests to *Claude Opus 4.8* when they relate to :
- Offensive cybersecurity : Requests related to hacking or system exploitation.
- Dual-use biology and chemistry : Requests posing risks in sensitive biological research, including viral design, AAV engineering, or dangerous pathogen creation.
- Distillation : Attempts to extract model capabilities to train competing models.

These safeguards activate in fewer than 5% of sessions on average. Adversarial testing using 30 different jailbreak techniques conducted by external teams revealed no successful attacks.

Anthropic also applies a structured data retention policy for business customers : mandatory 30-day retention, no use for model training beyond safety purposes, logged human data access with strict deletion protocols.

Regarding Mythos 5, automated alignment testing reveals a level of misaligned behavior comparable to *Claude Opus 4.8*.

---

##### Pricing
*Claude Fable 5* is available at :
- <u>Input</u> : 10$ / 1M tokens
- <u>Output</u> : 50$ / 1M tokens

This price represents less than half the cost of *Claude Mythos Preview*, the previous version available to partners.

---

##### Availability
- <u>Claude Fable 5</u> : Available worldwide since June 9, 2026 via the Anthropic API and consumption-based plans. The rollout to Claude subscriptions occurs in phases through June 22, after which a usage credit model applies.
- <u>Claude Mythos 5</u> : Access restricted to authorized partners under *Project Glasswing*. A dedicated trusted access program for biology research is also launching for selected researchers.

---

##### Conclusion
With Fable 5, Anthropic offers the general public a model from its Mythos-class lineup for the first time, a tier previously reserved for restricted circles. The distinction between the two variants illustrates a phased deployment strategy that exposes the model's maximum capabilities while maintaining robust safeguards for general use.

---

##### Sources
[Anthropic - Claude Fable 5](https://www.anthropic.com/news/claude-fable-5-mythos-5)

[Chat with Claude Fable 5](https://claude.ai)

[Anthropic - Project Glasswing](https://www.anthropic.com/glasswing)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.