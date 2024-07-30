import React from "react";

const FloatingComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="FloatingComponent">
        <div className="absolute inset-0 flex justify-center items-center">
            <div className="py-4 px-2 rounded-md shadow-lg border bg-white dark:bg-zinc-950 dark:border-gray-500 dark:shadow-lg">
                {children}
            </div>
        </div>
    </div>
  )
}

export default FloatingComponent