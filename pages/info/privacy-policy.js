import Head from "next/head";
import { Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import Bubbles from "../../components/animation/Bubbles";
import Link from "next/link";

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
                      <Card.Title>Privacy Policy</Card.Title>
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
                    <h2 className="mb-4">1. Introduction</h2>
                    <p>
                      United International Trading Co. Ltd (hereinafter referred
                      to as the “Company” or “we”), a member of the United
                      International Trading Co. Ltd, is incorporated under the
                      laws of Thailand with Registration 0205563019819 2020, and
                      has its registered office at Suite 99/238 Moo-9, Nong
                      Prue, Chonburi, Thailand. The Company is authorized as an
                      International Business Company under the International
                      Business Companies (Amendment and Consolidation) Act. This
                      privacy statement covers the website
                      <Link href="https://uitfx.com/">
                        <a style={{ color: "#4a90e2" }}> uitfx.com </a>
                      </Link>
                      and all its related sub-domains and mobile applications
                      that are registered and operated by United International
                      Trading Co. Ltd. The objects of the Company are all
                      subject matters not forbidden by International Business
                      Companies (Amendment and Consolidation) Act, in
                      particular, but not exclusively all commercial, financial,
                      lending, borrowing, trading, service activities, and the
                      participation in other enterprises, as well as to provide
                      brokerage, training, and managed account services in
                      currencies, commodities, indexes, CFDs, and leveraged
                      financial instruments. The Company, in accordance with the
                      provisions of the Law, outlines in the Privacy Policy
                      (herein the “Policy”) how the Company collects, maintains,
                      uses, and discloses personal information of the Client.
                      This Policy applies to United International Trading Co.
                      Ltd which shall follow the principles as outlined herein.
                      This Policy applies to existing clients, prospective
                      clients, clients who have terminated their contractual
                      relationship with the Company, and website visitors
                      (hereinafter jointly referred to as the “Clients” or
                      “you”) who are accessing or using the Company’s website(s)
                      and mobile applications (hereinafter referred to as the
                      “Platforms”). The Company is committed to protecting the
                      privacy of all Clients ‘Personal Data which it processes
                      in accordance with the provisions of this Policy and the
                      Company’s Terms of Business. For the purposes of this
                      Policy, references to “Personal Data” shall mean data
                      which identifies or may identify Clients and which may
                      include, for example, a Client’s name, address,
                      identification number, telephone number, and date of
                      birth.
                    </p>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">2. Collection of Personal Data</h2>
                    <p>
                      The Company collects different types of Personal Data
                      through the Company’s Platforms from Clients who visit
                      such Platforms or access, use, or request products and
                      services offered by the Company. The provision of certain
                      Personal Data is required for establishing a contractual
                      relationship with the Company. Clients not wishing to
                      provide such Personal Data will not be able to open an
                      account with the Company or be provided with other
                      products and/or services of the Company.
                      <br />
                      <br />
                      Clients have a responsibility to ensure that the Personal
                      Data they provide to the Company and recorded in their
                      personal account (United International Trading Co. Ltd.
                      Client Area) remain accurate and up to date throughout the
                      period of their contractual relationship with the Company.
                      In addition to the information provided by Clients, the
                      Company also lawfully collects and processes Personal Data
                      from publicly available sources (including, inter alia,
                      the press, social media, and the internet) and third-party
                      risk management software solutions in order to meet its
                      regulatory obligations and for confirming the validity of
                      the provided information.
                      <br />
                      <br />
                      The Personal Data received from the Client, collected and
                      processed by the Company are required for the
                      communication, identification, verification, and
                      assessment for the business relationship establishment
                      with the Client, contract performance, and legal
                      compliance. The following Personal Data may be collected
                      from Clients depending on the product and/or service the
                      Company provides to him:
                    </p>
                    <ul className="list-unstyled ms-3">
                      <li className="mb-3">
                        (a) Contact details such as the Client’s name, e-mail
                        address, and phone number.
                      </li>
                      <li className="mb-3">
                        (b) Identification details such as the Client’s
                        identification or passport number.
                      </li>
                      <li className="mb-3">
                        (c) Biographical and demographic data such as gender,
                        age, ethnicity, education, occupation, the Client’s
                        financial trading experience, and whether he has a
                        prominent public function status (PEP).
                      </li>
                      <li className="mb-3">
                        (d) Financial information such as the Client’s income
                        status, bank account number and account details, tax
                        information, and other financial information.
                      </li>
                      <li className="mb-3">
                        (e) Information relevant to the services that the
                        Company provides to the Client such as the Client’s
                        transactions and communication records with the Company.
                      </li>
                      <li className="mb-3">
                        (f) Details of visitors’ and Clients’ visits to the
                        Company’s website and information collected through
                        cookies and other tracking technologies including IP
                        address and domain name, browser version, operating
                        system, and geolocation.
                      </li>
                      <li className="mb-3">
                        (g) Information in relation to criminal convictions and
                        offences to the extent required and/or permitted by
                        applicable law.
                      </li>
                      <li className="mb-3">
                        (h) Information in relation to the client's mobile
                        device Call log with the permission of the client.
                      </li>
                      <li className="mb-3">(i) Your marketing preferences.</li>
                    </ul>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">No Children's Data Collection</h2>
                    <p>
                      The Company understands the importance of protecting
                      children’s privacy. The Company's services are not
                      intended for children under eighteen (18) years of age nor
                      is the Company’s website designed for use by children.
                      Therefore, the Company does not knowingly or specifically
                      collect children's personal data. If the Company collects
                      such data mistakenly or unintentionally, the Company shall
                      delete the information at the earliest possible once it
                      obtains knowledge thereof. If the Client becomes aware of
                      such data collection, he/she shall notify the Company at
                      <Link href="mailto:support@uitfx.com">
                        <a style={{ color: "#4a90e2" }}> support@uitfx.com. </a>
                      </Link>
                    </p>
                  </div>

                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">Use of Personal Data</h2>
                    <p>
                      The Company collects and processes Personal Data which are
                      required for the evaluation, establishment, and
                      maintenance of the contractual relationship between the
                      Company and the Client and in order to comply with the
                      Policy and applicable laws and regulations governing the
                      provision of financial services. In some cases, the
                      Company may also process the Client’s Personal Data to
                      pursue its legitimate interests or those of third parties,
                      provided that the Clients’ interests and fundamental
                      rights are not overridden by those of the Company or the
                      third party. Specifically, the Client’s Personal Data will
                      most commonly be used in the following circumstances:
                    </p>
                    <ul className="list-unstyled ms-3">
                      <li className="mb-3">
                        (a) Where the Company needs to perform the contract, it
                        has entered with the Client or in order to take certain
                        steps prior to entering into a contract with the Client
                        Processing is necessary for the Company in order to
                        provide the Client with its products and services, and
                        more specifically in order:
                        <ul className="ms-3">
                          <li className="mb-3">
                            To verify the Client’s identity and carry out any
                            required credit checks;
                          </li>
                          <li className="mb-3">
                            To ensure that the Client meets the suitability
                            requirements to use the Company’s products and
                            services;
                          </li>
                          <li className="mb-3">
                            To manage the account the Client holds with the
                            Company;
                          </li>
                          <li className="mb-3">
                            To process the Client’s transactions; and
                          </li>
                          <li className="mb-3">
                            To send to the Client any information about
                            transactions/post-transactions services.
                          </li>
                        </ul>
                      </li>
                      <li className="mb-3">
                        (b) If the Client does not provide the requested
                        Personal Data, the Company may be unable to offer the
                        Client with its products and/or services.
                      </li>
                      <li className="mb-3">
                        (c) Where the Company needs to comply with a legal
                        obligation As an investment firm, the Company is
                        required to comply with certain legal and regulatory
                        obligations which may involve the processing of Personal
                        Data. Such obligations and requirements impose on the
                        Company necessary data processing activities for
                        identity verifications, compliance with court orders,
                        tax law or other reporting obligations, and anti-money
                        laundering controls.
                      </li>
                      <li className="mb-3">
                        (d) Where the Company has legitimate interests to use
                        the Client’s Personal Data More specifically, the
                        Company may process the Personal Data for the following
                        purposes:
                        <ul className="ms-3">
                          <li className="mb-3">
                            To develop or enhance its products and services;
                          </li>
                          <li className="mb-3">
                            To enhance the security of the Company’s network and
                            information systems;
                          </li>
                          <li className="mb-3">
                            To identify, prevent and investigate fraud and other
                            unlawful activities, unauthorized transactions and
                            other liabilities and manage risk exposure;
                          </li>
                          <li className="mb-3">
                            To maintain its accounts and records;
                          </li>
                          <li className="mb-3">
                            To manage its business operations and comply with
                            internal policies and procedures;
                          </li>
                          <li className="mb-3">
                            To defend, investigate or prosecute legal claims;
                          </li>
                          <li className="mb-3">
                            To receive professional advice (such as legal
                            advice), and
                          </li>
                          <li className="mb-3">
                            For the analysis of statistical data which helps the
                            Company in providing its clients with better
                            products and services in the future. It should be
                            noted that the Company anonymizes and aggregate such
                            data so that they do not directly or indirectly
                            reveal the Clients’ identities. The Company may
                            provide this statistical data to third parties - as
                            described in more detail in Section 8) solely for
                            statistical purposes and in an effort to improve the
                            Company’s marketing campaign.
                          </li>
                        </ul>
                      </li>
                      <li className="mb-3">
                        (e) Where the Client has given his consent
                        <ul className="ms-3">
                          <li className="mb-3">
                            The Company will ask for the Client’s consent when
                            the Company wishes to provide marketing information
                            to its clients in relation to its products or
                            services which may be of interest to the Client.
                          </li>
                          <li className="mb-3">
                            The Company will ask for Clients’ permission to
                            access their mobile device call log for the sole
                            purpose of completing the phone number verification
                            process.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">Cookies</h2>
                    <p>
                      A cookie is a small text file that is stored on a user's
                      computer for record-keeping purposes. The Company uses
                      cookies on its website(s). The Company does link the
                      information that it stores in cookies to any Personal Data
                      the Client submits while accessing the Company’s
                      website(s). The Company uses both session ID cookies and
                      persistent cookies. A session ID cookie does not expire
                      when the Client closes his browser. A persistent cookie
                      remains on the Client’s hard drive for an extended period
                      of time. The Client can remove persistent cookies by
                      following directions provided in his Internet browser's
                      “help" file.
                      <br />
                      <br />
                      The Company sets a persistent cookie for statistical
                      purposes. Persistent cookies also enable the Company to
                      track and target the location and the interests of its
                      users and to enhance the experience of its services on the
                      Company’s website(s). If the Client rejects cookies, he
                      may still use the Company’s website(s), but the Client
                      will not be able to use United International Trading Co.
                      Ltd. login area and submit his online application form.
                      <br />
                      <br />
                      Some of the Company’s business partners use cookies on the
                      Company’s website(s). The Company has no access to, or
                      control over these cookies.
                      <br />
                      <br />
                      Cookies Analysis Below we provide the details of the
                      cookies used and the options for further reading and opt
                      out.
                      <br />
                      <br />
                      <strong>
                        United International Trading Co. Ltd. Cookies
                      </strong>
                      <br />
                      <br />
                      United International Trading Co. Ltd. persistent and
                      session cookies are used to support our visitors and
                      clients browsing experience.
                      <br />
                      <br />
                      <strong>Third Party Cookies</strong>
                      <br />
                      <br />
                      Cookies by third party providers are used on our websites
                      to enable tools and services to our visitors and clients
                      and support our internal analytical and marketing
                      activities. The Company has no access to, or control over
                      these cookies therefore will not be liable for misuse or
                      loss of Personal Data resulting from cookies on the
                      Company’s website(s) that the Company does not have access
                      to or control over.
                      <br />
                      <br />
                      The Client or visitor of the Company’s website
                      acknowledges that he can control and manage the above
                      cookies through his web browser security and privacy
                      settings. If you'd like to learn out more about cookies as
                      well as how to manage, and delete them, visit:  
                       <Link href="https://allaboutcookies.org/">
                        <a target="_blank" style={{ color: "#4a90e2; margin-left: 4px;" }}>
                           allaboutcookies.org.
                        </a>
                      </Link>
                    </p>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">Links to other websites</h2>
                    <p>
                      The Company’s website contains or may contain links to
                      other websites or social media platforms of interest.
                      However, once you have used these links to leave the
                      Company’s website, you should note that the Company does
                      not have any control over those other websites.
                      <br />
                      <br />
                      Therefore, the Company cannot be responsible for the
                      protection and privacy of any information which you
                      provide whilst visiting such sites and such sites are not
                      governed by this Policy. You should exercise caution and
                      look at the privacy statement applicable to the website in
                      question. The Company will not be liable for the unlawful
                      or unauthorized use of the Client’s Personal Data due to
                      misuse and/or malicious use and/or negligence and/or
                      misplacement of the Client’s passwords either by him/her
                      or any third party.
                      <br />
                      <br />
                      Client Records Retention Periods Under the applicable laws
                      and regulations, the Company is required to keep records
                      containing Client Personal Data, trading information,
                      account opening documents, communications and anything
                      else which relates to the Client after the execution of
                      each transaction and/or for 6 (six) years of the
                      termination of the business relationship.
                    </p>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">
                      Sharing and Disclosure of Personal Data
                    </h2>
                    <p>
                      In the course of the performance of the Company’s
                      contractual and statutory obligations, the Client’s
                      Personal Data may be disclosed to third parties. Most of
                      such third parties enter into contractual arrangements
                      with the Company by which they observe data protection and
                      confidentiality.
                      <br />
                      <br />
                      Under the circumstances referred to above, recipients of
                      Personal Data may be, for example:
                    </p>
                    <ul className="list-unstyled ms-3">
                      <li className="mb-3">
                        (a) third party payment service providers who help the
                        Company provide its Clients the services of securely
                        deposit and withdrawal to and from a Client’s account;
                      </li>
                      <li className="mb-3">
                        (b) other service providers that the Company has chosen
                        to support it in the effective provision of its products
                        and services by offering technological expertise,
                        solutions and support;
                      </li>
                      <li className="mb-3">
                        (c) governmental and regulatory bodies, including law
                        enforcement authorities and FSB, in connection with
                        enquiries, proceedings or investigations by such parties
                        or in order to enable the Company to comply with its
                        legal and regulatory requirements;
                      </li>
                      <li className="mb-3">
                        (d) credit reference and fraud prevention agencies,
                        third party authentication service providers and other
                        financial institutions for the purposes of credit
                        checking, fraud prevention and anti-money laundering
                        controls;
                      </li>
                      <li className="mb-3">
                        (e) third party service providers for the provision of
                        the required customer support services through live chat
                        and the Company’s website visits and traffic monitoring
                        through cookies;
                      </li>
                      <li className="mb-3">
                        (f) external consultants including legal and tax
                        consultants;
                      </li>
                      <li className="mb-3">
                        (g) data reporting service providers;
                      </li>
                      <li className="mb-3">
                        (h) market research companies and call centers; and
                      </li>
                      <li className="mb-3">(i) affiliates of the Company;</li>
                    </ul>
                    <p>
                      In accordance with the recommendations of Payment Card
                      Industry Security Standards Council, customer card details
                      are protected using Transport Layer encryption — TLS 1.2
                      and application layer with algorithm AES and key length
                      256 bit. The Company does not collect, store or process
                      any personal credit or debit card information. All payment
                      transactions are processed through payment services
                      providers.
                    </p>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">
                      Business Transfers & Legal Requirements
                    </h2>
                    <p>
                      If the Company is involved in a merger, acquisition,
                      financing due diligence, reorganization, bankruptcy,
                      receivership, sale of company assets, or transition of
                      service to another provider, Client’s Personal Data and
                      other information may be transferred to a successor or
                      affiliate as part of that transaction along with other
                      assets.
                    </p>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">
                      Marketing Communications – Services Subscriptions
                      Preferences
                    </h2>
                    <p>
                      The Company may process Personal Data to tell its Clients
                      about products, services and offers that may be of
                      interest to the Client. The Company may only process such
                      Personal Data if it has obtained the Client’s explicit
                      consent to do so. If the Client no longer wishes to
                      receive any promotional communications, he may opt-out of
                      receiving them by following the instructions included in
                      each communication or by updating his email subscription
                      preferences within the Client account area.
                    </p>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">Personal Data Rights</h2>
                    <ul className="list-unstyled ms-3">
                      <li className="mb-3">
                        (a) <strong>Right of access:</strong> The Client has the
                        right to be informed whether the Company is processing
                        his/her Personal Data, and if so, to provide the Client
                        with a copy of that Personal Data.
                      </li>
                      <li className="mb-3">
                        (b) <strong>Right to rectification:</strong> The Client
                        is entitled to request that the Company corrects or
                        completes his/her Personal Data if it is inaccurate or
                        incomplete.
                      </li>
                      <li className="mb-3">
                        (c) <strong>Right to erasure:</strong> This enables the
                        Client to ask the Company to erase or remove the
                        Client’s Personal Data under certain circumstances, such
                        as when the Client withdraws his consent.
                      </li>
                      <li className="mb-3">
                        (d) <strong>Right to restrict processing:</strong> This
                        enables the Client to ask the Company to restrict the
                        processing of the Client’s Personal Data if:
                      </li>
                      <li className="mb-3">
                        (e) <strong>Right to data portability:</strong> The
                        Client has the right to obtain his/her Personal Data
                        provided to the Company in a structured, commonly used
                        and machine-readable format.
                      </li>
                      <li className="mb-3">
                        (f) <strong>Right to object:</strong> The Client may ask
                        the Company at any time to stop processing his/her
                        Personal Data, and the Company will do so:
                      </li>
                      <li className="mb-3">
                        (g) <strong>
                           Rights in relation to automated decision-making and
                          profiling:
                        </strong>
                        The Client has the right to be free from decisions based
                        solely on automated processing of his/her Personal Data,
                        including profiling, that affect him/her, unless such
                        profiling is necessary for entering into, or the
                        performance of, a contract between Client and the
                        Company or the Client provides explicit consent.
                      </li>
                      <li className="mb-3">
                        (h) <strong>Right to withdraw consent:</strong> If the
                        Company relies on the Client’s consent to process
                        his/her Personal Data, the Client has the right to
                        withdraw that consent at any time. This will not affect
                        the lawfulness of the processing that took place on the
                        basis of the Client’s prior consent.
                      </li>
                      <li className="mb-3">
                        (i) <strong>
                          Right to lodge a complaint with the data protection
                          authority:
                        </strong>
                        If the Client has a concern about the Company’s privacy
                        practices, including the way in which the Company
                        handled his/her Personal Data, the Client can report it
                        to the relevant data protection authority.
                      </li>
                      <li className="mb-3">
                        To exercise any of the above rights, the Client may
                        contact the Company at
                        <Link href="mailto:support@uitfx.com">
                          <a className="ms-1" style={{ color: "#4a90e2" }}>support@uitfx.com.</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">
                      Automated Decision-making and Profiling
                    </h2>
                    <p>
                      When you make an application for account opening, we will
                      use systems to make an automated assessment of your
                      knowledge and experience through the evaluation of an
                      appropriateness test. Based on the results of such test
                      will then assign the appropriate leverage to your trading
                      account. In such cases, you have the right to contact us
                      <br />
                      <br />
                      
                    </p>
                    <ul className="list-unstyled ms-3">
                        <li className="mb-3">
                          (a) give you information about the processing of your
                          personal data (please also see Section 11 of this
                          Policy in relation to your rights); and/or
                        </li>
                        <li className="mb-3">
                          (b) request that one of our employees examines your
                          application and obtain an explanation for the
                          automated decision reached. You also have the right to
                          challenge such a decision. Following such a request,
                          we will reassess your application, taking into
                          consideration both the reasons that a particular
                          automated decision was reached as well as your own
                          point of view.r
                        </li>
                      </ul>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">
                      Confidentiality and Security of Personal Data
                    </h2>
                    <p>
                      Personal Data which the Company holds is to be treated by
                      the Company as confidential and will not be used for any
                      purpose other than those specified in this Policy.
                      <br />
                      Any Personal Data that the Client provides to the Company
                      will be treated as confidential and shared only with the
                      parties set out in Section 8 of this Policy.
                      <br />
                      Such Personal Data will not be disclosed to any other
                      third party except if such disclosure is required under
                      any regulatory or legal proceedings.
                      <br />
                      The Personal Data that the Client provides in connection
                      with registering as a user of the website(s) or for the
                      Services is classified as Registration Information. The
                      Company offers high protection of the Registration
                      Information provided by the Client. The Client can access
                      his Registration Information through a password selected
                      by him which is encrypted and known only to the Client.
                      The Client must be careful and protect his password from
                      any third parties. Registration Information is safely
                      stored on secure servers that only authorized personnel
                      have access to via password. The Company encrypts all
                      Personal Data as it is transferred to the Company and thus
                      makes all necessary effort to prevent unauthorized parties
                      from viewing any such information.
                      <br />
                      Personal Data provided to the Company that is not
                      Registration Information also resides on secure servers
                      and is again accessible only to authorized personnel via
                      password. This information is not accessible by the
                      Client; therefore, no password is provided to view or
                      modify this information.
                    </p>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">Amendments to this Policy</h2>
                    <p>
                      The Company reserves the right to review and amend this
                      Policy from time to time for any reason and notify the
                      Clients of any such amendments accordingly by posting an
                      updated version of this Policy on the Company’s
                      website(s). The Company will notify you about any material
                      changes to this Policy by placing a notice on its website
                      or by communicating with you directly. The Client is
                      responsible for regularly reviewing the Policy and any
                      amendments thereof.
                    </p>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">Enquiries and Contact Details</h2>
                    <p>
                      For any general enquiries regarding this Policy please
                      contact the Company by emailing the Customer Support
                      Department at <Link href="mailto:support@uitfx.com">
                        <a style={{ color: "#4a90e2" }}> support@uitfx.com. </a>
                      </Link> For any requests in
                      regard to personal data rights, as set out in Section 11
                      of this Policy, or questions about how the Company
                      processes Client’s Personal Data, please contact us at
                      <Link href="mailto:support@uitfx.com">
                        <a style={{ color: "#4a90e2" }}> support@uitfx.com. </a>
                      </Link>
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
