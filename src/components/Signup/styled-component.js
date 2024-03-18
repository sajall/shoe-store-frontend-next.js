
"use client"
import { Box, Button, TextField, Typography, styled } from "@mui/material";



export const UserTextField = styled(TextField)({
    boxShadow: 'rgba(0, 0, 0, 0.10) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
    borderRadius: '6px',
    marginTop: '1rem'
})
export const InputLable = styled(Typography)({
    fontWeight: 'bold',
    color: '#363b42',
    fontSize: '.9rem',
    marginTop: '1.4rem'
})
// *************Email Box **********

export const EmailMainBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
})

export const MailBox = styled(Box)({
    padding: '16.5px 20px',
    marginTop: '1rem',
    borderRadius: '6px',
    boxShadow: 'rgba(0, 0, 0, 0.10) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'
})

// *************City Arrow up down **********

export const MainInputCityBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
})

export const ArrowBox = styled(Box)({
    padding: '10px 20px',
    marginTop: '1rem',
    borderRadius: '6px',
    boxShadow: 'rgba(0, 0, 0, 0.10) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'
})

// *************Zip Code Input **********

export const MainZipCodeBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontWeight: 'bold',
    color: '#363b42',
    fontSize: '.9rem',
    marginTop: '1.4rem'
})

// *************Alert Box **********

export const AlertBox = styled(Box)({
    backgroundColor: '#f3f4f6',
    padding: '2rem 3rem',
    marginTop: '2rem',
    borderRadius: '6px'
})

export const AlertBoxTage = styled(Typography)({
    paddingLeft: '2rem',
    fontWeight: 'bold',
    color: '#363b42',
    fontSize: '1.1rem'
})

export const AlertBoxParagraph = styled(Typography)({
    padding: '1rem 2rem',
    color: '#9399a1',
    fontSize: '.9rem'
})

// *************Button Box **********

export const ButtonBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '1rem'
})

export const CancelAndSaveBtn = styled(Button)(({ savebtn }) => ({
    p: 2,
    backgroundColor: savebtn ? '#4338ca' : "#e7e7e7",
    color: savebtn ? "#fff" : "#2f2fff",
    marginTop: "17px",
    "&:hover": savebtn ? { backgroundColor: "#4338caa1" } :
        { backgroundColor: "#4338caa" },
    fontSize: '.75rem',
    lineHeight: '1rem',
    padding: '0.9rem 1.5rem'
}));