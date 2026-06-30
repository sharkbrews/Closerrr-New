import { useEffect } from "react";
import { motion } from "framer-motion";
const htmlContent = `
<p><strong>1. Introduction &amp; Applicability:</strong></p>
<br/>
<p>These Terms and Conditions for Creators (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;Creator,&rdquo;, &ldquo;Friend&rdquo;, &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and Closerrr Interactive Private Limited (&ldquo;Closerrr,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), governing your access to and use of the Closerrr mobile application, web platform, backend dashboard, support systems, and any associated features, tools, or services (collectively, the &ldquo;Platform&rdquo;).</p>
<p>These Terms apply exclusively to individuals or entities who have been formally invited, approved, or otherwise authorized by Closerrr to operate as verified content creators, artists, or public figures on the Platform (&ldquo;Creators&rdquo;). These Terms do not apply to general users, fans, or subscribers, who are governed by a separate Terms and Conditions agreement.</p>
<p>By registering a Creator account, accessing Creator-specific features, uploading content, initiating Closerrr Live sessions, receiving subscriber messages, or accepting any form of revenue share via the Platform, you agree to be bound by these Terms and all associated documents and policies referenced herein &mdash; including, but not limited to, the Closerrr Creator Privacy Policy, Community Guidelines, Revenue Sharing Policy, and any operational directives communicated via dashboard, email, or in-app notification.</p>
<p>Closerrr reserves the right to amend, modify, or replace these Terms at any time, at its sole discretion. Where material modifications are introduced that substantially affect your rights or obligations, Closerrr will provide notice via reasonable means, such as in-app banners, dashboard alerts, or email communication. Your continued use of the Platform after the effective date of any such modifications shall constitute your binding acceptance of the updated Terms.</p>
<p>By registering as a Creator, you further affirm that you have read, understood, and accepted both the Closerrr Creator Terms &amp; Conditions and Privacy Policy, including any linked or incorporated rules, standards, and platform protocols. In the event of any conflict between these Terms and those applicable to general users of the Platform, these Creator Terms shall control with respect to all Creator-specific tools, rights, responsibilities, and monetization mechanisms.</p>
<br/>
<p><strong>2. Definitions:</strong></p>
<br/>
<p>For the purposes of these Terms, the following definitions shall apply unless otherwise expressly stated:</p>
<p>(A) General Terms</p>
<p>(a) &ldquo;Platform&rdquo; means the Closerrr mobile application, web portal, backend dashboard, associated APIs, support modules, livestream infrastructure, and all associated digital tools, services, or systems owned and operated by Closerrr Interactive Private Limited.</p>
<p>(b) &ldquo;Closerrr&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo; refers to Closerrr Interactive Private Limited, a company incorporated under the laws of India, which owns and operates the Platform.</p>
<p>(c) &ldquo;Terms&rdquo; refers to this Creator Terms &amp; Conditions document in its entirety, including all linked policies and future amendments.</p>
<p>(d) &ldquo;Policies&rdquo; includes any support article, FAQ, privacy policy, revenue sharing policy, operational directive, or community rule published or issued by Closerrr, whether publicly visible or communicated through dashboard, email, or in-app interface. Such policies shall be deemed incorporated herein by reference.</p>
<p>(B) User &amp; Creator Roles</p>
<p>(a) &ldquo;Creator&rdquo;, &ldquo;Friend&rdquo;, &ldquo;you&rdquo;, or &ldquo;your&rdquo; refers to an individual, public figure, artist, or approved profile that has been invited or onboarded by Closerrr to publish content, interact with subscribers, and receive revenue-based compensation through the Platform. The term &ldquo;Friend&rdquo; is the subscriber-facing label used throughout the Platform to refer to a Creator.</p>
<p>(b) &ldquo;Creator Account&rdquo; or &ldquo;Account&rdquo; means the registered Creator profile that is verified, activated, and granted access to creator-facing tools and monetization features of the Platform.</p>
<p>(c) &ldquo;User&rdquo;, &ldquo;Fan&rdquo;, or &ldquo;Subscriber&rdquo; refers to a general Platform user who subscribes to a Creator&rsquo;s profile, gains access to gated content, and is governed by Closerrr&rsquo;s User Terms &amp; Conditions.</p>
<p>(C) Content and Functionality</p>
<p>(a) &ldquo;Content&rdquo; includes all forms of data, information, media, or expression created, uploaded, or shared by a Creator, including text, messages, livestreams, videos, thumbnails, profile descriptions, event listings, and interactive content, whether pre-recorded or real-time.</p>
<p>(b) &ldquo;Closerrr Live&rdquo; refers to Closerrr&rsquo;s proprietary real-time broadcasting feature through which Creators can host livestream sessions for their subscribers.</p>
<p>(c) &ldquo;Dashboard&rdquo; refers to the limited set of in-app screens and controls made available to Creators within the Closerrr mobile application, enabling them to access basic payout information, manage profile visibility, and adjust select settings. It does not constitute a comprehensive or standalone dashboard in the traditional sense, and its scope may evolve as the platform develops.</p>
<p>(D) Monetization Terms</p>
<p>(a) &ldquo;Subscription Price&rdquo; means the gross monthly fee payable by a Subscriber to access a Creator&rsquo;s exclusive content or features on the Platform.</p>
<p>(b) &ldquo;Platform Fees&rdquo; refers to mandatory processing fees deducted by mobile app stores such as Apple App Store (30% in Year 1; 15% from Year 2 onward) or Google Play Store (flat 15%), before Closerrr receives net revenue.</p>
<p>(c) &ldquo;Net Revenue&rdquo; means the amount remaining from the Subscription Price after deduction of applicable taxes (e.g., GST) and Platform Fees. This is the base figure used for calculating the Creator&rsquo;s revenue share.</p>
<p>(d) &ldquo;Payout Percentage&rdquo; refers to the tiered percentage of Net Revenue a Creator is entitled to receive, based on the number of active Subscribers. Current tiers range from 70% to 75%.</p>
<p>(e) &ldquo;Commission&rdquo; means the inverse of the Payout Percentage, i.e., the portion of Net Revenue retained by Closerrr for Platform services.</p>
<p>(f) &ldquo;Payout&rdquo; refers to the final amount payable to the Creator after applying their Payout Percentage to Net Revenue.</p>
<p>(g) &ldquo;Payout Schedule&rdquo; refers to the timeline for disbursing Creator Payouts. Unless otherwise stated, payouts are processed on the 25th of the second calendar month following the revenue month (e.g., January earnings &rarr; paid on March 25th).</p>
<p>(E) Enforcement and Account Status</p>
<p>(a) &ldquo;Suspension&rdquo; refers to a temporary disabling of a Creator&rsquo;s account or privileges due to a suspected violation of these Terms or for compliance verification.</p>
<p>(b) &ldquo;Termination&rdquo; means the permanent revocation of a Creator&rsquo;s access and monetization rights due to breach, inactivity, legal order, or administrative discretion.</p>
<p>(c) &ldquo;Verified Creator Account&rdquo; refers to a Creator account that has successfully passed Closerrr&rsquo;s onboarding checks, eligibility requirements, and verification processes.</p>
<p>(F) Legal &amp; Interpretive Definitions</p>
<p>(a) &ldquo;Applicable Law&rdquo; means all laws, statutes, rules, regulations, directives, or other legal mandates issued by any governmental authority having jurisdiction over the Parties, the Platform, or any activities governed by these Terms &mdash; including without limitation, data protection laws, intellectual property regulations, and consumer protection frameworks.</p>
<p>(b) &ldquo;Dispute&rdquo; refers to any disagreement, claim, controversy, or cause of action arising out of or related to these Terms, the use of the Platform, revenue-sharing arrangements, or any conduct or communication between the Parties.</p>
<p>(c) &ldquo;Effective Date&rdquo; refers to the date these Terms were last updated, as specified in the concluding section of this document.</p>
<p>(d) &ldquo;Intellectual Property Rights&rdquo; means all forms of legally recognized proprietary rights under applicable law, including but not limited to copyrights, trademarks, patents, trade secrets, database rights, publicity rights, and moral rights, whether registered or unregistered.</p>
<p>(e) &ldquo;Personal Data&rdquo; means any information relating to an identified or identifiable individual, including without limitation name, email, phone number, IP address, device ID, geolocation, billing details, or other identifiers, as governed by applicable data privacy laws and the Closerrr Privacy Policy.</p>
<p>(f) &ldquo;Services&rdquo; means the full suite of features, functionalities, communications infrastructure, Creator tools, analytics dashboards, and monetization pathways made available by Closerrr through the Platform.</p>
<p>(g) &ldquo;App&rdquo; means the Closerrr mobile application, including any downloadable software, updates, user interface, backend integrations, and supporting documentation made available via digital storefronts such as the Apple App Store and Google Play Store.</p>
<br/>
<p><strong>3. Eligibility &amp; Onboarding:</strong></p>
<br/>
<p>(A) Platform Alignment &amp; Selection Rights<br>Closerrr is a platform dedicated to fostering authentic and meaningful interactions between Creators and Fans. To preserve this ethos, Closerrr retains full and final discretion to invite, approve, or decline Creator participation. Selection is based on alignment with our brand values, content standards, and overall community expectations. No applicant is entitled, as a matter of right, to registration or continued access as a Creator on the Platform.</p>
<p>(B) Eligibility Criteria<br>To be considered for onboarding and to maintain active Creator status, you must meet the following minimum requirements at all times:</p>
<p>(a) Geographic Scope<br>(i) At this time, Closerrr only accepts Creator applications from individuals based in India.<br>(ii) Expansion to other jurisdictions may occur at a later date, subject to business and regulatory feasibility.</p>
<p>(b) Age Requirement<br>(i) You must be at least eighteen (18) years of age to apply as a Creator.<br>(ii) Applications submitted by, or on behalf of, individuals under the age of 18 &mdash; including via guardians or representatives &mdash; are not permitted and may result in blacklisting.</p>
<p>(c) Content Suitability<br>(i) Closerrr does not permit Creators who produce or promote adult/NSFW content, hate speech, discriminatory messages, harassment, or content that violates applicable law.<br>(ii) You must demonstrate consistent alignment with Closerrr&rsquo;s content integrity standards, and any deviation therefrom shall constitute grounds for Suspension or Termination under Section 15.</p>
<p>(C) Application Process</p>
<p>(a) Application Submission<br>(i) Applications must be submitted through Closerrr&rsquo;s official website, Creator interest form, or any authorized intake pathway.<br>(ii) Submission does not guarantee approval and creates no binding obligations on Closerrr.</p>
<p>(b) Preliminary Vetting<br>(i) Closerrr may assess your public presence, social media profiles, prior content, and engagement style to determine suitability.</p>
<p>(ii) We reserve the right to conduct independent due diligence or request supplementary information, clarification, or a virtual onboarding interview prior to issuing a decision.</p>
<p>(c) Invitation-Only Protocol<br>(i) In some cases, Closerrr may onboard Creators by direct invitation without requiring a formal application.<br>(ii) Such invitations remain non-transferable and revocable at our discretion.</p>
<br/>
<p><strong>4. Account Creation, Verification &amp; Management:</strong></p>
<br/>
<p>(A) Invitation-Based Access and Platform Control<br>(a) Closerrr does not permit open registration for Creator Accounts. All Creator access is extended exclusively on an invitation or approval basis following internal evaluation.<br>(b) Submission of an application via the Closerrr website or interest form does not entitle the applicant to Platform access and creates no contractual obligations on Closerrr until onboarding is complete.<br>(c) Closerrr retains absolute discretion in determining whether an applicant satisfies its internal eligibility, reach, or suitability criteria and may reject or rescind access at any stage.</p>

<p>(B) Pre-Approval Evaluation Process<br>(a) Applicants must submit accurate contact information, including links to verified social profiles (e.g., Instagram).<br>(b) If shortlisted, Closerrr will issue a conditional selection email outlining the remaining onboarding steps, including verification, identity checks, and account information requirements.<br>(c) Any misrepresentation or failure to comply with onboarding instructions may result in delays or rejection of your application. However, unless explicitly barred by Closerrr, you may re-initiate the process by submitting a fresh Creator interest form through the official website.</p>

<p>(C) Identity &amp; Consent Verification<br>(a) To finalize onboarding, the Creator must:<br>(i) Confirm the email ID they wish to use for their Closerrr Creator Account;<br>(ii) Provide their full name to be displayed across public-facing modules including the explore profile, showcase profile, and official subscription invoice;<br>(iii) Submit a verification message from their public or most-followed Instagram handle in the prescribed format to confirm both identity and consent.<br>(b) Closerrr reserves the right to authenticate the Instagram profile, validate public presence, and retain the verification message for audit purposes.<br>(c) Links to the Closerrr Creator Terms &amp; Conditions and Privacy Policy will be provided during this step, and acceptance of both shall be deemed confirmed upon submission of the verification message.</p>

<p>(D) Account Creation and Activation<br>(a) Upon successful completion of all onboarding steps, Closerrr will generate a Creator Account and send login credentials to the email address confirmed by the Creator.<br>(b) The Creator shall be instructed to change their temporary password at first login via the procedure outlined in the onboarding email.<br>(c) No Creator rights, visibility, or monetization privileges shall vest until Closerrr confirms successful activation of the account.</p>

<p>(E) Ongoing Obligations &amp; Account Management<br>(a) Creators must keep their account credentials confidential and shall be solely responsible for any activity conducted under their profile.<br>(b) Creators are required to notify Closerrr of any unauthorized access, technical issue, or compromise to their account promptly.<br>(c) Closerrr may, at its discretion, initiate periodic re-verification or request updated profile information to maintain account validity and public trust.<br>(d) Creators shall not attempt to create multiple accounts or impersonate another person, public figure, or entity.</p>

<p>(F) Right to Suspend or Restrict Access<br>(a) Closerrr reserves the right to suspend, restrict, or revoke any Creator Account that fails to meet its verification standards, violates any Platform policy, or is inactive for a prolonged period, in accordance with Section 15 (Account Suspension, Termination &amp; Withdrawal).<br>(b) Any such action may be taken without prior notice and without liability, except as required under applicable law.</p>
<br/>
<p><strong>5. Content Publishing &amp; Platform Usage:</strong></p>
<br/>
<p>(A) Scope of Permitted Use<br>(a) Subject to your continued compliance with these Terms and all applicable Closerrr Policies, you are granted a limited, non-exclusive, revocable right to access and use the Platform solely to publish original content, interact with Subscribers, and engage with official creator features such as stories, Closerrr Live, events, and one-on-one chats.<br>(b) All usage must be in good faith and for genuine Creator-to-Fan interaction.<br>(c) You may promote products or services through your content, provided such endorsements do not involve illegal, harmful, or prohibited industries (e.g., gambling, tobacco, alcohol, adult content, or financial schemes).<br>(d) You may not use the Platform for unauthorized commercial exploitation, including diverting Subscribers to off-platform paid channels unless expressly approved by Closerrr.</p>

<p>(B) Content Responsibility and Ownership<br>(a) You retain ownership of all intellectual property rights in the original content you create and upload, subject to the license granted to Closerrr under Section 8 (Content Ownership &amp; Licensing to Closerrr).<br>(b) You are solely responsible for the legality, accuracy, and appropriateness of your content, and you represent and warrant that you have all necessary rights and permissions to post such content.<br>(c) Closerrr is a technology platform provider and does not create, endorse, or take any responsibility for your Content.</p>

<p>(C) Prohibited Content<br>You shall not post, upload, stream, transmit, or otherwise distribute any Content that:<br>(a) Is illegal, defamatory, obscene, pornographic, sexually explicit, or NSFW in nature<br>(b) Contains or promotes hate speech, harassment, bullying, threats, or discrimination based on race, religion, gender, caste, sexual orientation, disability, or any protected category<br>(c) Infringes on any third party&rsquo;s intellectual property or publicity rights, including:<br>(i) Copyrighted or trademarked material without proper authorization<br>(d) Discloses personally identifiable information or private data of any individual without lawful consent<br>(e) Constitutes spam, click-bait, pyramid schemes, or unsolicited promotions<br>(f) Contains viruses, trojans, or malicious code intended to disrupt system integrity<br>(g) Impersonates any person, brand, or legal entity or misrepresents your affiliation<br>(h) Violates any applicable law, regulation, or Platform policy<br>(i) Fails to uphold respectful and inclusive conduct, which is expected of all Creators and reflects directly on the Platform&rsquo;s brand<br>Closerrr retains sole discretion to determine whether content violates these restrictions and may take action without prior notice.</p>

<p>(D) Platform Restrictions and Prohibited Usage<br>(a) You shall not:<br>(i) Exploit any bugs or reverse-engineer Platform code<br>(ii) Attempt to scrape, mine, or extract Subscriber information<br>(iii) Use unauthorized bots, automation tools, or mass messaging software<br>(iv) Use your Creator Account for impersonation or third-party account sharing<br>(v) Divert Subscribers to competing platforms or paid services outside Closerrr<br>(b) All interactions with Closerrr staff, including support and moderation teams, must be professional and free of hostility or abuse. Harassment or misuse of internal communication channels may result in enforcement action.</p>

<p>(E) Platform Ownership and License Back<br>(a) While you retain ownership of original content you create and share, you hereby grant Closerrr a royalty-free, worldwide, sub-licensable, and irrevocable license to host, stream, display, index, promote, and archive such content for the purpose of providing Platform services, promotional campaigns, feature showcases, and compliance enforcement.<br>(b) This license extends to derivative promotional use cases such as profile previews, discovery carousels, platform-wide badges, and replay thumbnails.<br>(c) You waive any moral rights or attribution requirements to the extent permitted by law for content used in the above-listed ways.</p>

<p>(F) Platform Access Does Not Guarantee Visibility<br>(a) Your inclusion on the Platform does not entitle you to specific placement, promotion, or algorithmic exposure. Closerrr retains sole discretion over visibility, homepage placement, search indexing, and category curation.<br>(b) Closerrr reserves the right to temporarily demote, de-list, or hide content based on technical performance, reported behavior, or experimental algorithmic rotation.</p>
<br/>
<p><strong>6. Earnings, Revenue Share &amp; Payouts:</strong></p>
<br/>
<p>The standard monthly subscription price for Fans to access a Creator&rsquo;s (also referred to as a &ldquo;Friend&rdquo; on the Platform) content on Closerrr is currently set at ₹349 per Creator. Closerrr reserves the right to modify, increase, or reduce this price at any time, either generally or on a per-Creator basis, based on market, promotional, or product strategy considerations. Such changes may be applied with or without prior notice, unless explicitly required under Applicable Law.&nbsp;</p>

<p>(A) Revenue Model &amp; Definitions<br>(a) As a Creator, you are entitled to receive a share of the Net Revenue generated from Subscriptions purchased by your Subscribers via the Closerrr Platform.<br>(b) &ldquo;Net Revenue&rdquo; is defined as the total Subscription Price received, after deduction of applicable taxes (e.g., GST) and Platform Fees (as defined under Section 2 (Definitions)).<br>(c) &ldquo;Platform Fees&rdquo; include all charges and commissions imposed by third-party digital storefronts (e.g., Apple App Store and Google Play Store). These currently include:</p>
<p>(i) Apple App Store: 30% of the subscription amount is deducted for the first 12 consecutive months of a Subscriber&rsquo;s active subscription to your account. After 12 uninterrupted months, this rate drops to 15%. If a Subscriber cancels and later re-subscribes within 60 days, the original day count continues, and you may become eligible for the 15% rate again once the combined subscription duration reaches 12 months. However, if the re-subscription occurs after 60 days, the cycle resets and starts again at 30%.</p>
<p>(ii) Google Play Store: A flat 15% fee applies at all times, regardless of subscription duration or continuity.<br>(d) Your &ldquo;Payout&rdquo; is calculated based on your tiered &ldquo;Payout Percentage,&rdquo; applied to the Net Revenue collected on your behalf.</p>

<p>(B) Creator Commission Tiers<br>Your Payout Percentage is determined by the number of active paid Subscribers on your profile at the time of calculation. The more Subscribers you have, the higher your share:</p>
<p>(i) Tier 1: If you have less than 1,000 active Subscribers, you will receive 70% of Net Revenue (Closerrr retains 30%).</p>
<p>(ii) Tier 2: With 1,000&ndash;1,999 active Subscribers, you will earn 71% (Closerrr retains 29%).</p>
<p>(iii) Tier 3: With 2,000&ndash;2,999 active Subscribers, you will earn 72% (Closerrr retains 28%).</p>
<p>(iv) Tier 4: With 3,000&ndash;3,999 active Subscribers, you will earn 73% (Closerrr retains 27%).</p>
<p>(v) Tier 5: With 4,000&ndash;4,999 active Subscribers, you will earn 74% (Closerrr retains 26%).</p>
<p>(vi) Tier 6: Once you have 5,000 or more active Subscribers, you will earn 75% of the Net Revenue, and Closerrr will retain 25%.</p>
<p>Closerrr may revise these percentages at any time with prior notice through in-app notifications, or email.</p>

<p>For the purpose of payout calculation, &ldquo;active Subscribers&rdquo; refers to the number of users with an active, paid subscription to your profile at the moment of monthly billing reconciliation. Your final Active Subscriber count is locked at 23:59 IST on the last day of each calendar month (month-end), and your payout tier for that month is determined solely based on this number. Whether you cross a new tier threshold at the start or end of a calendar month, your payout rate will be adjusted accordingly based on your final active Subscriber count for that month. Closerrr follows a standard monthly cycle and does not adopt Apple or Google&rsquo;s fiscal month definitions for this calculation.</p>

<p>(C) Payout Schedule<br>(a) Payouts are processed on a fixed, deferred cycle &mdash; typically on the 25th of the second calendar month following the revenue month. For example:</p>
<p>(i) January revenue &rarr; paid on March 25</p>
<p>(ii) November revenue &rarr; paid on January 25<br>(b) This delay exists because Apple and Google have long financial reporting cycles. For instance, Apple releases earnings 45 days after the close of its fiscal month, which can push Closerrr&rsquo;s receivables into the following calendar cycle. This delay is entirely outside our control.<br>(c) All disbursements are made in INR to the Indian bank account verified under your Creator profile.</p>

<p>(D) Minimum Payout Threshold &amp; Withholding<br>(a) No minimum payout threshold is currently imposed. All eligible earnings, regardless of amount, will be processed and disbursed in the next scheduled payout cycle, provided the Creator&rsquo;s account remains in good standing and passes all required verifications.<br>(b) Closerrr reserves the right to withhold payouts in cases involving account verification issues, suspected fraud, content disputes, policy violations, or any ongoing regulatory or legal compliance investigations. Such withholdings shall be lifted only upon satisfactory resolution of the underlying issue.</p>

<p>(E) Payment Requirements &amp; Conditions<br>(a) You must have a fully verified Creator Account and provide valid, accurate, and up-to-date Indian bank account details.<br>(b) Closerrr shall not be liable for any payout delay or failure arising from your failure to update or correct personal or banking information.<br>(c) You are solely responsible for the payment of all taxes associated with your income, including income tax, professional tax, GST registration (if applicable), and any other financial reporting or remittance obligations as required under Indian law.</p>

<p>(F) Mid-Cycle Deletion, Suspension, or Ban<br>(a) If you delete your account, or are suspended or permanently banned before the end of a billing cycle, you shall forfeit all revenue earned during that month as a contractual penalty.<br>(b) Any pending payouts from previous, eligible cycles will remain payable as per the regular Payout Schedule.</p>

<p>(G) Accuracy of Reports<br>(a) All earnings, deductions, and payout calculations shall be visible on your &ldquo;My Payouts&rdquo; Page.<br>(b) You are responsible for reviewing this information and reporting discrepancies (if any) within ten (10) days of a billing cycle close. Failing which, all calculations shall be deemed final and binding.</p>

<p>(H) No Third-Party Beneficiaries<br>You may not assign, transfer, or pledge your right to receive Payouts to any third party. Payouts shall only be disbursed to the verified Creator linked to the eligible account.</p>
<br/>
<p><strong>7. Subscription Mechanics &amp; Fan Access:</strong></p>
<br/>
<p>(A) Subscription Structure<br>(a) Fans (&ldquo;Subscribers&rdquo;) gain access to your gated content, Closerrr Live sessions, chat interface, and other exclusive features by purchasing a monthly subscription to your Creator profile through the Platform.<br>(b) The standard subscription term is 30 calendar days and will auto-renew unless cancelled by the Subscriber via the applicable app store settings (Apple App Store or Google Play).<br>(c) All subscriptions are handled through the respective mobile platforms&rsquo; billing systems and Closerrr has no authority to override, refund, or retroactively modify subscription transactions.</p>
<p>(B) Fan Access Features<br>(a) An active subscription grants each Subscriber:<br>(i) One-on-one chat access (subject to message limits)<br>(ii) Visibility into your Stories and profile posts<br>(iii) Access to Closerrr Live streams hosted by you<br>(iv) Eligibility to receive replies from you (at your discretion)</p>
<p>(b) Fan access will terminate upon cancellation, expiry, or termination of either party&rsquo;s account, subject to Section 8 (Content Ownership &amp; Licensing to Closerrr).</p>
<p>(C) Message Limitations<br>(a) To preserve meaningful engagement and platform quality, each Subscriber may send up to three (3) messages per 24-hour rolling window, per Creator.<br>(b) Each message is capped at 100 characters.<br>(c) Replies to Stories also count as messages toward this daily quota.<br>(d) These limits are enforced uniformly across the Platform and cannot be modified by individual Creators.</p>

<p>(D) Closerrr Streak<br>(a) Closerrr maintains a visible subscription continuity metric (&ldquo;Closerrr Streak&rdquo;) for each active Subscriber.<br>(b) The Streak reflects the number of consecutive days a Subscriber has maintained an uninterrupted subscription to your profile.<br>(c) If a Subscriber cancels their subscription, they retain access and streak continuity through the end of the billing cycle, plus a 7-day non-renewable grace period (&ldquo;Continuation Period&rdquo;).<br>(d) If the Subscriber fails to resubscribe within this period, their Closerrr Streak will be permanently deleted and cannot be restored.</p>
<p>(E) No Refunds or Rollbacks<br>(a) You acknowledge that Closerrr does not provide prorated refunds for partial billing periods, mid-cycle Creator withdrawals, or platform outages.<br>(b) All revenue you earn is based on actual active subscription counts, irrespective of Fan satisfaction or activity levels.</p>
<p>(F) Interaction Boundaries<br>(a) You may not require or solicit Subscribers to contact you outside the Closerrr Platform (e.g., DMs, paid video calls, third-party apps).<br>(b) You may not offer external subscriptions, digital products, or gated services that compete with Closerrr offerings.<br>(c) You may not use Closerrr chat or posts to divert Fans to other monetized platforms or offerings.</p>
<p>(G) Subscription Name &amp; Billing Transparency<br>(a) The Creator&rsquo;s name as provided during onboarding will appear on the Fan&rsquo;s invoice/receipt for subscription charges, as processed by Apple or Google.<br>(b) This name cannot be altered post-activation. It is your responsibility to confirm its accuracy during onboarding.</p>
<p><strong>8. Content Ownership &amp; Licensing to Closerrr:</strong></p>
<p>(A) Retention of Intellectual Property Rights<br>(a) You retain full ownership of all intellectual property rights in the original content you create and publish on the Platform, including but not limited to messages, livestreams, profile media, videos, event descriptions, and Stories, provided such content does not include any proprietary assets of Closerrr or third-party content without appropriate authorization.<br>(b) Nothing in these Terms shall be construed to transfer ownership of your original works to Closerrr.</p>

<p>(B) Limited License to Closerrr<br>(a) By publishing or uploading any content to the Platform, you hereby grant Closerrr a worldwide, non-exclusive, royalty-free, sub-licensable, transferable, and irrevocable license to host, cache, distribute, publicly display, reproduce, promote, and archive such content for the purposes of:</p>
<p>(i) operating and improving the Platform;</p>
<p>(ii) promoting your content within Closerrr (including explore carousels, badge showcases, and replay features);</p>
<p>(iii) ensuring legal, safety, and compliance reviews as required under Applicable Law.</p>
<p>(b) This license shall survive suspension or termination of your Creator Account for the period reasonably necessary to fulfill these purposes, subject to applicable retention laws and internal takedown protocols.</p>

<p>(C) Waiver of Attribution and Moral Rights<br>To the extent permitted by Applicable Law, you waive any moral rights, attribution claims, or objections to modifications, formatting, or promotional usage of content granted under this license.</p>

<p>(D) Third-Party Content and Responsibility<br>(a) You represent and warrant that any content incorporating third-party music, clips, likenesses, or intellectual property is either your original creation or properly licensed by you with all necessary rights to distribute it via the Platform.<br>(b) Closerrr shall not be responsible for any claim arising from unauthorized or infringing content uploaded by Creators, and you shall indemnify Closerrr for any loss, liability, or claim arising from such violation in accordance with Section 20 (Indemnification).</p>

<p>(E) No Platform-Endorsed Partnership<br>Uploading content to Closerrr shall not be interpreted as entering into any joint venture, brand endorsement, agency, or promotional contract unless explicitly stated in a separate agreement signed by Closerrr.</p>
<br/>
<p><strong>9. Platform Rights &amp; Moderation Authority:</strong></p>
<br/>
<p>Closerrr is a privately managed, invite-only platform committed to preserving the integrity, quality, and safety of its community. The Creator acknowledges and agrees that Closerrr retains absolute authority and discretion over the operation, management, moderation, and enforcement of all rules governing the Platform and its Services.</p>

<p>(A) Platform Oversight &amp; Operational Control<br>(a) Closerrr reserves all rights not expressly granted to the Creator under these Terms. No action or inaction shall be deemed a waiver of any legal or contractual right.<br>(b) We maintain sole discretion to administer the Platform&rsquo;s core logic, including visibility algorithms, promotional placements, and eligibility criteria.<br>(c) This includes but is not limited to the ability to audit content, flag violations, suspend features, or pause distribution for performance, safety, or legal reasons.<br>(d) Closerrr may modify, enhance, suspend, or discontinue any part of the Platform or feature at any time, with or without prior notice. This includes but is not limited to changes in layout, file size limits, message limits, content formats, or streaming durations.</p>

<p>(B) Content Review &amp; Enforcement Authority<br>(a) Closerrr may, at its discretion, review, monitor, screen, or edit any Creator content to ensure compliance with Platform Policies and Applicable Law.<br>(b) We reserve the right to remove, restrict, hide, or disable access to content we find objectionable, misleading, inaccurate, harmful, non-compliant, or otherwise inconsistent with Platform standards &mdash; with or without notice, and for any reason or no reason.<br>(c) Creators have no expectation of guaranteed visibility, exposure, or promotional treatment on the Platform. All visibility mechanics are subject to algorithmic, manual, and editorial curation, which may change over time.<br>(d) Closerrr is a technology platform provider and does not create, endorse, or assume responsibility for Creator-generated content.<br>(e) You agree that Closerrr shall not be liable for any reputational damage, loss of revenue, goodwill, or other consequences arising from the good-faith enforcement of these moderation rights.<br>(f) All usage must be in good faith and for genuine Creator-to-Fan interaction. You agree to uphold respectful and inclusive conduct at all times and acknowledge that your behavior reflects directly on the Platform&rsquo;s brand.</p>

<p>(C) Investigation &amp; Legal Cooperation<br>(a) Closerrr reserves the right to investigate any suspected violation of these Terms, including by accessing your Account or reviewing historical data, content, and activity logs.<br>(b) We may cooperate fully with law enforcement authorities, regulatory bodies, or court orders, including disclosure of identity or other personal data, where lawfully required.<br>(c) Closerrr has no obligation to mediate disputes between you and any Subscriber, Creator, or third party. Any such involvement is purely at our discretion.</p>

<p>(D) Finality of Decisions &amp; Appeals<br>(a) You may submit a moderation-related appeal via the in-app support system or email at [creatorcare@closerrr.com].<br>(b) However, Closerrr retains the right to reject appeals in its sole discretion &mdash; particularly in repeat, serious, or unresolved cases.<br>(c) All decisions made by Closerrr under this section regarding content moderation, platform management, and rule enforcement are final, binding, and not subject to appeal, except as may be explicitly required by Applicable Law.</p>
<br/>
<p><strong>10. Software License &amp; Restrictions (EULA):</strong></p>
<br/>
<p>(A) Grant of Limited License<br>Subject to compliance with these Terms, Closerrr grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Closerrr mobile application, web dashboard, and associated tools solely for purposes related to your Creator activity on the Platform. This license is granted solely for personal and professional use in connection with your Closerrr Creator Account and shall not be interpreted as a transfer of any proprietary right or title.</p>

<p>(B) Scope of Permitted Use<br>(a) The Platform and associated software may only be used:</p>
<p>(i) On devices owned or controlled by you;</p>
<p>(ii) In accordance with applicable laws and the functional constraints defined by Closerrr;</p>
<p>(iii) For the purpose of uploading, publishing, and managing Creator Content, interacting with Subscribers, and reviewing analytics or revenue performance.</p>
<p>(b) You may not use the Platform for any purpose outside of the functionalities and permissions expressly granted herein.</p>

<p>(C) Prohibited Actions and Restrictions<br>You shall not, directly or indirectly:<br>(a) Modify, copy, translate, adapt, reverse-engineer, decompile, disassemble, or create derivative works based on the Platform or any part thereof;<br>(b) Rent, lease, sublicense, sell, distribute, or otherwise transfer the Platform, or any component thereof, to any third party;<br>(c) Circumvent, disable, or otherwise interfere with security-related features or usage limits imposed by the Platform;<br>(d) Attempt to gain unauthorized access to any portion of the Platform, including Creator tools, subscriber data, backend services, or restricted APIs;<br>(e) Use automated scripts, bots, scrapers, or similar technologies to access, collect data from, or otherwise interact with the Platform;<br>(f) Introduce any virus, trojan horse, malware, or harmful code into the Platform environment;<br>(g) Use the Platform in a manner that violates the intellectual property or proprietary rights of Closerrr or any third party.</p>

<p>(D) Intellectual Property of the Platform<br>(a) All software code, UI/UX elements, server architecture, algorithms, branding, and documentation associated with the Closerrr Platform are the sole property of Closerrr and its licensors.<br>(b) No rights are granted to you other than those expressly outlined in these Terms. Closerrr reserves all rights, title, and interest not explicitly granted.</p>

<p>(E) Open Source &amp; Third-Party Dependencies<br>The Platform may include components subject to third-party open-source licenses or dependencies governed by separate license terms. By using the Platform, you agree to comply with such third-party license obligations where applicable.</p>

<p>(F) Termination of License<br>This license shall automatically terminate without notice if you breach any provision of these Terms, engage in misconduct, or if your Creator Account is suspended or terminated under Section 15 (Account Suspension, Termination &amp; Withdrawal). Upon termination, you must cease all access to and use of the Platform and delete all copies, credentials, or cached data in your possession.</p>

<p>(G) Updates and Modifications<br>Closerrr may release updates, patches, enhancements, or new versions of the Platform from time to time. These may be installed automatically or require manual action. Continued access to certain features or services may be dependent on the successful application of such updates. Closerrr is under no obligation to maintain backward compatibility or to provide support for outdated versions.</p>

<br/>
<p><strong>11. Tax Compliance &amp; Creator Obligations:</strong></p>
<br/>
<p>(A) Independent Contractor Status &amp; Tax Responsibility<br>(a) You are solely responsible for complying with all applicable tax laws in India, including but not limited to income tax, professional tax, and GST (where applicable).<br>(b) All earnings received from Closerrr shall be treated as personal or business income, and must be accurately disclosed in your tax filings with the relevant authorities.<br>(c) Closerrr shall bear no liability for any penalties, consequences, or legal actions resulting from your failure to fulfill your tax, registration, or reporting obligations.</p>
<p>(d) You acknowledge and agree that you are operating on the Platform as an independent contractor, and not as an employee, agent, joint-venturer, or partner of Closerrr. Accordingly, you are not entitled to any employment-related benefits, reimbursements, or legal protections afforded to salaried personnel.</p>
<p>(e) You are solely responsible for the accurate calculation, reporting, and timely payment of all applicable taxes on your income earned through Closerrr, including but not limited to income tax, professional tax, or other levies mandated under Applicable Law. Closerrr does not provide tax advice and disclaims all liability arising from your personal or business tax obligations.</p>

<p>(B) Banking &amp; Identification Requirements<br>(a) You must provide valid, active, and accurate Indian bank account information registered under your legal name or authorized entity in order to receive Payouts.<br>(b) Closerrr reserves the right to withhold Payouts or suspend accounts where the submitted banking or tax information is unverifiable, inconsistent, or non-compliant.<br>(c) You agree to promptly update your account information in the event of any change in your legal name or banking credentials.</p>

<p>(C) GST Compliance (if applicable)<br>(a) If you are registered under the Goods and Services Tax (GST) regime in India, you must furnish your valid GSTIN to Closerrr for invoicing and compliance purposes.<br>(b) You are responsible for issuing necessary tax invoices, if required, and for remitting the applicable GST amount to the tax authorities in accordance with prevailing law.<br>(c) Closerrr shall not be responsible for the reconciliation, collection, or payment of GST on your behalf, and you agree to indemnify Closerrr for any loss, liability, or proceeding arising out of your non-compliance.</p>

<p>(D) Withholding Taxes &amp; Statutory Deductions<br>(a) Closerrr reserves the right to deduct or withhold applicable taxes at source (TDS) on Creator Payouts as required under the Income Tax Act, 1961 or any successor legislation.<br>(b) Closerrr shall issue TDS certificates or equivalent documentation as required by law and will remit such withheld taxes to the appropriate authorities.</p>

<p>(E) Audit and Reporting Cooperation<br>(a) You agree to cooperate with any audit, inquiry, or statutory reporting requirement initiated by Indian tax authorities or Closerrr&rsquo;s compliance team in relation to your earnings.<br>(b) This may include the submission of supporting documents, declarations, or confirmation of prior tax filings relevant to your income from Closerrr.</p>
<br/>
<p><strong>12. Confidentiality:</strong></p>
<br/>
<p>(A) Confidential Information Defined<br>For the purposes of these Terms, &ldquo;Confidential Information&rdquo; includes, but is not limited to:<br>(a) Any non-public information disclosed by Closerrr to you in written, oral, electronic, or other form that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and the circumstances of disclosure;<br>(b) Internal documentation, policies, creator analytics, platform usage data, revenue insights, business plans, financial data, subscriber demographics, and proprietary technology of Closerrr;<br>(c) Any correspondence or communication from Closerrr&apos;s staff, support, operations, moderation, or legal teams.</p>

<p>(B) Non-Disclosure Obligations<br>(a) You agree not to disclose, share, reproduce, or use any Confidential Information for any purpose other than as expressly permitted under these Terms or as required to comply with Applicable Law.<br>(b) You shall exercise at least the same degree of care you use to protect your own confidential information (but in no event less than reasonable care) to protect the confidentiality and integrity of Closerrr&rsquo;s Confidential Information.<br>(c) You shall not disclose Confidential Information to any third party without Closerrr&rsquo;s prior written consent, except to your legal or financial advisors who are bound by equivalent confidentiality obligations.</p>
<p>(d) You are expressly prohibited from publicly demonstrating, disclosing, or discussing the internal workings, structure, user interface, or operational flow of any Creator-exclusive features on the Platform &mdash; including but not limited to dashboard or payouts layouts, content publishing tools, analytics views, support features, or app configurations intended solely for Creator use &mdash; whether through screenshots, screen recordings, verbal descriptions, written walkthroughs, or any other medium, without Closerrr&rsquo;s prior written authorization.</p>
<p>(e) You agree not to publicly share, publish, or otherwise disclose your earnings from Closerrr &mdash; including payout amounts, commission rates, revenue tiers, or subscriber count metrics &mdash; unless explicitly authorized in writing by Closerrr. This includes posts on social media, interviews, third-party platforms, or private groups.</p>

<p>(C) Exclusions<br>The obligations in this Section shall not apply to information that:<br>(a) Was already lawfully known to you prior to disclosure;<br>(b) Is or becomes publicly known through no fault of your own;<br>(c) Is rightfully obtained by you from a third party without breach of any confidentiality obligation; or<br>(d) Is independently developed by you without use of or reference to Closerrr&rsquo;s Confidential Information.</p>

<p>(D) Compelled Disclosure<br>If you are required by law, regulation, or court order to disclose Confidential Information, you agree to provide Closerrr with prompt written notice (to the extent legally permitted) and to reasonably cooperate with Closerrr in seeking a protective order or other appropriate remedy.</p>

<p>(E) Survival<br>Your confidentiality obligations under this Section shall survive the termination, suspension, expiration, or deletion of your Creator Account and shall remain in effect indefinitely, unless expressly waived in writing by Closerrr.</p>

<br/>
<p><strong>13. Prohibited Conduct:</strong></p>
<br/>
<p>(A) Overview of Restrictions<br>As a Creator, you agree to use the Platform responsibly and in a manner that upholds the integrity, safety, and experience of all users. The following actions are strictly prohibited, and any violation may result in Suspension, Termination, or legal action under Section 15 (Account Suspension, Termination &amp; Withdrawal).</p>
<p>(B) System Abuse &amp; Technical Violations</p>
<p>(a) You shall not engage in any activity that interferes with or disrupts the functionality, security, or integrity of the Platform.<br>(b) This includes but is not limited to:<br>(i) Exploiting bugs, automation flaws, or undocumented Platform behavior for personal advantage;<br>(ii) Reverse-engineering, scraping, crawling, tampering with, or bypassing security layers or API access points;<br>(iii) Introducing malware, viruses, trojans, or other harmful code into the Platform;<br>(iv) Attempting to gain unauthorized access to any user account, server, database, or administrative dashboard;<br>(v) Taking any action that imposes an unreasonable or disproportionately large load on Closerrr&rsquo;s infrastructure or violates Platform rate limits.</p>

<p>(C) Content-Related Violations<br>You shall not upload, publish, transmit, or otherwise distribute any Content that:<br>(a) Is unlawful, obscene, defamatory, libelous, threatening, harassing, vulgar, hateful, racially or ethnically offensive, or otherwise objectionable;<br>(b) Contains sexually explicit material, nudity, pornography, or adult/NSFW content of any kind;<br>(c) Promotes violence, discrimination, hate speech, or incites harm or intimidation against any individual or group;<br>(d) Infringes upon the Intellectual Property Rights, privacy rights, or publicity rights of any third party without proper authorization;<br>(e) Includes false, misleading, or fraudulent claims, including impersonation of another person or public figure;</p>
<p>(f) Making any false, misleading, or deceptive promises to Subscribers in relation to your Content, your availability, or the nature of the interactions they will receive.</p>

<p>(D) Misuse of Platform Tools &amp; Financial Misconduct<br>You agree not to:<br>(a) Use bots, automated scripts, or unauthorized tools (such as fake traffic, duplicate accounts, or cross-subscription circles) to manipulate or artificially inflate follower counts, Closerrr Streaks, message delivery, or engagement metrics;<br>(b) Exploit bugs, attempt to bypass Platform security, reverse-engineer code, or interfere with operational performance;<br>(c) Spam, mass-message, or otherwise abuse Platform communication features;<br>(d) Attempt to scrape, collect, or mine Subscriber data, including usernames or personal details, for off-platform use or resale;<br>(e) Divert Closerrr users to competing platforms, paid services, or external channels without express authorization from Closerrr;<br>(f) Engage in or facilitate any form of financial misconduct, including but not limited to subscription fraud (e.g., using stolen or unauthorized payment methods), money laundering, diversion of funds, or any activity intended to mislead financial reporting or payment eligibility within the Platform;<br>(g) Directly request or collect any Subscriber&rsquo;s personal information, credentials, contact details, or financial information;<br>(h) Accept money, gifts, paid promotions, or monetary transfers outside of Closerrr&rsquo;s authorized payout systems. All financial transactions must be routed exclusively through Closerrr; off-platform monetization from Fans is strictly prohibited;<br>(i) Create, coordinate, or participate in schemes to manipulate payout tiers or exploit incentive thresholds.</p>

<p>(E) Conduct Toward Subscribers &amp; Staff<br>(a) You must treat all Subscribers with respect, and refrain from engaging in discriminatory, abusive, or exploitative behavior;<br>(b) You shall not solicit personal, financial, or sensitive information from any Subscriber, nor attempt to establish off-platform communication under false pretenses;<br>(c) All interactions with Closerrr employees, moderators, and support staff must remain professional, respectful, and free from harassment or abuse.</p>
<p>(d) You shall not harass, threaten, stalk, abuse, or intimidate any Subscriber, Creator, or Closerrr staff.</p>
<p>(e) You shall not make false promises about exclusivity, interactions, or content delivery that are materially misleading or intended to manipulate Subscribers.</p>

<p>(F) Account Misrepresentation<br>You may not:<br>(a) Share, lease, sell, or transfer access to your Creator Account to any third party;<br>(b) Operate multiple Creator Accounts without Closerrr&rsquo;s express written permission;<br>(c) Use a proxy or representative to interact with Subscribers or post content on your behalf in a deceptive or undisclosed manner.</p>
<p>(d) You may not impersonate any person or public figure, fabricate qualifications, or mislead Subscribers regarding your identity, affiliations, or Creator status.<br>(e) Use of deceptive profile names, bios, or third-party-managed personas without disclosure, or it may constitute grounds for Termination.</p>

<p>(G) Compliance with Law &amp; Platform Policies<br>You are required to:<br>(a) Comply with all Applicable Laws of India, including but not limited to the Information Technology Act, 2000, and its amendments;<br>(b) Adhere to all Closerrr policies referenced herein, including the Community Guidelines, Revenue Sharing Policy, and Privacy Policy;<br>(c) Promptly report any known or suspected policy violations to Closerrr.</p>

<p>(H) Enforcement &amp; Penalties<br>Violations of this Section may lead to temporary Suspension, permanent Termination, withholding of Payouts, or other remedial measures as detailed under Section 15 (Account Suspension, Termination &amp; Withdrawal). Closerrr&rsquo;s decision in such matters shall be final.</p>
<br/>
<p><strong>14. Reporting &amp; Enforcement:</strong></p>
<br/>
<p>(A) Reporting Mechanisms<br>(a) Closerrr provides multiple channels for reporting violations, misconduct, or suspicious activity. These include:<br>(i) In-app reporting tools available within chat or Creator profiles;<br>(ii) Email-based complaints directed to our official support team at creatorcare@closerrr.com;<br>(iii) Internal flags raised by Closerrr moderators or automated monitoring systems.</p>
<p>(b) Reports may be submitted by Subscribers, other Creators, or Closerrr personnel. All reports are logged, timestamped, and reviewed in accordance with our standard enforcement protocols.</p>

<p>(B) Platform Moderation Authority<br>(a) Closerrr retains the sole and absolute discretion to investigate any suspected violation of these Terms, Community Guidelines, or Applicable Law.<br>(b) Investigations may include review of chat logs, content metadata, Creator activity records, or Subscriber complaints, and may be conducted with or without prior notice to the Creator.<br>(c) Closerrr is not obligated to disclose the identity of a complainant unless legally required to do so.</p>

<p>(C) Types of Violations Subject to Enforcement<br>Enforcement action may be initiated for, but is not limited to:<br>(i) Repeated or egregious violations of the Prohibited Conduct outlined in Section 13 (Prohibited Conduct);<br>(ii) Attempts to evade suspension or policy enforcement by using alternative accounts or proxies;<br>(iii) Use of the Platform to defraud, exploit, or harm Subscribers;<br>(iv) Breach of confidentiality obligations or unauthorized disclosure of Platform information;<br>(v) Non-cooperation during a compliance review, audit, or investigation.</p>

<p>(D) Enforcement Measures<br>Closerrr may, at its sole discretion, impose one or more of the following:<br>(i) Warnings or written reprimands;<br>(ii) Temporary suspension of Creator Account access or monetization tools;<br>(iii) Permanent termination of the Creator Account;<br>(iv) Withholding or forfeiture of Payouts (as per Section 6 (Earnings, Revenue Share &amp; Payouts) and Section 15 (Account Suspension, Termination &amp; Withdrawal));<br>(v) Blacklisting from future Creator onboarding eligibility.</p>

<p>(E) No Obligation to Disclose Outcomes<br>Closerrr is not obligated to disclose the internal rationale, findings, or exact outcome of any enforcement decision. Closerrr may, at its discretion, share high-level summaries or generic reasons to maintain platform integrity and fairness.</p>

<p>(F) No Obligation to Mediate<br>Closerrr does not serve as an arbiter between Creators and their Subscribers. While we may intervene in severe or high-risk cases, we are under no obligation to mediate disputes arising from personal interactions, content expectations, or communication breakdowns between parties.</p>

<p>(G) Finality of Enforcement<br>All enforcement actions taken by Closerrr under this Section shall be deemed final and binding, except where otherwise required under Applicable Law. Creators may submit a written appeal to creatorcare@closerrr.com, which may be reviewed at Closerrr&rsquo;s discretion &mdash; however, submission does not guarantee reversal or reconsideration.</p>
<br/>
<p><strong>15. Account Suspension, Termination &amp; Withdrawal:</strong></p>
<br/>
<p>(A) Grounds for Suspension or Termination<br>Closerrr reserves the right to suspend, restrict, or permanently terminate your Creator Account at any time, with or without notice, if:</p>
<p>(a) You violate any provision of these Terms, the Community Guidelines, or any referenced Platform policy.<br>(b) You engage in conduct that, in Closerrr&rsquo;s sole judgment, is abusive, fraudulent, unlawful, or harmful to the Platform&rsquo;s reputation or its users.<br>(c) You are subject to investigation based on a credible report of misconduct or breach.<br>(d) You are inactive on the Platform for an extended period of time without prior communication.<br>(e) You fail to respond to compliance requests, verification requirements, or reasonable communications from Closerrr&rsquo;s support or legal teams.<br>(f) Your behavior threatens the operational integrity, safety, or brand value of the Platform.</p>

<p>(B) Suspension Procedure<br>(a) Closerrr may impose a temporary Suspension while an investigation is ongoing. During Suspension, you may lose access to certain Platform features or to your entire Creator Account.<br>(b) Suspended accounts do not receive Payouts until the issue is resolved.<br>(c) Depending on the outcome, Closerrr may lift the Suspension, escalate to Termination, or impose remedial measures including warnings, feature limitations, or payout adjustments.</p>

<p>(C) Permanent Termination<br>(a) Termination is a final and irreversible action that permanently disables your Creator Account and access to all Closerrr features.<br>(b) All Payouts for the month in which Termination occurs shall be forfeited as a contractual penalty, except where otherwise required by law or explicitly permitted by Closerrr.<br>(c) Termination may be accompanied by blacklisting of your personal identifiers (e.g., email, device ID, payment credentials) to prevent future re-registration.</p>

<p>(D) Voluntary Withdrawal by Creator<br>(a) You may request the termination and deactivation of your Creator Account by contacting support via your registered email.<br>(b) Your voluntary withdrawal is subject to the same financial consequences as a Termination. As per Section 15(C)(b), you will forfeit all Payouts accrued during the calendar month in which you submit your withdrawal request.<br>(c) Any cleared Payouts from previous, completed revenue cycles will still be processed on the normal Payout Schedule, provided your account is not subject to any other holds.</p>
<p>(d) Once your request is confirmed and all pending matters are settled, your account will be permanently disabled and cannot be reactivated.</p>

<p>(E) Data Retention &amp; Deletion<br>(a) Upon Suspension or Termination, your Content may be retained in a limited capacity for audit, compliance, and archival purposes as governed by Section 17 (Data Privacy &amp; Security Commitments).<br>(b) Certain metadata, chat logs, or analytics may be anonymized and preserved in accordance with Applicable Law.</p>

<p>(F) Non-Refundability &amp; No Liability<br>(a) No refunds shall be issued to you or your Subscribers for any portion of a billing cycle during which Suspension or Termination occurs.<br>(b) You acknowledge that Closerrr bears no liability for loss of income, audience, access, or goodwill resulting from enforcement actions under this Section.</p>

<p>(G) Finality of Enforcement Decisions<br>(a) All decisions regarding account status, including Suspension, Termination, and blacklisting, shall be final and binding.<br>(b) Closerrr is not obligated to entertain appeals unless required by Applicable Law.</p>
<br/>
<p><strong>16. Refunds, Disputes &amp; Chargebacks:</strong></p>
<br/>
<p>(A) No Refund Policy</p>
<p>(a) Creators acknowledge and agree that Closerrr operates on a no-refund basis for all Subscriptions purchased by Subscribers, except where required under Applicable Law or platform-level policies of the Apple App Store or Google Play Store.</p>
<p>(b) You shall not promise, imply, or offer refunds to Subscribers directly. All refund decisions shall be made exclusively by Closerrr or the relevant app store provider, subject to their applicable policies.</p>

<p>(B) Chargeback Liability</p>
<p>(a) In the event of a chargeback initiated by a Subscriber, Closerrr reserves the right to reverse associated revenue credited to your account, regardless of whether the payout has already been disbursed or remains pending.</p>
<p>(b) If a payout has already been made and later becomes subject to a chargeback, Closerrr reserves the right to deduct the amount from future Payouts due to you, or to recover it through other lawful means.</p>
<p>(c) Repeated chargebacks associated with your account may result in temporary suspension or permanent Termination, subject to Section 15 (Account Suspension, Termination &amp; Withdrawal).</p>

<p>(C) Subscriber Disputes</p>
<p>(a) Closerrr retains full authority to investigate Subscriber complaints or disputes related to your conduct, promised deliverables, or content delivery.</p>
<p>(b) You agree to cooperate in good faith with Closerrr&rsquo;s dispute resolution process, which may include providing documentation, context, or clarifications upon request.</p>
<p>(c) The decision to uphold or deny a Subscriber dispute &mdash; including decisions related to refund processing or content removal &mdash; lies solely with Closerrr and shall be final.</p>

<p>(D) Platform Fees Are Non-Recoverable</p>
<p>Platform Fees, as defined in Section 6 (Earnings, Revenue Share &amp; Payouts), are levied by external service providers (Apple, Google) and are non-refundable under all circumstances. Closerrr shall not reimburse or absorb these fees in the event of chargebacks, cancellations, or account Terminations.</p>

<p>(E) Creator&apos;s Obligation to Minimize Disputes</p>
<p>The Creator agrees to act in a professional manner that minimizes the likelihood of disputes. This includes providing high-quality Content as described, adhering to all Community Guidelines, and engaging respectfully with all Subscribers.</p>
<br/>
<p><strong>17. Data Privacy &amp; Security Commitments:</strong></p>
<br/>
<p>(A) General Commitment to Data Protection<br>(a) Closerrr is committed to protecting the confidentiality, integrity, and lawful processing of all personal data collected from or associated with your Creator Account.<br>(b) Your use of the Platform is subject to the Closerrr Creator Privacy Policy, which forms an integral part of these Terms and governs how we collect, store, use, and share your personal data. You represent and warrant that you have read, understood, and accepted the Closerrr Creator Privacy Policy in full.</p>

<p>(B) Creator Responsibilities in Handling Subscriber Data<br>(a) You may be granted limited access to certain Subscriber interactions or identifiers strictly for the purposes of content delivery, messaging, or live sessions.<br>(b) You shall not download, store, misuse, disclose, or retain any personal or sensitive Subscriber information outside the boundaries of the Platform.<br>(c) Under no circumstances shall you request, solicit, or collect a Subscriber&rsquo;s personal data (including but not limited to contact information, location, bank details, or identity documents) through any on-platform or off-platform means.<br>(d) All Subscriber engagement shall be conducted exclusively through official Platform tools and interfaces. Any attempt to circumvent these safeguards shall constitute a material breach of these Terms.</p>
<p>(e) In the event of a conflict between these Terms and the Creator Privacy Policy, the latter shall prevail for matters relating to data.</p>

<p>(C) Information Security Measures<br>(a) Closerrr implements industry-standard security measures to protect Creator data from unauthorized access, misuse, loss, or alteration.<br>(b) While Closerrr undertakes reasonable efforts to ensure system integrity, you acknowledge and agree that no platform can guarantee absolute security and you assume appropriate caution in sharing information within your account.</p>

<p>(D) Breach Notification and Mitigation<br>(a) In the event of a suspected or confirmed data breach involving your Creator Account, you must immediately notify Closerrr at the official support email.<br>(b) You agree to cooperate with any investigation and undertake remedial actions as instructed by Closerrr, including but not limited to password resets, account lockdowns, or data access reviews.</p>

<p>(E) Consent to Cross-Border Transfers<br>You acknowledge and consent that your data may be processed, stored, or transferred across jurisdictions, including to countries with different levels of data protection than India. By using the Platform, you provide express consent to such transfers, consistent with the Closerrr Creator Privacy Policy.</p>

<p>(F) Retention of Creator Data<br>(a) Your account and associated content data may be retained by Closerrr for a reasonable period after account Suspension or Termination for purposes of legal compliance, fraud prevention, audit, or dispute resolution.<br>(b) Such retention shall be carried out in accordance with Closerrr&rsquo;s data retention protocols and Applicable Law.</p>
<br/>
<p><strong>18. Third-Party Integrations &amp; Dependencies:</strong></p>
<br/>
<p>(A) Use of Third-Party Services<br>(a) The Closerrr Platform may integrate or depend on services, software, APIs, or infrastructure provided by third parties, including but not limited to cloud storage, payment gateways, identity verification systems, email services, analytics SDKs, and mobile app distribution platforms (e.g., Apple App Store, Google Play Store).<br>(b) By using the Platform, you acknowledge and agree that certain Creator-facing features, functionalities, and data processing activities may rely on these external providers, and your use of such features is subject to their respective terms and policies.</p>

<p>(B) No Responsibility for External Failures<br>(a) Closerrr shall not be held liable for delays, disruptions, or failures in Platform performance resulting from the malfunction, downtime, or discontinuation of any integrated third-party service.<br>(b) These dependencies may include (but are not limited to): OTP delivery providers, CDN networks, livestream backend processors, payment disbursal APIs, and device-level OS updates affecting app behavior.<br>(c) Closerrr does not guarantee uninterrupted access to such services and reserves the right to modify or replace external dependencies at its sole discretion.</p>

<p>(C) Your Obligations Regarding Linked Accounts<br>(a) In cases where you link or integrate any external account (e.g., bank portals, email services, or content libraries) with the Platform, you represent that you have the legal authority to do so and assume all responsibility for any data accessed or actions taken through such links.<br>(b) Closerrr disclaims all liability for unauthorized access or breaches arising from weak credentials, misuse, or compromise of your third-party accounts.</p>

<p>(D) No Endorsement of Third Parties<br>Mention of any third-party services or tools on the Platform does not constitute endorsement, sponsorship, or partnership unless explicitly stated by Closerrr. Your use of such third-party services is entirely at your own risk and subject to their individual terms and conditions.</p>
<br/>
<p><strong>19. Intellectual Property &amp; Trademark Usage:</strong></p>
<br/>
<p>(A) Platform Ownership and Rights<br>(a) The Platform, including but not limited to its design, interface, software, logos, trademarks, service marks, documentation, proprietary scripts, and any other content created or commissioned by Closerrr, is and shall remain the exclusive property of Closerrr Interactive Private Limited.<br>(b) Nothing in these Terms shall be construed to grant you any rights, license, or ownership interest in or to the intellectual property of Closerrr, except for the limited license explicitly outlined in Section 10 (Software License &amp; Restrictions).<br>(c) You agree not to reproduce, adapt, display, or commercially exploit any part of the Platform without prior written consent from Closerrr.</p>
<p>(d) The Creator acknowledges that all rights, title, and interest in and to Closerrr&apos;s trademarks, service marks, logos, trade names, trade dress, and other brand identifiers (&quot;Closerrr Marks&quot;) are the sole and exclusive property of Closerrr. The Closerrr Marks include, but are not limited to, the name &quot;Closerrr,&quot; our official logos, and the unique look, feel, and design of the Platform.</p>

<p>(B) Use of Closerrr Trademarks &amp; Branding<br>(a) Except as expressly permitted by the limited license in subsection (c) below, you may not use the Closerrr name, logo, brand elements, trademarks, or service marks (collectively, &ldquo;Brand Assets&rdquo;) in any public-facing communication, marketing, merchandise, profile bio, or third-party content without receiving prior written approval from Closerrr.<br>(b) Approved usage of Brand Assets must follow the official Closerrr Brand Guidelines, if made available. Any deviation may result in immediate withdrawal of usage rights.</p>
<p>(c) We grant you a limited, non-exclusive, non-transferable, non-sublicensable, and fully revocable license to use the Closerrr Marks for the sole purpose of identifying yourself as a Creator on the Platform and promoting your official Closerrr profile on other social media channels or personal websites. Any other use is strictly prohibited.<br>(d) Unauthorized or misleading association with the Closerrr brand &mdash; including endorsements, partnerships, or sponsorships that have not been explicitly approved &mdash; constitutes a material breach of these Terms.</p>

<p>(C) Creator Content Ownership<br>(a) As set forth in Section 8 (Content Ownership &amp; Licensing to Closerrr), you retain ownership of all original content created and uploaded by you on the Platform.<br>(b) However, by using the Platform, you grant Closerrr a license to use your content in accordance with the terms of Section 8 (Content Ownership &amp; Licensing to Closerrr).</p>

<p>(D) Infringement Reporting &amp; IP Protection<br>(a) If you believe that your copyrighted work, trademark, or other intellectual property has been used or published on the Platform without proper authorization, you may report such instances to Closerrr by contacting our support team via the official email with a detailed notice. Closerrr will evaluate such complaints in accordance with its internal takedown procedure and applicable legal standards.<br>(b) You acknowledge that Closerrr may, at its discretion, remove allegedly infringing content or suspend the associated Creator Account pending review.</p>
<p>(c) Creators are strictly prohibited from uploading, publishing, or distributing any content that infringes upon the intellectual property rights of any third party, including but not limited to copyrights, trademarks, design rights, or trade secrets.</p>
<p>(d) The submission of a false or malicious IP claim may itself result in enforcement action, including legal liability or Termination of the reporting party&rsquo;s account.</p>

<p>(E) No License by Implication<br>Except as expressly provided in these Terms, no license, right, or interest is granted to the Creator by implication, estoppel, or otherwise in or under any patent, trademark, copyright, or other intellectual property of Closerrr.</p>

<p>(F) Brand Guidelines and Quality Control</p>
<p>All use of the Closerrr Marks must comply with any brand usage guidelines that we may publish or provide from time to time. We reserve the right to review your use of our Marks and to require any modifications necessary to ensure compliance and quality control.</p>

<p>(G) Termination of License</p>
<p>This limited license will automatically terminate immediately upon the suspension or termination of your Creator Account. Upon termination, you must immediately cease all use of the Closerrr Marks in any and all media. Closerrr also reserves the right to terminate this license at any time, for any reason, in its sole discretion.</p>
<br/>
<p><strong>20. Indemnification:</strong></p>
<br/>
<p>(A) Creator&rsquo;s Indemnity Obligations<br>You agree to indemnify, defend, and hold harmless Closerrr Interactive Private Limited, its affiliates, directors, officers, employees, agents, licensors, and service providers (collectively, &ldquo;Indemnified Parties&rdquo;) from and against any and all third-party claims, liabilities, losses, damages, costs, and expenses (including reasonable legal and attorney&rsquo;s fees) arising out of or related to:</p>
<p>(a) Your use or misuse of the Platform or any of its creator-facing tools, features, or services;<br>(b) Any Content you upload, publish, transmit, or distribute via the Platform;<br>(c) Your breach or alleged breach of any representation, warranty, or obligation under these Terms;<br>(d) Your violation of any Applicable Law, rule, regulation, or third-party right, including without limitation any intellectual property, privacy, publicity, or contractual rights;<br>(e) Any disputes between you and any Subscriber, or between you and any third party arising from your conduct on or in connection with the Platform.</p>

<p>(B) Notification and Cooperation<br>In the event of a claim for which Closerrr seeks indemnification under this section, we shall provide you with reasonably prompt written notice. You shall cooperate fully in the defense and resolution of such claims. Closerrr reserves the right, at its own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you. In such cases, you shall not settle any claim without Closerrr&rsquo;s prior written consent.</p>

<p>(C) No Waiver of Other Remedies<br>The indemnification rights under this section are in addition to, and not in lieu of, any other remedies available to Closerrr under these Terms, at law, or in equity.</p>

<p>(D) Survival<br>These indemnification obligations shall survive the termination, suspension, or expiration of your Creator Account and these Terms.</p>
<br/>
<p><strong>21. Limitation of Liability:</strong></p>
<br/>
<p>(A) Exclusion of Certain Damages<br>To the fullest extent permitted by Applicable Law, Closerrr and its affiliates, officers, directors, employees, agents, or licensors shall not be liable to you for any indirect, incidental, special, consequential, punitive, or exemplary damages of any kind. This includes, without limitation, damages for lost profits, lost revenue, goodwill, loss of data, service interruption, computer damage, or system failure arising out of or in connection with:<br>(a) your use of or inability to use the Platform;<br>(b) any Platform downtime or error;<br>(c) any act or omission by a Subscriber or third party;<br>(d) any content you create, publish, or interact with on the Platform; or<br>(e) unauthorized access, use, or alteration of your transmissions or data.</p>

<p>(B) Maximum Liability Cap<br>To the extent Closerrr is found liable under any theory of liability, our aggregate liability to you for all claims arising out of or relating to these Terms or your use of the Platform shall not exceed the lesser of:<br>(a) the total amount of Payouts paid to you by Closerrr in the three (3) months preceding the claim; or<br>(b) INR 10,000 (Indian Rupees Ten Thousand only).</p>

<p>(C) Third-Party Platforms and Dependencies<br>Closerrr expressly disclaims all liability for the acts, omissions, policies, or outages of third-party service providers, including but not limited to App Stores, cloud hosting providers, payment processors, and mobile operating systems. Your use of such services is governed solely by their respective terms and conditions.</p>

<p>(D) No Guarantee of Revenue or Results<br>Closerrr makes no guarantee regarding the level of visibility, revenue, engagement, subscriber count, or any specific outcome resulting from your presence on the Platform. Algorithmic placement, fan discovery, and monetization are influenced by various dynamic factors outside Closerrr&rsquo;s control.</p>

<p>(E) Jurisdictional Limitations<br>Some jurisdictions may not allow the exclusion of certain warranties or limitations on liability. In such cases, the exclusions and limitations in this Section shall apply to the fullest extent permitted by law.</p>

<p>(F) Platform Provided &ldquo;As Is&rdquo;<br>You acknowledge that the Platform and all related services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. Closerrr disclaims all express or implied warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee uninterrupted access, error-free functionality, or the absence of harmful components. Your use of the Platform is solely at your own risk.</p>
<br/>
<p><strong>22. Force Majeure:</strong></p>
<br/>
<p>(A) Events Beyond Reasonable Control<br>Closerrr shall not be held liable for any failure or delay in performing its obligations under these Terms to the extent such failure or delay is caused by circumstances beyond its reasonable control, including but not limited to: acts of God, natural disasters, earthquakes, floods, fires, epidemics or pandemics, war, terrorism, civil unrest, government actions, labor strikes or lockouts, infrastructure failures, power outages, internet or telecommunications disruptions, denial-of-service attacks, or failures of hosting providers, payment processors, or app store operators (&ldquo;Force Majeure Events&rdquo;).</p>

<p>(B) Notice Requirement<br>In the event of a Force Majeure Event, Closerrr will make reasonable efforts to notify affected Creators via email, or in-app message, detailing the nature and expected duration of the disruption, where feasible.</p>

<p>(C) Suspension of Obligations<br>During the continuation of any Force Majeure Event, Closerrr&rsquo;s obligations under these Terms shall be suspended to the extent they are impacted by such event, and no breach or default shall be deemed to have occurred as a result of such suspension or delay.</p>

<p>(D) No Creator Compensation<br>Creators acknowledge that they shall not be entitled to compensation, refunds, additional payouts, or extensions of service due to any suspension, limitation, or modification of Platform access resulting from a Force Majeure Event.</p>

<p>(E) Termination for Extended Events<br>If a Force Majeure Event continues for a period exceeding thirty (30) consecutive days and materially impairs Closerrr&rsquo;s ability to operate the Platform or provide core services, Closerrr reserves the right to terminate or modify certain features or functionalities, without liability, by providing notice via available communication channels.</p>

<br/>
<p><strong>23. Assignment &amp; Transferability:</strong></p>
<br/>
<p>These Terms, and the rights and licenses granted hereunder, are personal to you, the Creator.</p>

<p>(A) No Assignment by Creator</p>
<p>(a) You may not assign, delegate, transfer, sublicense, or otherwise dispose of your rights or obligations under these Terms &mdash; whether voluntarily, by operation of law, or otherwise &mdash; without Closerrr&rsquo;s prior written consent.</p>
<p>(b) Any attempted assignment or transfer in violation of this section shall be null, void, and constitute a material breach of these Terms.</p>

<p>(B) Platform&rsquo;s Right to Assign</p>
<p>Closerrr may assign or transfer these Terms, or any of its rights or obligations hereunder, in whole or in part, without restriction or obligation to notify you &mdash; including but not limited to in the event of a merger, acquisition, corporate restructuring, or sale of assets.</p>

<p>(C) Binding Effect</p>
<p>These Terms shall be binding upon and inure to the benefit of the Parties and their respective permitted successors and assigns.</p>
<br/>
<p><strong>24. Notices &amp; Communication:</strong></p>
<br/>
<p>(A) Official Communication Channels<br>(a) All legal notices, formal correspondence, and required communications from Closerrr to you shall be sent via email to the most recent email address associated with your Creator Account.<br>(b) It is your responsibility to maintain an accurate, active, and regularly monitored email address on file with Closerrr at all times.<br>(c) Any notice sent by Closerrr shall be deemed received by you upon transmission, unless Closerrr receives a delivery failure notification within 24 hours of sending.</p>

<p>(B) Service Announcements &amp; Operational Updates<br>(a) Closerrr may communicate changes to these Terms, updates to Platform features, policy modifications, billing cycles, or other operational information via one or more of the following means:<br>(i) in-app notifications,<br>(ii) banners or updates within Creator-accessible sections of the app,<br>(iii) push notifications, or<br>(iv) email correspondence.<br>(b) You acknowledge and agree that continued use of the Platform after receipt of such communication shall constitute binding acceptance of the communicated change, regardless of whether you actively reviewed the content.</p>

<p>(C) Creator-Initiated Communication<br>(a) For any matter requiring formal attention (e.g., legal disputes, account termination requests, tax documentation updates), you must initiate communication via your registered email ID to creatorcare@closerrr.com.<br>(b) Informal outreach via social media or personal contact with Closerrr personnel will not be deemed valid or binding unless explicitly acknowledged by Closerrr in writing.</p>

<p>(D) Language &amp; Format<br>(a) All official communication between the Parties shall be conducted in English unless Closerrr specifies an alternate format or language in writing.<br>(b) Closerrr reserves the right to require that legal notices be physically signed, notarized, or submitted in a format compliant with applicable legal or regulatory frameworks, particularly in case of disputes, audits, or compliance-related matters.</p>
<br/>
<p><strong>25. Modifications to Terms &amp; Platform Features:</strong></p>
<br/>
<p>(A) Right to Modify Terms<br>(a) Closerrr reserves the right, at its sole discretion, to update, modify, or revise these Terms (in whole or in part) at any time and for any reason, including to reflect changes in Applicable Law, business practices, feature offerings, or service models.<br>(b) Any such modifications shall become effective upon:<br>(i) Posting the updated Terms on the official Closerrr website or within the Creator-accessible sections of the app; and<br>(ii) Providing reasonable notice via in-app notifications, email, or other communication channels as deemed appropriate by Closerrr.</p>

<p>(B) Acceptance of Revised Terms<br>(a) Continued access to or use of the Platform after the effective date of revised Terms shall constitute your binding acceptance of the modifications.<br>(b) If you do not agree to the amended Terms, your sole and exclusive remedy is to discontinue your use of the Platform and request account termination in accordance with Section 15 (Account Suspension, Termination &amp; Withdrawal).</p>

<p>(C) Platform Feature Changes<br>(a) Closerrr retains full discretion to add, modify, restrict, or discontinue any Platform features, services, tools, or interfaces (including Creator monetization mechanisms, analytics modules, or communication features) without prior notice.<br>(b) Such changes may occur as part of technical upgrades, performance improvements, compliance efforts, or user experience optimization.<br>(c) You acknowledge and agree that feature availability may vary across users or regions and that no guarantee is made regarding uniform access, continuity, or visibility.</p>

<p>(D) No Obligation to Maintain Backward Compatibility<br>Closerrr makes no representations or warranties that future updates will remain compatible with any earlier versions of the app, tools, or integrations. Creators are solely responsible for keeping their devices, app versions, and usage practices aligned with the latest supported configurations.</p>

<p><strong>Effective Date:</strong> 14/02/2025&nbsp;</p>
<p><strong>Last Updated:</strong> 08/05/2026</p>
<br/>
<p><strong>26. Audit Rights &amp; Compliance Reviews:</strong></p>
<br/>
<p>(A) Right to Audit and Review<br>(a) To ensure the integrity of the Platform and compliance with these Terms, you acknowledge and agree that Closerrr reserves the right, at its sole discretion, to conduct periodic audits and compliance reviews of your Creator Account and Content to verify compliance with these Terms, Platform policies, and applicable legal or tax obligations.<br>(b) Such reviews may be initiated at any time, with or without prior notice, and may be triggered by:<br>(i) Specific reports from users or Subscribers;<br>(ii) Platform-generated flags, suspicious activity, or fraud-detection alerts;<br>(iii) Randomized platform-wide reviews;<br>(iv) System integrity, moderation, or legal obligations;<br>(v) Any other event Closerrr deems reasonably sufficient to justify a review.</p>

<p>(B) Scope of Audit<br>(a) An audit or compliance review may include, but is not limited to:<br>(i) A review of your published Content to ensure compliance with our Content Guidelines (Section 5 (Content Publishing &amp; Platform Usage)) and Prohibited Conduct rules (Section 13 (Prohibited Conduct));<br>(ii) Evaluation of interactions, messaging, Closerrr Streak data, or engagement metrics to detect manipulation or fraudulent activity;<br>(iii) Examination of onboarding and identity verification records to ensure continued validity and consistency;<br>(iv) Review of your financial activity, including payout tiers, active Subscriber counts, and revenue triggers;<br>(v) Any other account usage indicators that may relate to these Terms or Applicable Law;<br>(vi) A review of both on-platform and relevant off-platform conduct to the extent it affects user safety, reputation, or operational trust.</p>

<p>(C) Creator&rsquo;s Obligation to Cooperate<br>(a) If Closerrr initiates an audit or compliance review of your account, you agree to fully cooperate in good faith and provide all reasonably requested information.<br>(b) This may include:<br>(i) Verifying the originality or authorship of published Content;<br>(ii) Confirming the validity of your identity or prior declarations;<br>(iii) Clarifying prior messages, posts, or comments flagged in dispute;<br>(iv) Providing an explanation of off-platform promotion tactics, if relevant;<br>(v) Providing documents, account details, clarification responses, and any other supporting material reasonably requested.<br>(c) Failure to respond to audit communications within the specified timelines may result in account Suspension, withholding of Payouts, or other enforcement action as described in Section 15 (Account Suspension, Termination &amp; Withdrawal).</p>

<p>(D) Consequences of Audit Findings<br>(a) If an audit or review confirms any violation of these Terms &mdash; including misconduct, breach of Community Guidelines, or regulatory non-compliance &mdash; Closerrr may take enforcement actions, including but not limited to:<br>(i) Suspension or Termination of your Creator Account;<br>(ii) Withholding or clawback of earnings for the affected revenue period(s);<br>(iii) Downgrading of commission tier or visibility ranking;<br>(iv) Permanent disqualification from promotional campaigns, features, or internal creator programs;<br>(v) Legal action or referral to applicable law enforcement or regulatory bodies.<br>(b) You will not be entitled to compensation or reimbursement for time, access restrictions, or damages arising out of any audit-related action, even if no breach is ultimately confirmed.</p>

<p>(E) Audit Records and Retention<br>(a) Closerrr may retain audit-related records and logs for evidentiary and compliance purposes, subject to its Privacy Policy and data retention protocols.<br>(b) Creators shall not attempt to erase, hide, tamper with, or misrepresent any account activity or data relevant to an audit.</p>
<br/>
<p><strong>27. Publicity Rights &amp; Promotional Usage:</strong></p>
<br/>
<p>(A) Grant of Rights to Closerrr<br>(a) By joining the Platform as a Creator, you grant Closerrr a worldwide, royalty-free, non-exclusive, and revocable license to use your name, public profile photo, likeness, biographical references, Creator username, voice, and other identifying elements (&ldquo;Public Persona&rdquo;) for the sole purpose of promoting your Creator Account and the Closerrr Platform.<br>(b) This may include screenshots or short clips of publicly accessible Content you&rsquo;ve posted, provided such use is limited to promotional materials and does not materially misrepresent you or your association with Closerrr.<br>(c) These rights are granted for the express purpose of marketing, advertising, and promoting the Closerrr Platform and its Services across any and all media channels, including but not limited to app store listings, social media posts, websites, press releases, case studies, and investor materials.</p>

<p>(B) No Endorsement or Paid Obligation<br>(a) This license shall not be interpreted as an endorsement agreement or paid advertisement unless separately contracted in writing.<br>(b) Closerrr will not make any false or misleading representation of your association or imply a commercial sponsorship arrangement without prior consent.<br>(c) You waive any right to royalties, attribution, or additional consideration for such use unless expressly required under Applicable Law.</p>

<p>(C) Right to Opt-Out of Promotions<br>(a) You may formally opt out of certain promotional usage of your Public Persona by writing to our support team at any time, though this may impact opportunities for feature placement or campaign inclusion.<br>(b) Opt-out requests will only apply prospectively and will not require Closerrr to recall, remove, or delete any previously used marketing assets that have already been distributed.<br>(c) You are encouraged to promote your Creator Account through your personal channels (e.g., other social media platforms), subject to the license and restrictions outlined in Section 19 (Intellectual Property &amp; Trademark Usage).</p>

<p>(D) Responsible Promotional Claims<br>(a) When promoting your Closerrr profile externally, you shall not make any false, misleading, or exaggerated claims about Platform features, Subscriber benefits, expected earnings, or platform affiliations.<br>(b) Any external promotion must reflect the actual functionality and monetization policies of the Platform.</p>

<p>(E) Survival of Rights<br>Even if your Account is later withdrawn, suspended, or Terminated, Closerrr may retain and continue to use previously created marketing material (such as banners, social posts, or campaign assets) that were created during the period your account was active, so long as no new assets are created using your Public Persona thereafter.</p>
<br/>
<p><strong>28. Entire Agreement &amp; Severability:</strong></p>
<br/>
<p>(A) Entire Agreement<br>(a) These Terms, along with the Closerrr Creator Privacy Policy and any additional guidelines, rules, or notices explicitly incorporated herein by reference (collectively, the &ldquo;Agreement&rdquo;), constitute the complete and exclusive understanding and agreement between you and Closerrr with respect to your access to and use of the Platform as a Creator.<br>(b) This Agreement supersedes any prior or contemporaneous understandings, communications, proposals, or agreements, whether oral or written, relating to the subject matter herein.</p>

<p>(B) No Informal Modifications<br>No oral or informal statements, guidance, or correspondence &mdash; including those from Closerrr support, onboarding staff, or internal team members &mdash; shall be deemed to modify or amend any provision of this Agreement unless formally documented and issued in writing by authorized Closerrr personnel.</p>

<p>(C) Severability<br>If any provision of this Agreement is found to be invalid, unlawful, or unenforceable by a court or regulatory authority of competent jurisdiction, that provision shall be severed from the remainder of the Agreement. The remaining provisions shall remain in full force and effect and shall be interpreted so as to best give effect to the original intent of the Parties.</p>

<p>(D) No Waiver of Rights<br>Any failure by Closerrr to enforce any right or provision under these Terms shall not constitute a waiver of such right or provision. No waiver shall be effective unless in writing and signed by an authorized representative of Closerrr.</p>
<br/>
<p><strong>29. Governing Law &amp; Jurisdiction:</strong></p>
<br/>
<p>(A) Governing Law<br>These Terms shall be governed by and construed in accordance with the laws of the Republic of India, without regard to its conflict of law principles. All legal rights, remedies, and interpretations shall be subject to Indian statutory and judicial frameworks.</p>

<p>(B) Jurisdiction &amp; Venue<br>All disputes, claims, or proceedings arising out of or relating to these Terms, including the interpretation, enforceability, or alleged breach thereof, shall be subject to the exclusive jurisdiction of the competent courts located in Bhopal, Madhya Pradesh, India. You hereby irrevocably submit to the jurisdiction of such courts and waive any objection based on improper venue or forum non conveniens.</p>

<p>(C) Right to Seek Injunctive Relief<br>Nothing in this section shall restrict Closerrr&rsquo;s right to seek urgent injunctive or equitable relief in any jurisdiction, where necessary, to prevent actual or threatened misuse of its intellectual property, confidential information, or user safety systems.</p>

<p>(D) Survival<br>This Section shall survive the suspension, withdrawal, or termination of your Creator Account and continue to remain binding thereafter.</p>
<br/>
<p><strong>30. Governing Language:</strong></p>
<br/>
<p>(A) Authoritative Version</p>
<p>(a) These Terms and all related documents, notices, and communications are originally drafted and published in the English language, which shall be the sole authoritative language governing interpretation, enforcement, and dispute resolution.<br>(b) Any translated versions of these Terms or associated materials are provided for informational purposes only and shall not be deemed legally binding or controlling.</p>

<p>(B) Discrepancies Between Translations</p>
<p>(a) In the event of any inconsistency, ambiguity, or conflict between the English version and any translated version of these Terms or supplemental materials, the English version shall prevail in all respects.<br>(b) Your continued access to and use of the Platform as a Creator is expressly conditioned upon your understanding and acceptance of the English version of these Terms.</p>

<p>(C) Creator Responsibility</p>
<p>Creators who are not proficient in English bear sole responsibility for obtaining independent translation or legal consultation to fully understand the Terms prior to relying on or agreeing to them.</p>

`;

function CreatorTAndC() {
  useEffect(() => {
    document.title = "Creator Terms & Conditions | Closerrr";
    return () => {
      document.title = "Closerrr";
    };
  }, []);

  return (
    <div className="bg-secondary-500 min-h-screen">
      <div className="px-4 sm:px-8 lg:px-32 py-10 sm:py-20 flex items-center flex-col w-full">
        <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-creator-heading-lg text-center text-customPink-500 mt-10 sm:mt-20 font-hellix-bold">
          <span className="font-fredoka text-customPurple-500">Closerrr</span>{" "}
          Creator Terms & Conditions
        </h1>
        <div
          className="font-hellix-medium terms-content text-sm sm:text-base lg:text-[1.5rem] leading-relaxed sm:leading-[2rem] lg:leading-[2.5rem] text-customBrown-500 mt-6 sm:mt-10 w-full max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
      <motion.div
        className="w-full min-h-[16vw] flex justify-center pb-8 sm:pb-16"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.img
          className="w-[40vw] sm:w-[30vw] md:w-fit md:h-fit mt-16"
          src="/Group-end.svg"
          alt=""
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </div>
  );
}

export default CreatorTAndC;
