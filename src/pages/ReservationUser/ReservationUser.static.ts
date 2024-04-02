const userProfileConstants = {
    changePasswordButton: 'Change Password',
    changeProfilePictureButton: 'Change Profile Picture',
    showPastReservations: 'Show Past Reservations',
    showCurrentReservations: 'Show Current Reservations',
    showFutureReservations: 'Show Future Reservations',
    logout: 'Logout',
};

interface UserDetails {
    pastReservations: number;
    currentReservations: number;
    futureReservations: number;
}

interface DetailBulletProps {
    icon?: string;
}

export type { UserDetails, DetailBulletProps };
export { userProfileConstants };
