import React from "react";
import { Table } from "react-bootstrap";

const CommissionTable = () => {
  return (
    <div className="commission-table-wrapper">
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th className="account-type">Account Type</th>
            <th className="spread">Spread</th>
            <th className="currency-pair">Currency Pair</th>
            <th className="ib-commission text-center">IB Commission</th>
          </tr>
        </thead>
        <tbody>
          {/* Classic Account Type */}
          <tr>
            <td rowSpan="5" className="account-type classic">
              <span>Classic</span>
            </td>
            <td rowSpan="5" className="spread">
              2.2
            </td>
            <td>Major Pair</td>
            <td className="commission-levels">
              <span>
                Level 1: <strong>$10</strong>
              </span>
              <span>
                Level 2: <strong>$8 + $2</strong>
              </span>
              <span>
                Level 3: <strong>$7 + $2 + $1</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>Minor Pair</td>
            <td className="commission-levels">
              <span>
                Level 1: <strong>$10</strong>
              </span>
              <span>
                Level 2: <strong>$8 + $2</strong>
              </span>
              <span>
                Level 3: <strong>$7 + $2 + $1</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>Metals</td>
            <td className="commission-levels">
              <span>
                Level 1: <strong>$12</strong>
              </span>
              <span>
                Level 2: <strong>$9 + $3</strong>
              </span>
              <span>
                Level 3: <strong>$9 + $2 + $1</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>Crypto</td>
            <td className="commission-levels">
              <span>
                Level 1: <strong>$14</strong>
              </span>
              <span>
                Level 2: <strong>$11 + $3</strong>
              </span>
              <span>
                Level 3: <strong>$10 + $3 + $1</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>Spot CFD</td>
            <td className="commission-levels">
              <span>
                Level 1: <strong>$3</strong>
              </span>
              <span>
                Level 2: <strong>$2 + $1</strong>
              </span>
              <span>
                Level 3: <strong>$1 + $0.5 + $0.5</strong>
              </span>
            </td>
          </tr>

          {/* Premium Account Type */}
          <tr>
            <td rowSpan="5" className="account-type premium">
              <span>Premium</span>
            </td>
            <td rowSpan="5" className="spread">
              1.5
            </td>
            <td>Major Pair</td>
            <td className="commission-levels">
              <span>
                Level 1: <strong>$8</strong>
              </span>
              <span>
                Level 2: <strong>$6 + $2</strong>
              </span>
              <span>
                Level 3: <strong>$5 + $2 + $1</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>Minor Pair</td>
            <td className="commission-levels">
              <span>
                Level 1: <strong>$8</strong>
              </span>
              <span>
                Level 2: <strong>$6 + $2</strong>
              </span>
              <span>
                Level 3: <strong>$5 + $2 + $1</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>Metals</td>
            <td className="commission-levels">
              <span>
                Level 1: <strong>$10</strong>
              </span>
              <span>
                Level 2: <strong>$8 + $2</strong>
              </span>
              <span>
                Level 3: <strong>$7 + $2 + $1</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>Crypto</td>
            <td className="commission-levels">
              <span>
                Level 1: <strong>$12</strong>
              </span>
              <span>
                Level 2: <strong>$9 + $3</strong>
              </span>
              <span>
                Level 3: <strong>$9 + $2 + $1</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>Spot CFD</td>
            <td className="commission-levels">
              <span>
                Level 1: <strong>$2</strong>
              </span>
              <span>
                Level 2: <strong>$1 + $1</strong>
              </span>
              <span>
                Level 3: <strong>$1 + $0.5 + $0.5</strong>
              </span>
            </td>
          </tr>

          {/* VIP Account Type */}
          <tr>
            <td rowSpan="5" className="account-type vip">
              <span>VIP</span>
            </td>
            <td rowSpan="5" className="spread">
              0.1
            </td>
            <td>Major Pair</td>
            <td className="commission-levels">
              <span>
                Level 1: <strong>$2</strong>
              </span>
              <span>
                Level 2: <strong>$1 + $1</strong>
              </span>
              <span>
                Level 3: <strong>$1 + $0.5 + $0.5</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>Minor Pair</td>
            <td className="commission-levels">
              <span>
                Level 1: <strong>$2</strong>
              </span>
              <span>
                Level 2: <strong>$1 + $1</strong>
              </span>
              <span>
                Level 3: <strong>$1 + $0.5 + $0.5</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>Metals</td>
            <td className="commission-levels">
              <span>
                Level 1: <strong>$2</strong>
              </span>
              <span>
                Level 2: <strong>$1 + $1</strong>
              </span>
              <span>
                Level 3: <strong>$1 + $0.5 + $0.5</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>Crypto</td>
            <td className="commission-levels">
              <span>
                Level 1: <strong>$3</strong>
              </span>
              <span>
                Level 2: <strong>$2 + $1</strong>
              </span>
              <span>
                Level 3: <strong>$2 + $0.5 + $0.5</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>Spot CFD</td>
            <td className="commission-levels">
              <span>
                Level 1: <strong>$1.5</strong>
              </span>
              <span>
                Level 2: <strong>$1 + $0.5</strong>
              </span>
              <span>
                Level 3: <strong>$0.5 + $0.5 + $0.5</strong>
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CommissionTable;
