import { useState } from "react";
import "./App.css";
import { ConfigEditor } from "./components/config-editor";
import { Table } from "./components/table";
import { Config } from "./types";
import {
  config1DataA,
  config1DataB,
  config2DataC,
  config2DataD,
  defaultConfig1,
  defaultConfig2,
} from "./data/mock";

function App() {
  const [config1, setConfig1] = useState<Config>(defaultConfig1);
  const [config2, setConfig2] = useState<Config>(defaultConfig2);

  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <div className="card">
        <h1>Table 1</h1>
        <h2>Config</h2>
        <ConfigEditor config={config1} updateConfig={setConfig1} />
        <h2>Data</h2>
        <Table config={config1} rows={config1DataA} />
        <Table config={config1} rows={config1DataB} />
      </div>
      <div className="card">
        <h1>Table 2</h1>
        <h2>Config</h2>
        <ConfigEditor config={config2} updateConfig={setConfig2} />
        <h2>Data</h2>
        <Table config={config2} rows={config2DataC} />
        <Table config={config2} rows={config2DataD} />
      </div>
    </div>
  );
}

export default App;
