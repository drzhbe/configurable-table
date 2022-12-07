import { Config } from "../types";

export const ConfigEditor = ({
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
          {config.map((column, i) => (
            <th key={i}>
              <ReorderControls
                config={config}
                updateConfig={updateConfig}
                i={i}
              />
              {column.title}{" "}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Type</td>
          {config.map((column, i) => (
            <td key={i}>{column.type}</td>
          ))}
        </tr>
        <tr>
          <td>Options</td>
          {config.map((column, i) => (
            <td key={i}>{column.options?.join(",")}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

const ReorderControls = ({
  config,
  i,
  updateConfig,
}: {
  config: Config;
  i: number;
  updateConfig: (config: Config) => void;
}) => {
  return (
    <div>
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
        ←
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
        →
      </button>
    </div>
  );
};
