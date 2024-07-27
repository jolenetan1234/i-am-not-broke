// implement later
// contains `BackButton` and `ThemeToggleButton`
import BackButton from "@/components/BackButton.tsx";
import ThemeToggleButton from "@/features/theme/components/ThemeToggleButton";

const Header = ({ hasBack=true, hasToggle=true }) => {
  return (
    <div className="Header">
      <div className="mb-2 m-auto">
          <div className="flex justify-between">
            {hasBack ? <BackButton /> : <div />}
            {hasToggle ? <ThemeToggleButton /> : <div />}
          </div>
      </div>
    </div>
  )
}

export default Header;