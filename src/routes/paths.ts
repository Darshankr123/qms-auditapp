const ROOTS = {
  AUTH: "/auth",
  DASHBOARD: "/dashboard",
};

export const paths = {
  auth: {
    login: `${ROOTS.AUTH}/login`,
    session_expired: "",
    forgotPassword: "",
  },
  dashboard: {
    root: ROOTS.DASHBOARD,

    previllages: {
      previllages: `${ROOTS.DASHBOARD}/previllages`,
    },

    orgs: {
      organisation: `${ROOTS.DASHBOARD}/organisation`,
    },
    roles: {
      roles: `${ROOTS.DASHBOARD}/roles`,
      user: `${ROOTS.DASHBOARD}/user`,
    },
    audits: {
      audit: `${ROOTS.DASHBOARD}/audits`,
    },
    CentralRepository: {
      centralRepository: `${ROOTS.DASHBOARD}/centralRepository`,
    },
  },
};
