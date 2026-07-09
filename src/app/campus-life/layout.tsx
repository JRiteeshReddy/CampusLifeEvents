import { DashboardLayout } from "@/components/layout/DashboardLayout";

export default function CampusLifeLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout role="CAMPUS_LIFE">{children}</DashboardLayout>;
}
