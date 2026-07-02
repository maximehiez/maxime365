---
title: "Mistral OCR 4, an OCR model for document analysis"
meta_title: ""
description: ""
date: 2026-06-25T10:00:00-05:00
image: "/images/blog/ai/ai_mistral_optical_character_recognition_4_thumbnail.png"
categories: ["Mistral AI"]
author: "Maxime Hiez"
tags: ["IA", "OCR", "API"]
draft: false
---
---

##### Introduction
*Mistral AI* announced *Mistral OCR 4* on June 23, 2026, its next-generation optical character recognition model. The model introduces bounding boxes, typed block classification, and confidence scores per word and per page. It supports 170 languages and can be deployed on-premises for environments with strict data privacy requirements.

Check the Mistral OCR 3 article [HERE](https://maxime.hiez.ca/en/blog/2026-01-15-ai-mistral-optical-character-recognition-3).

---

##### What changes with OCR 4
OCR 4 introduces three new capabilities compared to previous versions :
- Bounding boxes : Precise text localization within the document for custom downstream processing.
- Block classification : Automatic identification of each block type, titles, tables, equations, and signatures.
- Confidence scores : Per-page and per-word scores to drive targeted human verification workflows.

Supported formats are *PDF*, *DOC*, *PPT*, and *OpenDocument*. On reference evaluations, OCR 4 sets new records : 85.20 on *OlmOCRBench* and 93.07 on *OmniDocBench*. A human preference evaluation conducted on over 600 documents across 12 languages reveals an average win rate of 72% against competing systems.

![image](/images/blog/ai/ai_mistral_optical_character_recognition_4_001.png)

---

##### Integration modes
OCR 4 is accessible through two approaches :
- Pure extraction : Direct access to bounding boxes, block types, and confidence scores for custom downstream logic.
- Document AI : Adds JSON schema structuring, image annotation, and custom prompts for business use cases without development.

The model is also integrated with the *Mistral Search Toolkit* for structured document search and RAG pipelines.

---

##### Pricing and availability
OCR 4 is available under three pricing models :
- API : 4$ / 1 000 pages
- Batch API : –50% at 2$ / 1 000 pages
- Document AI : 5$ / 1 000 pages

OCR 4 is available via :
- <u>Mistral API and Mistral Studio</u> : Direct access as of June 23, 2026
- <u>Amazon SageMaker</u> : Available on the Marketplace
- <u>Microsoft Foundry</u> : Integration available
- <u>Snowflake</u> : *Parse Document* integration in rollout
- <u>Self-hosting</u> : Option available for environments with data privacy constraints

---

##### Use cases
- Invoices, purchase orders, KYC : Structured extraction with targeted human validation powered by confidence scores and layout preservation.
- Document RAG : Citation-ready, block-structured content to feed precise knowledge bases.
- Agentic workflows : Automated form and invoice processing in end-to-end AI pipelines.
- Enterprise search : Large-scale indexing of complex multilingual documents.

---

##### Customer testimonials
Several partners shared their results :
- <u>Anaqua</u> : Ivan Mihailov states that Mistral OCR 4 is *"roughly 4x faster per page than their incumbent provider"*.
- <u>Rogo</u> : Aidan Donohue reports reaching *"equivalent accuracy at roughly 8x lower cost"* compared to the parsers they benchmarked.

![image](/images/blog/ai/ai_mistral_optical_character_recognition_4_002.png)

---

##### Why now ?
Mistral positions OCR 4 as an accelerator for AI adoption in document-heavy enterprise environments. As long as critical documents on paper and PDF remain unstructured, AI use cases (agents, analytics, automation) hit a wall at extraction. Bounding boxes and confidence scores make it possible to build more reliable pipelines, with human review reserved for low-confidence passages.

---

##### How to get started ?
- Test in Mistral Studio (PDF/Image -> text/JSON) to validate quality on your own documents.
- Prototype via the *API* in pure extraction mode ; enable the Batch API for high volumes (cost ÷2).
- Explore Document AI for business use cases without development using JSON schema structuring.
- Contact Mistral for self-hosting if your data privacy constraints require it.

---

##### Conclusion
With OCR 4, Mistral delivers a multilingual, multi-format OCR solution suited to enterprise document requirements. Bounding boxes, block classification, and confidence scores open the door to more precise, more controllable extraction pipelines adapted to human-in-the-loop validation workflows.

---

##### Sources
[Mistral AI - OCR 4](https://mistral.ai/news/ocr-4)

[Test Le Chat by Mistral AI](https://chat.mistral.ai/chat)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.