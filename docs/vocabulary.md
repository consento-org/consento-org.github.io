---
title: Consento Vocabulary
---
import { Image, License } from '../src/theme/consento'

This repository's purpose is to define, explain and discussion the terminology used throughout *Consento*.

Consistency of the vocabulary is important for mutal understanding. Some terms may be used in other applications and contexts with different meaning, which can cause confusion for users and developers. This document should be the reference of what vocabulary is used by *Consento*.

- Additions and updates should be submitted as pull requests. 
- A headline starts with the currently used *name* of the term: `## term`

Each term should be described answering the following questions:

- What does this term mean in *Consento*? What are the main characteristics?
- What does the term **not** mean in *Consento*?
- What alternative terms exist (in other contexts/projects/use cases)?

And just add anything else that is important to describe a term in the context of Consento. 

Terms are listed in alphabetical order.

## Channel

[TBD] main characteristics
proposal - A channel is an end-to-end communication network, between 1 or more users and each of their associated unique devices. The channel is a secure and private network which exists only in-between the set of these unique devices.
The channel is initiated with the set up of an operation (accessing an onilne account, decrypting an archive, ...) and gather all actions related to that operation (request to unlock, unlocked by, edited, ...) 

**What it doesn't mean:**

[TBD] description

**Alternative terms:**

connection, 


## Device

A *device* is a physical hardware like a smartphone, a compputer, an IoT device, a server, a notebook, etc.. It has a **unique** identifier, which is important to revoke access to a device, if it has been lost for example.

The first time *Consento* is run on a device, there will be a [Device Setup](#device) to perform actons like applying access protection (i.e. password, PIN, biometric sensors, etc.) and assigning a device name. The setup will also create a unique identifier internally.

**What it doesn't mean:**

Setting up a *device* is not creating a [space](#space). It only configures a specific device and ensures that its unique configuration is not going to be "copied" to other devices. The device integrity is ensured.

**Alternative terms:**

*none*


## Pairing

Pairing is the process to connect two devices for the first time and exchange a set of unique information between these 2 devices, probably similar to how we used to pair Bluetooth devices. The pairing process accounts for a handshake; devices exhange a unique set of private-public keys. The device-to-device communication is end-to-end encrypted. The pairing can be done via analogic connection (unique QR code scanning) or via distance connection (unique identifier).

**What it doesn't mean:**

proposal - The pairing process ensures that each device knows other devices as unique devices. It ensures that device-to-device connections (that are the communication vectors on which channels are built) are secure and not open.

**Alternative terms:**

Handshake

## Relation

proposal - A relation is a responsible actor as end-point of the channel. A relation can be a human person (a legal individual), a legal person (an organization, a corporation, a NGO, a governement, a brand, a service provider, ...), a registered device (IoT, server, ...). A relation sets up one USER ID on 1 or more devices. Via its devices, the relation is connected to other users.

**What it doesn't mean:**

It means that a realtion is a unique and identifiable end-point. That relation bears forms of responsibility in the private and closed networks it is part of.
[TBD] description

**Alternative terms:**

[TBD] description


## Space

A *space* is created after the setup of a [device](#device). The purpose of a *space* is to provide separation for different purposes, for example a "private" and a "business" space. 

There can be more spaces registered on a device, but there must be at least one to use *Consento*. Spaces can be cloned from other devices for example via [pairing](#pairing), and they can be kept in sync.

**What it doesn't mean:**

There is no central instance to manage spaces. Spaces only exist on devices. 

**Alternative terms:**

account, user, workspace, realm, group, organization, wallet, repository, identity, profile, setup


## User ID

[TBD] description

**What it doesn't mean:**

[TBD] description

**Alternative terms:**

[TBD] description


## Unlock / run an operation

[TBD] description

**What it doesn't mean:**

[TBD] description

**Alternative terms:**

[TBD] description


## Lock / run an operation

[TBD] description

**What it doesn't mean:**

[TBD] description

**Alternative terms:**

[TBD] description


## Revoke

Proposal -- Revoke a device from a user key chain / circle of devices.

**What it doesn't mean:**

[TBD] description

**Alternative terms:**

[TBD] description


## Delete

Proposal -- Delete a user iD from a device, ie. reset the device to "new device".

**What it doesn't mean:**

[TBD] description

**Alternative terms:**

[TBD] description


## Key holders

Proposal -- A Key holder is a relation who have been asked and who accepted to hold part of a secret. 

**What it doesn't mean:**

Proposal -- It means that the relation holds on his/her device(s) part of the secret and is needed to unlock the operation. It means that the key holder shares part of the responsibility for in the access management of this operation. 

**Alternative terms:**

Lockee

<License author="Consento" license="CC-BY"/>
