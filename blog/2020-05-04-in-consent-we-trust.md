---
slug: in-consent-we-trust
title: In consent we trust
author: Marc Chataigner
author_url: /team/marc
author_image_url: /img/tanja/cc-by-nc-nd/team/Marc.svg
tags: [design, trust]
image: /img/external/pixabay/anemone123-2637160_team-spirit-cohesion-together-2447163.jpg
---
import { Image, License } from '../src/theme/consento'

The concept behind Consento - Human-Factor Authentication - requires trust. Consento aims at delivering a novel way to securely store confidential data encrypted without central cloud solution, and access them without depending on complex passwords. Instead, with Consento users can request the consents of peers they have decided to rely on.
<!--truncate-->
Such a new way to secure confidential data requires appropriate [UX][] (user experience) &amp; [UI][] (user interface) to guide users in handling data privacy. But before discussing about the right UX/UI, we need to discuss a bit about a fundamental object: trust.

Indeed, before it comes to build trust in the UI, we need to build trust in the system. And before the system, there is the belief in the system. Consento story requires quite some thoughts about various forms of trust: trust in the _system_ build by the web of devices, and in the other _peers_ who act as trustees, if not also trust in the Consento _business_ and team itself. So, to start with, what do we speak about when we speak about trust?

## Trust
We like the definition of trust as _"a psychological state comprising the intention to accept vulnerability based on positive expectations of the intentions or behaviour of another"_(_[Rousseau et al., 1998][]_). Trust depends both on the individual _abilities to trust_ and on the _trustworthiness_ another is able to display.

Said otherwise, trust is neither a cognitive process nor an innate human feature, it is both (_[Mújdricza, 2019][]_). Studies have shown that trust is an a priori given human faculty, and therefore the possibility of trust is always present. But visual cues, human contexts and past experiences affect positively or negatively the level of trust. **Trust happens to be 'learned' more than 'earned'**, and it requires a certain affective warmth for a start.

## Contemporary online experiences of trust
Internet users experience online services as a fast pace changing context.  They regularly confront with new offerings, new companies, new standards, etc. In such an uncertain context, the aspect of trustworthiness can be built on social constructs like _reliability_ and on individual constructs like _integrity _(_[Rousseau et al., 1998][]_).

Among the services internet users experience online (_[van der Werff et al., 2019][]_), display of trustworthiness emerge on levels such as reputation systems, third party endorsement, transparency mechanisms, etc. And novel ones keep on emerging.

- The **reputation systems** provide a hint about trustworthiness based on other peers' previous experiences, as well as an incentive to behave trustworthy. Think for instance about peer-to-peer platforms tw-ways rating systems.

<Image
  src="img/external/fair-use/blablacar-trust-level.png"
  alt="Trust system relevancy.Illustration on the amount of level of trust by bla-bla-car. Percentage of respondents who ranked 4 or 5 of 5 their level of trust in Family (94%), Friends (92%), Member with full profile on bla-bla-car (88%), Colleague (58%), Neighbour (42%), Social Media Contact (16%). (Study based on 18289 respondents in 11 countries)"
  caption="Efficient 2-ways rating systems can bring trust. Blablacar is a carpooling service."
  license={{ author: { name: 'Blablacar', link: 'https://blablacar.com' } }}
/>

In the case of a decentralised architecture like Consento, with no central platform enforcing the rules, that system in itself might be less effective than the reputation in real life of these peers. Research (_[Nielsen, 2012][]_) have demonstrated also that despite a tendency to trust more people who are similar to us, high reputation of peers (and stakeholders) eventually beats strong similarity among peers.

- The **endorsement by third parties** such as insurance companies, governmental institutions or civil origins is never a discrediting thing to get. Commercial companies also rely on customers' endorsements. However, [studies][studies-endorsement] report that online consumers pay little attention to endorsement itself. Third party endorsements bring on credibility more than trust.

<Image
  src="img/external/fair-use/dropbox-third-party-endrosement.png"
  alt="Third parties endorsement from customers, example of Dropbox website. More than 450.000 teams use Dropbox Business. Learn more about our customers: Designit, ASU (Arizona State university), UF ( University of Florida), Tops, Lonely Planet,  World Bicycle Relief, Hearst, Expedia."
  caption="Dropbox display for instance its customers' endorsement."
  license={{ author: { name: 'Dropbox', link: 'https://dropbox.com' }}}
/>

- The **transparency mechanisms** rely on disclosing the code, the information about the company activity or the team members' affiliations. Fairphone for instance, discloses its full supply chain as a token for its commitment to transparency. On this aspect, Consento intends to embed transparency at its core, even though _transparency _might be a concept antinomic with keeping data confidentially _hidden_ (this will be the topic of the next article eventually).

<Image
  src="img/external/fair-use/fairphone-supply-chain.png"
  alt="Map of the Fairphone supply Chain. Powered by Sourcemap. Legend: Supplier in green color, Processor in purple color, Manufacturer in magenta color. 5 in the Nederlands, 67 in Taiwan, 2 in Congo, 3 in Japan, 1 in Singapore, "
  license={{ author: { name: 'Fairphone', link: 'https://open.sourcemap.com/maps/57bd640851c05c0a5b5a8be1' }}}
/>

- Third party endorsement and transparency can be complemented by **public self-assessments** of governance.

## Digital and in-real-life consents
As for one's ability to trust, it is constantly reassessed depending on the lived experiences, online and offline. A personal dramatic event, or a worldwide pandemic for instance, do impact people's ability to trust each other or their institutions. Even if Consento is first a digital tool, we remain aware that the evolution of people's trust capacities happens mainly off-line.

The ['nudge' approach][] represent an interesting look into that matter. Humans are inherently biased cognitively. For instance, we would rather avoid loosing than risking to win, we weight the same information differently depending on the credits we give to the speaker, we assess value differently depending on the initial frame given to us to look at the matter, etc.

We have to remember that Cass Sustein and Richard Thaller approach spurred discussion on how much governments or corporations should be allowed to 'nudge' us to do what they want us to do. But **when we speak about trust, we should not dismiss our cognitive biases, because before being rational, we are first human**.

## Roadmap

So here are the track on which we'll work and test our assumptions : build on peer's IRL reputation, third party endorsement and transparency mechanisms. On these aspects, if you have any comments or recommendations of relevant actions for Consento team to take on, we are open to suggestions.

Else, what do you think? Is there any other ways of trust building we should keep in mind while developing Consento?

<License author="marc" year="2020" license="CC-BY-NC-SA" />

[UX]: https://www.smashingmagazine.com/2019/04/privacy-better-notifications-ux-permission-requests/
[UI]: https://www.smashingmagazine.com/2019/04/privacy-ux-aware-design-framework/?ref=heydesigner
[Rousseau et al., 1998]: https://journals.aom.org/doi/abs/10.5465/amr.1998.926617
[Mújdricza, 2019]: https://www.academia.edu/39355650/The_Roots_of_Trust
[van der Werff et al., 2019]: https://journalofcloudcomputing.springeropen.com/articles/10.1186/s13677-019-0129-8
[Nielsen, 2012]: https://www.nielsen.com/us/en/insights/article/2012/trust-in-advertising--paid-owned-and-earned/
[studies-endorsement]: https://www.nngroup.com/articles/authority-principle/
['nudge' approach]: https://en.wikipedia.org/wiki/Nudge_(book)
