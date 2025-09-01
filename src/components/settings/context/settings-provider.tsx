"use client";

import { SettingsValueProps } from "../types";

const STORAGE_KEY = "settings";

type SettingsContextProps = {
  children: React.ReactNode;
  defaultSettings: SettingsValueProps;
};
