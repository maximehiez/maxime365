---
title: "Managing unlicensed OneDrive accounts in Microsoft 365"
meta_title: ""
description: ""
date: 2025-03-14T10:00:00-05:00
image: "/images/blog/onedrive/onedrive_auto_archives_unlicensed_onedrive_accounts_thumbnail.png"
categories: ["Sharepoint"]
author: "Maxime Hiez"
tags: ["Licenses", "Archive", "Data"]
draft: false
---
---

##### Introduction
Microsoft has introduced a new storage policy for unlicensed OneDrive accounts, which could result in additional costs for organizations if these accounts are not managed properly. Here's how to identify, monitor, and manage these accounts to avoid unnecessary charges and ensure compliance.

---

##### What is an unlicensed OneDrive account ?
A OneDrive account becomes unlicensed when the user's license is deleted or expires. This can happen when the employee leaves the company, their license is deactivated, or they are no longer assigned to a Microsoft 365 subscription.

---

##### Storage Policy for unlicensed accounts
As of January 27, 2025, organizations are charged for storage of unlicensed OneDrive accounts based on the amount of storage used. Here are the key updates to this policy :
- Storage fees : Organizations will incur storage fees for unlicensed OneDrive accounts based on the amount of storage used.
- Automatic archiving : Unlicensed accounts are automatically archived in Microsoft 365 Archive after 93 days of license removal.
- Account reactivation : Reactivating an archived account will incur a reactivation fee.

---

##### Managing unlicensed OneDrive accounts
**Identifying unlicensed accounts**

To identify unlicensed OneDrive accounts, administrators can use the SharePoint Admin Center. Here's how to generate a report of all unlicensed OneDrive accounts :
1. Go to the SharePoint Admin Center.
2. In the left menu, click *<u>Reports</u>*, then *<u>OneDrive accounts</u>*.
3. Choose *<u>Download report</u>* to get a list of unlicensed OneDrive accounts.

![image](/images/blog/onedrive/onedrive_auto_archives_unlicensed_onedrive_accounts_001.png)

**<u>Management options</u>**

Once unlicensed accounts are identified, administrators have several options for managing them :
- Assign a license : Before archiving the unlicensed OneDrive account, assign a Microsoft 365 license to the user to reactivate their account.
- Delete the account : If the user no longer needs access to OneDrive, delete the account to avoid unnecessary storage charges.

---

##### Policy Timeline
The storage policy for unlicensed OneDrive accounts began on January 27, 2025, and is being phased in. Here are the key milestones :
- Day 60 : The account becomes read-only.
- Day 93 : The account is either archived (if a retention policy is in place) or moved to the recycle bin (if no retention policy applies).

---

##### Costs
- Archived unlicensed OneDrive accounts will be billed for the entire storage space consumed. The storage fee is 0.05$ per GB per month. If no action is taken, unlicensed accounts will be automatically archived, incurring an archiving fee.
- Reactivated unlicensed OneDrive accounts will be billed 0.60$ per GB in addition to the storage fee of 0.05$ per GB per month.

<br/>
<u>Example :</u> An organization has 100 unlicensed OneDrive accounts, each consuming 1 TB for a total of 100 TB. All 100 accounts are automatically archived. If the organization needs to reactivate a specific account, the following costs apply :

- One-time reactivation fee of 0.60$/GB for 1 TB, for a total of 614.40$. - Monthly storage fee of 0.05$/GB for 100TB, for a total of 5120$ per month from reactivation.

<u>Note :</u> Prices in USD before applicable taxes.

---

##### Important points to note
- To access data from an unlicensed OneDrive account, you must configure Microsoft 365 Archive by linking an Azure subscription in *pay-as-you-go Syntex*.
- Archived content remains discoverable in *Microsoft Purview eDiscovery*, and you can export search results without needing to reactivate OneDrive accounts.
- Once an unlicensed account is reactivated, it becomes accessible within 24 hours. The account remains active for 30 days before being archived again.
- Changes to retention policies will sync with archived accounts, meaning that if the retention period is reduced, the new policy will apply and the recycle bin process will begin for those accounts.

---

##### Conclusion
Proactively managing unlicensed OneDrive accounts is essential to avoid unnecessary storage costs and ensure compliance. By identifying and managing these accounts before the new policy takes effect, organizations can minimize risks and associated costs.

---

##### Sources
[Microsoft Learn - Manage unlicensed OneDrive accounts](https://learn.microsoft.com/en-us/sharepoint/unlicensed-onedrive-accounts)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please leave a comment in the section below or by sending me a message from the contact form.

Don't forget to follow us and share this post.