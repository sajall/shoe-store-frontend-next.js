import { Box, Button, Divider, InputLabel, Typography, styled } from "@mui/material";

export const MainBoxLogin = styled(Box)({
    maxWidth: "600px",
    margin: " 20px auto ",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "white",
})

export const HeadingBox = styled(Typography)({
    fontWeight: "bold",
    variant: "h5",
    component: "div"
})

export const SignUpLineBox = styled(Typography)({
    display: "flex",
    gap: "6px",
    marginTop: "16px"
})

export const DontTag = styled(Box)({
    color: "#8f8282"
})

export const SignUpHereTag = styled(Typography)({
    color: "#6e6161",
    cursor: "pointer",
    fontWeight: "bold",
    textDecoration: "underLine",
})

export const GoogleBtnBox = styled(Button)({
    height: "58px",
    width: "100%",
    border: "1px solid #c4c4c4",
    borderRadius: "5px",
    marginTop: "2rem",
    display: "flex",
    gap: "12px",
})

export const GoogoleTag = styled(Typography)({
    fontWeight: "600",
    color: "#6a6a6a"
})

export const DividerBox = styled(Divider)({
    height: "20px",
    textAlign: "center",
    color: "#aba2a2",
    display: "flex",
    alignItems: "center",
    marginTop: "2.5rem",
})
export const InputLabelBox = styled(InputLabel)({
    color: '#1f2936',
})
export const InputBox = styled(Box)({
    marginTop: "17px"
})

export const LoginBtn = styled(Button)({
    p: 2,
    backgroundColor: "#4338ca",
    color: "#fff",
    height: '60px',
    width: '100%',
    fontWeight: "600",
    marginTop: "17px",
    '&:hover': { backgroundColor: '#4338caa1' }
})