---
title: Federated Email Verifcation
---
import { Image, License } from '../src/theme/consento'

[State: early-phase]

> **TLDR;** Setup the technical foundation for a federated, decentralized email verification system.

## SaaS, emails and problems

SaaS providers that want to offer services and use decentralized ID's may still require email addresses
for their system to function. Either because of policy reasons _(required by law)_ or technical reasons
_(required by database schemas)_. Long story short: setting up an account at a SaaS may require the field
"email".

As anyone with an email address knows: Spam is an issue. Individuals may not want to give out their
email address to all services on first contact and this is a concept for a federated service that may
reduce this problem.

## Verified Emails

We visualize verified emails (as shown below) in Consento as a email address that are verified by **one-of-several**
email verification providers.

![Email address "jane@consento.org" with a star on the left](/img/consento/cc-by-nc-sa/verified_email.png)

Let's assume `email.consento.org` is hosting one instance of our linux-based suite. It provides API endpoints
like `https://email.consento.org/verify` that will send an email 

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

## Federated System for Email

## Benefits for 


<License author="martin" license="CC-BY" year="2021"  />
