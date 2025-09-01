"use client";

import { useScroll } from "framer-motion";

import AuthClassicLayout from "@/layouts/auth/clasic";
import ScrollProgress from "@/components/scroll-progress";
import LoginView from "@/sections/auth/login-view";

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <AuthClassicLayout>
      {/* <ScrollProgress scrollYProgress={scrollYProgress} /> */}
      <LoginView />
    </AuthClassicLayout>
  );
}
