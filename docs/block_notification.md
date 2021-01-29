---
title: Decentralized Notification System
---
import { Image, License } from '../src/theme/consento'

[State: concept-v2]

> **TLDR;** Decentralized applications need (mobile) notifications that arrive with certainty
> at a [group](./block_group) of devices.

## Background

Notification systems for mobile devices and desktops are required to be tunneled through the services
by [Google][GNS] and [Apple][INS]. These services are deeply tied to the the Developer ID, making the
developer ID responsible for abuse. This means: any decentralized application needs a centralized server
setup for notifications. :pensive:

The goal is to provide a zero-knowledge, efficient notification server that can pass notifications
from one client to another without being able to look inside the envelope while still preventing spam to
clients. The server is to utilize WebSockets when the application is in the foreground for quicker
processing and to only use push services when necessary.

[GNS]: https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications
[INS]: https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/APNSOverview.html#//apple_ref/doc/uid/TP40008194-CH8-SW1

## Prior Art

We are particularly motivated to see the [Signal Notification System][SNS]. It functions similar to what we have
in mind. It is quick and proven in practice but it lacks a few details important to use. It stops a little short
in terms of the security we need.

With the v2 of the Consento Notification server we would like to make it as usable for
any kind of future Notification system.

[SNS]: (https://github.com/signalapp/Signal-Server/tree/master/service/src/main/java/org/whispersystems/textsecuregcm/push).

## First attempt & Things that need to be different

For the first version of Consento we already developed [a notification-server](https://github.com/consento-org/notification-server/)
which taught us important lessons for a second version

1. Devices need to be grouped in order to make sure that the notification arrives at the device needed.
2. A notification that arrived needs view-receipts in order to stop distributing the notification to unused devices.
3. Request Limiting needs to be as restrictive as possible.
4. It is a good idea to register devices tokens on every startup.
5. Notifications by Apple & Google can not be relied on.

## Future Steps

- Restructure notification code to use hypercore synching and [groups](./block_group).
- Enable [sharding][sharding] of the notification servers to remove possible bottle necks.
- Investigate possibility of background notification polling using a DHT instead of signalling servers.

[sharding]: https://en.wikipedia.org/wiki/Shard_(database_architecture)

<License author="martin" license="CC-BY" year="2021"  />
