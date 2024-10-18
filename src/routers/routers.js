
import { createBrowserRouter } from "react-router-dom";
import { PATH_NAME } from '../constants/PATH_NAME'
import HomePage from "../pages/HomePage/HomePage"
import CamInfor from "../pages/CamInfor/CamInfor"
import TelevisionInfor from "../pages/TelevisionInfor/TelevisionInfor"
import InternetInfor from "../pages/InternetInfor/InternetInfor";
export const router = createBrowserRouter([
    {
        path: PATH_NAME.HOME,
        element: <HomePage />, 
    },
    {
        path: PATH_NAME.CAM,
        element: <CamInfor />
    },
    {
        path: PATH_NAME.TELEVISION,
        element: <TelevisionInfor />
    },
    {
        path: PATH_NAME.INTERNET,
        element: <InternetInfor />
    }
]
)