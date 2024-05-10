import { useRoutes } from "react-router-dom";
import { Home } from "./pages/Home/page";
import { Step2 } from "./pages/Step2/page";
import { Step3 } from "./pages/Step3/page";
import { Step4 } from "./pages/Step4/page";

export const Routes = () => {
    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/step2', element: <Step2 /> },
        { path: '/step3', element: <Step3 /> },
        { path: '/step4', element: <Step4 /> },
    ])
}