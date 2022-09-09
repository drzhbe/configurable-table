import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

type Config = Column[];

type Column = {
  id: string;
  title: string;
  order: number;
  type: ColumnType;
  options?: string[];
};

enum ColumnType {
  String = "string",
  Number = "number",
  Date = "date",
  Boolean = "boolean",
  Dropdown = "dropdown",
}

enum CropType {
  Corn = "corn",
  Potatoe = "potatoe",
  Cotton = "cotton",
  Sunflower = "sunflower",
}

type Value = {
  id: string;
  columndId: string;
  value: string;
};

type Data = Value[][];

// Mock data.

const dataAConfig1: Data = [
  [
    { id: "1", columndId: "1", value: CropType.Corn },
    { id: "2", columndId: "2", value: "2021-01-01" },
  ],
  [
    { id: "3", columndId: "1", value: CropType.Potatoe },
    { id: "4", columndId: "2", value: "2021-01-02" },
  ],
];

const dataBConfig1: Value[][] = [
  [
    { id: "5", columndId: "1", value: CropType.Corn },
    { id: "6", columndId: "2", value: "2021-01-03" },
  ],
  [
    { id: "7", columndId: "1", value: CropType.Corn },
    { id: "8", columndId: "2", value: "2021-01-04" },
  ],
];

const dataAConfig2: Value[][] = [
  [
    { id: "9", columndId: "3", value: CropType.Corn },
    { id: "10", columndId: "4", value: "autumn" },
  ],
  [
    { id: "11", columndId: "3", value: CropType.Potatoe },
    { id: "12", columndId: "4", value: "winter" },
  ],
];

const dataBConfig2: Value[][] = [
  [
    { id: "13", columndId: "3", value: CropType.Potatoe },
    { id: "14", columndId: "4", value: "summer" },
  ],
  [
    { id: "15", columndId: "3", value: CropType.Potatoe },
    { id: "16", columndId: "4", value: "spring" },
  ],
];

const Table = ({ config, data }: { config: Config; data: Data }) => {
  return (
    <table>
      <thead>
        <tr>
          {config.map((column) => (
            <th key={column.id}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {row.map((cell) => (
              <td key={cell.id}>{cell.value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const ConfigEditor = ({
  config,
  updateConfig,
}: {
  config: Config;
  updateConfig: (config: Config) => void;
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Column</th>
          <th>Type</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {config.map((column, i) => (
          <tr key={column.id}>
            <td>
              <button
                disabled={i === 0}
                onClick={() => {
                  const newConfig = [...config];
                  newConfig[i].order -= 1;
                  newConfig[i - 1].order += 1;
                  newConfig.sort((a, b) => a.order - b.order);
                  updateConfig(newConfig);
                }}
              >
                ↑
              </button>
              <button
                disabled={i === config.length - 1}
                onClick={() => {
                  const newConfig = [...config];
                  newConfig[i].order += 1;
                  newConfig[i + 1].order -= 1;
                  newConfig.sort((a, b) => a.order - b.order);
                  updateConfig(newConfig);
                }}
              >
                ↓
              </button>
            </td>
            <td>{column.title}</td>
            <td>{column.type}</td>
            <td>{column.options?.join(",")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function App() {
  const [config1, setConfig1] = useState<Config>([
    {
      id: "1",
      title: "Crop type",
      order: 0,
      type: ColumnType.Dropdown,
      options: [CropType.Corn, CropType.Potatoe],
    },
    {
      id: "2",
      order: 1,
      title: "Planting date",
      type: ColumnType.Date,
    },
  ]);

  const [config2, setConfig2] = useState<Config>([
    {
      id: "3",
      title: "Crop type",
      order: 0,
      type: ColumnType.Dropdown,
      options: [CropType.Corn, CropType.Potatoe],
    },
    {
      id: "4",
      title: "Season",
      order: 1,
      type: ColumnType.String,
    },
  ]);

  return (
    <>
      <div>
        <h1>Data</h1>
        <Table config={config1} data={dataAConfig1} />
        <Table config={config1} data={dataBConfig1} />
        <Table config={config2} data={dataAConfig2} />
        <Table config={config2} data={dataBConfig2} />
      </div>
      <div>
        <h1>Config</h1>
        <ConfigEditor config={config1} updateConfig={setConfig1} />
        <ConfigEditor config={config2} updateConfig={setConfig2} />
      </div>
    </>
  );
}

export default App;
