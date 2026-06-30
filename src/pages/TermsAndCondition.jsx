import { useEffect } from "react";
import { motion } from "framer-motion";

const htmlContent = `
<ul>
<li><strong>1. Introduction:</strong></li>

</ul>
<p>Welcome to Closerrr! These Terms and Conditions (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;you&rdquo; or &ldquo;User&rdquo;) and Closerrr Interactive Private Limited, a company incorporated under the laws of India (hereinafter referred to as &ldquo;Closerrr,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), a digital service platform that provides exclusive, subscription-based access to content and interactions with selected public personalities, available through its mobile application, website, and affiliated digital services (collectively, the &ldquo;Services&rdquo;).</p>
<p>By accessing, installing, registering for, or otherwise using the Services, you expressly acknowledge that you have read, understood, and agree to be bound by these Terms in their entirety, including any supplemental terms, policies, or documentation referenced herein. If you do not accept or agree to these Terms in full, you are prohibited from accessing or using any portion of the Services and must immediately discontinue all use.</p>
<p>You further affirm that you are entering into this agreement on your own behalf, or if acting on behalf of an entity or minor (where applicable and permitted by law), that you possess the requisite authority and consent to do so. The Services are provided solely for lawful use by individuals who satisfy the eligibility criteria outlined below. Unauthorized or unlawful use of the Services is strictly prohibited.</p>
<p>Your continued use of the Services constitutes your ongoing acceptance of these Terms and any modifications thereto. These Terms shall remain in full force and effect for as long as you access or use the Services, and shall survive termination of such use where applicable.</p>
</br>
<p>These Terms also incorporate and constitute Closerrr&rsquo;s End User License Agreement (&ldquo;EULA&rdquo;), which governs your licensed use of the Closerrr mobile application and affiliated digital services. For more information, refer to Section 7 (Software License &amp; Restrictions (EULA)).</p>
<p class="custom-heading">Eligibility</p>
<p>Access to and use of the Services is strictly limited to individuals who satisfy all of the following criteria at the time of registration and throughout the duration of their use:</p>
<p>(A) You must have attained the minimum legal age required to form a binding contract in your jurisdiction, which shall be no less than thirteen (13) years of age or the equivalent threshold established under applicable local, state, or national law, whichever is higher.</p>
<p>(B) You must possess the full legal capacity and authority to enter into and be bound by these Terms, and to comply with all applicable laws, rules, and regulations in the jurisdiction from which you access the Services.</p>
<p>(C) You must not be a person who is barred from using or accessing the Services under the laws of India, the jurisdiction in which you reside, or any other applicable jurisdiction, including (without limitation) by reason of age, criminal record, or sanctions.</p>
<p>(D) If you are below the age of majority in your jurisdiction of residence, you hereby represent and warrant that you have obtained the explicit, informed, and verifiable consent of a parent or legal guardian to use the Services, and that such consent shall be made available to Closerrr upon reasonable request.</p>
<p>(E) Closerrr reserves the right, at its sole discretion and without obligation, to request proof of eligibility, including age verification, identity verification, or documentation of parental or guardian consent. Failure to provide satisfactory evidence upon request may result in suspension, restriction, or termination of your access to the Services, without liability.</p>
<p>Use of the Services in violation of this section shall constitute a material breach of these Terms, and may result in the immediate revocation of your right to access or utilize any portion of the Services.</p>
<br/>
<p><strong>2. Definitions:</strong></p>
<br/>
<p>(A) &ldquo;Account&rdquo;<br /> Refers to a registered user profile created on the Platform by an individual, whether as a Subscriber or a Friend, that enables access to and usage of the Services offered by the Company.</p>
<p>(B) &ldquo;Applicable Law&rdquo;<br /> Means all laws, statutes, rules, regulations, ordinances, and other pronouncements having the effect of law of any governmental authority or regulatory body having jurisdiction over the Platform, the Services, or any party to these Terms, including but not limited to data protection, intellectual property, and consumer protection laws.</p>
<p>(C) &ldquo;Closerrr,&rdquo; &ldquo;We,&rdquo; &ldquo;Us,&rdquo; or &ldquo;Company&rdquo;<br /> Refers to Closerrr Technologies Private Limited, its subsidiaries, affiliates, successors, and assigns, including all platforms, services, and intellectual property it owns or operates.</p>
<p>(D) &ldquo;Content&rdquo;<br /> Means all forms of data, information, messages, images, audio, video, media, text, emojis, links, documents, metadata, or other material&mdash;whether posted, shared, transmitted, recorded, downloaded, or stored&mdash;by Users, Friends, or the Platform itself.</p>
<p>(E) &ldquo;Device&rdquo;<br /> Means any mobile phone, tablet, computer, or other electronic device used to access the Platform or Services.</p>
<p>(F) &ldquo;Dispute&rdquo;<br /> Shall refer to any claim, controversy, cause of action, or legal disagreement arising out of, or relating to, the Terms, Services, or any conduct of the parties governed by this Agreement.</p>
<p>(G) &ldquo;Effective Date&rdquo;<br /> Means the date on which these Terms were last updated, as specified at the end of this document.</p>
<p>(H) &ldquo;Friend&rdquo;<br /> Refers to a verified individual on Closerrr who shares content, interacts with Subscribers, and avails the Platform's services in a creator, celebrity, influencer, artist, or public figure capacity. All content shared by a Friend remains their sole intellectual property.</p>
<p>(I) &ldquo;Intellectual Property Rights&rdquo;<br /> Means all rights arising under patent law, copyright law, trademark law, design law, trade secret law, and any and all other proprietary rights, including but not limited to moral rights, privacy rights, publicity rights, and database rights, under any applicable legal system.</p>
<p>(J) &ldquo;Personal Data&rdquo;<br /> Means any data that directly or indirectly identifies an individual, including but not limited to name, phone number, email address, IP address, geolocation data, payment information, or other identifiers, as further described in the Privacy Policy.</p>
<p>(K) &ldquo;Platform&rdquo;<br /> Means the Closerrr mobile application, website, associated APIs, backend infrastructure, and all digital properties operated or controlled by the Company.</p>
<p>(L) &ldquo;Services&rdquo;<br /> Means all features, functionalities, products, subscriptions, communications, interactions, support systems, and related offerings made available through the Platform.</p>
<p>(M) &ldquo;App&rdquo;<br /> Means the Closerrr mobile application available for download on authorized digital storefronts, including but not limited to the Apple App Store and Google Play Store, together with all associated updates, software code, user interfaces, content, and documentation provided by Closerrr.</p>
<p>(N) &ldquo;Subscriber&rdquo;<br /> Refers to a registered user who subscribes to a Friend, purchases access to their content, or interacts with the Platform through paid or unpaid means.</p>
<p>(O) &ldquo;Subscription&rdquo;<br /> Means a time-bound access to a Friend&rsquo;s content or features made available on the Platform in exchange for a recurring fee, subject to the Subscription &amp; Payment terms outlined herein.</p>
<p>(P) &ldquo;Terms&rdquo; or &ldquo;Terms and Conditions&rdquo;<br /> Means this entire legally binding agreement between the Company and the User, including all sections, updates, amendments, annexures, and references incorporated herein.</p>
<p>(Q) &ldquo;User,&rdquo; &ldquo;You,&rdquo; or &ldquo;Your&rdquo;<br /> Means any individual accessing or using the Platform or Services, whether as a Subscriber, Friend, or visitor, regardless of whether such access is via paid or unpaid means.</p>
<ul>
<br/>
<p><strong>3. Account Registration &amp; Management:</strong></p>
<br/>
</ul>
<p>(A) Account Creation and Accuracy of Information<br /> (a) In order to access and utilize the Services, Users are required to register for an account by submitting accurate, current, and complete information, including (but not limited to) a valid email address, a user-selected nickname, and a secure password.<br /> (b) Users may be permitted to add supplementary profile details for personalization purposes.<br /> (c) By registering, you represent and warrant that all information provided during the registration process is truthful, accurate, and not misleading.</p>
<p>(B) Account Credentials and Security Obligations<br /> (a) You are solely and exclusively responsible for maintaining the confidentiality and integrity of your account credentials, including passwords, authentication methods, and recovery settings.<br /> (b) You acknowledge that any activity conducted through your account shall be deemed to have been undertaken by you, regardless of whether such activity was authorized by you or a third party.<br /> (c) You agree to immediately notify Closerrr at [hello@closerrr.com] of any actual or suspected unauthorized access, use, or security breach concerning your account.<br /> (d) Closerrr shall not be liable for any losses, damages, liabilities, or claims arising from your failure to secure your account credentials.</p>
<p>(C) Prohibited Account Activities<br /> (a) You expressly agree not to engage in any of the following activities:<br /> (i) Creating or maintaining more than one account per individual for the purpose of manipulation, circumvention of rules, or other deceptive or abusive purposes;<br /> (ii) Selling, renting, transferring, sublicensing, or assigning your account or any access credentials to any third party, whether for commercial or non-commercial purposes;<br /> (iii) Impersonating, misrepresenting, or falsely presenting yourself as another person, Friend, organization, or entity;<br /> (iv) Registering an account using false information, or for the purpose of evading prior bans, suspensions, or violations.</p>
<p>(D) Rights Reserved by Closerrr<br /> (a) Closerrr reserves the unilateral right, without prior notice or liability, to:<br /> (i) Suspend, restrict, or terminate your account and access to the Services for violations of these Terms, suspected fraudulent activity, or behavior detrimental to the platform's integrity;<br /> (ii) Reclaim or deactivate usernames or nicknames deemed inappropriate, misleading, or in violation of third-party rights;<br /> (iii) Implement account verification procedures at any time, including (but not limited to) email verification, device authentication, or identity checks.<br /> (b) The creation and use of a Closerrr account constitutes acceptance of these Terms in full.<br /> (c) All account-related decisions made by Closerrr shall be final, binding, and exercised in its sole discretion.</p>
<ul>
<br/>
<p><strong>4. Subscription &amp; Payment:</strong></p>
<br/>
</ul>
<p>(A) Subscription Structure</p>
<p>(a) Access to exclusive content, features, and communication tools on the Closerrr platform is provisioned solely through paid subscription plans associated with individual Friends (as defined elsewhere herein). The standard subscription price applicable to each Friend profile is â‚¹349 (INR) per calendar month, unless otherwise expressly modified through in-app promotional mechanisms or limited-term adjustments determined at the sole discretion of Closerrr.</p>
<p>(b) All subscriptions shall be activated immediately upon successful completion of payment processing and are structured on an automatically renewing monthly cycle, subject to applicable taxes and transaction fees, unless otherwise suspended, cancelled, or terminated in accordance with these Terms.</p>
<p>(B) Automatic Renewal and User-Initiated Cancellation</p>
<p>(a) Subscriptions shall renew automatically on a monthly basis, and the applicable subscription fee shall be charged to the payment method on file on the renewal date unless the User has cancelled the subscription prior to such renewal.</p>
<p>(b) Cancellation of an active subscription must be executed through the in-app interface by navigating to Settings &gt; Friends &gt; Selecting the relevant Friend &gt; Clicking &ldquo;Remove Friend.&rdquo; Cancellations are effective at the conclusion of the current billing cycle; no pro-rata refunds will be issued.</p>
<p>(c) Upon cancellation, the User shall retain access to the subscribed Friend&rsquo;s content and features until the conclusion of the existing billing period.</p>
<p>(d) After the billing period concludes, the User shall enter a grace continuation window of seven (7) calendar days during which the subscription may be reinstated without forfeiture of associated user data or Closerrr Streak (a feature defined elsewhere herein).</p>
<p>(e) Failure to resubscribe within said continuation period shall result in irreversible deletion of all data, subscription history, and the Closerrr Streak associated with that Friend.</p>
<p>(C) No Refund Policy</p>
<p>(a) All subscription transactions, once processed, shall be deemed final and non-refundable under any circumstances, including but not limited to premature cancellation, unintentional renewal, duplicate subscription, or changes in User intent.</p>
<p>(b) Users are solely responsible for managing renewal settings and payment authorizations. Closerrr disclaims all liability for charges resulting from User inaction, mismanagement, or oversight.</p>
<p>(c) In the event of Friend account deletion, suspension, or removal of content by a Friend or by Closerrr for any reason&mdash;including but not limited to Terms violations, inactivity, or voluntary departure&mdash;no refund shall be issued to any associated subscribers.</p>
<p>(d) Subscription fees are strictly non-transferrable, non-deferrable, and not subject to future service credit or exchange.</p>
<p>(e) Closerrr reserves the unilateral right to adjust subscription fees, billing schedules, and payment mechanisms, with reasonable prior notice provided via in-app notification or other communication channels, and continued use of the Service following such changes shall constitute acceptance thereof.</p>
<ul>
<br/>
<p><strong>5. User Conduct &amp; Restrictions:</strong></p>
<br/>
</ul>
<p>(A) As a condition precedent to continued access and usage of the Services, you expressly agree to conduct yourself in a lawful, respectful, and non-disruptive manner at all times. You further acknowledge that your interactions&mdash;whether with other Users, Friends, or the platform itself&mdash;must remain in strict compliance with these Terms and all applicable legal, regulatory, and ethical standards.</p>
<p>(B) You shall not, directly or indirectly, engage in or facilitate any of the following prohibited behaviors, including but not limited to:</p>
<p>(i) Harassment, defamation, intimidation, threats, or abuse of any individual or entity, whether by message, media, or conduct.</p>
<p>(ii) Misrepresentation of your identity, including impersonating other Users, Friends, representatives of Closerrr, or third-party persons or organizations.</p>
<p>(iii) Unauthorized reproduction, public sharing, redistribution, or commercial exploitation of any content, media, or communication originating from Friends or the platform, including screenshots, recordings, or reposts.</p>
<p>(iv) Deployment of malicious software, bots, automation tools, or scripts with the intent to manipulate platform behavior, access unauthorized content, or interfere with service integrity.</p>
<p>(v) Use of the Services in connection with activities that are unlawful, exploitative, defamatory, obscene, fraudulent, or otherwise violate applicable statutes or community norms.</p>
<p>(vi) Engagement in spam, phishing, deceptive practices, or schemes that may mislead or exploit other Users or Friends.</p>
<p>(vii) Violation or attempted circumvention of any copyright, trademark, trade secret, or other intellectual property rights of Closerrr, Friends, or third parties.</p>
<p>(C) Closerrr reserves the unilateral right to investigate, restrict, suspend, or permanently terminate access to any account or User it reasonably believes to be engaging in or facilitating conduct inconsistent with the above restrictions, with or without prior notice, and without any obligation to disclose the basis or evidence thereof.</p>
<p>(D) Users acknowledge that enforcement actions taken under this section are final and binding, and that Closerrr shall not be liable for any resulting loss of access, data, or subscription value arising from disciplinary actions deemed necessary in its sole discretion to preserve platform safety, integrity, and user trust.</p>
<p>(E) Messaging &amp; Interaction Limits<br /> Your ability to interact with Friends on the Platform, including through private messages and story replies, is subject to certain limitations designed to ensure quality and fairness in engagement. For each individual Friend you are subscribed to, you may send up to three (3) messages per twenty-four (24) hour period, with each message limited to one hundred (100) characters.<br /> This per-Friend limit applies cumulatively to all forms of communication within the Platform, including but not limited to:<br /> (a) Direct messages initiated by you, and<br /> (b) Replies to Friend stories posted within the Platform.<br /> Exceeding this limit for a specific Friend will result in temporary restriction on further messaging to that Friend until the reset period elapses. These limits are enforced uniformly and are not bypassable by uninstalling, logging out, or attempting to message via story replies.</p>
<ul>
<br/>
<p><strong>6. Content Ownership &amp; Usage:</strong></p>
<br/>
</ul>
<p>(A) User-Generated Content</p>
<p>(a) You acknowledge and agree that any material, communication, data, text, images, audio, video, feedback, or other content ("User Content") voluntarily submitted, transmitted, or posted by you on or through the Services shall remain your sole responsibility. You shall bear full legal and reputational accountability for all such content, regardless of its visibility, duration, or intended audience.</p>
<p>(b) By submitting or posting User Content on Closerrr, you expressly grant the Company and its designated affiliates a non-exclusive, worldwide, royalty-free, perpetual, irrevocable, transferable, and sublicensable license to host, store, reproduce, distribute, archive, analyze, use, or otherwise process such content for the purpose of operating, maintaining, improving, securing, auditing, analyzing, or enhancing the Services, or for other internal and lawful business purposes. Such license shall survive the termination of your account or cessation of use of the Services.</p>
<p>(c) You further acknowledge and consent to the potential retention of your content, metadata, and associated usage patterns on the Company&rsquo;s infrastructure or with authorized processors or subprocessors beyond the lifecycle of your account, including post-deletion periods, where such retention is deemed necessary for operational continuity, fraud mitigation, legal compliance, dispute resolution, investigative support, or long-term strategic analysis, in accordance with our Privacy Policy.</p>
<p>(d) You authorize the Company to disclose, transfer, or share User Content with carefully vetted third-party service providers, contractors, auditors, data processors, or strategic partners, provided that such entities are bound by confidentiality obligations and process data solely for purposes consistent with platform functionality, security enhancement, user protection, lawful cooperation, or service delivery optimization. In all such cases, such transfers shall comply with applicable legal, contractual, and jurisdictional requirements governing data protection and privacy.</p>
<p>(B) Friend Content &amp; Restrictions</p>
<p>(a) All original content, including but not limited to text, messages, audio, video, images, media, and digital communications made available on the Services by individuals designated as &ldquo;Friends&rdquo; shall remain the sole and exclusive intellectual property of the respective Friend, unless otherwise expressly agreed in writing. You shall obtain no ownership, license, or exploitation rights therein by virtue of subscription or platform access.</p>
<p>(b) As a subscriber, you are granted a limited, revocable, non-transferable, non-sublicensable license to view and interact with such content strictly within the Closerrr platform. You are expressly prohibited from engaging in the following activities without prior written authorization from the rights holder and/or the Company:</p>
<p>(i) Reproduction, redistribution, republication, modification, public display, broadcast, or external sharing of such content on any medium or channel, whether online or offline.</p>
<p>(ii) Capturing, recording, duplicating, storing, archiving, or disseminating content via screenshots, screen recordings, downloads, third-party tools, or any analogous method.</p>
<p>(c) Any unauthorized access to, duplication of, or distribution of Friend Content may constitute a material breach of these Terms and may subject the User to civil liability, platform expulsion, or criminal prosecution under applicable intellectual property and anti-piracy statutes. The Company reserves the right to cooperate with law enforcement or assert legal claims in furtherance of protecting its proprietary and partner content.</p>
<br/>
<p><strong>7. Software License &amp; Restrictions (EULA):</strong></p>
<br/>
<p>This section constitutes Closerrr&rsquo;s End User License Agreement (EULA), governing your licensed use of the Closerrr mobile application (the &ldquo;App&rdquo;), website, and any other affiliated digital services provided by Closerrr (collectively, the &ldquo;Services&rdquo;).</p>
<p>(A) Limited License Grant</p>
<p>(a) Subject to your ongoing and full compliance with these Terms, Closerrr grants you a limited, non-exclusive, non-transferable, non-sublicensable, and revocable license to:<br /> (i) Download, install, and use the App on a compatible mobile device you own or control, solely for your personal, non-commercial use.<br /> (ii) Access and use the Closerrr website and affiliated digital Services exclusively for personal, non-commercial interaction with the platform&rsquo;s features and content.</p>
<p>(b) This license is provided solely to enable your lawful access and use of the Services as made available by Closerrr in accordance with these Terms.</p>
<p>(B) Ownership and Reservation of Rights</p>
<p>(a) The App, the Services, and all related software, source code, content, design elements, interfaces, features, and other technology are and shall remain the exclusive intellectual property of Closerrr or its licensors, protected under applicable intellectual property laws.<br /> (b) Except for the limited license expressly granted above, no rights, title, or interest in or to the App or Services are transferred to you. All rights not expressly granted are reserved by Closerrr.</p>
<p>(C) Restrictions on Use</p>
<p>You agree not to, and shall not permit any third party to:</p>
<p>(a) Copy, modify, translate, adapt, create derivative works from, publicly display, perform, republish, or otherwise reproduce any portion of the App or Services, except as explicitly permitted by law or by these Terms.<br /> (b) Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App or Services.<br /> (c) Rent, lease, sell, sublicense, assign, distribute, or commercially exploit the App or Services or any access credentials.<br /> (d) Use the App or Services for any illegal, harmful, infringing, or unauthorized purpose, including any activity that violates the rights of others.<br /> (e) Bypass, disable, or interfere with any security-related features, access controls, or usage restrictions within the App or Services.</p>
<p>(D) Updates and Modifications</p>
<p>(a) Closerrr may issue updates, upgrades, patches, bug fixes, enhancements, or new versions of the App or Services periodically, which may install automatically or require manual installation.<br /> (b) Continued access to or functionality of the Services may require the installation of such updates, and Closerrr shall not be liable for any disruption resulting from failure to install required updates.</p>
<p>(E) Termination of License</p>
<p>(a) This license remains in effect for the duration of your active account and full compliance with these Terms, unless terminated earlier by you or Closerrr.<br /> (b) Closerrr may terminate this license immediately, without prior notice, in the event of any breach of these Terms, prohibited conduct, or cessation of the Services.<br /> (c) Upon termination, you must promptly cease use of the App and Services and delete all copies of the App from your devices.</p>
<ul>
<br/>
<li><strong>8. Privacy &amp; Security:</strong></li>
<br/>
</ul>
<p>(A) The Company places substantial emphasis on the safeguarding of user data and implements commercially reasonable technical, organizational, and administrative security measures designed to preserve the integrity, confidentiality, and availability of personal information submitted or generated by you in connection with your use of the Services. You acknowledge and expressly consent to the Company&rsquo;s ongoing collection, retention, processing, storage, aggregation, analysis, and lawful disclosure of personal, transactional, behavioral, and device-level information, including but not limited to:</p>
<p>(a) Identifying account credentials, payment-related metadata, subscription preferences, login timestamps, device information, and any associated user profile data;</p>
<p>(b) Interaction logs, in-app activity metrics, message histories (including metadata), session durations, navigation patterns, and other behavioral telemetry or usage analytics captured via the Services;</p>
<p>(c) Application-layer security data including IP logs, cryptographic tokens, session identifiers, anomaly detection flags, and other telemetry collected for the purpose of authentication, fraud mitigation, abuse prevention, and threat detection.</p>
<p>All such data shall be handled in accordance with the Company&rsquo;s prevailing [Privacy Policy], as updated from time to time, and shall be processed solely for purposes that are necessary, proportionate, and consistent with Closerrr&rsquo;s operational, contractual, regulatory, analytical, or legal obligations.</p>
<p>(B) By accessing or utilizing the Services, you hereby acknowledge, affirm, and provide your explicit and informed consent to the Company&rsquo;s data practices as articulated herein and in the Privacy Policy. You further waive any claim, assertion, or entitlement inconsistent with such practices, and agree that your continued use of the Services shall constitute conclusive evidence of your ongoing consent. The Company disclaims all liability arising from third-party interception, unauthorized access, or other incidents beyond its reasonable control, provided that commercially reasonable security practices were in place at the time of such occurrence.</p>
<ul>
<br/>
<p><strong>9. Cancellation &amp; Data Retention:</strong></p>
<br/>
</ul>
<p>(A) You may initiate the deletion of your Closerrr account at any time through the designated in-app process. Upon confirmation of account deletion, the Company shall effectuate the removal of your personal data and account-related information from its active, production-level environments. Such deletion shall be irreversible, and restoration of the deleted account or its associated data shall not be technically or contractually feasible.</p>
<p>(B) Notwithstanding the foregoing, the Company reserves the right&mdash;and you expressly consent to its authority&mdash;to retain and archive certain categories of data (including, but not limited to, transactional records, metadata, logs, usage patterns, and limited user identifiers) beyond the point of account deletion or subscription cancellation. Such retention shall be strictly for legitimate purposes including but not limited to internal audits, fraud mitigation, operational integrity, dispute resolution, regulatory compliance, historical analysis, security monitoring, or other lawful and commercially necessary functions. All data retained under this clause shall be processed in accordance with applicable data protection statutes and the Privacy Policy in effect at the time of collection.</p>
<p>(C) Cancellation of a subscription shall not be construed as or result in deletion of the associated user account. In the event of subscription termination, the following conditions shall apply:<br /> (a) Your access to the subscribed Friend&rsquo;s content shall remain intact through the conclusion of the active billing cycle, as determined by your original subscription timestamp.<br /> (b) Upon expiration of said billing cycle, you shall be entitled to a limited, non-renewable grace period of seven (7) calendar days (&ldquo;Continuation Period&rdquo;) during which you may reactivate the subscription to the same Friend without loss of access history, content continuity, or Closerrr Streak.<br /> (c) If, upon the lapse of the Continuation Period, you have not re-subscribed, the Company shall have the right to permanently and irreversibly expunge all content access rights, subscription-related metadata, and any active elements of the Closerrr Streak from your account. You hereby acknowledge and accept that such deletion is final and non-recoverable, and that Closerrr shall not be liable for any perceived loss, inconvenience, or interruption resulting therefrom.</p>
<p>(D) Nothing in this Section shall be construed to override the Company&rsquo;s data retention obligations under applicable law, including but not limited to lawful holds, regulatory requirements, or security audits. Retained data, if any, shall be restricted in access and used solely for compliance and operational purposes.</p>
<p>(E) Termination of Friend Account<br /> In the event that a Friend you are subscribed to is suspended, removed, or voluntarily deletes their account, your subscription will not renew. However, your access to their existing content and chat history will remain active until the end of your current billing cycle. Upon conclusion of that billing cycle, all data tied to that subscription&mdash;including your Closerrr Streak and chat history with that Friend&mdash;shall be permanently deleted from the user-facing platform. Such data may continue to be retained in anonymized or archived form strictly for compliance or operational integrity. No refunds shall be issued for the remainder of the billing cycle, as outlined in Section 4(C).</p>
<p>(F) Account Deletion Impact on Subscriptions<br /> Upon user-initiated account deletion, all active subscriptions shall be immediately terminated without refund, and all associated user data&mdash;including messages, chats, and any active Closerrr Streaks&mdash;shall be rendered inaccessible and permanently deleted. Users are advised to cancel any ongoing subscriptions prior to account deletion if they wish to manage their billing separately.</p>
<ul>
<br/>
<p><strong>10. Third-Party Services &amp; Links:</strong></p>
<br/>
</ul>
<p>(A) The Services may incorporate, integrate, or rely upon third-party platforms, vendors, APIs, systems, or providers for the purpose of enabling functionality including, but not limited to, payment processing, analytics tracking, cloud storage, media delivery, communication infrastructure, advertising services, or other technical and operational dependencies (&ldquo;Third-Party Services&rdquo;). You acknowledge and agree that the availability, reliability, or performance of such Third-Party Services are not within the direct control of the Company, and the Company disclaims any and all warranties, express or implied, in connection therewith.</p>
<p>(B) The Platform may display, embed, or make accessible hyperlinks, promotional placements, or references to third-party websites, applications, content, products, or services, whether through system integrations or through content voluntarily posted or shared by Friends or other users. Any such references or links shall not constitute or imply any form of sponsorship, recommendation, verification, or endorsement by the Company, unless explicitly stated in writing.</p>
<p>(C) The Company shall not be held liable for, and expressly disclaims any responsibility arising out of or relating to, any disputes, damages, losses, costs, technical failures, service defects, unauthorized disclosures, breaches, or adverse consequences incurred by you as a result of your interaction with, access to, reliance on, or use of any third-party links, services, content, or platforms, including those displayed or distributed within the Services by Friends or other users. You access such third-party content entirely at your own discretion and risk and are encouraged to independently review the applicable terms and privacy practices of such external services prior to any engagement.</p>
<p>(D) The Company does not and cannot exercise control over the manner in which third-party service providers collect, store, use, retain, disclose, or otherwise process personal data. Your interactions with such providers are governed solely by their respective terms of service and privacy policies. The Company disclaims any responsibility for unauthorized access, loss of data, or misuse of personal information by third parties, whether or not such providers were integrated or accessible via the Services.</p>
<br/>
<p><strong>11. Changes to the Services &amp; Updates to Terms:</strong></p>
<br/>
<p>(A) The Company reserves the absolute and unrestricted right, at its sole discretion and without incurring any liability or obligation to any party, to revise, amend, supplement, replace, restate, suspend, modify, discontinue, withdraw, or otherwise alter any portion of the Services or these Terms &amp; Conditions (collectively, &ldquo;Modifications&rdquo;) at any time and for any reason deemed necessary, including but not limited to legal compliance, operational necessity, security enhancement, business exigency, technological advancement, or user experience optimization.</p>
<p>(B) Any such Modifications may be implemented with or without prior notice to the User. Where required by applicable law or where deemed material in nature (as determined by the Company in its sole discretion), the Company may, but is not obligated to, provide reasonable advance notice of such Modifications through in-app notifications, email, official communication channels, or by posting a revised version of the Terms on its website or within the Platform.</p>
<p>(C) Your continued access to or use of the Services after the effective date of any Modifications shall constitute your irrevocable and binding acceptance of the revised Terms, and you hereby waive any right to contest the enforceability of such Modifications on grounds of lack of notice or explicit consent. If you do not agree to any changes, your sole and exclusive remedy is to discontinue use of the Services and terminate your account.</p>
<p>(D) The Company assumes no responsibility for the User&rsquo;s failure to review updated Terms or notices. It is your duty to periodically review the Terms &amp; Conditions for updates or modifications. Failure to do so shall not absolve you of any obligations or restrictions under the revised Terms.</p>
<p><strong>Effective Date:</strong> 14/02/2025<br /><strong>Last Updated:</strong> 08/05/2026</p>
<br/>
<p><strong>12. Intellectual Property:</strong></p>
<br/>
<p>(A) User-Generated Content License and Permissions<br /> (a) By uploading, submitting, transmitting, displaying, or otherwise making available any data, material, communication, text, image, audio, video, media, or other content (&ldquo;User Content&rdquo;) through or in connection with the Services, you hereby irrevocably grant to the Company, its affiliates, licensees, successors, and assigns a perpetual, worldwide, non-exclusive, fully paid-up, royalty-free, sublicensable, and transferable license to use, reproduce, store, host, cache, index, archive, modify, adapt, translate, create derivative works from, publicly perform, publicly display, transmit, broadcast, distribute, and otherwise exploit such User Content, in whole or in part, by any means, media, or technologies now known or hereafter devised, for purposes related to the operation, maintenance, enhancement, promotion, analysis, commercialization, and lawful use of the Services.</p>
<p>(b) This license is granted without the requirement of attribution, compensation, or further approval, unless otherwise required by applicable law. The foregoing notwithstanding, the Company shall obtain your express written consent prior to using your User Content in any standalone commercial capacity (e.g., sublicensing to unaffiliated third parties for promotional or advertising use unrelated to Closerrr or its Services).</p>
<p>(c) You represent and warrant that you own or have obtained all necessary licenses, rights, consents, and permissions to grant the foregoing license and that the exercise of such rights by the Company will not infringe, misappropriate, or violate any third-party rights, including but not limited to intellectual property, privacy, or publicity rights.</p>
<p>(B) Company Intellectual Property and Proprietary Rights<br /> (a) All rights, title, and interest in and to the Platform, the Services, and all associated software, code, compilations, databases, content, information, functionality, designs, graphical interfaces, logos, branding, trademarks, service marks, trade dress, audiovisual elements, and other materials created, owned, or provided by the Company (&ldquo;Company Materials&rdquo;) are and shall remain the sole and exclusive property of the Company and/or its licensors, protected by applicable copyright, trademark, trade secret, and other intellectual property laws.</p>
<p>(b) Except as expressly authorized by the Company in writing, you shall not, and shall not attempt to, directly or indirectly:</p>
<p>(i) copy, download, reproduce, modify, adapt, translate, create derivative works from, distribute, sell, license, publicly perform or display, republish, reverse engineer, decompile, disassemble, or otherwise exploit the Company Materials;</p>
<p>(ii) remove, obscure, or alter any proprietary rights notices; or</p>
<p>(iii) use the Company Materials for any purpose outside the scope of the Services.</p>
<p>(c) No rights are granted to you under these Terms except those explicitly set forth herein. All rights not expressly granted are hereby reserved by the Company.</p>
<ul>
<br/>
<p><strong>13. Liability &amp; Disclaimers:</strong></p>
<br/>
</ul>
<p>(A) The Services are provided on an &ldquo;as is,&rdquo; &ldquo;as available,&rdquo; and &ldquo;with all faults&rdquo; basis, without warranties of any kind, express or implied, statutory or otherwise. The Company makes no representations or guarantees as to the continuous, uninterrupted, error-free, or secure availability or operation of the Services, and you acknowledge that access thereto may be subject to periodic disruptions, interruptions, maintenance cycles, system overload, force majeure events, third-party interference, or other technical anomalies beyond the Company&rsquo;s reasonable control.</p>
<p>(B) To the fullest extent permissible under applicable law, the Company expressly disclaims any and all liability arising out of, relating to, or in connection with any content, conduct, behaviour, or communications originating from or attributable to other users, Friends, or third parties. You agree that the Company shall not be held responsible for any act, omission, opinion, expression, message, post, image, or other communication, whether offensive, unlawful, defamatory, misleading, or otherwise objectionable, shared or transmitted via the Services by any third party.</p>
<p>(C) All interactions facilitated through the Services, including communications with Friends, are exclusively digital in nature and shall not give rise to, or be interpreted as, any form of real-world personal relationship, fiduciary obligation, partnership, endorsement, or professional association. The digital simulations, conversations, and experiences enabled by the platform are intended solely for entertainment and engagement purposes and are not a substitute for real-life interaction or counsel.</p>
<p>(D) You acknowledge that your use of the Services, including all interactions, content generation, communications, and engagement with Friends, is undertaken voluntarily and at your own sole risk. You are solely and fully responsible for any consequences&mdash;legal, civil, reputational, or otherwise&mdash;that may result directly or indirectly from your use of the Services, and the Company disclaims all liability with respect to the same.</p>
<p>(E) To the maximum extent permitted by law, the Company disclaims all liability for any incidental, consequential, indirect, special, exemplary, or punitive damages, including but not limited to loss of profits, loss of goodwill, data loss, service interruptions, device malfunction, reputational harm, emotional distress, or any other intangible or economic losses, even if the Company has been advised of the possibility of such damages, and regardless of the legal theory under which such claims may arise.</p>
<br/>
<p><strong>14. Confidentiality:</strong></p>
<br/>
<p>(A) Obligations of the User<br /> (a) You agree not to disclose, share, publish, or use any confidential or proprietary information made available through the Platform, including but not limited to unreleased features, private communications, Friend content, backend data, internal policies, or any information not generally available to the public.<br /> (b) Any unauthorized access, use, or dissemination of such information shall constitute a breach of these Terms and may subject you to legal action, including but not limited to injunctive relief and damages.</p>
<p>(B) Obligations of the Company<br /> (a) Closerrr agrees to treat your personal data and sensitive user information in accordance with its Privacy Policy, and to take commercially reasonable measures to safeguard such data from unauthorized access or disclosure.<br /> (b) Closerrr may, however, disclose confidential information where required by law, regulation, legal process, or governmental request, or to protect the rights, property, or safety of the Company, its users, or the public.</p>
<br/>
<p><strong>15. Indemnification:</strong></p>
<br/>
<p>(A) User&rsquo;s Obligation to Indemnify<br /> (a) You agree to indemnify, defend, and hold harmless the Company, its affiliates, officers, directors, employees, agents, licensors, and service providers from and against any and all claims, liabilities, damages, losses, penalties, judgments, costs, and expenses (including reasonable attorneys&rsquo; fees) arising out of or in connection with:<br /> (i) Your use of the Platform or Services;<br /> (ii) Your violation or alleged violation of these Terms, applicable laws, or third-party rights;<br /> (iii) Any content or material submitted, uploaded, transmitted, or otherwise made available by you through the Platform;<br /> (iv) Any unauthorized or improper use of your account.</p>
<p>(b) This obligation shall survive the termination or expiration of these Terms and your use of the Services.</p>
<p>(B) Company&rsquo;s Rights<br /> (a) The Company reserves the right, at its sole discretion and at your expense, to assume the exclusive defense and control of any matter subject to indemnification by you. In such cases, you agree to cooperate with the Company in asserting any available defenses.<br /> (b) The Company shall have no obligation to indemnify you for any claims, losses, or damages resulting from your breach of these Terms, misuse of the Platform, or any other acts or omissions attributable to you.</p>
<br/>
<p><strong>16. Force Majeure:</strong></p>
<br/>
<p>(A) Definition and Scope<br /> (a) The Company shall not be held liable for any failure to perform, or delay in performing, any of its obligations under these Terms or in connection with the Platform or Services if such failure or delay is caused, whether directly or indirectly, by events beyond the reasonable control of the Company (&ldquo;Force Majeure Events&rdquo;).<br /> (b) Force Majeure Events include but are not limited to acts of God, natural disasters, war, terrorism, riots, governmental actions or restrictions, pandemics or epidemics, labour strikes, internet outages, infrastructure failure, data breach by external actors, or failure of suppliers, service providers, or hosting partners.</p>
<p>(B) Consequences of Force Majeure<br /> (a) Upon the occurrence of a Force Majeure Event, the Company&rsquo;s obligations under these Terms shall be suspended for the duration of the event.<br /> (b) The Company shall not be required to make any restitution, refund, or compensation for any unavailability, interruption, or degradation of the Platform or Services during such time.<br /> (c) The Company will make reasonable efforts to resume full performance as soon as practically feasible; however, nothing herein shall obligate the Company to provide notice or updates regarding the duration or expected resolution of the Force Majeure Event.</p>
<p>(C) User Responsibility<br /> You acknowledge and agree that your continued access or use of the Services during a Force Majeure Event is at your own discretion and risk, and you hereby waive any claims, demands, or actions against the Company relating to such event.</p>
<br/>
<p><strong>17. Assignment &amp; Transferability:</strong></p>
<br/>
<p>(A) Company Rights to Assign<br /> (a) The Company reserves the unrestricted right to assign, delegate, sublicense, or transfer any of its rights, obligations, or interests under these Terms, in whole or in part, to any third party, including but not limited to its affiliates, subsidiaries, successors, acquirers, or assignees, without requiring prior notice to or consent from you.<br /> (b) Any such assignment or transfer shall be binding upon you and shall not affect the validity or enforceability of these Terms. You hereby expressly waive any objection or claim arising out of such transfer or assignment by the Company.</p>
<p>(B) User Restrictions on Assignment<br /> (a) You may not assign, delegate, sublicense, or otherwise transfer your rights or obligations under these Terms without the prior written consent of the Company, which may be withheld at the Company&rsquo;s sole and absolute discretion.<br /> (b) Any attempted assignment or transfer by you in violation of this Section shall be deemed null and void, and shall constitute a material breach of these Terms.<br /> (c) These Terms shall inure to the benefit of and be binding upon the parties and their respective successors and permitted assigns.</p>
<br/>
<p><strong>18. Termination &amp; Suspension:</strong></p>
<br/>
<p>(A) Termination by Closerrr</p>
<p>(a) The Company reserves the right, in its sole and absolute discretion, to terminate, suspend, restrict, or deactivate your Account or access to any portion of the Services, at any time and without prior notice or liability, including but not limited to instances where:<br /> (i) You have violated any provision of these Terms or any applicable law;<br /> (ii) You have engaged in conduct that is harmful, fraudulent, abusive, or otherwise inconsistent with the integrity, functionality, or reputation of the Platform or its Users;<br /> (iii) The Company is required to do so by applicable law, regulation, judicial order, or governmental directive;<br /> (iv) The Services are being modified, discontinued, or rendered commercially impracticable.</p>
<p>(b) In the event of termination or suspension, the Company shall have no obligation to retain or provide access to any data, content, or communications associated with your Account, except as required by applicable law or expressly stated in the Privacy Policy.</p>
<p>(B) Termination by User</p>
<p>(a) You may voluntarily terminate your Account at any time by following the procedures available within the Platform or by contacting the Company through the designated support channels.<br /> (b) Upon termination, all licenses, rights, and obligations granted to you under these Terms shall immediately cease, and you must promptly cease all access to and use of the Services.<br /> (c) Any pre-paid Subscription amounts shall not be refundable unless required by applicable law or expressly stated otherwise in these Terms.</p>
<p>(C) Effect of Termination</p>
<p>(a) Termination or suspension shall not affect any accrued rights, obligations, or liabilities of either party as of the effective date of such action.<br /> (b) Any provisions of these Terms which by their nature are intended to survive termination, including but not limited to those concerning intellectual property, confidentiality, disclaimers, indemnity, limitations of liability, dispute resolution, and governing law, shall remain in full force and effect.<br /> (c) The Company shall not be liable to you or any third party for any damages, claims, losses, or inconvenience resulting from any termination or suspension of your access to the Services.</p>
<br/>
<p><strong>19. Data Localization &amp; Cross-Border Data Transfer:</strong></p>
<br/>
<p>(A) General Acknowledgment</p>
<p>(a) By accessing or using the Services, you acknowledge and agree that Closerrr may collect, store, process, and transmit your Personal Data in and to various jurisdictions, including but not limited to the jurisdiction in which you reside and other countries where Closerrr or its third-party service providers operate.<br /> (b) You understand that such jurisdictions may have data protection laws that are different from, and may be less protective than, the laws of your own jurisdiction.</p>
<p>(B) Cross-Border Transfers</p>
<p>(a) The Company may transfer your Personal Data to recipients located in countries outside of your jurisdiction for purposes consistent with the Privacy Policy, including without limitation to facilitate operations, cloud storage, data processing, analytics, or compliance activities.<br /> (b) Where required by Applicable Law, Closerrr shall implement legally recognized safeguards to ensure adequate protection of Personal Data during such transfers, which may include the use of standard contractual clauses or other legally approved mechanisms.</p>
<p>(C) Data Localization Requirements</p>
<p>(a) In jurisdictions where Applicable Law mandates the localization of certain categories of data (including but not limited to payment data, communications data, or government-identified data), Closerrr shall comply with such requirements by storing and processing such data within the required territorial boundaries or through licensed data localization partners.<br /> (b) Users shall not engage in any activity intended to circumvent data localization obligations imposed under applicable national laws, and Closerrr reserves the right to suspend or restrict Services in case of non-compliance.</p>
<p>(D) Retention and Processing</p>
<p>(a) Personal Data collected by the Company shall be retained for such duration as is necessary to fulfil the purposes for which it was collected, or as required by applicable legal, regulatory, tax, or accounting obligations.<br /> (b) The User expressly consents to such cross-border transfers, processing, and storage of their data as outlined in this section and as more fully described in the Privacy Policy.</p>
<p>(E) User Responsibility</p>
<p>It is your sole responsibility to ensure that your use of the Services and transmission of any data through the Platform does not violate any data sovereignty, localization, or privacy obligations applicable to you under the laws of your jurisdiction.</p>
<br/>
<p><strong>20. Copyright Infringement &amp; Takedown Procedure:</strong></p>
<br/>
<p>(A) Policy Statement</p>
<p>Closerrr respects the intellectual property rights of others and expects all Users, Friends, and third parties to do the same. Unauthorized use, reproduction, distribution, or communication of copyrighted material is strictly prohibited. The Company shall take appropriate actions, including removal of content and account suspension or termination, upon receiving a legally sufficient notice of alleged infringement.</p>
<p>(B) Takedown Requests</p>
<p>If you believe that any content available on or through the Services infringes your copyright or other intellectual property rights, you may submit a written notification to us via the official email address provided in Section 22 (Notices &amp; Communication). Your notice must include the following information:</p>
<p>(a) A clear identification of the copyrighted work or material claimed to have been infringed, or if multiple works are involved, a representative list of such works;<br /> (b) A specific identification of the material you believe is infringing, including the location (e.g., specific URL or in-app location) sufficient to permit us to locate the material;<br /> (c) Your full legal name, physical address, telephone number, and a valid email address;<br /> (d) A statement that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;<br /> (e) A statement that the information provided in the notice is accurate, and under penalty of perjury, that you are the owner or are authorized to act on behalf of the owner of the copyright or other intellectual property interest being infringed;<br /> (f) Your physical or electronic signature.</p>
<p>Incomplete or non-compliant notices may not be processed.</p>
<p>(C) Response and Removals</p>
<p>Upon receipt of a valid infringement notice, Closerrr may, at its sole discretion:</p>
<p>(a) Temporarily or permanently remove or disable access to the allegedly infringing content;<br /> (b) Notify the content uploader, where applicable, of the complaint and provide an opportunity to respond or file a counter-notification, where legally permitted;<br /> (c) Terminate or restrict access to repeat infringers or Users who violate these Terms or applicable intellectual property laws.</p>
<p>(D) Counter-Notification</p>
<p>If your content has been removed or access restricted and you believe this was in error or constitutes a misidentification, you may file a written counter-notice with the following details:</p>
<p>(a) Your name, address, phone number, and email address;<br /> (b) Identification of the removed content and the location at which it appeared before removal;<br /> (c) A statement, under penalty of perjury, that you have a good faith belief the content was removed or disabled as a result of mistake or misidentification;<br /> (d) A statement consenting to the jurisdiction of courts in Bhopal, Madhya Pradesh, and that you will accept service of process from the complainant or their authorized agent;<br /> (e) Your physical or electronic signature.</p>
<p>Closerrr reserves the right to restore the content or maintain its removal at its discretion.</p>
<p>(E) No Legal Advice</p>
<p>The foregoing procedure is provided for informational purposes only and does not constitute legal advice. You are encouraged to seek legal counsel before filing any notice or counter-notice under this Section.</p>
<br/>
<p><strong>21. Contact &amp; Dispute Resolution:</strong></p>
<br/>
<p>(A) Contact Information<br /> All communications, inquiries, notices, or legal correspondence relating to these Terms &amp; Conditions, the Platform, or the Services&mdash;including but not limited to questions, complaints, or claims&mdash;must be directed to the Company via email at: [hello@closerrr.com]. The Company does not guarantee response times and shall not be held liable for any delay or failure to respond within a specific timeframe.</p>
<p>(B) Dispute Resolution Mechanism<br /> (a) As a condition precedent to the initiation of any formal legal proceeding, you agree to engage in good-faith efforts to resolve any controversy, dispute, claim, or disagreement arising out of or relating to these Terms, your use of the Services, or any act or omission of the Company (collectively, a &ldquo;Dispute&rdquo;) through informal negotiations, commencing upon written notice from one party to the other. Upon receipt of such notice, both parties shall use reasonable efforts to resolve the Dispute amicably.</p>
<p>(b) If a resolution is not achieved through informal negotiation, all disputes shall be submitted to the exclusive jurisdiction of the courts in Bhopal, Madhya Pradesh.</p>
<p>(c) To the maximum extent permitted by applicable law, you expressly and irrevocably waive any right to participate in class actions, consolidated proceedings, or jury trials.</p>
<p>(d) Notwithstanding the foregoing, either party may seek preliminary injunctive or equitable relief in a court of competent jurisdiction where such relief is necessary to prevent immediate and irreparable harm, unauthorized disclosure of confidential information, or misuse or infringement of intellectual property rights.</p>
<p>(e) These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Subject to the provisions above, the courts located in Bhopal, Madhya Pradesh, India shall have exclusive jurisdiction over any disputes or claims arising out of or in connection with these Terms or the Services.</p>
<br/>
<p><strong>22. Notices &amp; Communication:</strong></p>
<br/>
<p>(A) Official Communication Channels<br /> All notices, legal correspondence, or communications relating to these Terms and Conditions, the Platform, or the Services, including but not limited to user inquiries, disputes, complaints, or regulatory matters, shall be deemed valid only if delivered to the Company via the following official channel:</p>
<p>Email: hello@closerrr.com</p>
<p>The Company may, at its sole discretion, update, modify, or supplement this contact information. Any such updates shall be deemed effective upon publication on the official Closerrr website or via in-app notification. Users are deemed to have accepted such updates by continuing to access or use the Services.</p>
<p>(B) User Communication Preferences<br /> By accessing or using the Platform, you consent to receive communications from the Company electronically, including but not limited to administrative messages, account-related information, promotional materials, policy updates, and legal notices. Such communications may be delivered via in-app notifications, emails, text messages, or push notifications, as determined appropriate by the Company.</p>
<p>You acknowledge that opting out of certain types of communications may limit your ability to access full features of the Services or receive critical updates. The Company shall not be held liable for any loss or limitation resulting therefrom.</p>
<p>(C) Deemed Receipt of Notices<br /> Any notice or communication sent by the Company shall be deemed to have been duly received and read:</p>
<p>(a) Immediately upon successful transmission, if delivered via in-app notification or email;</p>
<p>(b) Within 72 (seventy-two) hours of dispatch, if delivered to the last known contact details associated with your Account, unless a delivery failure notice is received;</p>
<p>(c) At the time of posting, if published on any official Platform interface, including banners, pop-ups, or helpdesk communications.</p>
<p>It shall be your sole responsibility to ensure that your contact details registered with the Platform are accurate, current, and capable of receiving official correspondence. The Company disclaims all responsibility for communications not received due to outdated or incorrect contact information.</p>
<p>(D) Language of Communication<br /> Unless expressly stated otherwise or required by law, all notices, correspondence, agreements, and communications shall be in the English language. The Company is not obligated to provide translations and shall not be liable for any misunderstanding or interpretation issues arising from language barriers.</p>
<p>(E) No Obligation to Respond<br /> While the Company may, in good faith, attempt to respond to communications received from users, it makes no representation or warranty regarding response times. The Company shall not be liable for any failure or delay in responding to user communications, including those relating to support, disputes, or legal claims.</p>
<br/>
<p><strong> 23. Entire Agreement &amp; Severability:</strong></p>
<br/>
<p>(A) Entire Agreement</p>
<p>(a) These Terms, along with the Privacy Policy, supplemental terms, end user license terms, and any other legal notices, policies, or guidelines published or referenced by Closerrr from time to time, constitute the complete and exclusive agreement between you and Closerrr with respect to the subject matter herein, and supersede all prior or contemporaneous understandings, communications, representations, proposals, negotiations, or agreements, whether oral or written, relating to the Services.<br /> (b) No oral or written information or advice given by Closerrr, its representatives, or any third party shall create any warranty or obligation not expressly stated herein.</p>
<p>(B) Amendments and Modifications</p>
<p>(a) Closerrr reserves the sole right to update, modify, or replace any part of these Terms at any time, in accordance with the procedures outlined in Section 11 (&ldquo;Changes to the Services &amp; Updates to Terms&rdquo;).<br /> (b) Continued use of the Services following such modifications shall constitute binding acceptance of the revised Terms.</p>
<p>(C) Severability</p>
<p>(a) If any provision of these Terms is found to be invalid, unlawful, void, or unenforceable by a court or competent authority under Applicable Law, such provision shall be deemed severed from these Terms to the minimum extent necessary, and shall not affect the validity or enforceability of the remaining provisions.<br /> (b) Any invalid or unenforceable portion shall, to the maximum extent possible, be interpreted so as to reflect the original intent of Closerrr and the User, or otherwise replaced with a valid and enforceable provision that most closely reflects the original commercial and legal intent.</p>
<br/>
<p><strong>24. No Waiver:</strong></p>
<br/>
<p>(A) Non-Waiver of Rights</p>
<p>(a) No failure, delay, or omission by Closerrr in exercising any right, remedy, power, or privilege under these Terms shall operate as a waiver thereof, nor shall any single or partial exercise of any such right, remedy, power, or privilege preclude any other or further exercise thereof or the exercise of any other right, remedy, power, or privilege.<br /> (b) Any waiver of any provision of these Terms shall be effective only if made in writing and signed by an authorized representative of Closerrr.</p>
<p>(B) Cumulative Rights</p>
<p>All rights and remedies provided to Closerrr under these Terms are cumulative and in addition to, and not in substitution of or limitation on, any rights or remedies otherwise available at law or in equity.</p>
<br/>
<p><strong>25. Relationship of the Parties:</strong></p>
<br/>
<p>(A) Independent Relationship</p>
<p>(a) Nothing contained in these Terms shall be construed to create any partnership, joint venture, agency, employment, fiduciary, or other similar relationship between you and Closerrr.<br /> (b) You acknowledge that you are acting solely on your own behalf and not as a representative or agent of Closerrr, and that you have no authority to bind Closerrr in any respect or incur any obligations or liabilities on its behalf.</p>
<p>(B) No Representations</p>
<p>You shall not hold yourself out as an employee, partner, agent, or authorized representative of Closerrr. Any such misrepresentation shall constitute a material breach of these Terms and may result in immediate termination of your access to the Services, without prejudice to any legal remedies available to Closerrr.</p>
<br/>
<p><strong>26. Survival of Terms:</strong></p>
<br/>
<p>(A) Obligations That Survive Termination</p>
<p>(a) The termination, suspension, expiration, or cancellation of your access to the Services&mdash;whether by you or by Closerrr&mdash;shall not affect those provisions of these Terms that by their nature are intended to survive such termination.<br /> (b) Without limitation, the following sections shall survive any termination or expiration of these Terms: Intellectual Property, Confidentiality, Dispute Resolution, Limitation of Liability, Indemnification, Governing Law &amp; Jurisdiction, and any provisions concerning disclaimers, user conduct, license restrictions, and definitions.</p>
<p>(B) Ongoing Legal and Contractual Effect</p>
<p>Any rights, duties, or obligations that by express terms or necessary implication are intended to remain in effect beyond the termination of these Terms shall continue to be valid, enforceable, and binding in accordance with their terms.</p>
<br/>
<p><strong>27. Export Control &amp; Sanctions Compliance:</strong></p>
<br/>
<p>(A) Legal Use in Permitted Jurisdictions Only</p>
<p>(a) You represent and warrant that you are not located in, under the control of, or a national or resident of any country or territory subject to comprehensive trade sanctions or embargoes imposed by the Government of India, the United States, the United Nations Security Council, the European Union, or any other applicable governmental authority.<br /> (b) You further affirm that you are not identified on any government-issued list of prohibited or restricted parties, including but not limited to the Specially Designated Nationals (SDN) list maintained by the U.S. Department of the Treasury, or equivalent watchlists maintained by applicable authorities.</p>
<p>(B) Export and Technology Control Compliance</p>
<p>(a) The App, Platform, and Services may be subject to export control laws and regulations of India, the United States, or other relevant jurisdictions. You agree not to export, re-export, or transfer any portion of the Services or related technology in violation of such laws.<br /> (b) You are solely responsible for ensuring that your access to and use of the Services complies with all applicable import, export, and sanctions laws in the jurisdiction from which you access the Platform.</p>
<p>(C) Restriction Enforcement</p>
<p>Closerrr reserves the right to restrict or terminate access to the Services, in whole or in part, in response to applicable export control laws, sanctions regulations, or governmental directives, without prior notice and without liability.</p>
<br/>
<p><strong>28. Interpretation:</strong></p>
<br/>
<p>(A) Headings and Formatting</p>
<p>(a) The section titles, headings, formatting elements, and numbering used in these Terms are included solely for the sake of convenience and organizational clarity.<br /> (b) They shall not affect the meaning, construction, or interpretation of any provision contained herein and shall not be deemed to limit or modify the substantive content of the respective sections.</p>
<p>(B) Language and Ambiguities</p>
<p>(a) These Terms shall be interpreted fairly and reasonably, and not strictly for or against either party, regardless of authorship or drafting responsibility.<br /> (b) In the event of any ambiguity or uncertainty in the interpretation of any provision of these Terms, such provision shall be construed in a manner consistent with the overall purpose and intent of this Agreement.</p>
<p>(C) Plural and Gender Usage</p>
<p>Unless otherwise indicated by context:<br /> (a) Words importing the singular include the plural and vice versa;<br /> (b) Words importing a specific gender shall be deemed to include all genders and non-binary identities;<br /> (c) The terms &ldquo;including,&rdquo; &ldquo;such as,&rdquo; or similar expressions shall be construed as illustrative and not exhaustive.</p>
<p>(D) Language Versions</p>
<p>If these Terms are translated into any language other than English, the English version shall prevail in the event of any conflict, inconsistency, or interpretation dispute.</p>
<br/>
<p><strong>29. Publicity Rights:</strong></p>
<br/>
<p>(A) Non-Confidential Nature of Public Interactions</p>
<p>(a) You acknowledge and agree that any content, interaction, or communication shared by you on public portions of the Platform (such as public profiles, comments, visible engagement metrics, or promotional features) may be used by Closerrr for promotional, advertising, or marketing purposes.<br /> (b) Such usage may include, but is not limited to, screenshots, anonymized testimonials, aggregated behavioural data, and other derivative materials displayed on websites, app stores, press releases, investor communications, or digital campaigns.</p>
<p>(B) License Grant for Public Content</p>
<p>(a) By using the Services, you grant Closerrr a worldwide, royalty-free, non-exclusive, transferable, sublicensable license to use, reproduce, modify, publish, translate, publicly display, and distribute public content you have made available through the Platform for promotional purposes.<br /> (b) This license is limited to non-private content and does not extend to private messages, personal data, or restricted-access material unless separately consented to or permitted by law.</p>
<p>(C) Right to Decline or Withdraw Participation</p>
<p>(a) If you are identified, quoted, or featured in any publicly visible promotional material by name or likeness (e.g., as a Friend), and such use is not mandated by a separate commercial agreement with Closerrr, you may contact us to request a reasonable modification or withdrawal.<br /> (b) Closerrr shall consider such requests in good faith but shall not be obligated to comply where use is lawful, non-identifying, or in aggregated form.</p>
<br/>
<p><strong>30. Governing Language:</strong></p>
<br/>
<p>(A) Authoritative Version</p>
<p>(a) These Terms and all related documents, notices, and communications are originally drafted and published in the English language, which shall be the sole authoritative language governing interpretation, enforcement, and dispute resolution.<br /> (b) Any translated versions of these Terms or associated materials are provided for informational purposes only and shall not be deemed legally binding or controlling.</p>
<p>(B) Discrepancies Between Translations</p>
<p>(a) In the event of any inconsistency, ambiguity, or conflict between the English version and any translated version of these Terms or supplemental materials, the English version shall prevail in all respects.<br /> (b) Users acknowledge that their continued access to the Services is conditioned upon their understanding and acceptance of the English version of these Terms.</p>
<p>(C) User Responsibility</p>
<p>Users who are not proficient in English are solely responsible for seeking assistance, translation, or legal consultation to ensure full comprehension prior to accepting or relying on these Terms.</p> <br/> <br />
`;

function TermsAndCondition() {
  useEffect(() => {
    document.title = "Terms & Conditions | Closerrr";
    return () => {
      document.title = "Closerrr";
    };
  }, []);

  return (
    <div className="bg-secondary-500 min-h-screen">
      <div className="px-4 sm:px-8 lg:px-32 py-10 sm:py-20 flex items-center flex-col w-full">
        <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-creator-heading-lg text-center text-customPink-500 mt-10 sm:mt-20 font-hellix-bold">
          <span className="font-fredoka text-customPurple-500">Closerrr</span>{" "}
          Terms & Conditions
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
      {/* <Rights /> */}
    </div>
  );
}

export default TermsAndCondition;
