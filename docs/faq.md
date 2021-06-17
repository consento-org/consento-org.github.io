---
title: FAQ
---

## What if I have only 1 device?

Although this is a common situation, this means that your Consento app is poorly secured. If you lose your device, break it or erase the app, your user ID and all related auth will be lost. 

Note that this is a situation a user may 'return to' temporarily, if they were to have 2 devices associated with their user ID and remove 1 of the device (to add a new one for instance).


For this reason, for user ID with only 1 device,

- relations will be notified that this user has a poor set up of devices
- some features will be activated only if 2 devices are associated to a user ID ; ex. becoming a new key holder of a relation's lock
- prompts and guidance will encourage user to add other devices or services, to ensure secure back up and safe recovery process


## How fast can I get consent?

To access a file or a particular app, we all look for velocity. With Consento, you may consider 3 use cases: 

- if you are accessing files or apps secured using your own paired devices, then the time to authenticate yourself with Consento is the same as a MFA. One device will trigger the other paired one(s) and from the other devices you may authenticate yourself.

- if you are accessing files or apps secured by splitting the access management between several key holders, then the time to receive the consent depends on the time the other key holders take to consent. This situation may sound awkward for general digital uses, but it is valuable in other contexts. In cases when handling highly confidential material, this solution is "slow by design". The consent mechanism may be associated with human protocols, like granting request only during office hours, requiring X consents out of Y key holders, etc.

- if you are accessing files or apps secured by splitting the access management between several key holders (like the previous case) but for which the level of security is less critical, Consento allows to work reversely. When you require access, the access is granted automatically after 1 min (for instance) unless any other key holders deny access within that minute. Similarly, the parameters can be customised.


## Is it all logged? 

Yes. Requests, requests granted, requests denied, data added, edited, by who, at what time, or potentially at which location, from which device, all is logged into the Hypercore. You can think of it as an Audit Trail feature.

If you think of particular use cases where a specific type of log would be valuable, just [get in touch with us](mailto:keepsafe@consento.org).


## Is it backed up?

Yes, as soon as different devices are paired, the content of your Consento app on one device is/can be synchronised on other devices. 

Manually, Consento will allow to add other backup devices. For instance, you will be able to chose which device of yours or of your relations, should keep en encrypted back up of your device. Consento is designed to help you monitor how many encrypted backups there are.


## How many people should I involve in the consent mechanism?

That is a great question, one that has no simple answer because use cases are so diverse.

Let's say it is a professional use case, securing access to a confidential dataset (e.g. PII) within a particular team. In this case, Consento will encourage you to add each team member's device, and recommend you to add 2 other key holders as recovery access outside the team, who will ensure that the access will never be compromised.


## How do I choose the pool of key holders to include?

Similarly to the previous question, it is a question with no simple answer because use cases are so diverse.

One important note thought, is that the question should rather be "how do I choose *and maintain* the pool of key holders?". Indeed, the choice you make at first requires to monitor the trust in each of these key holders over time and the level of security they maintain over time. 

Consento will display an indicator of the level of security given the setup of each user. This indicator does not disclose critical information, but notify you when one of your key holder security level lowers (when s/he changes phone, asks recovery, etc.). 

Over time, Consento enable you to manage the key holders and the privacy rules associated to each lock. You can add/revoke key holders or devices, edit the parameters to consent, etc.


## Can consent be customised? 

Yes. Humans are creative and this creativity is one way to add layers of security to your data accesses.

At the moment, Consento will allow to parameter to max time to respond, the min nb of key holder required to grant access. 

We already think of adding other parameters, like time restriction (e.g. outside working hours), location (e.g. in a particular space, or not outside a geographic space), or messages (e.g. associated with the request, a message could be added to feel like James Bond authenticating himself to his local informant).

Outside Consento apps, you could also consider enacting that this consent can be sent/granted only when people are in a video meeting together.

If you think of particular use cases where a specific type of customisation would be valuable, [drop us a line](mailto:keepsafe@consento.org).


## Is Consento HIPAA or GDPR compliant?

Use cases are very diverse and each infrastructure setting should be examine case by case. But to mention aa few elements:

- GDPR requires the consent for share data and the right to forget. For both of these aspects, Consento technology enables the consent mechanism at the core, and the right to forget is just a delete of the master key. Encrypted data become inert then.

- HIPAA is location relevant. With the geo-fencing principle described in the previous Question, Consento allows to be HIPAA compliant.
