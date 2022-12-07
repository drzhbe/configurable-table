export type Config = Column[];

export type Column = {
  id: string;
  title: string;
  order: number;
  type: ColumnType;
  options?: string[];
};

export enum ColumnType {
  String = "string",
  Number = "number",
  Date = "date",
  Boolean = "boolean",
  Dropdown = "dropdown",
}

export enum CropType {
  Corn = "corn",
  Potatoe = "potatoe",
  Cotton = "cotton",
  Sunflower = "sunflower",
}

// Rows of values.

export type Rows = Record<ColumnId, Value>[];

type ColumnId = string;

export type Value = {
  id: string;
  columndId: string;
  value: string;
};
