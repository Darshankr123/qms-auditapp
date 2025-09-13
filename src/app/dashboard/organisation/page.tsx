"use client";

import { getOrgs } from "@/api/orgs";
import OrgsListView from "@/sections/orgs/view/orgs-list-view";
import { useEffect, useState } from "react";

export const metaData = {
  title: "Qms:Organisations",
};

export default function OrgListPage() {
  const [orgsLoading, setOrgsLoading] = useState(false);

  useEffect(() => {
    fetchOrgs();
  }, []);

  const fetchOrgs = async () => {
    setOrgsLoading(true);
    try {
      const response = await getOrgs();
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      setOrgsLoading(false);
    }
  };

  return <OrgsListView />;
}
