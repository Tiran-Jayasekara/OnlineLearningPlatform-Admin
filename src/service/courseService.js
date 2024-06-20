import { GlobalContext } from "../context";
import axios from "axios";
import { useContext } from "react";

const CourseService = () => {

    const { token } = useContext(GlobalContext);

    const http = axios.create({
        baseURL: process.env.BASE_URL,

        headers: {
            "Content-type": "application/json",
            "x-auth-token": token,
        },
    });


    const getAllCourses = async () => {
        try {
            const courses = await http.get("/course/get-all-courses");
            if (courses) {
                return courses;
            }
        } catch (error) {
            console.log("Error in get All Courses Part", error);
        }
    }


    const addNewCourse = async (courseForm) => {
        try {
            const Addcourse = await http.post("/course/create-course", courseForm);
            if (Addcourse) {
                return Addcourse;
            }
        } catch (error) {
            console.log("Error in Add New Course Part", error);
        }
    }

    const UpdateCourse = async (courseForm) => {
        try {
            const updatecourse = await http.put("/course/update-course", courseForm);
            if (updatecourse) {
                return updatecourse;
            }
        } catch (error) {
            console.log("Error in Update Course Part", error);
        }
    }


    const deleteCourse = async (courseID) => {
        try {
            const deleteCourse = await http.delete("/course/delete-course/" + courseID);
            if (deleteCourse) {
                return deleteCourse;
            }
        } catch (error) {
            console.log("Error in delete course part", error);
        }
    }

    return {
        addNewCourse,
        deleteCourse,
        UpdateCourse,
        getAllCourses
    }
}

export default CourseService