import { LayoutContainer } from "./layout/LayoutContainer"
import { RoutesContainer } from "./routes/RoutesContainer"


export const App = () => {
    return <LayoutContainer>
        <RoutesContainer />
    </LayoutContainer>
}