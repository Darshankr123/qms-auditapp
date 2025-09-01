// "use client";

// import { IGlobalData } from "@/types/globaldata";
// import React, { useContext, useEffect, useState } from "react";
// import { GlobalDataContext } from "./globalcontext";

// type Props = {
//   children: React.ReactNode;
// };

// export function GlobalDataProvider({ children }: Props) {
//   const [authChecked, setAuthChecked] = useState(false);

//   const [globalData, setGlobalData] = useState<IGlobalData>({
//     cities: {},
//     countries: {},
//     states: {},
//     regions: {},
//     brands: {},
//     categories: {},
//   });

//   useEffect(() => {
//     const token = localStorage.getItem("accessToken");

//     if (!token) {
//       console.warn("Token missing, skipping global data fetch");
//       setAuthChecked(true);
//       return;
//     }

//     async function fetchGlobalData() {
//       try {
//         const data = await initializeGlobalData();
//         setGlobalData(data);
//       } catch (error) {
//         console.error("Error fetching global data:", error);
//       } finally {
//         setAuthChecked(true);
//       }
//     }
//     fetchGlobalData();
//   }, []);

//   if (!authChecked) {
//     return null;
//   }

//   return (
//     <GlobalDataContext.Provider value={globalData}>
//       {children}
//     </GlobalDataContext.Provider>
//   );
// }

// export function useGlobalData() {
//   return useContext<IGlobalData>(GlobalDataContext);
// }
