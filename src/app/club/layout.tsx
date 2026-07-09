import { DashboardLayout } from "@/components/layout/DashboardLayout";

export default function ClubLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout role="CLUB">{children}</DashboardLayout>;
}
