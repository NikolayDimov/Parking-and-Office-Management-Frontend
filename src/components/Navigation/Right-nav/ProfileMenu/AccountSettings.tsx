// // import React from 'react';
// // import * as Accordion from '@radix-ui/react-accordion';
// // import classNames from 'classnames';
// // import { ChevronDownIcon } from '@radix-ui/react-icons';

// // import { Link } from 'react-router-dom';
// // import useRightNav from '../RightNav.logic';
// // const { decodedToken } = useRightNav();

// // interface AccountSettingsProps {
// //     onToggle: () => void;
// // }

// // const AccountSettings: React.FC<AccountSettingsProps> = ({ onToggle }) => {
// //     // const { decodedToken } = useRightNav();

// //     <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
// //         <Accordion.Item className="AccordionItem" value="item-1">
// //             <AccordionTrigger onClick={onToggle}>
// //                 <>
// //                     <svg
// //                         viewBox="0 0 24 24"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="none"
// //                         stroke="var(--light-blue-nav)"
// //                         strokeWidth="2"
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                     >
// //                         <circle cx="12" cy="12" r="3"></circle>
// //                         <path d="M19.74,14H22V10H19.74l0-.14a8.17,8.17,0,0,0-.82-1.92l1.6-1.6L17.66,3.51l-1.6,1.6A8,8,0,0,0,14,4.25V2H10V4.25a8,8,0,0,0-2.06.86l-1.6-1.6L3.51,6.34l1.6,1.6a8.17,8.17,0,0,0-.82,1.92l0,.14H2v4H4.26l0,.14a8.17,8.17,0,0,0,.82,1.92l-1.6,1.6,2.83,2.83,1.6-1.6a8,8,0,0,0,2.06.86V22h4V19.75a8,8,0,0,0,2.06-.86l1.6,1.6,2.83-2.83-1.6-1.6a8.17,8.17,0,0,0,.82-1.92Z"></path>
// //                     </svg>

// //                     <p>Account Settings</p>

// //                     <ChevronDownIcon className="AccordionChevron" aria-hidden />
// //                 </>
// //             </AccordionTrigger>

// //             <AccordionContent>
// //                 <div>
// //                     <svg
// //                         width="24"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         viewBox="0 0 24 24"
// //                         fill="none"
// //                         stroke="var(--light-blue-nav)"
// //                         strokeWidth="2"
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                     >
// //                         <path d="M15 11V6C15 6 15 3 12 3C9.00005 3 9.00005 6 9.00005 6V10.5M6 14.6V17.4C6 18.8999 6 19.6498 6.38197 20.1756C6.50533 20.3454 6.65464 20.4947 6.82443 20.618C7.35016 21 8.10011 21 9.6 21H14.4C15.8999 21 16.6498 21 17.1756 20.618C17.3454 20.4947 17.4947 20.3454 17.618 20.1756C18 19.6498 18 18.8999 18 17.4V14.6C18 13.1001 18 12.3502 17.618 11.8244C17.4947 11.6546 17.3454 11.5053 17.1756 11.382C16.6498 11 15.8999 11 14.4 11H9.6C8.10011 11 7.35016 11 6.82443 11.382C6.65464 11.5053 6.50533 11.6546 6.38197 11.8244C6 12.3502 6 13.1001 6 14.6Z"></path>
// //                     </svg>
// //                     <Link to={`/user/${decodedToken?.id}`}>Change Password</Link>
// //                 </div>

// //                 <div>
// //                     <svg
// //                         width="24"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         viewBox="0 0 24 24"
// //                         fill="none"
// //                         stroke="var(--light-blue-nav)"
// //                         strokeWidth="2"
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                     >
// //                         <path d="M15 11V6C15 6 15 3 12 3C9.00005 3 9.00005 6 9.00005 6V10.5M6 14.6V17.4C6 18.8999 6 19.6498 6.38197 20.1756C6.50533 20.3454 6.65464 20.4947 6.82443 20.618C7.35016 21 8.10011 21 9.6 21H14.4C15.8999 21 16.6498 21 17.1756 20.618C17.3454 20.4947 17.4947 20.3454 17.618 20.1756C18 19.6498 18 18.8999 18 17.4V14.6C18 13.1001 18 12.3502 17.618 11.8244C17.4947 11.6546 17.3454 11.5053 17.1756 11.382C16.6498 11 15.8999 11 14.4 11H9.6C8.10011 11 7.35016 11 6.82443 11.382C6.65464 11.5053 6.50533 11.6546 6.38197 11.8244C6 12.3502 6 13.1001 6 14.6Z"></path>
// //                     </svg>
// //                     <Link to={`/user/${decodedToken?.id}`}>Change Picture</Link>
// //                 </div>
// //             </AccordionContent>
// //         </Accordion.Item>
// //     </Accordion.Root>
// // );

// // const AccordionTrigger = React.forwardRef<HTMLButtonElement, React.HTMLAttributes<HTMLButtonElement>>(
// //     ({ children, className, ...props }, forwardedRef) => (
// //         <Accordion.Header className="AccordionHeader">
// //             <Accordion.Trigger className={classNames('AccordionTrigger', className)} {...props} ref={forwardedRef}>
// //                 {children}
// //                 <ChevronDownIcon className="AccordionChevron" aria-hidden />
// //             </Accordion.Trigger>
// //         </Accordion.Header>
// //     ),
// // );

// // const AccordionContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
// //     ({ children, className, ...props }, forwardedRef) => (
// //         <Accordion.Content className={classNames('AccordionContent', className)} {...props} ref={forwardedRef}>
// //             <div className="AccordionContentText">{children}</div>
// //         </Accordion.Content>
// //     ),
// // );

// // export default AccountSettings;

// //----------------------------

// import React from 'react';
// import * as Accordion from '@radix-ui/react-accordion';
// import classNames from 'classnames';
// import { ChevronDownIcon } from '@radix-ui/react-icons';

// import { Link } from 'react-router-dom';
// import useRightNav from '../RightNav.logic';
// // This might cause an issue because hooks can only be called inside the body of a function component.
// // const { decodedToken } = useRightNav();

// interface AccountSettingsProps {
//     onToggle: () => void;
// }

// const AccountSettings: React.FC<AccountSettingsProps> = ({ onToggle }) => {
//     // This should be inside the component.
//     const { decodedToken } = useRightNav();

//     return (
//         // Added return statement here.
//         <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
//             <Accordion.Item className="AccordionItem" value="item-1">
//                 <AccordionTrigger onClick={onToggle}>
//                     {/* React Fragment shorthand <> ... </> is not needed here since AccordionTrigger is already a wrapper */}
//                     <svg
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         stroke="var(--light-blue-nav)"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     >
//                         {/* SVG content omitted for brevity */}
//                     </svg>

//                     <p>Account Settings</p>

//                     <ChevronDownIcon className="AccordionChevron" aria-hidden />
//                 </AccordionTrigger>

//                 <AccordionContent>
//                     <div>
//                         <svg
//                             width="24"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="var(--light-blue-nav)"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         >
//                             <path d="M15 11V6C15 6 15 3 12 3C9.00005 3 9.00005 6 9.00005 6V10.5M6 14.6V17.4C6 18.8999 6 19.6498 6.38197 20.1756C6.50533 20.3454 6.65464 20.4947 6.82443 20.618C7.35016 21 8.10011 21 9.6 21H14.4C15.8999 21 16.6498 21 17.1756 20.618C17.3454 20.4947 17.4947 20.3454 17.618 20.1756C18 19.6498 18 18.8999 18 17.4V14.6C18 13.1001 18 12.3502 17.618 11.8244C17.4947 11.6546 17.3454 11.5053 17.1756 11.382C16.6498 11 15.8999 11 14.4 11H9.6C8.10011 11 7.35016 11 6.82443 11.382C6.65464 11.5053 6.50533 11.6546 6.38197 11.8244C6 12.3502 6 13.1001 6 14.6Z"></path>
//                         </svg>
//                         <Link to={`/user/${decodedToken?.id}`}>Change Password</Link>
//                     </div>

//                     <div>
//                         <svg
//                             width="24"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="var(--light-blue-nav)"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         >
//                             <path d="M15 11V6C15 6 15 3 12 3C9.00005 3 9.00005 6 9.00005 6V10.5M6 14.6V17.4C6 18.8999 6 19.6498 6.38197 20.1756C6.50533 20.3454 6.65464 20.4947 6.82443 20.618C7.35016 21 8.10011 21 9.6 21H14.4C15.8999 21 16.6498 21 17.1756 20.618C17.3454 20.4947 17.4947 20.3454 17.618 20.1756C18 19.6498 18 18.8999 18 17.4V14.6C18 13.1001 18 12.3502 17.618 11.8244C17.4947 11.6546 17.3454 11.5053 17.1756 11.382C16.6498 11 15.8999 11 14.4 11H9.6C8.10011 11 7.35016 11 6.82443 11.382C6.65464 11.5053 6.50533 11.6546 6.38197 11.8244C6 12.3502 6 13.1001 6 14.6Z"></path>
//                         </svg>
//                         <Link to={`/user/${decodedToken?.id}`}>Change Picture</Link>
//                     </div>
//                 </AccordionContent>
//             </Accordion.Item>
//         </Accordion.Root>
//     );
// };

// const AccordionTrigger = React.forwardRef<HTMLButtonElement, React.HTMLAttributes<HTMLButtonElement>>(
//     ({ children, className, ...props }, forwardedRef) => (
//         <Accordion.Header className="AccordionHeader">
//             <Accordion.Trigger className={classNames('AccordionTrigger', className)} {...props} ref={forwardedRef}>
//                 {children}
//             </Accordion.Trigger>
//         </Accordion.Header>
//     ),
// );

// const AccordionContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
//     ({ children, className, ...props }, forwardedRef) => (
//         <Accordion.Content className={classNames('AccordionContent', className)} {...props} ref={forwardedRef}>
//             {children}
//         </Accordion.Content>
//     ),
// );

// export default AccountSettings;
