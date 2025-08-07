import Head from "next/head";
import { Card, Col, Container, Row } from "react-bootstrap";
import Bubbles from "../../components/animation/Bubbles";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Terms and Conditions | UITFX Markets</title>
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
                      <Card.Title>Terms and Conditions</Card.Title>
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
                      1.1. United International Trading Co. Ltd.(hereinafter
                      referred to as the ‘Company’) is an investment firm that
                      operates as a global broker.
                      <br />
                      <br />
                      1.2. United International Trading Co. Ltd. is incorporated
                      in Thailand under the Companies Ordinance. The certificate
                      was issued on 25 June 2020. United International Trading
                      Co. Ltd. incorporated as an International Broker Company
                      with the registration no. 0205563019819. <br />
                      <br />
                      1.3. The objects of the Company are all subject matters
                      not forbidden by International Business Companies
                      (Amendment and Consolidation) Act, in particular but not
                      exclusively all commercial, financial, lending, borrowing,
                      trading, service activities and the participation in other
                      enterprises as well as to provide brokerage, training and
                      managed account services in currencies, commodities,
                      indexes, CFDs and leveraged financial instruments.
                    </p>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">2. Acknowledgement</h2>
                    <p>
                      2.1. The client acknowledges that he/she read, understood,
                      and accepted the Terms of Business as amended from time to
                      time, in addition to any information contained within the
                      firm’s website available online at https://www.uitfx.com/
                      <br />
                      <br />
                      2.2. After the Client fills in and submits the Account
                      Opening Application Form together with all the required
                      identification documentation, the Company will send him a
                      notice informing him whether he has been accepted as a
                      customer of the Company. It is understood that the Company
                      is not to be required (and may be unable under Applicable
                      Regulations) to accept the Client as its customer, and
                      hence open an account for him or accept any money from
                      him, until all documentation it requires has been received
                      by the Company, properly and fully completed by the Client
                      and all internal Company checks (including without
                      limitation anti-money laundering checks and
                      appropriateness tests) have been duly satisfied. It is
                      further understood that the Company reserves the right to
                      impose additional due diligence requirements to accept
                      Clients residing in certain countries. The Agreement will
                      take effect and commence upon the receipt by the Client of
                      the notice sent by the Company informing the Client that
                      he has been accepted as the Company’s Client.
                      <br />
                      <br />
                      2.3. The client acknowledges that the Firm’s official
                      language is the English Language.
                    </p>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">3. Scope of the Terms of Business</h2>
                    <p>
                      3.1. The Terms of Business govern all the actions that
                      relate to the execution of the client’s orders.
                      <br />
                      <br />
                      3.2. The Terms of Business are non-negotiable and
                      overrides any other agreements, arrangements, express or
                      implied statements made by United International Trading
                      Co. Ltd. Markets unless the company, in its sole
                      discretion, determines that the context requires
                      otherwise.
                      <br />
                      <br />
                      3.3. The Distance Marketing of Consumer Financial services
                      law N.242 (I)/2004 which implements EU directive
                      2002/65/EC, does not require the Client Agreement to be
                      signed by either the client or the company in order for
                      both the client and the company to be legally bound by it.
                    </p>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">4. Definitions and Interpretations</h2>
                    <p>
                      <strong>4.1. Terms</strong>
                      <br></br>
                      Terms stated below shall have the following meanings and
                      may be used in the singular or plural as appropriate.
                      <br></br>
                      <br></br>
                      <strong>4.2. Account</strong>
                      <br></br>
                      Terms stated below shall have the following meanings and
                      may be used in the singular or plural as appropriate.
                      <br></br>
                      <br></br>
                      <strong>4.3. Account Detailed Report</strong>
                      <br></br>
                      Shall mean a statement of the Clients securities
                      portfolio, open positions, margin requirements, cash
                      deposit etc. at a specific point in time.<br></br>
                      <br></br>
                      <strong>4.4. Ask Price</strong>
                      <br></br>
                      Means the price at which the Company is willing to sell a
                      CFD.<br></br>
                      <br></br>
                      <strong>4.5. Authorized Person</strong>
                      <br></br>
                      Means a person authorized by the Client under a power of
                      attorney to give instructions to the Company in relation
                      to the Account.<br></br>
                      <br></br>
                      <strong>4.6. Balance</strong>
                      <br></br>
                      Means the sum of the Client Account after the last
                      completed order and deposit/withdrawal operation made
                      within any period of time.<br></br>
                      <br></br>
                      <strong>4.7. Best Execution Policy</strong>
                      <br></br>
                      Means the Company’s prevailing policy available at the
                      Company’s Website regarding best execution when executing
                      client orders.<br></br>
                      <br></br>
                      <strong>4.8. Bid Price</strong>
                      <br></br>
                      Means the price at which the Company is willing to buy a
                      CFD.
                      <br></br>
                      <br></br>
                      <strong>4.9. Business Day</strong>
                      <br></br>
                      Means any day on which banks are open for business in
                      Thailand.
                      <br></br>
                      <br></br>
                      <strong>4.10. CFD Contract or CFD</strong>
                      <br></br>
                      Means a contract which is a contact of difference by
                      reference to fluctuations in the price of the relevant
                      Underlying Asset.
                      <br></br>
                      <br></br>
                      <strong>4.11. Client</strong>
                      <br></br>
                      Means a natural or legal person, accepted by the Company
                      as its Client to whom services will be provided by the
                      Company under the Terms.
                      <br></br>
                      <br></br>
                      <strong>4.12. Collateral</strong>
                      <br></br>
                      Means any securities or other assets deposited with the
                      Company’s Execution Venue.
                      <br></br>
                      <br></br>
                      <strong>4.13. Underlying Asset</strong>
                      <br></br>
                      Means underlying asset is the financial instrument (e.g.,
                      stock, futures, commodity, currency, index) on which a
                      derivative's price is based.
                      <br></br>
                      <br></br>
                      <strong>4.14. Trading Platform</strong>
                      <br></br>
                      Means any online trading platform made available to the
                      Client by the Company for placing orders, requesting
                      quotes for trades, receiving price information and market
                      related news as well as having a real-time revaluation of
                      the open positions, through the Internet.
                      <br></br>
                      <br></br>
                      <strong>4.15. Swap</strong>
                      <br></br>
                      Shall mean the funds withdrawn or added to the Client’s
                      Account from rolling over (transfer) of an open position
                      to the next day.
                      <br></br>
                      <br></br>
                      <strong>4.16. Spread</strong>
                      <br></br>
                      Means the difference between the Ask Price and the Bid
                      Price.
                      <br></br>
                      <br></br>
                    </p>
                  </div>
                  
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">5. Internet and Electronic Trading</h2>
                    <p>
                      5.1. The Client acknowledges the electronic nature of the
                      Services and the inherent risk that communications by
                      electronic means may not reach their intended destination
                      or may do so much later than intended for reasons outside
                      the Company’s control.
                      <br />
                      <br />
                      5.2. Since the Company does not control signal power, its
                      reception or routing via Internet or any other means of
                      electronic communication, configuration of Client’s
                      equipment or reliability of its connection, the Company
                      shall not be liable for any claims, losses, damages, costs
                      or expenses, including attorneys’ fees, caused directly or
                      indirectly, by any breakdown or failure of any
                      transmission or communication system or computer facility
                      belonging to the Company.
                      <br />
                      <br />
                      5.3. The Client is obliged to keep all login information
                      secret and ensure that third parties do not obtain access
                      to the trading facilities. The Client will be held
                      responsible for transactions executed by means of the
                      Client’s password even if such transactions were not
                      executed by the Client.
                      <br />
                      <br />
                      5.4. Unless otherwise indicated or agreed, any prices
                      shown on the Company’s Trading Platform are indicative at
                      the time shown based on data that is subject to constant
                      change. The execution price is that which is confirmed to
                      the Client on the Trade Confirmation issued (whether on
                      screen or otherwise) after the Client order is executed,
                      although this price may in certain cases differ from the
                      price appearing on the screen at the time the order was
                      placed. In the event that an erroneous price is used as
                      the basis of any transaction, the Company reserves the
                      right to amend or revoke the details of the transaction(s)
                      in question.
                      <br />
                      <br />
                      5.5. The limit order functionality of the Trading Platform
                      will be subject to the Internet service remaining
                      available over the period in which the limit order is
                      outstanding, and will be subject to size limits input by
                      the Company’s dealer(s) remaining in excess of the Clients
                      order size and such dealer’s position limits and/or any
                      other limits determined by the Company to be applicable to
                      the Client (whether or not disclosed to the Client) still
                      being able to facilitate the order at the time the limit
                      price is reached.
                      <br />
                      <br />
                      5.6. The identification or use of any third party
                      products, services, or websites is not an endorsement by
                      the Company of such services, products, or websites. The
                      Company accepts no responsibility or liability of any kind
                      in respect of any materials on any website which is not
                      under the Company’s direct control.
                    </p>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">6. Market Making</h2>
                    <p>
                      6.1. The Client is specifically made aware that in certain
                      markets, including the foreign exchange markets, OTC
                      foreign exchange options and CFD Contracts, the Company
                      may act as a Market Maker.
                      <br />
                      <br />
                      6.2. The Company will, upon the Client’s written request,
                      in general disclose to the Client whether the Company may
                      act as a Market Maker in certain CFD Contracts.
                      <br />
                      <br />
                      6.3. In order for the Company to quote prices with the
                      swiftness normally associated with speculative trading,
                      the Company may have to rely on available price or
                      available information that may later prove to be faulty
                      due to specific market circumstances, for instance, but
                      not limited to, lack of liquidity in or suspension of an
                      asset or errors in feeds from information providers or
                      quotes from Counterparties. If so and if the Company has
                      acted in good faith when providing the price to the
                      Client, the Company may cancel the trade with the Client
                      but shall do so within reasonable time and shall provide
                      the Client with a full explanation for the reason for such
                      cancellation.
                      <br />
                      <br />
                      6.4. Following execution of any position with a Client,
                      the Company may at it’s reasonable discretion subsequently
                      offset each such client position with another Client
                      position, or a position with one of the Company’s
                      Counterparties or retain a proprietary position in the
                      market with the intention to obtain trading profits from
                      such positions. Such decisions and actions may therefore
                      result in the Company offsetting client positions at
                      prices different – sometimes significantly different –
                      from prices quoted to Clients, resulting in trading
                      profits or losses for the Company. This in turn can raise
                      the possibility of the Client incurring what may be seen
                      as an implied cost (i.e. the difference between the price
                      at which the Client traded with the Company and the price
                      at which the Company subsequently traded with
                      Counterparties and/or other Clients) due to any profits
                      realized by the Company as a result of the Market Making
                      function. However the Market Making function may involve
                      significant costs to the Company if the market moves
                      against it as compared to the price at which it traded
                      with the Client.
                      <br />
                      <br />
                      6.5. The Client accepts that the Company in CFD contracts
                      where it acts as Market Maker may hold positions that are
                      contrary to positions of the Client, resulting in
                      potential conflicts of interest between the Company and
                      the Client.
                      <br />
                      <br />
                      6.6.In markets, where the Company acts as a Market Maker,
                      the Client accepts that the Company has no obligation to
                      quote prices to clients at all times in any given market,
                      nor to quote such prices to clients with a specific
                      maximum spread.
                      <br />
                      <br />
                      6.7. The Client acknowledges, recognizes and accepts that
                      the price quoted to the Client includes a spread when
                      compared with the price to which the Company may have
                      covered or expected to be able to cover the Contract in a
                      trade with another client or a Counterparty. Furthermore,
                      the Client acknowledges, recognizes and accepts that said
                      spread constitutes remuneration to the Company and that
                      such spread can not necessarily be calculated for all
                      Contracts and that such spread will not be specified at
                      the Trade Confirmation or otherwise revealed to the
                      Client.
                      <br />
                      <br />
                      6.8.Any commission costs, interest charges, costs
                      associated to and included in the spreads quoted by the
                      Company as a Market Maker in certain markets and other
                      fees and charges will consequently influence the Client’s
                      trading result and will have a negative effect on the
                      Client’s trading performance compared to a situation if
                      such commission costs, interest charges, costs associated
                      to and included in the spreads did not apply.
                      <br />
                      <br />
                      (a) In the case that the client account equity is equal or
                      exceeds 300,000 USD (or currency equivalent) and there are
                      open trades of 50 lots or more, the Company reserves the
                      right to adjust the leverage of the underlying trading
                      account to 1:75. If this is the case the Company will
                      inform the Client by email.
                      <br />
                      <br />
                      (b) If the Client is an active trader and is undertaking
                      numerous transactions, the total impact of visible as well
                      as not visible costs may be significant. Consequently the
                      Client may have to obtain significant profits in the
                      markets in order to cover the costs associated with
                      trading activities with the Company. For very active
                      Clients, such costs may over time exceed the value of the
                      margin deposited. Normally, when trading margined
                      derivatives, the lower the percentage of the applicable
                      margin rate, the higher the proportion of the costs
                      associated with executing a transaction. Margined
                      derivatives are derivatives such as CFD’s that can be
                      traded using a leverage of higher than 1:1.
                      <br />
                      <br />
                      6.9. The Client is specifically made aware that in the
                      area of market making in foreign exchange, OTC foreign
                      exchange options, CFD Contracts and other OTC products,
                      significant implied costs can arise as a consequence of
                      the profits made by the Company performing in its capacity
                      as a Market Maker.
                      <br />
                      <br />
                      6.10. The Company’s performance as a Market Maker may
                      negatively affect the Client’s Account with the Company
                      and the said implied costs are neither directly visible
                      nor directly quantifiable for the Client at any time.
                      <br />
                      <br />
                      6.11. The Company is at no time obliged to disclose any
                      details of its performance or income produced as a Market
                      Maker or otherwise related to other commissions, charges
                      and fees.
                      <br />
                      <br />
                      6.12. The Client is specifically made aware that CFD
                      Contracts may be OTC products quoted by the Company whilst
                      operating as a Market Maker and not traded on a recognized
                      stock exchange. As a result, the description above of the
                      implied, not visible costs related to the Company
                      performance as a Market Maker may also apply to any CFD
                      Contract.
                      <br />
                      <br />
                      6.13. Due to low liquidity and/or or high volatility and
                      widened spreads, placing of pending orders around some
                      Economic Announcements may be restricted.
                      <br />
                      <br />
                      6.14. The Company reserves the right, at its sole
                      discretion, to delete any Pending Orders older than three
                      (3) months from the Clients’ trading account(s). Pending
                      Order is a “Buy Limit”, “Buy Stop”, “Sell Limit” or “Sell
                      Stop” order, as per the Company’s Order Execution Policy.
                    </p>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">7. Arbitrage</h2>
                    <p>
                      7.1. Internet, connectivity delays, and price feed errors
                      sometimes create a situation where the price displayed on
                      the Trading Platform does not accurately reflect the
                      market rates. The concept of arbitrage and or taking
                      advantage of these internet delays cannot exist in an OTC
                      market where the Client is buying or selling directly from
                      the principal. The Company does not permit the practice of
                      arbitrage on the Trading Platform. Transactions that rely
                      on price latency arbitrage opportunities may be revoked,
                      without prior notice. The Company reserves the right to
                      make the necessary corrections or adjustments on the
                      Account involved, without prior notice. Accounts that rely
                      on arbitrage strategies may at the Company’s sole
                      discretion be subject to the Company’s intervention and
                      the Company’s approval of any Orders. Any dispute arising
                      from such quoting or execution errors will be resolved by
                      the Company in their sole and absolute discretion.
                      <br />
                      <br />
                      7.2. The Company shall have no obligation to contact the
                      Client to advise upon appropriate action in light of
                      changes in market conditions or otherwise.
                      <br />
                      <br />
                      7.3. The Client agrees to indemnify and hold the Company,
                      its affiliates and any of their directors, officers,
                      employees and agents harmless from and against any and all
                      liabilities, losses, damages, costs and expenses,
                      including legal fees incurred in connection with the
                      provision of the services under these Terms provided that
                      any such liabilities, losses, damages, costs and expenses
                      have not arisen for the Company’s gross negligence, fraud
                      or willful default.
                    </p>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">8. Prohibited Trading</h2>
                    <p>
                      8.1. The Customer agrees and acknowledges that the service
                      provided by the company to the Customer hereunder is not
                      adapted for certain trading techniques commonly known as
                      "arbitrage trading", "picking/sniping" Snipping: the
                      situation where the Client is prematurely buying or
                      selling near preset prices.
                      <br />
                      <br />
                      8.2. In the event of the Customer employing such
                      techniques, the Customer agrees and acknowledges that the
                      company may at United International Trading Co. Ltd.'s
                      sole discretion take one or more, or any portion of, the
                      following actions: (i) close the Customer's account; (ii)
                      suspend the Customer's account for an indefinite period of
                      time; (iii) carry out an investigation on the Customer's
                      account for an indefinite period of time; (iv) charge a
                      penalty fee to the Customer in the same or greater amount
                      of money that resulted from the Customer using such
                      techniques.
                      <br />
                      <br />
                      8.3. The Client shall not unlawfully access or attempt to
                      gain access, reverse engineer or otherwise circumvent any
                      security measures that the Company has applied to the
                      Platform.
                      <br />
                      <br />
                      8.4. It is absolutely prohibited to take any of the
                      following actions:
                      <br />
                      <br />
                    </p>
                    <ul className="list-unstyled ms-3">
                      <li>
                        <p>
                          (a) use any software, which applies artificial
                          intelligence analysis to the Company’s system and
                          Trading Platform;
                        </p>
                      </li>
                      <li>
                        <p>
                          (b) intercept or monitor, damage or modify any
                          communication which is not intended for him;
                        </p>
                      </li>
                      <li>
                        <p>
                          (c) use any type of spider, virus, worm, trojan-horse,
                          time bomb or any other codes or instructions that are
                          designed to distort, delete, damage or disassemble the
                          Trading Platform or the communication system or any
                          system of the Company;
                        </p>
                      </li>
                      <li>
                        <p>
                          (d) send any unsolicited commercial communication not
                          permitted by Applicable Law.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">9. Untrue Trades</h2>
                    <p>
                      9.1. The Company shall have the right to annul and/or
                      reverse any trades which are deemed untrue or opened at a
                      fictitious price not existing on the market at the time of
                      opening. Such cases include but are not limited to trades
                      based on a non-market Quotation or based on latency
                      trading (such as old prices).
                    </p>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">10. Trade Execution Rule</h2>
                    <p>
                      10.1. Minimum trade Execution time should be one minute
                      and trade whose execution time is found to be less than
                      the mentioned time will be enlisted as unethical trade.
                    </p>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">11. Trading Volume Limitation</h2>
                    <p>
                      11.1. The Company reserves the right to increase or
                      decrease the trading volume limitation level of one or
                      more instruments at any time without giving prior notice.
                      The volume limitation is applied on a per client basis and
                      in accordance with the table under section “My Account”
                      and “Volume Conditions” on the Client’s my United
                      International Trading Co. Ltd. area. (The volume is
                      expressed on NET standard lot, 1 = $100.000 USD)
                      <br />
                      <br />
                      11.2. In the event that the Customer attempts to exceed
                      the volume limit on any of the instruments described above
                      the request will be automatically declined and an "Off
                      quote" message will be displayed.
                    </p>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">12. Default</h2>
                    <p>
                      12.1. The Company reserves the right to retain, or make
                      deductions from, any amounts which the Company owes, or is
                      holding for the Client, if any amounts are due from the
                      Client to the Company.
                      <br />
                      <br />
                      12.2. The Client hereby authorizes the Company, at the
                      Company’s discretion, at any time and without notice or
                      liability to the Client, to sell, apply, set-off and/or
                      charge in any manner any or all of the Client’s assets
                      and/or the proceeds from such assets which the Company has
                      custody or control, in order to discharge all or any of
                      the Client’s obligations to the Company.
                      <br />
                      <br />
                      12.3. Each and any of the following events shall
                      constitute an Event of Default if:
                      <br />
                      <br />
                    </p>
                    <ul className="list-unstyled ms-3">
                      <li>
                        <p>
                          (a) The Client fails to make any payment or fails to
                          do any other act or thing required by these Terms;
                        </p>
                      </li>
                      <li>
                        <p>
                          (b) The Client fails to remit funds necessary to
                          enable the Company to take delivery under any Contract
                          on the first due date;
                        </p>
                      </li>
                      <li>
                        <p>
                          (c) The Client fails to provide assets for delivery,
                          or take delivery of assets, under any Contract on the
                          first due date;
                        </p>
                      </li>
                      <li>
                        <p>
                          (d) The Client dies or becomes of unsound mind or is
                          declared absent.
                        </p>
                      </li>
                      <li>
                        <p>
                          (e) An application is made in respect of the Client
                          for an interim order or if a bankruptcy petition is
                          presented in respect of the Client or, if a
                          partnership, in respect of one or more of the
                          partners, or if a company, a receiver, trustee,
                          administrative receiver or similar officer is
                          appointed;
                        </p>
                      </li>
                      <li>
                        <p>
                          (f) A petition is presented for the winding-up or
                          administration of the Client;
                        </p>
                      </li>
                      <li>
                        <p>
                          (g) An order is made or a resolution is passed for the
                          winding-up or administration of the Client (other than
                          for the purposes of amalgamation or reconstruction
                          with the prior written approval of the Company);
                        </p>
                      </li>
                      <li>
                        <p>
                          (h) Any distress, execution or other process is levied
                          against any property of the Client and is not removed,
                          discharged or paid within 7 seven days; or
                        </p>
                      </li>
                      <li>
                        <p>
                          (i) Any security created by any mortgage or charge
                          becomes enforceable against the Client and the
                          mortgagee or chargee takes steps to enforce the
                          security or charge;
                        </p>
                      </li>
                      <li>
                        <p>
                          (j) Any indebtedness of the Client or any of its
                          subsidiaries becomes immediately due and payable, or
                          capable of being declared so due and payable, prior to
                          its stated maturity by reason of default of the Client
                          (or any of its subsidiaries) or the Client (or any of
                          its subsidiaries) fails to discharge any indebtedness
                          on its due date;
                        </p>
                      </li>
                      <li>
                        <p>
                          (k) The Client fails to fully comply with any
                          obligations within the text of these Terms or any
                          Contract including failure to meet margin
                          requirements;
                        </p>
                      </li>
                      <li>
                        <p>
                          (l) Any of the representations or warranties given by
                          the Client are, or become, untrue;
                        </p>
                      </li>
                      <li>
                        <p>
                          (m) The Company or the Client is requested to close
                          out a Contract (or any part of a Contract) by any
                          regulatory agency or authority; or
                        </p>
                      </li>
                      <li>
                        <p>
                          (n) The Company is obliged to so by operation of law.
                        </p>
                      </li>
                      <li>
                        <p>
                          (o) The Company reasonably considers it necessary for
                          its own protection.
                        </p>
                      </li>
                      <li>
                        <p>
                          (p) There is reasonable suspicion that the Client
                          involves the Company in any type of fraud or
                          illegality.
                        </p>
                      </li>
                      <li>
                        <p>
                          (q) The Company suspects that the Client is engaged
                          into money laundering activities or terrorist
                          financing or other criminal activities.
                        </p>
                      </li>
                    </ul>
                    <p>
                      12.4. Upon the existence of an Event of Default, the
                      Company shall at its discretion be entitled to take any of
                      the following actions:
                    </p>
                    <ul className="list-unstyled ms-3">
                      <li>
                        <p>
                          (a) sell or charge in any way any or all of the
                          Client’s Security, assets and property which may from
                          time to time be in the possession or control of the
                          Company or call on any guarantee;
                        </p>
                      </li>
                      <li>
                        <p>
                          (b) purchase any Security, investment or other
                          property where this is, or is in the reasonable
                          opinion of the Company likely to be, necessary in
                          order for the Company to fulfill its obligations under
                          any Contract; in this case the Client shall reimburse
                          the Company, the full amount of the purchase price
                          plus any associated costs and expenses;
                        </p>
                      </li>
                      <li>
                        <p>
                          (c) deliver any Security investment or property to any
                          third party, or otherwise take any action the Company
                          considers being desirable in order to close out any
                          Contract;
                        </p>
                      </li>
                      <li>
                        <p>
                          (d) require the Client to immediately close out and
                          settle a Contract in such manner as the Company may in
                          its absolute discretion request;
                        </p>
                      </li>
                      <li>
                        <p>
                          (e) enter into any foreign exchange transaction, at
                          such rates and times as the Company may determine, in
                          order to meet obligations incurred under a Contract;
                          and
                        </p>
                      </li>
                      <li>
                        <p>
                          (f) invoice back all or part of any assets standing to
                          the debit or credit of any Account (this involves
                          commuting Company’s or the Client’s obligation to
                          deliver an asset into an obligation to pay an amount
                          equal to the market value of the asset (determined by
                          the Company in its absolute discretion) on the date
                          invoicing back takes place).
                        </p>
                      </li>
                      <li>
                        <p>(g) terminate this Agreement without notice;</p>
                      </li>
                      <li>
                        <p>
                          (h) debit the Account(s) for the amounts which are due
                          to the Company
                        </p>
                      </li>
                      <li>
                        <p>
                          (i) close any or all of the Accounts held with the
                          Company;
                        </p>
                      </li>
                      <li>
                        <p>
                          (j) combine Client Accounts, consolidate the Balances
                          in such Client Accounts and to set off those Balances
                        </p>
                      </li>
                      <li>
                        <p>(k) refuse to open new Accounts for the Client</p>
                      </li>
                      <li>
                        <p>(l) refuse to open new Accounts for the Client</p>
                      </li>
                    </ul>
                    <p>
                      12.5. Without prejudice to the Company’s other rights, the
                      Company may, at any time and without notice, combine or
                      consolidate all or any of the Accounts maintained by the
                      Client with the Company and off-set any amounts owed to or
                      by the Company in such manner as the Company may
                      determine.
                    </p>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">13. Advertising</h2>
                    <p>
                      13.1. When the Company is using or advertising or posting
                      on its website or platform or otherwise to any third
                      party’s services, products or websites”:
                      <br />
                      <br />
                    </p>
                    <ul className="list-unstyled ms-3">
                      <li>
                        <p>
                          (a) the Company will not be responsible for any such
                          services, products or website material that is not
                          under its control;
                        </p>
                      </li>
                      <li>
                        <p>
                          (b) the Company gives no representation, warranty or
                          guarantee as to the accuracy, correctness or
                          completeness of any related information or as to the
                          tax or legal consequences of any related Transaction;
                        </p>
                      </li>
                      <li>
                        <p>
                          (c) such is provided solely to enable the Client to
                          make his own investment decisions and does not amount
                          to investment advice or unsolicited financial
                          promotions to the Client;
                        </p>
                      </li>
                      <li>
                        <p>
                          (d) if the document contains a restriction on the
                          person or category of persons for whom that document
                          is intended or to whom it is distributed, the Client
                          agrees that he will not pass it on to any such person
                          or category of persons;
                        </p>
                      </li>
                      <li>
                        <p>
                          (e) the Client accepts that prior to dispatch, the
                          Company may have acted upon it itself to make use of
                          the information on which it is based. The Company does
                          not make representations as to the time of receipt by
                          the Client and cannot guarantee that he will receive
                          such information at the same time as other Clients.”
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">14. Refund and Cancellation</h2>
                    <p>
                      14.1. The Company reserves the right to cancel a Client’s
                      request for withdrawal due to any of the following
                      reasons:
                      <br />
                      <br />
                    </p>
                    <ul className="list-unstyled ms-3">
                      <li>
                        <p>
                          (a) when the Client has been asked to provide the
                          Company with updated Banking account details and/or
                          statement within 7 (seven) days, if deemed necessary,
                          and/or has suspicious transactions in relation money
                          laundering activities.
                        </p>
                      </li>
                      <li>
                        <p>
                          (b) when the Client has not provided full and/or
                          correct withdrawal information while submitting his
                          withdrawal request, the Company shall inform the
                          Client that the reason for the cancellation is due to
                          failure on his behalf to provide full and/or correct
                          withdrawal information to the Company. The Company
                          will ask the Client to resubmit his withdrawal request
                          if he provides full and/or correct withdrawal
                          information.
                        </p>
                      </li>
                      <li>
                        <p>
                          (c) if the Client submitted incorrect date of birth
                          during the withdrawal request, the Company shall
                          inform the Client of the reason for the cancellation
                          and request from the Client to resubmit his withdrawal
                          request.
                        </p>
                      </li>
                      <li>
                        <p>
                          (d) If the Client has selected incorrect withdrawal
                          method, the Company shall inform the Client that the
                          reason for the cancellation is the selection of
                          incorrect withdrawal method. The Company will ask the
                          Client to resubmit his withdrawal request using the
                          correct withdrawal method.
                        </p>
                      </li>
                      <li>
                        <p>
                          (e) Funds cannot be refunded to an expired
                          credit/debit card.
                        </p>
                      </li>
                      <li>
                        <p>
                          (f) In case a card that the Client used to deposit
                          funds with the Company is cancelled/lost/stolen/
                          re-placed/do not support the foreign remittance
                          refunds, the Client must inform the Company prior to
                          submitting withdrawal request and provide official
                          letter from the Client’s bank stating the same. It
                          should be noted that all refunds are final and cannot
                          be reverted.
                        </p>
                      </li>
                      <li>
                        <p>
                          (g) In order for the Company to quote prices with the
                          swiftness normally associated with speculative
                          trading, the Company may have to rely on available
                          price or available information that may later prove to
                          be faulty due to specific market circumstances, for
                          instance, but not limited to, lack of liquidity in or
                          suspension of an asset or errors in feeds from
                          information providers or quotes from Counterparties.
                          If so and if the Company has acted in good faith when
                          providing the price to the Client, the Company may
                          cancel the trade with the Client but shall do so
                          within reasonable time and shall provide the Client
                          with a full explanation for the reason for such
                          cancellation.
                        </p>
                      </li>
                    </ul>
                    <p>
                      14.2. Cancellation of trades and/or Closure of positions:
                      The Company might cancel the trade Order in circumstances
                      where due to lack of liquidity in or suspension of an
                      asset or errors in feeds from Price Providers or quotes
                      from Counterparties have proved to be faulty. The Company
                      shall provide within a reasonable time a full explanation
                      of the reason for the cancellation of a trade. The Company
                      may delete any ‘Pending Orders’ which are older than 3
                      (three) months. The Company might close, revoke, correct
                      and/or adjust any trades in circumstances where the Client
                      is involved with arbitrage and/or prohibited trading
                      techniques. The Company might close any trades which are
                      deemed untrue or opened at a fictitious price not existing
                      on the market at the time of opening i.e. trades opened at
                      old prices. (More details on the circumstances when the
                      Company might cancel any trades or close any positions can
                      be found on the Company’s Terms of Business document
                      available via the Company’s website under section ‘Legal
                      Documentation’).
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
