---
slug: how-to-stay-in-control-of-our-data
title: How to stay in control of our data?
image: /img/external/unsplash/swimstaralex_KgLtFCgfC28_cut.jpg
author: Tanja Rohlfs
author_title: UI/UX Design
author_url: /team/tanja
author_image_url: /img/tanja/cc-by-nc-nd/team/Tanja.svg
---
import { License } from '../src/theme/consento'

_About the thinking behind Consento and how it is supporting the plan to stay in control of data we need to stay in control._

Giving up responsibility is comfortable. We know this because giving up the responsibility of making good backups, structuring our data and publishing articles responsibly is something we gladly hand off to online platforms.
<!--truncate-->

There are many common "best practices" how to minimize the exploitation of your data by big companies: Have multiple e-Mail addresses, use a password manager, don't share too much on social media etc. But this feels like a drop in the ocean. You still need to accept the rules of the system and hope not to get caught.

But how could a better system look like? How comfortable and powerful does a system need to be for us to maintain autonomy? We have been asking thinking and tinkering around these questions for more than a year and have received support from the [NGI Ledger program][] a half a year ahead of our current, global challenges.

Here is the set of important requirements we identified:

---

<figure className="kg-card kg-image-card kg-card-hascaption">
  <img src="/img/tanja/cc-by-nc-sa/in-control/on-our-device-4.png" style={{ float: 'right', width: '40%' }}  />
  <figcaption><strong>"on our device"</strong> - the devices we own need to be capable to hold the private data we own. Even if we have a lot of data, more than our devices are capable of, this needs to work.</figcaption>
</figure>

---

<figure className="kg-card kg-image-card kg-card-hascaption">
  <img src="/img/tanja/cc-by-nc-sa/in-control/no-server-necessary.png" style={{ float: 'right', width: '40%' }} />
  <figcaption><strong>"no server necessary"</strong> - whatever thing you are watching on the internet runs on a server and that server has costs attached! With those costs come business interests and we need our tools to be free of this dependency.</figcaption>
</figure>

---

<figure className="kg-card kg-image-card kg-card-hascaption">
  <img src="/img/tanja/cc-by-nc-sa/in-control/with-our-consent.png" style={{ float: 'right', width: '40%' }} />
  <figcaption>
    <p><strong>"with our consent"</strong> - <em>(spoiler alert: that is how we came up with the name</em> 😉<em>)</em> Asking for consent can easily become a vain effort:</p>
    <ul>
      <li><em>"Do you agree to use cookies?"</em></li>
      <li><em>"Do you confirm to our terms of service?"</em></li>
      <li><em>"Do you accept the license agreement?"</em></li>
    </ul>
    <p>You probably know those questions and how pointless they have become. Reducing those questions to only show when they are relevant and to visualize the relevancy is very important.</p>
  </figcaption>
</figure>

---

<figure className="kg-card kg-image-card kg-card-hascaption">
  <img src="/img/tanja/cc-by-nc-sa/in-control/maintaining-privacy.png" style={{ float: 'right', width: '40%' }} />
  <figcaption><strong>"maintaining privacy"</strong> - ending requests for consent are transferred using public infrastructure (cables, network towers, etc.). It needs to use strong cryptography and needs to make not only sure that communication is as-private-as-possible but that it also obfuscates communication to make sure no-one knows who communicates with whom.</figcaption>
</figure>

---

<figure className="kg-card kg-image-card kg-card-hascaption">
  <img src="/img/tanja/cc-by-nc-sa/in-control/maintaining-privacy.png" style={{ float: 'right', width: '40%' }} />
  <figcaption><strong>"controlling identity"</strong> - be it for business, family, pleasure or medical tests; many of us use more than one identity online, and many offline: multiple email addresses, google/twitter/etc. accounts. A tool that can work in its place needs to be able to have different identities to different people.</figcaption>
</figure>

---

<figure className="kg-card kg-image-card kg-card-hascaption">
  <img src="/img/tanja/cc-by-nc-sa/in-control/free-for-all.png" style={{ float: 'right', width: '40%' }} />
  <figcaption><strong>"free for all"</strong>  - web services are accessible to a very wide range of people. We can not build an internet-of-trust on technology that costs. Any cost means more to the poor of us than to the rich. For that reason, everything we publish is open source and free to download on app stores, with the goal for everyone to benefit from it.</figcaption>
</figure>

---

<figure className="kg-card kg-image-card kg-card-hascaption">
  <img src="/img/tanja/cc-by-nc-sa/in-control/human-centric.png" style={{ float: 'right', width: '40%' }} />
  <figcaption><strong>"human centric"</strong> - this is a big word, but in our case we identified that the thing humans are worst at is keeping a secret(password) safely. We need to accept our human limitations and fallability and take it into account.</figcaption>
</figure>

---

Under the name of [Consento][], we started with a mobile application that exchanges consent requests through a completely private network with anonymized identities. You can take it for a test-ride by [downloading our latest release][latest-releases].

As a team, we started to work on this issue with [Georepublic][] being the primary entity. We hope that now, as we are getting to something more concrete, others will join our effort and help us make it a reality. → [https://github.com/consento-org][consento-gh]

As a society, we are not at a place where we as individuals can take on our "data-responsibility" yet. That's why we aim to raise awareness for this topic and also reach out to non-tech-savvy people, because the issues we want to solve concern everyone!

While the topics of the NGI Leder program are broadly spread, many of our sibling projects work on complementary goals: [Cobox][] has been building the software infrastructure that allows us to exchange content. [Iuvia][] has been working on a hardware one-fits-all solution that can be used as a server in house, building with similar building blocks, both necessary to take control over data storage sovereignty _(read more in [Jaya's post][])_. [oneHealth][] works on a responsible collection of medical data _(think Fitbit; but also doctors offices)_ and [Worldbrain's Memex][] is moving browsing information to a decentralized place.

If you can take this as an opportunity to support all of us by sharing our work, asking us questions or contributing to our efforts, that would make our day.

Thank you for reading.

<License author="tanja" year="2020" license="CC-BY-NC-SA" />

[NGI Ledger program]: https://ngi.eu/ngi-projects/ledger
[Consento]: https://consento.org
[consento-gh]: https://github.com/consento-org
[latest-releases]: https://github.com/consento-org/mobile/releases/latest
[Georepublic]: https://georepublic.info
[Cobox]: https://cobox.cloud
[Iuvia]: https://iuvia.io/
[Jaya's post]: https://www.ngi.eu/blog/2020/01/24/whos-ngi-jaya-klara-brekke-cobox-peer-to-peer-cloud/
[oneHealth]: https://spaces.fundingbox.com/spaces/ledger-introduce-yourself/5dbaec7b52317832f859066a
[Worldbrain's Memex]: https://getmemex.com/
[@swimstaralex]: https://unsplash.com/@swimstaralex
