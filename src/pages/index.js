import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import CodeBlock from '@docusaurus/theme-classic/lib-next/theme/CodeBlock'
import styles from './styles.module.css';

const description = 'Consento brings Human-Factor Authentication to everyone in your organization. Password-less. Cloud-free. Co-responsive. Just what your organization need to manage the access and sharing of confidential operations with a peace of mind.'

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout description={description}>
      <div className="container">
        <header className="landing__hero">
          <div className="landing__hero__left">
            <h1 className="landing__hero__title">{siteConfig.title}</h1>
            <p className="landing__hero__subtitle"><span>Data privacy for humans,</span> <span>by humans.</span></p>
            <p className="landing__hero__text">{description}</p>
            <a className="button__full" href="/usecases">Discover our use cases</a>
          </div>
          <div className="landing__hero__image">
            <img src={useBaseUrl('img/tanja/cc-by-nc-sa/illustrations/privacy-by-design.svg')} />
          </div>
        </header>
        <main className="landing">
          <section className="landing__how">
              <h2>How it works</h2>
              <ul className="landing__how__list">
                <li>
                  <h3>Encryption</h3>
                  <img src={useBaseUrl('img/tanja/cc-by-nc-sa/illustrations/04-how-to-1.svg')} />
                  <p>Data will be secured with an encryption key.</p>
                </li>
                <li>
                  <h3>Shared key</h3>
                  <img src={useBaseUrl('img/tanja/cc-by-nc-sa/illustrations/04-how-to-2.svg')} />
                  <p>The key is split in unique parts & shared with people you trust.</p>
                </li>
                <li>
                  <h3>Unlocking</h3>
                  <img src={useBaseUrl('img/tanja/cc-by-nc-sa/illustrations/04-how-to-3.svg')} />
                  <p>'Consent' among all keyholders required to unlock the data.</p>
                </li>
                <li>
                  <h3>Private network</h3>
                  <img src={useBaseUrl('img/tanja/cc-by-nc-sa/illustrations/04-how-to-4.svg')} />
                  <p>Keep control over who has access.</p>
                </li>
              </ul>
            </section>
          <section className="landing__video">
         
            <div class="landing__text">
              <h2>Feel confident to handle sensitive data</h2>
              <p>The many potenatials brought by the digital transformation come along with data privacy challenges. These challenges lie less in technical systems than in the stress of managing confidential data collectively. Consento empowers professionals and SMEs to build their private decentralized, passwordless multi-factor authentication hub. </p></div>

            <div className="landing__vimeo">

              <iframe
                src="https://player.vimeo.com/video/498249054?title=0&byline=0&portrait=0"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture" />
            </div>
            
      
          </section>
          <section className="landing__usecase">
            <div className="landing__text landing__text__full">
              <h2>Use cases</h2>
              <p>These are some of the key use-cases on which the Consento team is actively working at the moment, developping the code, the screens and the partnerships.</p>
            </div> 
            <ul className="landing__usecase__list landing__values__list">
            <li>
            <figure className="kg-card kg-bookmark-card">
              <a className="kg-bookmark-container" href="/blog/consento-brings-data-security-to-remote-workplace-management" target="_blank">
                <div className="kg-bookmark-content">
                  <img className="kg-bookmark-icon" src="/img/external/unsplash/krakenimages-Group-of-business-workers-standing-with-hands-together-doing-symbol-at-the-office.png" style={{ float: 'left', width: '100%' }} />
                  <div className="kg-bookmark-padding"> 
                    <div className="kg-bookmark-title">Security of software escrow key management</div>
                    <div className="kg-bookmark-description">Software licensee and developers look for safe solutions to secure their business continuity.</div>
                  </div>
                  </div>
              </a>
            </figure>
            </li>
            <li>
            <figure className="kg-card kg-bookmark-card">
              <a className="kg-bookmark-container" href="/blog/consento-brings-data-security-to-remote-workplace-management" target="_blank">
                <div className="kg-bookmark-content">
                  <img className="kg-bookmark-icon" src="/img/external/unsplash/andrewtneel_ute2XAFQU2I_cut.jpg" style={{ float: 'left', width: '100%' }} />
                  <div className="kg-bookmark-padding"> 
                    <div className="kg-bookmark-title">Digital security in remote workforce</div>
                    <div className="kg-bookmark-description">Remote workers bear the stress of collectively handling the company secrets.</div>
                  </div>
                  </div>
              </a>
            </figure>
            </li>
            <li>
            <figure className="kg-card kg-bookmark-card">
            <a className="kg-bookmark-container" href="/blog/medical-data-custody-for-all" target="_blank">
              <div className="kg-bookmark-content">
                <img className="kg-bookmark-icon" src="/img/external/unsplash/Owen-Beard-DK8jXx1B-1c-unsplash-CUT.jpg" style={{ float: 'left', width: '100%' }} />
                <div className="kg-bookmark-padding"> 
                  <div className="kg-bookmark-title">Medical data security across stakeholders</div>
                  <div className="kg-bookmark-description">Medical data custodians are responsible to keep patients data safe and grant remote access when neccessary.</div>
                </div>
              </div>
            </a>
            </figure>
            </li>
            <li>
            <figure className="kg-card kg-bookmark-card">
            <a className="kg-bookmark-container" href="/blog/consento-secure-your-crypto-wallet" target="_blank">
              <div className="kg-bookmark-content">
                <img className="kg-bookmark-icon" src="/img/external/unsplash/davidshares_4_41-79dHvE_cut.jpg" style={{ float: 'left', width: '100%' }} />
                <div className="kg-bookmark-padding"> 
                  <div className="kg-bookmark-title">Securing crypto-wallet keys</div>
                  <div className="kg-bookmark-description">A safe and simple solution for the Bitcoin millionnaires who fear losing their wallet key.</div>
                </div>
                </div>
            </a>
            </figure>
            </li>
            </ul>
          </section>
          <section className="landing__solution">
            <h2>Our solution</h2>
            <div className="landing__image">
              <img src={useBaseUrl('img/consento/cc-by-nc-nd/phone-mockup.svg')} />
            </div>
            <div className="landing__text landing__text__right">
              <p>Consento app enables you to build your custom Human-Factor Authentication in your organization: </p>
              <ul>
                <li><strong>Password-less</strong>, Consento removes the target of hacks or the risk of mishandling passwords.</li>
                <li><strong>Cloud-free</strong>, Consento removes the middle man and the authentication process remains private to its users only without the need of a centralized service. </li>
                <li><strong>Co-responsive</strong>, Consento makes authentication more secure through partial keys distributed within your organization and to your suppliers or customers. No single user is left as a potential point of failure of the system as a whole.</li>
                <li><strong>"Shared-secrets"</strong> are quantum-proof.</li>
              </ul>
              <p>Now organizations can manage the access and sharing of confidential operations with a peace of mind. They remain in control of who has access, and they don’t bear the liability of data privacy alone.</p>
              <a className="button__full" target="_blank" href="https://twitter.com/consentoorg">Get notified about releases</a>
            </div>
          </section>
          <section className="landing__technology">
            <div className="landing__text landing__text__left">
              <h2>The technology</h2>
              <p>A lot of encryption, and a bit of Shamir’s secret.</p>
              <p>All of our code and all designs are open source. You can have a look at the inner workings right now!</p>
              <a className="button__full" href="https://github.com/consento-org">Source Code</a>
            </div>
            <div className="landing__code">
              <CodeBlock className="language-typescript">
{`confirm (accept: IHandshakeAcceptMessage): ICancelable<IHandshakeConfirmation> {
  return cancelable<IHandshakeConfirmation, HandshakeInit>(function * () {
    const secretKey = (yield crypto.computeSecret(this.confirmKey, Buffer.from(accept.token, 'base64'))) as Uint8Array
    const bob = (yield createSender()) as ISender
    const sendKey = (yield crypto.decrypt(secretKey, Buffer.from(accept.secret, 'base64'))) as IEncodable
    if (!(sendKey instanceof Uint8Array)) {
      throw Object.assign(new Error('Expected buffer in decrypted message'), { code: 'invalid-message' })
    }
    const sender = (yield createSenderFromSendKey(sendKey)) as ISender
    return yield new HandshakeConfirmation({
      connection: new Connection({
        sender,
        receiver: bob.newReceiver()
      }),
      // In case you are wondering why we not just simply return "bob" as sender
      // but instead pass it in two messages: the reason is that without this step
      finalMessage: bob.sendKey
    })
  }, this)
}`}</CodeBlock>
              </div>
            </section>
          <section className="landing__values">
              <h2>Our values</h2>
              <ul className="landing__values__list">
                <li>
                  <img src={useBaseUrl('img/tanja/cc-by-nc-sa/icons/icon_lock.svg')} />
                  <h3>Privacy by Design</h3>
                  <p>Consento provides 100% privacy.</p>
                </li>
                <li>
                  <img src={useBaseUrl('img/tanja/cc-by-nc-sa/icons/icon_empowerment.svg')} />
                  <h3>Empowerment</h3>
                  <p>Consento makes you keep control over our data.</p>
                </li>
                <li>
                  <img src={useBaseUrl('img/tanja/cc-by-nc-sa/icons/icon_human centric.svg')} />
                  <h3>Human centric</h3>
                  <p>Consento builds on trusted human relationship.</p>
                </li>
                <li>
                  <img src={useBaseUrl('img/tanja/cc-by-nc-sa/icons/icon_transparency.svg')} />
                  <h3>Transparency</h3>
                  <p>Consento is 100% FOSS.</p>
                </li>
                <li>
                  <img src={useBaseUrl('img/tanja/cc-by-nc-sa/icons/icon_diversity.svg')} />
                  <h3>Diversity</h3>
                  <p>Consento empowers small businesses.</p>
                </li>
              </ul>
            </section>
          <section className="landing__support">
              <h2>Support the Consento Initiative</h2>
              <div className="landing__image landing__image__full">
                <img src={useBaseUrl('img/tanja/cc-by-nc-sa/illustrations/diversity.svg')} />
              </div>
              <div className="landing__text landing__text__full">
                <p>Consento is an open initiative for the Next Generation Internet. Even if you are not a developer, you can be part of it by supporting the initiative on Open Collective.</p>
                <a className="button__full" target="_blank" href="https://opencollective.com/consento#section-contribute">Go to Open Collective</a>
              </div>
            </section>
        </main>
      </div>
    </Layout>
  );
}

export default Home;
