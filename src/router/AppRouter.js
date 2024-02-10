import { Routes, Route } from 'react-router-dom';
import { routes } from './RouteConfig.js';

const AppRouter = () => {
    return (
        <div>
            <Routes>
                {
                    routes.map(({ id, path, element }) =>
                        <Route key={id} path={path} element={element} />
                    )
                }
            </Routes>
        </div>
    )
};

export default AppRouter;