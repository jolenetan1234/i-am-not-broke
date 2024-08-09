import React from "react";
import BackButton from "@/components/BackButton.tsx";
import ThemeToggleButton from "@/features/theme/components/ThemeToggleButton";
import LogoutButton from "@/features/authentication/components/LogoutButton";

const Header = ({ hasBack=true, hasToggle=true, hasLogout=true, children }: { hasBack?: boolean, hasToggle?: boolean, hasLogout?: boolean, children: React.ReactNode }) => {
  return (
    <div className="Header">
      {hasLogout ? 
      <LogoutButton /> :
      ""
      }

      <div className="flex justify-between mb-2 m-auto">
        {hasBack ? <BackButton /> : <div />}
        {hasToggle ? <ThemeToggleButton /> : <div />}
      </div>
      
      {children}  
    </div>
  )
}

export default Header;