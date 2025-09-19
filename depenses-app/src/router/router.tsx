import { Route, Routes } from 'react-router-dom'
import MainNavLayout from '../components/layouts/MainNavLayout'
import Home from "../pages/Home";
import FormPage from "../pages/Form";
import NotFound from "../pages/NotFound";


export default function AppRouter() {
    return (
        <Routes>
            <Route element={<MainNavLayout />}>
                <Route index element={<Home />} />
                <Route path="form" element={<FormPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
