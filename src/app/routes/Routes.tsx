import { RouteObject } from "react-router";
import { Main } from "../main/Main";
import { LayoutContainer } from "../layout/LayoutContainer";


export const routes: RouteObject[] = [
    {
        path: '/',
        element: <LayoutContainer />,
        children: [
            {
                path: '/',
                element: <Main />
            },
            {
                path: 'escrow',
                element: <div>tetst</div>
            },
        ]
    }
]