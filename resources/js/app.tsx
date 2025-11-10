import { createInertiaApp } from "@inertiajs/react"
import { createRoot } from "react-dom/client"
import { route as ziggyRoute } from "ziggy-js"

// Make route available globally
declare global {
  var route: typeof ziggyRoute
}

window.route = ziggyRoute

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob("./Pages/**/*.tsx", { eager: true })
    return pages[`./Pages/${name}.tsx`]
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
  progress: { color: "blue" },
})
