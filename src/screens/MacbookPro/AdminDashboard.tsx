import { ModernLayout } from "../../components/layout/ModernLayout";

export const AdminDashboard = () => (
  <ModernLayout activeNavItem="admin">
    <div className="p-8">
      <h1 className="text-4xl font-serif">Admin Dashboard</h1>
      <p className="mt-4">User/blog management will go here (Module 9).</p>
    </div>
  </ModernLayout>
);