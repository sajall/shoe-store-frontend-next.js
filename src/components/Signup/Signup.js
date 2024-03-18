"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import { Box, Button, Divider, Typography } from "@mui/material";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import {
  AlertBox,
  AlertBoxParagraph,
  AlertBoxTage,
  ArrowBox,
  ButtonBox,
  CancelAndSaveBtn,
  EmailMainBox,
  InputLable,
  MailBox,
  MainInputCityBox,
  MainZipCodeBox,
  UserTextField,
} from "./styled-component";

import { signupApi } from "../../api/auth/auth";


const SignUp = () => {
  
  const router = useRouter();
  
  const { register, handleSubmit } = useForm();
  const [isAdmin, setIsAdmin] = useState(false); 

  const onSubmit = async (data) => {
    data.isAdmin = isAdmin;
    console.log(data, "this is signup data");
    
    try {
      const res = await signupApi(data);
      
      if (res.status === 200) {

        router.push("/login");
        toast.success("User created successfully");

      } else {

        toast.error("Failed to create user");
      }
    } catch (error) {

      console.error("Error:", error.message);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <>
    
      <Box>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            padding: "4rem",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            backgroundColor: "white",
            marginTop: "20px",
            "& fieldset": { border: "none" },
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Register
            <IoIosInformationCircleOutline size={18} />
          </Typography>
          <Divider sx={{ marginTop: "12px" }} />
          <Box style={{ marginTop: "17px", padding: "12px 0px" }}>
            <InputLable>First Name</InputLable>
            <UserTextField
              fullWidth
              {...register("name", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
              })}
            />
            <InputLable>password</InputLable>
            <UserTextField
              fullWidth
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              sx={{ mt: 2 }}
            />
            <InputLable>Email</InputLable>
            <EmailMainBox>
              <MailBox>
                <MdOutlineMail size={19} />
              </MailBox>
              <UserTextField
                fullWidth
                placeholder="example@gmail.com"
                {...register("email", {
                  required: "Email is required",
                })}
              />
            </EmailMainBox>

         
            <InputLable>Street Address</InputLable>
            <UserTextField
              fullWidth
              {...register("streetAddress", {
                required: "Address is required",
              })}
            />
            <InputLable>City</InputLable>
            <MainInputCityBox>
              <UserTextField
                fullWidth
                placeholder="Log Angeles"
                {...register("city", {
                  required: "City is required",
                })}
              />
              <ArrowBox>
                <IoIosArrowUp size={14} />
                <IoIosArrowDown size={14} />
              </ArrowBox>
            </MainInputCityBox>
            <InputLable>State/Province</InputLable>
            <UserTextField
              fullWidth
              placeholder="California"
              {...register("state", {
                required: "StateProvince is required",
              })}
              />
            <InputLable>Country</InputLable>
            <UserTextField
              fullWidth
              placeholder="United States"
              {...register("country", {
                required: "Country is required",
              })}
              />
            <MainZipCodeBox>
              ZIP/Postal Code
              <IoIosInformationCircleOutline size={18} />
            </MainZipCodeBox>
            <UserTextField
              fullWidth
              placeholder="8675"
              {...register("postalCode", {
                required: "ZIP/Postal Code is required",
              })}
              />
             
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
              />
              <InputLable> Register as admin </InputLable>
            <AlertBox>
              <AlertBoxTage>Alerts</AlertBoxTage>
              <AlertBoxParagraph>
                Get updates of any new activity or features. Turn on/off your
                preferences
              </AlertBoxParagraph>
            </AlertBox>
            <ButtonBox>
              <CiCircleCheck
                size={17}
                strokeWidth="1"
                color="#17d781"
                marginTop="1rem"
              />
              <CancelAndSaveBtn type="submit">Cancel</CancelAndSaveBtn>
              <CancelAndSaveBtn type="submit" savebtn={true}>
                Save
              </CancelAndSaveBtn>
            </ButtonBox>
          </Box>
        </Box>
      </Box>
      
    </>
  );
};

export default SignUp;
