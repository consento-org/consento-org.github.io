---
slug: mobile-first
title: "Choosing the hard road: Mobile-first!"
image: images/2020/03/design-2.png
author: Martin Heidegger
author_title: Software Development
author_url: /team/martin
author_image_url: /img/tanja/cc-by-nc-nd/team/Martin.svg
---
import { Image, License } from '../src/theme/consento'

_About why we chose a mobile app as a start for Consento, what challenges we encountered and what we learned on our way−so you don't need to._

Around June of 2019, we were discussing and thinking hard about an initial version of Consento would look like−_a [MVP][]_. We had a few long and hard discussions, trying to tie down what is necessary for us to figure out. Our priority No. 1 eventually landed on _daily usability_. We wanted to make sure that whatever product we are building will be useful in everyday life. Ultimately, it means that this has to be on a mobile device; a mobile app.

This was a problem for us. _Yes_, we are developers and−_yes_−we have experience with desktop and server software, but _no_: our strength is not in mobile apps. We had to learn quickly and make choices. To make this an informed choice we looked at our requirements:

1. We need it to be JavaScript based to stay compatible with the [dat][] ecosystem.
2. We do not want for the user interface to stutter. This means our code needs to run separately from the UI _(in a different thread)_.

Of the two popular choices we found, we went with [React Native][] over [NativeScript][]. It seems easier to find people with React Native experience. It has a pretty good reputation and we wanted to use React for the user interface. Choosing it seemed the straight-forward choice.

React Native can be used as-is, but for quicker development we learned that [Expo.io][] is really comfortable. Expo limits React Native to a pre-defined set of extensions. This restriction allows the immediate installation on any device, quickly. No need to wait for slow build or publishing processes. − _Cool, we definitely want that!_

### Design Process
We want to use Open-Source software for as many tasks as possible, as it allows contributors to join freely and quickly. Sadly, we have not found a free design software that works for us. [Sketch][] is reasonably cheap for a design software, can be used offline, allows some hacking with the format and is overall the only choice we could see−even though it runs only on MacOS. _(though .sketch files can be edited using [Lunacy][] on Windows)_

<Image
  src="img/consento/cc-by-nc-sa/design.png"
  alt="Consento, In sketch, as mock and on the device."
  caption="From sketch to mockup to prototype. Marc made some nice designs for us."
/>

With the design ready we need to turn it into code. We wanted to automate that so we also informed ourselves here:

- [BuilderX][] looked professional but has a steep price tag of 15$/month/person and the output wasn't good to use in our opinion. Repeat output would clash with expo and typescript and we had to improve the output by hand.
- [Zeplin.io][] is useful for communication and is okay for a copy &amp; paste process but in the long run was going to be painful for updates: What did we already update? Where is the difference between design and code? How do we add the non-trivial features?
- [Sketch-to-react-native][] does sound promising but it exports to JavaScript _(and we work with TypeScript)_ and the output is not suitable for repeat exports. This would allow us to export once and any future update would be problematic.

After testing a few alternatives we knew what we needed.

1. It needs to be able to change the Sketch file repeatedly without breaking the rest of the code.
2. It needs to output all the things we need: images, fonts, elements.
3. It needs to be free or cheap.

Since we couldn't find any tool to do that, we wrote it ourselves. 🤓 ↓

### Hello, expo-export!
To get the workflow right we built in parallel to our first app [expo-export][]! It is a [free and opensource software][FOSS], that you can add as a plugin to Sketch. It will add a menu button that with one click exports the assets, fonts and components of the layers in that sketch file to relative folders.

In its current version expo-export is rough around many edges but the development has been mostly a breeze and we learned a lot about the capabilities of Sketch. Now, when we create changes in Sketch we can see the updates immediately_(-ish)_ in the mobile app.

<Image
  src="img/consento/cc-by-nc-sa/screen-recording-live-update.gif"
  alt="screen capture showing an iphone simulator updated as the export process in sketch is executed."
  caption="Simulator (or device) is updated quickly after sketch export is triggered."
/>

### Security &amp; Performance

The last topic for this post is about performance. If you try to use Consento right now on a slower device, Consento will be slow! Particularly when adding a new Relation or adding a new file to a vault. The reason for this performance issue is tied to our initial choices _(back in the first section)_. In order to work with dat, we need to rely on a specific encryption system _(libsodium)_ that is not working fast on react-native.

We thought initially that this should be the smaller issue and will be easily improved later-on but it turns out that encryption on mobile devices is a pretty big deal. The current version works more-or-less but because of time constraints the current solution is not compatible with dat. 😱

Maybe we should have gone with NativeScript as a platform? NativeScript has a synchronous [libsodium plugin][NS-nacl-plugin] after all, though [without iOS support][NS-nacl-ios]. A more straight-forward choice might have even been [nodejs-mobile][], a recommendation we received quickly from the [mapeo][] team, after asking for it far too late.

When we started we also were not aware of publication [difficulties in the AppStore][appstore-difficulties] ([specifically france][france-problems]) due to long-standing rules on [cryptographic exports][crypto-exports] or limitations on [importing cryptographic in parts of the world][crypto-world]. China also put out new [crypto laws][crypto-laws].

In short, we need to rethink our strategy for getting dat-compatible and fast cryptography to work on a mobile phone. <img src="/img/external/fair-use/screenshot-subscribe-button.png" alt="Subscribe" className="inline__image" /> to our [github issue #90][subscribe] to follow our progress.

---

You can have a look at the Consento mobile app right now → [Releases][].

The version v1.0.2 is still a very early preview, but it may inspire you.

In the meanwhile, we will be working on several improvements. You can follow our progress on this blog, using RSS, or in the [discord chat][discord-chat].

<License author="martin" year="2021" license="CC-BY-NC-SA" />

[MVP]: https://en.wikipedia.org/wiki/Minimum_viable_product
[expo-export]: https://github.com/consento-org/expo-export
[dat]: https://datproject.org
[React Native]: https://facebook.github.io/react-native/
[NativeScript]: https://www.nativescript.org/
[Expo.io]: https://expo.io/
[Sketch]: https://www.sketch.com/get/
[Lunacy]: https://icons8.com/lunacy
[BuilderX]: https://builderx.io/pricing
[Zeplin.io]: https://zeplin.io/
[Sketch-to-react-native]: https://github.com/nanohop/sketch-to-react-native
[FOSS]: https://en.wikipedia.org/wiki/Free_and_open-source_software
[NS-nacl-plugin]: https://market.nativescript.org/plugins/nativescript-libsodium
[NS-nacl-ios]: https://market.nativescript.org/plugins/nativescript-libsodium#ios-support
[nodejs-mobile]: https://code.janeasystems.com/nodejs-mobile
[mapeo]: https://www.digital-democracy.org/mapeo/
[appstore-difficulties]: https://help.apple.com/app-store-connect/#/dev88f5c7bf9
[france-problems]: https://www.ssi.gouv.fr/en/regulation/cryptology/how-to-submit-an-application/
[crypto-exports]: https://en.wikipedia.org/wiki/Export_of_cryptography_from_the_United_States#Current_status
[crypto-world]: https://en.wikipedia.org/wiki/Restrictions_on_the_import_of_cryptography
[crypto-laws]: https://www.insideprivacy.com/data-security/china-enacts-encryption-law/
[subscribe]: https://github.com/consento-org/mobile/issues/90
[Releases]: https://github.com/consento-org/mobile/releases
[discord-chat]: https://discord.gg/BAPxpGjgXH
