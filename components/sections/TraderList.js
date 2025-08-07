import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import { Table } from "react-bootstrap";
import demoChart from "../../public/img/demo-chart.png";
import styles from "./TradersList.module.scss";

const TradersList = ({ traders }) => {
  const tableRef = useRef(null);

  useEffect(() => {
    if (tableRef.current) {
      gsap.from(tableRef.current.querySelectorAll('tbody tr'), {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <div className={styles.tradersListContainer}>
      <Table ref={tableRef} responsive hover className={styles.tradersTable}>
        <thead>
          <tr>
            <th>Pro Trader's Name</th>
            <th>Gain</th>
            <th>Drawdown</th>
            <th>Monthly</th>
            <th>Performance Chart</th>
            <th>Copy</th>
          </tr>
        </thead>
        <tbody>
          {traders.map((trader) => (
            <tr key={trader.id}>
              <td>
                <div className={styles.traderInfo}>
                  <img src={trader.avatar} alt="" className={styles.avatar} />
                  <img src={trader.prize} alt="" className={styles.prize} />
                  <span className={styles.name}>{trader.name}</span>
                </div>
              </td>
              <td className={styles.metric}>
                <span className={styles.positive}>+{trader.gain}%</span>
              </td>
              <td className={styles.metric}>
                <span className={styles.positive}>+{trader.drawdown}%</span>
              </td>
              <td className={styles.metric}>
                <span className={styles.positive}>+{trader.monthly}%</span>
              </td>
              <td>
                <div className={styles.chartContainer}>
                  <Image
                    width={281}
                    height={60}
                    priority={true}
                    src={demoChart}
                    alt="Demo Chart"
                  />
                </div>
              </td> 
              <td>
                <div className={styles.copyButton}>
                <Link  href="https://my.uitfx.com/en/open-new-account">COPY</Link>
                </div>
              </td> 
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

TradersList.propTypes = {
  traders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      gain: PropTypes.number.isRequired,
      drawdown: PropTypes.number.isRequired,
      monthly: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TradersList;

