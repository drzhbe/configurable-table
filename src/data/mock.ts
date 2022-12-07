import { ColumnType, Config, CropType, Rows } from "../types";

// Mock configs.

export const defaultConfig1: Config = [
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
  {
    id: "5",
    order: 2,
    title: "Yield",
    type: ColumnType.String,
  },
];

export const defaultConfig2: Config = [
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
  {
    id: "6",
    order: 2,
    title: "Tillage type",
    type: ColumnType.Dropdown,
    options: ["No tillage", "Reduced tillage", "Conventional tillage"],
  },
];

// Mock data.

export const config1DataA: Rows = [
  {
    1: { id: "1", columndId: "1", value: CropType.Corn },
    2: { id: "2", columndId: "2", value: "2021-01-01" },
    5: { id: "3", columndId: "5", value: "13" },
  },
  {
    1: { id: "4", columndId: "1", value: CropType.Potatoe },
    2: { id: "5", columndId: "2", value: "2021-01-02" },
    5: { id: "6", columndId: "5", value: "14" },
  },
];

export const config1DataB: Rows = [
  {
    1: { id: "7", columndId: "1", value: CropType.Corn },
    2: { id: "8", columndId: "2", value: "2021-01-03" },
    5: { id: "9", columndId: "5", value: "15" },
  },
  {
    1: { id: "10", columndId: "1", value: CropType.Corn },
    2: { id: "11", columndId: "2", value: "2021-01-04" },
    5: { id: "24", columndId: "5", value: "16" },
  },
];

export const config2DataC: Rows = [
  {
    3: { id: "12", columndId: "3", value: CropType.Corn },
    4: { id: "13", columndId: "4", value: "autumn" },
    6: { id: "14", columndId: "6", value: "No tillage" },
  },
  {
    3: { id: "15", columndId: "3", value: CropType.Potatoe },
    4: { id: "16", columndId: "4", value: "winter" },
    6: { id: "17", columndId: "6", value: "Reduced tillage" },
  },
];

export const config2DataD: Rows = [
  {
    3: { id: "18", columndId: "3", value: CropType.Potatoe },
    4: { id: "19", columndId: "4", value: "summer" },
    6: { id: "20", columndId: "6", value: "Conventional tillage" },
  },
  {
    3: { id: "21", columndId: "3", value: CropType.Potatoe },
    4: { id: "22", columndId: "4", value: "spring" },
    6: { id: "23", columndId: "6", value: "No tillage" },
  },
];
