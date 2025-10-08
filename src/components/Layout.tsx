import { ReactNode } from "react";
import ProfileSidebar from "./ProfileSidebar";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background py-8 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Profile */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <ProfileSidebar />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            <Navigation />
            <main className="bg-card rounded-3xl p-8 lg:p-12 shadow-lg">
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
