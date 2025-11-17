// import React, { useState } from 'react';
// // Import styles from the CSS Module
// // Header.js
// import styles from './Header.module.css';
// import { Menu, X } from 'lucide-react'; 

// const portfolioLinks = ['PORTRAIT', 'FASHION', 'PRODUCT'];

// const Header = ({ logoText = 'ONE CAST', mobileLogoText = 'THE ONE CAST' }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <>
//       <nav className={styles.nav}>
//         <div className={styles.logo}>{logoText}</div>

//         {/* Desktop Navigation */}
//         <div className={styles.desktopLinks}>
//           <a className={styles.navItem} href="#home">HOME</a>
//           <a className={styles.navItem} href="#about">ABOUT</a>
          
//           {/* Portfolio Dropdown */}
//           <div className={styles.dropdownContainer}>
//             <span className={styles.navItem}>PORTFOLIO</span>
//             <div className={styles.dropdownContent}>
//               {portfolioLinks.map((link) => (
//                 <a key={link} href={`#${link.toLowerCase()}`}>
//                   {link}
//                 </a>
//               ))}
//             </div>
//           </div>

//           <a className={styles.navItem} href="Con.html">CONTACT</a>
//         </div>

//         {/* Mobile Menu Icon (Hamburger) */}
//         <div className={styles.menuIcon} onClick={toggleSidebar}>
//           <Menu size={28} color="#fff" />
//         </div>
//       </nav>

//       {/* Mobile Sidebar */}
//       <div className={`${styles.mobileSidebar} ${isSidebarOpen ? styles.open : ''}`}>
//         <div className={styles.sidebarHeader}>{mobileLogoText}</div>
        
//         {/* Close Button */}
//         <div className={styles.closeIcon} onClick={toggleSidebar}>
//           <X size={24} color="#fff" />
//         </div>

//         {/* Mobile Links */}
//         <a className={styles.mobileNavItem} href="#home" onClick={toggleSidebar}>HOME</a>
//         <a className={styles.mobileNavItem} href="#about" onClick={toggleSidebar}>ABOUT</a>
//         <a className={styles.mobileNavItem} href="#portfolio" onClick={toggleSidebar}>PORTFOLIO</a>
//         <a className={styles.mobileNavItem} href="#contact" onClick={toggleSidebar}>CONTACT</a>
//       </div>
//     </>
//   );
// };

// export default Header;



