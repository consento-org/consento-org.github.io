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

As anyone with an email address knows: Spam is an issue and individuals use "spam mail accounts" to log
into online services, undermining part of the purpose which may have consequences (eg. announcements of service
outage).

## Verified Emails

<img src="/img/consento/cc-by-nc-sa/verified_email.png" alt="Email address 'jane@consento.org' with a 'quality'-mark on the left" style="border: 1px solid black" />

Usually, email addresses are simply exchanged between parties A (User) & B (SaaS). We propose to add an
independent server inbetween that is trusted by both parties and allows a user to signup a SaaS without 
disclosing the email address and without needing to click that "Verify email address"-button.

For this to work:

1. The user has to send their email address, together with a verification key of a certificate
    to a trusted service.
2. That service will send the regular email verification links to the email address.
3. The user clicks the verification links and then passes a signature with the service's certificate that
    the email address is owned by the user.
4. Instead of the email address, the user uses a verification email address and signs the requst with
    their certificate to sign up to the Saas.
5. The SaaS uses the given verification, loads the certificate by the trusted service and accepts the
    email address without sending an email to it.
6. When the SaaS has important announcements to send to the user it uses the trusted-service
    as bridge with a effective rate-limiting in place.
7. The user can block a specific service from sending email addresses again using their certifcate at
    the trusted-service.

## Tool Suite

For this to work we provide:

- the specification for the service
- a GDPR compliant reference implementation to host a trusted service
- an examplary SaaS that uses the service
- frontend libraries to highlight the verification.

## Benefits

- A new SaaS doesn't need to setup a mail service.
- SaaS providers don't need to worry about storing privacy sensitive data.
- Less emails are sent to users. 

## Technical Details

- The API is specified using REST and DID's.
- The servers shall be provided as docker containers.
- All software provided as OSS under the MIT license.

<License author="martin" license="CC-BY" year="2021"  />
