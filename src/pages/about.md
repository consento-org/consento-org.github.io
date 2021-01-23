---
title: What is Consento?
---
import { Image, License } from '../theme/consento'

> **TLDR;** The Consento-System allows everyone to accept the help of a human to keep data in a private and safe store. It does not rely on servers and is not systematically exploitable. It reduces the risk of human errors and puts value in the creation of human connections and trust between them. It is open and free.

## Human limits
_How do you currently protect your data?_<br/>The most common answer is either a _password_ or a _physical key –_ which is just a complicated password that you can hold in your hand.

_How many passwords can you remember? How many keys can you carry?_<br/>6 keys? 3 key-cards? 352 passwords? We humans are overwhelmed by today's security requirements. Particularly when we are active on the web. This comes with a mental exhaustion that we all can feel.

We need to face the fact that we do not have perfect memory. We do not want to spend our life maintaining passwords. We need a _new_ way that takes account of that.

## Unlock by consent
What if you could access a private box only if another person consents to it? Another person who you know and trust?!

In Consento we create a box that stays locked _(encrypted)_ unless another person **consents** to opening it. The other person does not need to have access to the box. You keep all the ownership. The other person only verifies that you are you.

<Image
  src="img/external/fair-use/terminator-2-scene-keys.png"
  caption="Terminator 2 scene: unlocking with two keys."
  alt="Two men shown in front of a locked door. Each is turning a key in a lock synchronously to open the door."
  license={{ author: 'TriStar Pictures' }}
/>

Human consensus is a powerful tool that is woefully ignored in the current tech world. We chose the name &quot;コンセント&quot; (Ko・n・se・n・to) as a reference to the birthplace of the idea _(Kobe, Japan)_ but also to highlight that solutions can be built with and for humans, not despite of them.

## No need to trust organizations
Can you trust Google to keep your data private? Facebook? Twitter? Dropbox?<br/>All those organizations provide value for a lot of people. Their centralized nature makes them useful but it also makes them a rich &amp; easy target for cyber attacks. Every successful attack mistake becomes very costly. Not just to them but to you.

In Consento there is no central server! We do not have access to your private data <em>(not even encrypted)</em> and can not give it to other. Not even if someone tries to extort it from us.

Your data is stored and replicated automatically only between the devices you own. You can choose to ask trustworthy fellow humans to keep a backup as well.

## Device ≠ Person
When we interact with others on our computer, we can never be entirely sure if the service responding is a real person or a bot. Two things can be done to become more certain of that:

1. **Secure communication.** Making sure that the communication protocol is safe and hard to access is very important. Consento does this by by-passing a lot of the web stack using <a href="https://datprotocol.github.io/how-dat-works/">DAT</a> as a foundation. We even add a few layers on top of it. Follow our blog to learn more as we are progressing!
2. **Competent humans.** Most often security fails through human mistakes. By relying on other persons we make sure of two things:<br/>_a)_ you need to be making a conscious decision when you access the data - you can not interact with it by accident.<br/>_b)_ you always have someone to make sure you do it right.

Making sure that you understand what is going on is our first priority.

## The system and the application
In our first step we are developing a standalone application. The app is going to function as reference application for using the _Consento-System_. The Consento-System can be used independently. We imagine it to be useful in a wide variety of use-cases: smartlocks, password managers, web-services, scheduling, etc.

## Open and tested
We are committed to share our progress, findings and code. You will be able to find anything on this homepage and on our <a href="https://github.com/consento-org">Github repository</a>. Regularly we test our assumptions in user tests and give our best to make sure that the first client app offers a usable alternative to current storage solutions. If you have time and interest for a UX test or want to support us: please meet the <a href="../team">team</a>!

<License license="CC-BY-NC-SA" author={["martin", "daniel"]} year="2019" />
