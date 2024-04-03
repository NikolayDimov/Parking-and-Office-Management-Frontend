export const route = {
    home: '/',
    login: '/login',
    location: '/location',
    admin: '/admin',
    createSpot: '/spots',
    createLocation: '/createLocation',
    createNewFloorPlan: '/admin/:locId/create-new-floor-plan',
    floorPlan: '/admin/:locId/floor-plans',
    floorPlanDetails: '/admin/:locId/floor-plans/:fpId',
    spotDetails: ':spotId',
    updateFloorPlan: ':fpId/update',
    createReservation: '/create-reservation',
    reservationSummary: '/reservation-summary',
    reservations: 'reservations',
    calendar: '/calendar',
    user: '/user',
    updatePassword: '/user-update-password/:userId',
    updateProfilePicture: '/user-update-picture/:userId',
    register: '/user/register',
    notFound: '/*',
};
