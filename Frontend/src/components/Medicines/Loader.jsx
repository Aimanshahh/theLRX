// import React from 'react';
// import { motion } from 'framer-motion';

// const Loader = () => {
//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100vw',
//         height: '100vh',
//         backgroundColor: '#747578', // Dark grey background
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         zIndex: 9999,
//       }}
//     >
//       {/* Simple rotating spinner */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
//         style={{
//           width: '50px',
//           height: '50px',
//           border: `3px solid #8B8D8E`, // Lighter grey border
//           borderTop: `3px solid #00359E`, // Darker blue for spin
//           borderRadius: '50%',
//         }}
//       />
//     </div>
//   );
// };

// export default Loader;