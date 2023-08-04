import { useState } from "react";

const WaybillForm = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [statusData, setStatusData] = useState(null);
  const [WBnumber, setWBnumber] = useState(null);

  const handleSubmit = async () => {
    // event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="waybill">Waybill number:</label>
        <input
          id="waybill"
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Отримати статус ТТН</button>
      </form>
      <div>
        <h2>Статус доставки</h2>
      </div>
      <div>{statusData}</div>
      <div>
        <h2>Історія</h2>
        <ul>
          <li>{WBnumber}</li>
        </ul>
      </div>
    </>
  );
};

export default WaybillForm;
