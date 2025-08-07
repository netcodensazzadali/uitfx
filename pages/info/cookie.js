import Head from "next/head";
import { Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import Bubbles from "../../components/animation/Bubbles";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cookie Policy | UITFX Markets</title>
        <meta
          name="description"
          content="UITFX Markets is a global forex, commodities, stocks brokers to provide the clients best trading experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="banner-section-wrapper bubbles-wrapper banner-all-section pb-0">
          <Container fluid="xxl">
            <Row className="banner-section">
              <Col xxl={12}>
                <div className="banner-title">
                  <Card className="bg-transparent border-0">
                    <Card.Body>
                      <Card.Title>Cookie Policy</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
          <Bubbles></Bubbles>
        </div>
        <div className="faq-wrapper-area bg-transparent">
          <div className="faq-wrapper">
            <Container>
              <Row>
                <Col xl={12}>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">Introduction</h2>
                    <p>
                      UITFX (hereinafter the “Company” or “we”) which is a
                      member of the United International Trading Co. Ltd.. Group, is incorporated. The Company
                      is authorized as an International Business Company under
                      the International Business Companies (Amendment and
                      Consolidation) Act.
                      <br />
                      <br />
                      This cookie policy covers the website www.uitfx.com and
                      all its related sub-domains and mobile applications that
                      are registered and operated by United International Trading Co. Ltd.
                      <br />
                      <br />
                      The Company outlines in the Cookie Policy (herein the
                      “Policy”) how the Company uses cookies to provide you with
                      a more relevant and effective experience when you browse
                      our Website and also allows us to improve our site
                      <br />
                      <br />
                      We respect your privacy and are committed to providing you
                      with the information and tools you need to manage your
                      cookies.
                    </p>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">What are Cookies</h2>
                    <p>
                      Cookies are small text files that a website stores on your
                      computer or mobile device when you visit the site. They
                      are widely used in order to make websites work, or work
                      more efficiently, as well as to provide information to the
                      owners of the site.
                      <br />
                      <br />
                      First party cookies are cookies set by the website you’re
                      visiting. Only that website can read them. In addition, a
                      website might potentially use external services, which
                      also set their own cookies, known as third-party cookies.
                      <br />
                      <br />
                      Persistent cookies are cookies saved on your computer and
                      that are not deleted automatically when you quit your
                      browser, unlike a session cookie, which is deleted when
                      you quit your browser. Cookies can also be used to
                      establish anonymised statistics about users' browsing
                      experience.
                    </p>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">Cookies Analysis</h2>
                    <p>
                      The Website uses three types of cookies, and they are only
                      used for the purpose described below.
                      <br />
                      <br />
                      <strong>Necessary:</strong> These cookies are necessary
                      for the website to become functional, allowing core
                      functionalities such as navigating the website and
                      accessing secure fields of the website. For this reason,
                      they do not require your consent. You may disable these by
                      changing your browser settings, but this may affect how
                      the website functions.
                      <br />
                      <br />
                      <strong>Analytical:</strong> To measure and improve site
                      performance via anonymous reporting of how users interact
                      with website content.
                      <br />
                      <br />
                      <strong>Marketing::</strong> To provide a more
                      personalized user experience and more relevant ads via
                      analysis of user activity that allows us to effectively
                      target our marketing activities.
                    </p>
                  </div>
                  <div className="faq-content mb-5 pb-5 table-responsive-lg">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th className="bg-transparent" scope="col">
                            Name
                          </th>
                          <th className="bg-transparent" scope="col">
                            Purpose
                          </th>
                          <th className="bg-transparent" scope="col">
                            Expiry
                          </th>
                          <th className="bg-transparent" scope="col">
                            Type
                          </th>
                          <th className="bg-transparent" scope="col">
                            Category
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="bg-transparent">
                            wallet_is_wizard_completed
                          </td>
                          <td className="bg-transparent">
                            Identifies if wizard flow has been fully completed
                            for the current user.
                          </td>
                          <td className="bg-transparent">10 Days</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">acid</td>
                          <td className="bg-transparent">
                            Stores the Affiliate's Campaign ID.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">cc_cookie_accept</td>
                          <td className="bg-transparent">
                            Stores the acceptance of cookies.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">cc_cookie_decline</td>
                          <td className="bg-transparent">
                            Stores the decline of cookie bars.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">completing_part</td>
                          <td className="bg-transparent">
                            Completed parts for Wizard in profile completion
                            form.
                          </td>
                          <td className="bg-transparent">10 Days</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">csrftoken</td>
                          <td className="bg-transparent">
                            A CSRF token is a unique, secret, unpredictable
                            value that is generated by the server-side
                            application and transmitted to the user in such a
                            way that it is included in a subsequent HTTP request
                            made by the user. It is used for security purposes
                            in order to prevent abuse of form submission.
                          </td>
                          <td className="bg-transparent">1 Year</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">dark_mode</td>
                          <td className="bg-transparent">
                            Used by United International Trading Co. Ltd. on redirection to United International Trading Co. Ltd area to switch to dark mode.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">
                            Exit-popup-PSG- Sponsorship
                          </td>
                          <td className="bg-transparent">
                            Determines if the exit popup should be displayed.
                          </td>
                          <td className="bg-transparent">10 Days</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">Exit-popup-ROFM</td>
                          <td className="bg-transparent">
                            Determines if the exit popup should be displayed.
                          </td>
                          <td className="bg-transparent">10 Days</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">forget_pass</td>
                          <td className="bg-transparent">
                            Random number to ensure captcha answer is correct.
                          </td>
                          <td className="bg-transparent">30 Days</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">forget_pass_x_</td>
                          <td className="bg-transparent">
                            Stores captcha answer.
                          </td>
                          <td className="bg-transparent">30 Days</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">investor</td>
                          <td className="bg-transparent">
                            PAMM Investor Account of current user.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">investorHash</td>
                          <td className="bg-transparent">
                            Encrypted value PAMM Investor Account of current
                            user.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">lang</td>
                          <td className="bg-transparent">
                            Stores user's selected language.
                          </td>
                          <td className="bg-transparent">1 Month</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">ltRefreshedBalance</td>
                          <td className="bg-transparent">
                            Last refreshed balance. If last refreshed balance is
                            less than 15 Minutes it will retrieve the info from
                            ltResponse.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">ltResponse</td>
                          <td className="bg-transparent">Balance of wallet.</td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">master_account</td>
                          <td className="bg-transparent">
                            Wallet of current user.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">mc_data</td>
                          <td className="bg-transparent">
                            Internal tracking cookie that stores the campaign ID
                            of the first landing page the user visited and
                            identifies the user in the future if they register
                            an account.
                          </td>
                          <td className="bg-transparent">1 Month</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">mcid</td>
                          <td className="bg-transparent">
                            Stores campaign ID of landing page visited.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">mobile_app</td>
                          <td className="bg-transparent">
                            Used by United International Trading Co. Ltd. App on redirection to United International Trading
                            Co. Ltd. area to switch to dark mode.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">mylogin</td>
                          <td className="bg-transparent">
                            Wallet of current user. Cookies are shared among all
                            subdomains. Used in the main website to identify if
                            the current browser is logged in to the client area.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">Path</td>
                          <td className="bg-transparent">
                            Current path tracker.
                          </td>
                          <td className="bg-transparent">Current Session</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">redesign_flag</td>
                          <td className="bg-transparent">
                            Identifies if United International Trading Co. Ltd. area is on redesign or
                          </td>
                          <td className="bg-transparent">10 Days</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">refid</td>
                          <td className="bg-transparent">
                            Affiliate ID used to register clients under specific
                            Affiliates.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">regulator</td>
                          <td className="bg-transparent">
                            Stores user's regulation.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">
                            show_phone_verifi cation
                          </td>
                          <td className="bg-transparent">
                            Identifies whether to show phone verification popup.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">
                            show_phone_verification_delay_wallet
                          </td>
                          <td className="bg-transparent">
                            Identifies whether to show a phone verification
                            popup after the first occurrence of the phone
                            verification popup.
                          </td>
                          <td className="bg-transparent">1 Day</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">
                            show_profile_update
                          </td>
                          <td className="bg-transparent">
                            Identifies whether to show force profile popup.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">user</td>
                          <td className="bg-transparent">
                            Random User ID that identifies the user.
                          </td>
                          <td className="bg-transparent">1 Month</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">walletHash</td>
                          <td className="bg-transparent">
                            Encrypted value of master_account
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">Xrsc11_000</td>
                          <td className="bg-transparent">Balance of wallet.</td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">webinar</td>
                          <td className="bg-transparent">
                            Tracks if the visitor is coming from a webinar
                            registration.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">X-Access-Key</td>
                          <td className="bg-transparent">
                            Keeps the website session alive.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">1st Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">__Secure-1PSIDCC</td>
                          <td className="bg-transparent">
                            Cookie required to use website options and services.
                          </td>
                          <td className="bg-transparent">1 Year</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">__Secure-3PSIDCC</td>
                          <td className="bg-transparent">
                            Cookie required to use website options and services.
                          </td>
                          <td className="bg-transparent">1 Year</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">AKA_A2</td>
                          <td className="bg-transparent">
                            Used by CDN Akamai for the Akamai cache function,
                            used by the website to optimize the response time
                            between the visitor and the website.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">captcha_x_</td>
                          <td className="bg-transparent">
                            SPAM protection service provided by Google that
                            helps protect websites from spam and abuse.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">Smartbanner Closed</td>
                          <td className="bg-transparent">
                            Used for the mobile app banner in order to hide the
                            banner if users don’t want to download it.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">
                            Smartbanner Installed
                          </td>
                          <td className="bg-transparent">
                            Used for the mobile app banner in order to determine
                            whether it should be displayed or not.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">Consent</td>
                          <td className="bg-transparent">
                            Google cookie consent tracker.
                          </td>
                          <td className="bg-transparent">17 Years</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">LOGIN_INFO</td>
                          <td className="bg-transparent">
                            Used to play YouTube videos embedded on the website.
                          </td>
                          <td className="bg-transparent">6 Months</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">LPSessionID</td>
                          <td className="bg-transparent">
                            Cookie for chat history, stored until the the
                            browser is closed.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">LPSID-Site ID</td>
                          <td className="bg-transparent">
                            Visitor ID as identified in Conversational Cloud.
                            Identifies a browser as long as the cookie is not
                            deleted.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">LPVID</td>
                          <td className="bg-transparent">
                            Provides technical support to the chat function to
                            make sure that the chat on the website works as
                            intended, e.g. by identifying the browser which
                            enables us to remember ongoing and previous chats as
                            well as know where a user is visiting the website
                            from.
                          </td>
                          <td className="bg-transparent">1 Year</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">orejime</td>
                          <td className="bg-transparent">
                            Store the user's consent about accepting/rejecting
                            cookies
                          </td>
                          <td className="bg-transparent">1 Year</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">SAME_SITE</td>
                          <td className="bg-transparent">
                            Prevents the browser from sending this cookie along
                            with cross-site requests.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">
                            VISITIR_INFO1_LI VE
                          </td>
                          <td className="bg-transparent">
                            Used to play YouTube videos embedded on the website.
                          </td>
                          <td className="bg-transparent">6 Months</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">
                            wordpress_test_c ookie
                          </td>
                          <td className="bg-transparent">
                            WordPress sets a test cookie for every visitor to
                            check if the browser accepts cookies.
                          </td>
                          <td className="bg-transparent">Current Session</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">xsrf</td>
                          <td className="bg-transparent">
                            Used for security purposes in order to prevent abuse
                            of form submission.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Necessary</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">__ar_v4</td>
                          <td className="bg-transparent">
                            Owned by Dblclick (Google). Uses Dblclick to manage
                            real-time bidding advertising exchange.
                          </td>
                          <td className="bg-transparent">1 Year</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Marketing</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">__adroll_fpc</td>
                          <td className="bg-transparent">
                            Used to collect and use personalized data in order
                            to deliver targeted and personalized advertising.
                          </td>
                          <td className="bg-transparent">1 Year</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Marketing</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">_fbp</td>
                          <td className="bg-transparent">
                            Used by Facebook to store and track visits across
                            websites. The expiration is controlled by settings
                            in the plugin.
                          </td>
                          <td className="bg-transparent">3 Months</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Marketing</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">anid</td>
                          <td className="bg-transparent">
                            Used to show Google ads on non- Google sites.
                          </td>
                          <td className="bg-transparent">13 Months</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Marketing</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">Hm_lpvt</td>
                          <td className="bg-transparent">
                            Used by Baidu Analytics to limit the frequency of
                            requests. Baidu Analytics collects information in an
                            anonymous form, including the number of visitors to
                            the website and blog, where visitors have come to
                            the website from and the pages they visited.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Marketing</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">__utmc</td>
                          <td className="bg-transparent">
                            Stores time of visit on the website.
                          </td>
                          <td className="bg-transparent">30 Minutes</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">__utmz</td>
                          <td className="bg-transparent">
                            Stores used keyword and search engine.
                          </td>
                          <td className="bg-transparent">6 Months</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">_ga</td>
                          <td className="bg-transparent">
                            Google Analytics uses the _ga and _gid cookies to
                            distinguish unique users and pages that users have
                            seen. The _ga cookie counts the number of visits to
                            a page or post.
                          </td>
                          <td className="bg-transparent">2 Years</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">_gac_gb_</td>
                          <td className="bg-transparent">
                            Contains campaign related information. If Google
                            Analytics and Google Ads accounts are linked, Google
                            Ads website conversion tags will read this cookie
                            unless the user opts out.
                          </td>
                          <td className="bg-transparent">3 Months</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">
                            _gat_gtag_UA_ 16960429_1
                          </td>
                          <td className="bg-transparent">
                            Used by Google Analytics to track conversions. Reads
                            and filters requests from bots and then identifies
                            users across browsing sessions.
                          </td>
                          <td className="bg-transparent">1 min</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">_gcl_au</td>
                          <td className="bg-transparent">
                            Takes information in ad clicks and stores it in a
                            first-party cookie so that conversions can be
                            attributed outside the landing page.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">_gid</td>
                          <td className="bg-transparent">
                            Google Analytics uses the _ga and _gid cookies to
                            distinguish unique users and pages that users have
                            seen. The _gid cookie prevents repeats views of a
                            page or post by a visitor.
                          </td>
                          <td className="bg-transparent">I Day</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">
                            _hjAbsoluteSessio nInProgress
                          </td>
                          <td className="bg-transparent">
                            Detects the first pageview session of a user and
                            sets a True/False flag.
                          </td>
                          <td className="bg-transparent">30 Minutes</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">
                            _hjCachedUserAttributes
                          </td>
                          <td className="bg-transparent">
                            Stores User Attributes which are sent through the
                            Hotjar Identify API, whenever the user is not in the
                            sample. Collected attributes will only be saved to
                            Hotjar servers if the user interacts with a Hotjar
                            Feedback tool, but the cookie will be used
                            regardless of whether a Feedback tool is present.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">
                            __hjClosedSurvey Invites
                          </td>
                          <td className="bg-transparent">
                            Hotjar cookie that is set once a user interacts with
                            an External Link Survey invitation modal, used to
                            ensure that the same invite does not reappear if it
                            has already been shown.
                          </td>
                          <td className="bg-transparent">1 Year</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">_hjDonePolls</td>
                          <td className="bg-transparent">
                            Hotjar cookie that is set once a user completes a
                            survey using the On-site Survey widget, used to
                            ensure that the same survey does not reappear if it
                            has already been filled in.
                          </td>
                          <td className="bg-transparent">1 Year</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">_hjSessionRejected</td>
                          <td className="bg-transparent">
                            If present, this cookie will be set to '1' for the
                            duration of a user's session, if Hotjar rejects the
                            session from connecting to our WebSocket due to
                            server overload. This cookie is only applied in
                            extremely rare situations to prevent severe
                            performance issues.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">_hjSessionResumed</td>
                          <td className="bg-transparent">
                            Set when a session/recording is reconnected to the
                            Hotjar servers after a break in connection.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">
                            _hjSessionTooLar ge
                          </td>
                          <td className="bg-transparent">
                            Causes Hotjar to stop collecting data if a session
                            becomes too large. This is determined automatically
                            by a signal from the WebSocket server if the session
                            size exceeds the limit.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">
                            _hjShownFeedbac kMessage
                          </td>
                          <td className="bg-transparent">
                            Hotjar cookie that is set when a user minimizes or
                            completes Incoming Feedback so that the Incoming
                            Feedback will load as minimized immediately if the
                            user navigates to another page where it is set to
                            show.
                          </td>
                          <td className="bg-transparent">365 days</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">_hjTLDTest</td>
                          <td className="bg-transparent">
                            When the Hotjar script executes we try to determine
                            the most generic cookie path we should use, instead
                            of the page hostname. This is done so that cookies
                            can be shared across subdomains (where applicable).
                            To determine this, we try to store the _hjTLDTest
                            cookie for different URL substring alternatives
                            until it fails. After this check, the cookie is
                            removed.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">
                            _hjUserAttribut esHash
                          </td>
                          <td className="bg-transparent">
                            User Attributes sent through the Hotjar Identify API
                            are cached for the duration of the session in order
                            to know when an attribute has changed and needs to
                            be updated.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">_hjViewportId</td>
                          <td className="bg-transparent">
                            Stores information about the user viewport such as
                            size and dimensions.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">1P_JAR</td>
                          <td className="bg-transparent">
                            Used by Google to collect website statistics and
                            track conversion rates.
                          </td>
                          <td className="bg-transparent">1 Month</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">APISID</td>
                          <td className="bg-transparent">
                            HSID, SSID, APISID and SAPISID cookies enable Google
                            to collect user information for videos hosted by
                            YouTube.
                          </td>
                          <td className="bg-transparent">2 Years</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">hjSiteLang</td>
                          <td className="bg-transparent">
                            Set when a page that supports multiple languages on
                            hotjar.com is visited so content is always loaded in
                            the preferred language when available.
                          </td>
                          <td className="bg-transparent">365 days</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">Hm_lvt_</td>
                          <td className="bg-transparent">
                            Baidu Analytics Tongji. Records a unique ID used to
                            generate statistical data on how a visitor uses the
                            website.
                          </td>
                          <td className="bg-transparent">1 Year</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">OGPC</td>
                          <td className="bg-transparent">
                            Enables the functionality of Google Maps.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">OTZ</td>
                          <td className="bg-transparent">
                            Used by Google Analytics to provide an aggregate
                            analysis of Website visitors.
                          </td>
                          <td className="bg-transparent">1 Year</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">pvc_visits[0]</td>
                          <td className="bg-transparent">
                            Cookie created by post-views-counter third party
                            which counts the number of visits to a post, and is
                            used to prevent repeat views of a post by a visitor.
                            The expiration is controlled by settings in the
                            plugin.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">RUL</td>
                          <td className="bg-transparent">
                            Used by Google DoubleClick to determine whether the
                            website advertisement has been properly displayed
                            and collect data in order to show relevant
                            advertising to the visitor across the web.
                          </td>
                          <td className="bg-transparent">1 Year</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">SAPISID</td>
                          <td className="bg-transparent">
                            HSID, SSID, APISID and SAPISID cookies enable Google
                            to collect user information for videos hosted by
                            YouTube.
                          </td>
                          <td className="bg-transparent">2 Years</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">utma</td>
                          <td className="bg-transparent">
                            The number of visits, including the time of the
                            first visit, the previous visit, and the current
                            visit.
                          </td>
                          <td className="bg-transparent">2 Years</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">_hjFirstSeen</td>
                          <td className="bg-transparent">
                            Set to identify a new user's first session. It
                            stores a true/false value, indicating whether this
                            was the first time Hotjar saw this user. It is used
                            by Recording filters to identify new user sessions.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">_hjid</td>
                          <td className="bg-transparent">
                            Hotjar cookie that is set when the customer first
                            lands on a page with the Hotjar script. It is used
                            to persist the Hotjar User ID unique to that site on
                            the browser and ensure that behavior in subsequent
                            visits to the same site will be attributed to the
                            same user ID.
                          </td>
                          <td className="bg-transparent">365 days</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">
                            _hjIncludedInPage viewSample
                          </td>
                          <td className="bg-transparent">
                            Set to let Hotjar know whether user is included in
                            the data sampling defined by the site's pageview
                            limit.
                          </td>
                          <td className="bg-transparent">30 minutes</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">
                            _hjIncludedInSessionSample
                          </td>
                          <td className="bg-transparent">
                            Set to let Hotjar know whether user is included in
                            the data sampling defined by the site's daily
                            session limit.
                          </td>
                          <td className="bg-transparent">30 minutes</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">
                            _hjLocalStorageTest
                          </td>
                          <td className="bg-transparent">
                            Checks if the Hotjar Tracking Script can use local
                            storage. If it can, a value of 1 is set in this
                            cookie. The data stored in_hjLocalStorageTest has no
                            expiration time, but it is deleted almost
                            immediately after it is created.
                          </td>
                          <td className="bg-transparent">Under 100ms</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">_hjMinimizedPolls</td>
                          <td className="bg-transparent">
                            Hotjar cookie that is set once a user minimizes an
                            On-site Survey widget, used to ensure that the
                            widget stays minimized when the user navigates
                            through the site.
                          </td>
                          <td className="bg-transparent">1 Year</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">_hjOptOut</td>
                          <td className="bg-transparent">
                            This cookie is used to find whether the hotjar
                            cookie is opted out of or not.
                          </td>
                          <td className="bg-transparent">4 Months</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">
                            _hjRecordingEn abled
                          </td>
                          <td className="bg-transparent">
                            Added when a Recording starts and read when the
                            recording module is initialized to see if the user
                            is already in a recording in a particular session.
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                        <tr>
                          <td className="bg-transparent">
                            _hjRecordingLas tActivity
                          </td>
                          <td className="bg-transparent">
                            Updated when a user recording starts and when data
                            is sent through WebSocket (the user performs an
                            action that Hotjar records).
                          </td>
                          <td className="bg-transparent">Session</td>
                          <td className="bg-transparent">3rd Party</td>
                          <td className="bg-transparent">Analytical</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">Third Party Cookies</h2>
                    <p>
                      Some of our pages display content from external providers,
                      e.g. YouTube, Facebook and Twitter.
                      <br />
                      <br />
                      To view this third-party content, you first have to accept
                      their specific terms and conditions. This includes their
                      cookie policies, which we have no control over.
                      <br />
                      <br />
                      Third-party providers on our websites
                    </p>
                    <ul>
                      <li>You Tube</li>
                      <li>Twitter</li>
                      <li>Facebook</li>
                      <li>Google</li>
                      <li>FxStreet</li>
                    </ul>
                    <p>
                      These third-party services are outside of the control of
                      the Company. Providers may, at any time, change their
                      terms of service, purpose and use of cookies, etc.
                    </p>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">How you can Manage Cookies</h2>
                    <p>
                      <strong>Removing cookies from your device</strong>
                      <br />
                      <br />
                      You can delete all cookies that are already on your device
                      by clearing the browsing history of your browser. This
                      will remove all cookies from all websites you have
                      visited. Be aware though that you may also lose some saved
                      information (e.g. saved login details, site preferences).
                      <br />
                      <br />
                      <strong>Managing site-specific cookies</strong>
                      <br />
                      <br />
                      For more detailed control over site-specific cookies,
                      check the privacy and cookie settings in your preferred
                      browser
                      <br />
                      <br />
                      <strong>Blocking cookies</strong>
                      <br />
                      <br />
                      You can set most modern browsers to prevent any cookies
                      being placed on your device, but you may then have to
                      manually adjust some preferences every time you visit a
                      site/page. And some services and functionalities may not
                      work properly at all (e.g. profile logging-in).
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
