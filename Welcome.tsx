"use client";
import React from "react";

type Welcome = { userName: string }

const Message = ({ userName }: Welcome) => (
    //This is the welcome page
    <h2>Welcome to the Mario and Luigi Club, {userName}!</h2>
)

export default Message;