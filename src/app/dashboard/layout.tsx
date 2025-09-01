type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <AuthGuard>
      <DashboardLayout>{children}</DashboardLayout>
    </AuthGuard>
  );
};
