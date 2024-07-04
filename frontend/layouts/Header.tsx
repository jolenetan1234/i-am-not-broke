// implement later
// contains `BackButton` and `ThemeToggleButton`
import BackButton from "@/components/interactive/BackButton";
import ThemeToggleButton from "@/components/interactive/ThemeToggleButton";

const Header = ({ hasBack=true, hasToggle=true }) => {
  return (
    <div className="Header">
      <div className="mt-4 mb-2 w-4/5 m-auto">
          <div className="flex justify-between">
            {hasBack ? <BackButton /> : <div />}
            {hasToggle ? <ThemeToggleButton /> : <div />}
          </div>
      </div>
    </div>
  )
}

export default Header;