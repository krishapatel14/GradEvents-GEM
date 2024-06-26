import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function Copyright(props) {
  
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          gradEvents
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  

const defaultTheme = createTheme();

export const OrganizerSignup = () => {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [collegeCode, setcollegeCode] = useState()
    const [college, setcollege] = useState()
    const [phoneNo, setphoneNo] = useState()
    const handleSubmit = async(event) => {
        event.preventDefault();
        // console.log("1");
        await axios.post("http://localhost:3001/organizer/signup",{collegeCode,college,phoneNo,email,password})
        .then((response)=>{
          console.log(response.data)
        }).catch(err=>console.log(err))
        // console.log("2");
        window.location.href='/login';
      };
    
  return (
    // <div>OrganizerSignup</div>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Organizer
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
    
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="collegeCode"
                  label="College Code."
                  name="collegeCode"
                  onChange={(e)=>setcollegeCode(e.target.value)}
                //   autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="college name"
                  label="College/University"
                  name="college name"
                  onChange={(e)=>setcollege(e.target.value)}
                //   autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                required
                  fullWidth
                  id="Phonenumber"
                  label="Phone No."
                  name="phoneNo"
                  onChange={(e)=>setphoneNo(e.target.value)}
                //   autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>setemail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>setpassword(e.target.value)}
                />
              </Grid>
              
            </Grid>

          <Link href='/' variant='body2'>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            </Link>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant='body2'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  )
}
