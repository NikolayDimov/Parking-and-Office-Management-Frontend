import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import { GlobalStyle } from './components/Global.style';
import { route } from './static/routes';
import { AuthProvider } from './context/AuthContext';
import { ReservationProvider } from './context/ReservationContext';
import AddSpotForm from './pages/CreateSpots/AddSpotForm/AddSpotForm';
import CreateSpots from './pages/CreateSpots/CreateSpotsPage';

import styled from 'styled-components';

import UsersPage from './pages/User/UsersPage/UsersPage';
import Register from './pages/Register/Register';
import LocationCreateForm from './pages/LocationCreate/LocationCreate';
import SpotType from './pages/SpotType/SpotType';
import CreateReservation from './pages/CreateReservation/CreateReservationPage';
import UserProfilePage from './pages/User/UserProfilePage/UserProfilePage';
import ChangePasswordForm from './pages/User/ChangePasswordForm/ChangePasswordForm';
import ChangeProfilePictureForm from './pages/User/ChangeProfilePictureForm/ChangeProfilePictureForm';
import NotFound from './pages/NotFound/NotFound';

import CreateNewFloorPlanForm from './pages/FloorPlan/CreateFloorPlan/CreateFloorPlan';
import FloorPlanPage from './pages/FloorPlan/FloorPlan';
import FloorPlanDetails from './pages/FloorPlan/FloorPlanDetails/FloorPlanDetails';
import ReservationSummary from './pages/ReservationSummary/ReservationSummary';

import SpotSelection from './pages/CreateReservation/SpotSelection/SpotSelection';
import CombinationReservation from './pages/CreateReservation/CombinationReservation/CombinationReservation';
import SpotUpdate from './pages/FloorPlan/FloorPlanDetails/SpotUpdate/SpotUpdate';
import { SpotsProvider } from './context/SpotsContext';
import Navigation from './components/Navigation/Navigation';
import AdminPage from './pages/AdminPage/AdminPage';

export const StyledApp = styled.div`
    min-height: 100vh;
    padding-top: 4rem;
    background: linear-gradient(180deg, var(--pink-light) 0%, var(--pink) 100%);
`;

function App() {
    const location = useLocation();
    const background = location.state as { background?: Location };

    return (
        <StyledApp>
            <GlobalStyle />
            <AuthProvider>
                <ReservationProvider>
                    <SpotsProvider>
                        <Navigation />
                        <Routes location={background?.background || location}>
                            <Route path={route.home} element={<Home />} />
                            <Route path={`${route.location}/:id`} element={<SpotType />} />
                            <Route path={route.createLocation} element={<LocationCreateForm />} />
                            <Route path={route.reservationSummary} element={<ReservationSummary />} />

                            <Route path={route.createNewFloorPlan} element={<CreateNewFloorPlanForm />} />
                            <Route path={route.floorPlan} element={<FloorPlanPage />} />
                            <Route path={`${route.floorPlan}/:id`} element={<FloorPlanDetails />}>
                                <Route path={`${route.floorPlan}/:id/:spotid`} element={<SpotUpdate />} />
                            </Route>
                            <Route path={route.login} element={<Login />} />
                            <Route path={route.register} element={<Register />} />
                            <Route path={route.user} element={<UsersPage />} />

                            <Route path={`${route.user}/:id`} element={<UserProfilePage />}>
                                <Route path={`${route.user}/:id/change-password`} element={<ChangePasswordForm />} />
                                <Route
                                    path={`${route.user}/:id/change-picture`}
                                    element={<ChangeProfilePictureForm />}
                                />
                            </Route>

                            <Route path={route.admin} element={<AdminPage />}></Route>
                            <Route path={`/spots/:id`} element={<CreateSpots />}>
                                <Route path={`/spots/:id/create`} element={<AddSpotForm />} />
                            </Route>
                            <Route path={route.createReservation} element={<CreateReservation />}>
                                <Route path="/create-reservation/:id" element={<SpotSelection />} />
                                <Route path="/create-reservation/combination" element={<CombinationReservation />} />
                            </Route>
                            <Route path={route.notFound} element={<NotFound />} />
                        </Routes>

                        {background?.background && (
                            <Routes>
                                <Route path="/spots/:id/create" element={<AddSpotForm />} />
                                <Route path={`${route.user}/:id/change-password`} element={<ChangePasswordForm />} />
                                <Route
                                    path={`${route.user}/:id/change-picture`}
                                    element={<ChangeProfilePictureForm />}
                                />
                                <Route path={`${route.createReservation}/:id`} element={<SpotSelection />} />
                                <Route path="/create-reservation/combination" element={<CombinationReservation />} />
                                <Route path={`${route.floorPlan}/:id/:spotid`} element={<SpotUpdate />} />
                            </Routes>
                        )}
                    </SpotsProvider>
                </ReservationProvider>
            </AuthProvider>
        </StyledApp>
    );
}
// ......,,,,,,,
export default App;
