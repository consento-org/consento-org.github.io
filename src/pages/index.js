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
            <p className="landing__hero__subtitle"><span>Data privacy</span> <span>for humans,</span> <span>by humans.</span></p>
            <p className="landing__hero__text">{description}</p>
            <a className="button__full" href="/usecases">Discover our use cases</a>
          </div>
          <div className="landing__hero__image">
            <img src={useBaseUrl('img/tanja/cc-by-nc-sa/illustrations/privacy-by-design.svg')} />
          </div>
        </header>
        <main className="landing">
          <section className="landing__video">
            <div className="landing__vimeo">
              <iframe
                src="https://player.vimeo.com/video/498249054?title=0&byline=0&portrait=0"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture" />
            </div>
            <p className="landing__text landing__text__full">The many potenatials brought by the digital transformation come along with data privacy challenges. These challenges lie less in technical systems than in the stress of managing confidential data collectively. Consento empowers professionals and SMEs to build their private decentralized, passwordless multi-factor authentication hub. Our apps turn your devices into keys. The access to confidential data becomes collectively secured. The responsibility of handling confidential access is shared.</p>
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

              <a className="button__full" href="/download">Be the first to use it</a>
              <a className="button__full" target="_blank" href="https://twitter.com/consentoorg">Get notified about releases</a>
            </div>
          </section>
          <section className="landing__technology">
            <div className="landing__text landing__text__left">
              <h2>The technology</h2>
              <p>A lot of encryption, and a bit of Shamir’s secret.</p>
              <p>All of our code and all designs are open source. You can have a look at the inner workings right now!</p>
              <a className="button__full" href="https://github.com/consento-org">Source Code</a>
              <a className="button__full" href="https://keybase.io/team/consento">Chat Channel</a>
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
            <section className="landing__how">
              <h2>How does it work</h2>
              <ul className="landing__how__list">
                <li>
                  <h3>Encryption</h3>
                  <img src={useBaseUrl('img/tanja/cc-by-nc-sa/illustrations/04-how-to-1.svg')} />
                  <p>Strong encryption on the spot.</p>
                </li>
                <li>
                  <h3>Shared key</h3>
                  <img src={useBaseUrl('img/tanja/cc-by-nc-sa/illustrations/04-how-to-2.svg')} />
                  <p>Key split in unique parts & shared with people you trust.</p>
                </li>
                <li>
                  <h3>Unlocking</h3>
                  <img src={useBaseUrl('img/tanja/cc-by-nc-sa/illustrations/04-how-to-3.svg')} />
                  <p>'Consent' required to unlock.</p>
                </li>
                <li>
                  <h3>Private network</h3>
                  <img src={useBaseUrl('img/tanja/cc-by-nc-sa/illustrations/04-how-to-4.svg')} />
                  <p>Keep control over who has access.</p>
                </li>
              </ul>
            </section>
            <section className="landing__coownership">
              <div className="landing__image">
                <img src={useBaseUrl('img/tanja/cc-by-nc-sa/illustrations/use-case-travel.svg')} />
              </div>
              <div className="landing__text landing__text__right">
                <h2>Co-ownership of confidential data.</h2>
                <p>When you’re far from home, Consento enables you to keep all your travel documents backuped and encrypted. No one can access these documents without combining the 3 parts of the key. No password required.</p>
                <p>Just paired devices.</p>
              </div>
            </section>
            <section className="landing__dataintegrity">
              <div className="landing__text landing__text__left">
                <h2>Data integrity across organizations.</h2>
                <p>When you are asked to take care of confidential of your client, Consento enables you to backup encrypted on paired devices, without the need to share the password via email, nor rely on central cloud services.</p>
                <p>Consento is an access control technology designed to quickly integrate in organizations and employees’ liability systems.</p>
                <p>Unlike competitors building on centralized passwordless systems, Consento protocol remains distributed, grating end-users the full ownership of their data and secrets. Which also means no maintenance costs for Consento, lowering the cost per user for corporate clients.</p>
                <p>Just shared responsibility.</p>
              </div>
              <div className="landing__image">
                <img src={useBaseUrl('img/tanja/cc-by-nc-sa/illustrations/use-case-client-data.svg')} />
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
            <section className="landing__roadmap">
              <h2>Consento roadmap</h2>
              <div className="landing__image landing__image__full">
                <img src={useBaseUrl('img/tanja/cc-by-nc-sa/illustrations/human-centric@1x.png')} />
              </div>
              <figure className="landing__tasklist landing__tasklist__backlog">
                <h3>Backlog</h3>
                <ul>
                  <li>
                    <h4>Vault sharing</h4>
                    <p>Enabling users to share the content of their vault with selected users.</p>
                  </li>
                  <li>
                    <h4>iOS mobile app</h4>
                    <p>Create application for iOS Appstore.</p>
                  </li>
                  <li>
                    <h4>Desktop app</h4>
                    <p>Developing a desktop client.</p>
                  </li>
                  <li>
                    <h4>Policies editing</h4>
                    <p>Defining a default policy.md file at the root of vaults.</p>
                  </li>
                </ul>
              </figure>
              <figure className="landing__tasklist landing__tasklist__progress">
                <h3>In Progress</h3>
                <ul>
                  <li>
                    <h4>Android mobile app</h4>
                    <p>Finalizing application for Google Play store.</p>
                  </li>
                  <li>
                    <h4>File Upload</h4>
                    <p>Enabling to Upload various file types in vault.</p>
                  </li>
                </ul>
              </figure>
              <div className="landing__text landing__text__right">
                <p>Consento is proudly part of the <a href="https://ledgerproject.eu/" target="_blank">LEDGER</a> program, and currently working on the MVP.</p>
                <p>We have a lot in the pipeline, feel free to give a hand.</p>
                <p>Sign up to stay updated of our progress and next releases.</p>
                <a className="button__full" href="https://github.com/consento-org/">Contribute</a>
                <a className="button__full" href="https://mailchi.mp/54ed51f62b3d/consento-updates-signup">Stay updated</a>
              </div>
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
