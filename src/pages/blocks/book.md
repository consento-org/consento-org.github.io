---
title: Address Books
section: blocks
author: martin
license: CC-BY
year: 2021
---

[State: concept]

> **TLDR;** Build an android address book application that stores data in a decentralized fasshion.

## Background

Android devices usually come with the pre-installed Android and Google Address books. However these address
books are not easily syncable with other devices, they are not encrypted and most importantly: hosted by
Google.

In Consento we also have contacts and addresses and it may be a good idea to deeply integrate with the Android
operating system as it allows for deep integration, whereles iOS does not.

## App Overview

A simple android application that syncs all contacts from the address book. It stores the addresses in an
encrypted fashion and acts as an address book provider. Additional decentalized identifiers allows backing-up
those addbooks in a [hypercore](https://hypercore-protocol.org) pinning service.
