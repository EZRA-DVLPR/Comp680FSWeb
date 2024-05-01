import React, { useState } from 'react';
import { auth, googleProvider } from './firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { TextField, Button, Box, Typography, Container, CssBaseline } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignInWithEmail = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Logged in with email and password");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleSignInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            console.log("Logged in with Google");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
      <Container component="main" maxWidth={false} sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',  // Uniform gray background
          padding: 0, // Remove padding to ensure background covers all sides
          margin: 0 // Remove margin to ensure background covers all sides
      }}>
          <CssBaseline />
          <Box
              sx={{
                  padding: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',  // Semi-transparent white box
                  borderRadius: 2,
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  width: '100%', // Ensure box sizing matches the design for smaller screens
                  maxWidth: 450, // Max width for larger screens to look good
              }}
          >
              <Typography component="h1" variant="h5">
                  Login
              </Typography>
              <Box component="form" noValidate onSubmit={handleSignInWithEmail} sx={{ mt: 1, width: '100%', px: 3 }}>
                  <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                  >
                      Sign In with Email
                  </Button>
                  <Button
                      fullWidth
                      variant="contained"
                      startIcon={<GoogleIcon />}
                      onClick={handleSignInWithGoogle}
                      sx={{ mt: 1, mb: 2, backgroundColor: '#4285F4', color: '#fff' }}
                  >
                      Sign in with Google
                  </Button>
                  {error && <Typography color="error">{error}</Typography>}
              </Box>
          </Box>
      </Container>
  );
}

export default SignIn;