import React from 'react'
import { GlobalContext } from "../context";
import axios from "axios";
import { useContext } from "react";

const StudentService = () => {
    const { token } = useContext(GlobalContext);

    const http = axios.create({
        baseURL: process.env.BASE_URL,

        headers: {
            "Content-type": "application/json",
            "x-auth-token": token,
        },
    });

    const getAllStudents = async () => {
        try {
            const students = await http.get("/student/get-all-students");
            if (students) {
                return students;
            }
        } catch (error) {
            console.log("Error in get All Students Part", error);
        }
    }



    return {
        getAllStudents
    }
}

export default StudentService