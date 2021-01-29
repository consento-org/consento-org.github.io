---
title: Timestamp synchronization
---
import { Image, License } from '../src/theme/consento'

[State: done] → [consento-org/hlc](https://github.com/consento-org/hlc)

> **TLDR;** The local time of devices is not 100% in sync. Using timeservers requires a working internet connection and becomes a point of centralization. Vector clocks dont store a human readable time. The hybrid logical clock allows to have sorted, human readable time stamps for that are practically in-sync.

## Background

We need to have timestamps for any operation done with consento. These timestamps are relevant for log auditing and to make sure that operations done on two devices get processed in the correct order on sync.

The timestamps on devices can be changed and out-of-sync and as such are not reliable. Which is why we had to explore other solutions for this.

## Why not trusted timestamps?

Trusted timestamps, as described in [RFC3161](https://www.ietf.org/rfc/rfc3161.txt), work well to make sure that entries are signed at a certain timestamp; but those take time to compute, require a persistent internet connection, and an outside service and what is more: an authority trusted by all parties involved to sign those entries.

## Enter Hybrid Logical Clocks

A hybrid logical clock (hlc) is a clock based on the devices clock. If no sync happens it will always just use the local device time.

What makes it different from the device clock is that it will change the internal behavior if it encounters a timestamp created by another device that is in the future.

In this case, the hlc will use the latest received timestamp and start a logical counter that increments every time a new timestamp is requested.

(thanks [Gene](https://github.com/urbien) who highlighed the [hybrid logical clock](http://muratbuffalo.blogspot.com/2014/07/hybrid-logical-clocks.html) and their use of it in [multi-hyperbee](https://github.com/tradle/multi-hyperbee))

## Implementation

[CockroachDB](https://www.cockroachlabs.com/) has a quite [strong implementation](https://github.com/cockroachdb/cockroach/blob/663fcf17cb8789a2c46a719e0107a15400eee918/pkg/util/hlc/hlc.go) of a hlc in go-lang but we needed a JavaScript variant, working within the hypercore ecosystem.

To make sure that there is the lowest possible chance of equal timestamps, we have created [bigint-time](https://github.com/consento-org/bigint-time) which will return the current time in nanoseconds.

And we published [@consento/hlc](https://github.com/consento-org/hlc) that basically functions as the example below and can be reused for any sort of timestamp-syncing mechanism.

_(Note: the configuration is rather complex, please refer to the documenation!)_

```javascript
const HLC = require('@consento/hlc')
const hlc = new HLC()

// Every new timestamp is used to make sure that the
// local clock
// is always ahead of previous timestamps.
function onNewTimestamp (otherDeviceTimestamp) {
  hlc.update(otherDeviceTimestamp)
}

const list = []
list.push(hlc.now())
```

<License author="martin" license="CC-BY" year="2021"  />
