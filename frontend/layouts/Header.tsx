// implement later
// contains `BackButton` and `ThemeToggleButton`
import BackButton from "@/components/interactive/BackButton";
import ThemeToggleButton from "@/components/interactive/ThemeToggleButton";

const Header = ({ isHome }) => {
  return (
    <div className="Header">
      <div className="mt-4 mb-2 w-4/5 m-auto">
          <div className="flex justify-between">
            <BackButton />
            <ThemeToggleButton />
          </div>
      </div>
    </div>
  )
}

export default Header;