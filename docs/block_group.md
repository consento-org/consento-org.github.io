---
title: Identify members of a Group
---
import { Image, License } from '../src/theme/consento'

[State: active-development] → [@consento/group](https://github.com/consento-org/group)

> **TLDR;** We need of a working decentralized group system that fulfills all of our many criterias.
> We have a detailed concept and plan.

## Background

We need for Consento to work on multiple devices in order to not break-down if your device breaks or is
lost. Multiple devices connected are a group. We also want to enable sharing of resources between consento
users. All the users that share an ability form a group as well. 

We have been looking into current ways how decentralized applications operate and havn't found a good solution
for our case. Currently apps work mostly in one of the following modes: `single-device`, `atomic` or
an `external-id`.

`Single-device` systems mean that the credentials for the system to run are deeply tied to the device used.
Loosing the device will mean a complete loss of all data, which makes it not reasonable to use in Consento.

`Atomic` applications use [CRDTs](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type) or similar
structures to make sure that parallel operations on multiple applications. The problem however with groups is
that one member should not remove all or one other member and it atomic systems there is no guarantee to this.
In some systems groups are treated as atomic. This means that a change of members will cause a link for the group
to be distributed to all members. This prevents groups from being linked to by third parties. A feature that
we need for Consento.

`external-id` some decentralized applications (such as Signal) use a different exernal ID (telephone number) to
identify an administrator that can add/remove members. In our case we want the system to work without this: It 
creates a un-removable dependency. Not just that: this dependency may be hackable (telephone number spoofing) and
it may cost money (creating a paywall). Both downsides not acceptable to us.

So all common ways to build groups don't work for us. But this gave us following two features that we need to
accomodate:

- Members can be removed from a group (seems obvious: but not supported by many algorithms).
- A group stays identifiable even with changing members.
- No external service/hardware required to setup a group.
- The internet is not required for operation.

## Implementation Stage 1

The current work on the Permission system is still not quite stablized but has
progressed nicely over the past months.

What has cristallized out of our effort have been following technical foundations:

1. For team members to be added all members need to agree.
2. For team members to be removed, all but the member removed need to agree.
3. Each member can have only one **active** (and cancellable) request.
4. All statements will use [a hybrid-local-clock](./block_time) for syncronization.
5. The statements will use [sign vectors](https://github.com/consento-org/crypto/#sign-vectors) to
    make sure that old device backups can not create forks of states.
6. Members that are once removed can not be re-added again. _(each member is unique for a group!)_
7. The data from the members is stored as encrypted blobs that make it possible to share the data without knowing the content.

You can follow our progress in the PR: [@consento/group#1](https://github.com/consento-org/group/pull/1).

## Possible Applications

- Decentralized Social Applications
- Service Providers
- Decentralized Document Signing

## Beyond Stage 1

- Passive members: Allow for a member to be added as a passive member that is not involved in the add/remove process.
- Different sync examples: The group mechanism can be used with almost kind of sync system, including blockchains
    (IPFS, Ethereum, Secure-scuttlebutt,...). Having examples would be great.
- Viewing members: require for all content to be encrypted and only members that receive viewing permission may see the content.
- Security Audit: We need to get a security audit for this module to get a better picture and see if we have any problems.
- Different language implementations: Starting with rust and go it would be good to have the same system also available in other platforms.
- Experiment: Maybe its possible for an majority vote instead of unanimity voter for a better user experience?

<License author="martin" license="CC-BY" year="2021"  />
