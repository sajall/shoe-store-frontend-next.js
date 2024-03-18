"use client";

import React, { useState } from "react";
import Link from 'next/link';
import { toast } from "react-toastify";
import {useRouter} from 'next/router';
import { Box, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

import {
  DividerBox,
  DontTag,
  GoogleBtnBox,
  GoogoleTag,
  HeadingBox,
  InputBox,
  InputLabelBox,
  LoginBtn,
  MainBoxLogin,
  SignUpHereTag,
  SignUpLineBox,
} from "./styled-component";

import { logInApi } from "../../api/auth/auth";




const Login = () => {

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {

    const res = await logInApi(data)
 try{
   if(res.status == 200){

     toast.success('user logged in successfully');

       localStorage.setItem('user', JSON.stringify(res.data))
       router.push('/home')

   }else{
    
     if(res.status == 400){
         toast.error('some error occcoured during login ');

   }
   }

 }catch(error){

  console.log("Error :" , error.message);
  toast.error("An error occurred. Please try again")

 }


  };

  return (
    <>
      <MainBoxLogin>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <HeadingBox>Login to your account</HeadingBox>
          <SignUpLineBox>
            <DontTag>Don't have an account?</DontTag>
            <Link href="/signup">
              <SignUpHereTag>Sign up here</SignUpHereTag>
            </Link>
          </SignUpLineBox>
          <GoogleBtnBox onClick={()=>{
              toast.warning("work in progress")
            }
            }>
            <FcGoogle size={30} />
            <GoogoleTag 

            >Continue with Google</GoogoleTag>
          </GoogleBtnBox >
          <DividerBox>OR</DividerBox>
          <InputBox>
            <InputLabelBox>Email</InputLabelBox>
            <TextField
              fullWidth
              type="text"
              {...register("email", {
                required: "email is required",
                minLength: {
                  value: 3,
                  message: "email must be at least 3 characters",
                },
              })}
              error={Boolean(errors.email)}
              helperText={errors.username?.message}
              margin="normal"
            />
            <InputLabelBox>Password</InputLabelBox>
            <TextField
              fullWidth
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              margin="normal"
              sx={{ mt: 2 }}
            />
          </InputBox>
          <LoginBtn type="submit">Login</LoginBtn>
        </Box>
      </MainBoxLogin>
    </>
  );
};
export default Login;