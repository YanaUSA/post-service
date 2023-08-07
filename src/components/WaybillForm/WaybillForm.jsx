import { useState } from "react";

import styles from "./WaybillForm.module.css";

const WaybillForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [statusData, setStatusData] = useState(null);
  const [WBnumber, setWBnumber] = useState(null);

  const handleSubmit = async () => {
    // event.preventDefault();
  };

  return (
    <>
      <div>
        <form className={styles.wayBillForm} onSubmit={handleSubmit}>
          <label htmlFor="waybill" className={styles.wayBillLabel}>
            Номер ТТН:
          </label>
          <input
            className={styles.wayBillinput}
            id="waybill"
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button className={styles.wayBillbutton} type="submit">
            Отримати статус ТТН
          </button>
        </form>
        <div className={styles.infoContainer}>
          <div className={styles.statusContainer}>
            <h2 lassName={styles.wayBillTitle}>Статус доставки</h2>
          </div>
          <div>{statusData}</div>
          <div className={styles.historyContainer}>
            <h2 lassName={styles.wayBillTitle}>Історія</h2>
            <ul>
              <li>{WBnumber}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaybillForm;
