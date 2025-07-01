// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';
// import loginicon from '../Assests/loginicon.svg';
// import carticon from '../Assests/carticon.svg';
// import subtract from '../Assests/Subtract.svg';

// function Header({ cartCount }) {
//   return (
//     <Box sx={{ backgroundColor: "black", color: "#FFFFFF", px: 4, py: 2 }}>
//       <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//         <Typography variant="h6" sx={{ fontFamily: '"Nevan RUS", sans-serif', fontWeight: 600, fontSize: "24px", color: "white" }}>
//           GAME VAULT
//         </Typography>
//         <Box sx={{ display: "flex", gap: 4 }}>
//           <Button component={Link} to="/" sx={{ color: "white",fontFamily: '"Nevan RUS", sans-serif', }}>HOME</Button>
//           <Button component={Link} to="/store" sx={{ color: "white" ,fontFamily: '"Nevan RUS", sans-serif',}}>STORE</Button>
//           <Button  component={Link} to="/categories"sx={{ color: "white" ,fontFamily: '"Nevan RUS", sans-serif',}}>CATEGORIES</Button>
//           <Button component={Link} to="/newrelease" sx={{ color: "white" ,fontFamily: '"Nevan RUS", sans-serif',}}>NEW RELEASE</Button>
//           <Button component={Link} to="/toptrending" sx={{ color: "white" ,fontFamily: '"Nevan RUS", sans-serif',}}>TOP TRENDING</Button>
//           <Button component={Link} to="/support"  sx={{ color: "white",fontFamily: '"Nevan RUS", sans-serif', }}>SUPPORT</Button>
          

//           {/* <Button component={Link} to="/login"  sx={{ color: "white" }}>LOGIN</Button> */}
          

//         </Box>
//         <Box sx={{ display: "flex", gap: 2 }}>
//           <Button component={Link} to="/cart">
//             <img src={carticon} alt="Cart" />
//             {cartCount > 0 && (
//               <Typography sx={{ ml: 0.5, fontSize: "0.75rem", color: "red" }}>{cartCount}</Typography>
//             )}
//           </Button>
//           <Button component={Link} to="/sign" ><img src={subtract} alt="Subtract" /></Button>
//           <Button component={Link} to="/logout" ><img src={loginicon} alt="Login" /></Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default Header;
import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import loginicon from '../Assests/loginicon.svg';
import carticon from '../Assests/carticon.svg';
import subtract from '../Assests/Subtract.svg';

function Header({ cartCount }) {
  const [signedUser, setSignedUser] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("signedUpUsername");
    if (storedUser) {
      setSignedUser(storedUser);
    }
  }, []);

  return (
    <Box sx={{ backgroundColor: "black", color: "#FFFFFF", px: 4, py: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontFamily: '"Nevan RUS", sans-serif', fontWeight: 600, fontSize: "24px", color: "white" }}>
          GAME VAULT
        </Typography>

        <Box sx={{ display: "flex", gap: 4 }}>
          <Button component={Link} to="/" sx={{ color: "white", fontFamily: '"Nevan RUS", sans-serif' }}>HOME</Button>
          <Button component={Link} to="/store" sx={{ color: "white", fontFamily: '"Nevan RUS", sans-serif' }}>STORE</Button>
          <Button component={Link} to="/categories" sx={{ color: "white", fontFamily: '"Nevan RUS", sans-serif' }}>CATEGORIES</Button>
          <Button component={Link} to="/newrelease" sx={{ color: "white", fontFamily: '"Nevan RUS", sans-serif' }}>NEW RELEASE</Button>
          <Button component={Link} to="/toptrending" sx={{ color: "white", fontFamily: '"Nevan RUS", sans-serif' }}>TOP TRENDING</Button>
          <Button component={Link} to="/support" sx={{ color: "white", fontFamily: '"Nevan RUS", sans-serif' }}>SUPPORT</Button>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button component={Link} to="/cart">
            <img src={carticon} alt="Cart" />
            {cartCount > 0 && (
              <Typography sx={{ ml: 0.5, fontSize: "0.75rem", color: "red" }}>{cartCount}</Typography>
            )}
          </Button>

          {/* Profile Icon + Username */}
          <Box sx={{ textAlign: 'center' }}>
            <Button component={Link} to="/sign">
              <img src={subtract} alt="Profile" />
            </Button>
            {signedUser && (
              <Typography variant="caption" sx={{ fontSize: "0.75rem", color: "#FFD700", display: "block", mt: "-4px" }}>
                {signedUser}
              </Typography>
            )}
          </Box>

          <Button component={Link} to="/logout">
            <img src={loginicon} alt="Logout" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
