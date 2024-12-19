import {
    createBrowserRouter,
    createRoutesFromChildren,
    Route,
    RouterProvider,
} from 'react-router-dom'
// Contexts Providers
import {
    AnotherWindowResizeProvider,
    QueryClientProvider,
    SiteInfoProvider,
    WindowResizeProvider,
} from './providers/Providers.tsx'
// Pages & Layouts
import Root from './layouts/Root.tsx'
import HomePage from './pages/HomePage.tsx'
import SearchPage from './pages/SearchPage.tsx'
import ArtistPage from './pages/ArtistPage.tsx'
import AlbumPage from './pages/AlbumPage.tsx'
import TrackPage from './pages/TrackPage.tsx'
// Components
import SomethingWentWrong from './components/SomethingWentWrong.tsx'
// Styles
import './styles/App.css'

const router = createBrowserRouter(
    createRoutesFromChildren(
        <Route path='/' element={<Root />}>
            <Route index element={<HomePage />} />
            <Route
                path='search/:q'
                element={<SearchPage />}
                errorElement={
                    <SomethingWentWrong refetchFunc={location.reload} />
                }
            />
            <Route
                path='artists/:id'
                element={<ArtistPage />}
                errorElement={
                    <SomethingWentWrong refetchFunc={location.reload} />
                }
            />
            <Route
                path='albums/:id'
                element={<AlbumPage />}
                errorElement={
                    <SomethingWentWrong refetchFunc={location.reload} />
                }
            />
            <Route
                path='tracks/:id'
                element={<TrackPage />}
                errorElement={
                    <SomethingWentWrong refetchFunc={location.reload} />
                }
            />
            <Route path='favorites' element={<h1>Favorites</h1>} />
            <Route path='login' element={<h1>Login</h1>} />
            <Route path='signup' element={<h1>Signup</h1>} />
            <Route path='*' element={<h1>Page Not Found</h1>} />
        </Route>
    )
)

const App = () => {
    return (
        <AnotherWindowResizeProvider>
            <WindowResizeProvider>
                <SiteInfoProvider>
                    <QueryClientProvider>
                        <RouterProvider router={router} />
                    </QueryClientProvider>
                </SiteInfoProvider>
            </WindowResizeProvider>
        </AnotherWindowResizeProvider>
    )
}

export default App
