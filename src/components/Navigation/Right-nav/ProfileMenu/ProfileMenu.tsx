// import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
// import { ButtonLogout, ProfileIcon } from '../RightNav.style';
// import { DropdownMenuStyled } from './ProfileMenu.style';
// import AccountSettings from './AccountSettings';
// import { UserProfilePageLogic } from '../../../../pages/User/UserProfilePage/UserProfilePage.logic';
// import { useState } from 'react';

// const ProfileMenu = () => {
//     const { logout } = UserProfilePageLogic();
//     const [expanded, setExpanded] = useState(false);
//     // const toggleExpanded = () => setExpanded(!expanded);

//     const handleAccountSettingsClick = (event: React.MouseEvent) => {
//         // Prevent the event from bubbling up to the parent dropdown menu
//         event.stopPropagation();
//         // Toggle the expanded state of Account Settings
//         setExpanded(!expanded);
//     };

//     return (
//         <DropdownMenu.Root>
//             <DropdownMenu.Trigger asChild>
//                 <ProfileIcon>
//                     <svg width="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="profile-icon">
//                         <path d="M19 19.6v-1.926c-.523-.535-1.36-1.134-1.847-1.134-.767 0-1.603 0-2.3-.283-.663-.252-1.108-.85-1.108-2.237 0-.22.296-.44.47-.598.802-.725 1.385-1.45 1.385-4.442 0-1.134-1.277-2.52-3.083-2.52-1.805 0-3.108 1.386-3.108 2.52 0 3.024.481 3.749 1.283 4.442.174.157.5.378.5.598 0 1.386-.348 1.985-1.01 2.237-.697.283-1.498.283-2.23.283-.558 0-1.394.599-1.952 1.134V19.6m6.5 2.4c-5.525 0-10-4.475-10-10s4.475-10 10-10 10 4.475 10 10-4.475 10-10 10z"></path>
//                     </svg>
//                 </ProfileIcon>
//             </DropdownMenu.Trigger>

//             <DropdownMenu.Portal>
//                 <DropdownMenuStyled data-side="bottom" className="DropdownMenuContent">
//                     <DropdownMenu.Item className="DropdownMenuItem">
//                         <div onClick={handleAccountSettingsClick}>
//                             Account Settings
//                             {expanded && <AccountSettings onToggle={() => setExpanded(false)} />}
//                         </div>
//                         {/* <AccountSettings /> */}
//                         {/* {expanded && <AccountSettings onToggle={toggleExpanded} />} */}
//                     </DropdownMenu.Item>

//                     <DropdownMenu.Item>
//                         <ButtonLogout
//                             onClick={() => {
//                                 logout();
//                             }}
//                         >
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
//                                 <g>
//                                     <path
//                                         d="M21,48.5v-3c0-0.8-0.7-1.5-1.5-1.5h-10C8.7,44,8,43.3,8,42.5v-33C8,8.7,8.7,8,9.5,8h10
//                                                     C20.3,8,21,7.3,21,6.5v-3C21,2.7,20.3,2,19.5,2H6C3.8,2,2,3.8,2,6v40c0,2.2,1.8,4,4,4h13.5C20.3,50,21,49.3,21,48.5z"
//                                     />
//                                     <path
//                                         d="M49.6,27c0.6-0.6,0.6-1.5,0-2.1L36.1,11.4c-0.6-0.6-1.5-0.6-2.1,0l-2.1,2.1c-0.6,0.6-0.6,1.5,0,2.1l5.6,5.6
//                                                     c0.6,0.6,0.2,1.7-0.7,1.7H15.5c-0.8,0-1.5,0.6-1.5,1.4v3c0,0.8,0.7,1.6,1.5,1.6h21.2c0.9,0,1.3,1.1,0.7,1.7l-5.6,5.6
//                                                     c-0.6,0.6-0.6,1.5,0,2.1l2.1,2.1c0.6,0.6,1.5,0.6,2.1,0L49.6,27z"
//                                     />
//                                 </g>
//                             </svg>
//                             <p> Log out</p>
//                         </ButtonLogout>
//                     </DropdownMenu.Item>
//                 </DropdownMenuStyled>
//             </DropdownMenu.Portal>
//         </DropdownMenu.Root>
//     );
// };

// export default ProfileMenu;
