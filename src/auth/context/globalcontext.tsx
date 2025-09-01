"use client";

import { IGlobalData } from "@/types/globaldata";
import { createContext } from "vm";

export const GlobalDataContext = createContext({} as IGlobalData);
