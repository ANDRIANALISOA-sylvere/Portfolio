import { Route, Routes } from "react-router"
import { Home } from "../components/common/Home"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}