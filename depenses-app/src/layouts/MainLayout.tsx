// src/layouts/MainLayout.tsx
import { Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import Dashboard from "../components/Dashboard";

export default function MainLayout() {
    const expenses = useSelector((state: RootState) => state.expenses.list);

    return (
        <div className="app-container">
            <Dashboard expenses={expenses} />
            {/* Le contenu spécifique à chaque page */}
            <Outlet />
        </div>
    );
}
