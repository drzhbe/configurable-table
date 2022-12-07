import { Config, Rows } from "../types";

export const Table = ({ config, rows }: { config: Config; rows: Rows }) => {
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
        {rows.map((row, i) => (
          <tr key={i}>
            {config.map((column) => (
              <td key={column.id}>{row[column.id].value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
