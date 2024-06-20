"use client";
import React, { useState } from 'react'
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { toast } from 'react-toastify';
import CourseService from '@/service/courseService';

const AddCourse = ({ courseModal, setCourseModal, gettAllCourses }) => {

    const [fieldValidation, setFieldValidation] = useState(false);

    const [courseName, setCourseName] = useState("");
    const [duration, setDuration] = useState("");
    const [date, setDate] = useState("");
    const [instructorName, setInstructorName] = useState("");
    const [description, setDescription] = useState("");
    const [coursePrice, setCoursePrice] = useState(0);
    const [courseCapacity, setCourseCapacity] = useState(0);
    const [endDate, setEndDate] = useState("");
    const { addNewCourse } = CourseService();

    const formValidation = () => {
        if (
            courseName === "" ||
            duration === "" ||
            date === "" ||
            instructorName === "" ||
            description === "" ||
            coursePrice === 0 ||
            courseCapacity === 0 ||
            endDate === ""
        ) {
            setFieldValidation(true);
            return true;
        } else {
            setFieldValidation(false);
            return false;
        }
    };


    const addCourse = async () => {
        if (formValidation()) {
            toast.error("Please Fill All Fields")
        } else {
            const startDate = date;
            const courseForm = {
                courseName,
                description,
                duration,
                startDate,
                instructorName,
                coursePrice,
                courseCapacity,
                endDate,
            }
            const addCourse = await addNewCourse(courseForm);
            if (addCourse?.data?.message === "Course Create success") {
                toast.success("Course Create success");
                setCourseModal(false)
                gettAllCourses();
            } else if (addCourse?.data?.message === "Course Already Exist") {
                toast.warning(" Course Already Exist")
            }
            else {
                toast.warning("Course Create Unsuccess")
            }
        }
    }

    return (
        <Modal
            open={courseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box>
                <div className="justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-4 md:mx-40 rounded-md">
                    <div className="w-auto mx-auto ">
                        {/*content*/}
                        <div className="w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <section className="w-full h-auto">
                                <div className="px-0 md:px-4 mx-auto ">
                                    <div className="pt-8 px-2 bg-white">
                                        <div className="md:mt-0 mt-0">
                                            <div>


                                                {/* Course Name */}
                                                <div className="px-4 mb-1 mt-10">
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 ml-0">
                                                        Course Name
                                                    </label>
                                                    <input
                                                        className="z-0 block w-full border-stone-400 md:w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                                        name=""
                                                        value={courseName}
                                                        placeholder="Course Name"
                                                        onChange={(e) => {
                                                            const inputValue = e.target.value;
                                                            if (inputValue.length <= 50) {
                                                                setCourseName(inputValue);
                                                            } else {
                                                                setCourseName(inputValue.slice(0, 50));
                                                            }
                                                        }}
                                                    />
                                                    {courseName.length >= 50 && (
                                                        <span className="text-red-500">
                                                            You can add only 50 Characters
                                                        </span>
                                                    )}
                                                    {fieldValidation && courseName === "" && (
                                                        <span className="text-red-500">
                                                            Course Name is Required
                                                        </span>
                                                    )}
                                                </div>

                                                {/* duration */}
                                                <div className="px-4 mb-1 mt-6">
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 ml-0">
                                                        Duration
                                                    </label>
                                                    <input
                                                        className="z-0 block w-full border-stone-400 md:w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                                        name=""
                                                        value={duration}
                                                        placeholder="Duration"
                                                        onChange={(e) => {
                                                            const inputValue = e.target.value;
                                                            if (inputValue.length <= 50) {
                                                                setDuration(inputValue);
                                                            } else {
                                                                setDuration(inputValue.slice(0, 50));
                                                            }
                                                        }}
                                                    />
                                                    {duration.length >= 50 && (
                                                        <span className="text-red-500">
                                                            You can add only 50 Characters
                                                        </span>
                                                    )}
                                                    {fieldValidation && duration === "" && (
                                                        <span className="text-red-500">
                                                            Duration is Required
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Start Date */}
                                                <div className="px-4 mb-1 mt-6">
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 ml-0">
                                                        Start Date
                                                    </label>
                                                    <input
                                                        className="z-0 block w-full border-stone-400 md:w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                                        name=""
                                                        value={date}
                                                        placeholder="Date"
                                                        onChange={(e) => {
                                                            const inputValue = e.target.value;
                                                            if (inputValue.length <= 50) {
                                                                setDate(inputValue);
                                                            } else {
                                                                setDate(inputValue.slice(0, 50));
                                                            }
                                                        }}
                                                    />
                                                    {date.length >= 50 && (
                                                        <span className="text-red-500">
                                                            You can add only 50 Characters
                                                        </span>
                                                    )}
                                                    {fieldValidation && date === "" && (
                                                        <span className="text-red-500">
                                                            Start Date is Required
                                                        </span>
                                                    )}
                                                </div>

                                                {/* instructorName */}
                                                <div className="px-4 mb-1 mt-6">
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 ml-0">
                                                        Instructor Name
                                                    </label>

                                                    <input
                                                        className="z-0 block w-full border-stone-400 md:w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                                        name=""
                                                        value={instructorName}
                                                        placeholder="Time"
                                                        onChange={(e) => {
                                                            const inputValue = e.target.value;
                                                            if (inputValue.length <= 50) {
                                                                setInstructorName(inputValue);
                                                            } else {
                                                                setInstructorName(inputValue.slice(0, 50));
                                                            }
                                                        }}
                                                    />
                                                    {instructorName.length >= 50 && (
                                                        <span className="text-red-500">
                                                            You can add only 50 Characters
                                                        </span>
                                                    )}
                                                    {fieldValidation && instructorName === "" && (
                                                        <span className="text-red-500">
                                                            Instructor Name is Required
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Description */}
                                                <div className="px-4 mb-1 mt-6">
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 ml-0">
                                                        Description
                                                    </label>
                                                    <textarea
                                                        className="z-0 block w-full border-stone-400 md:w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                                        value={description}
                                                        placeholder="Description"
                                                        onChange={(e) => {
                                                            const inputValue = e.target.value;
                                                            if (inputValue.length <= 500) {
                                                                setDescription(inputValue);
                                                            } else {
                                                                setDescription(inputValue.slice(0, 500));
                                                            }
                                                        }}
                                                    />
                                                    {description.length >= 500 && (
                                                        <span className="text-red-500">
                                                            You can add only 500 Characters
                                                        </span>
                                                    )}
                                                    {fieldValidation && description === "" && (
                                                        <span className="text-red-500">
                                                            Descriptin is Required
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Course Price */}
                                                <div className="px-4 mb-1 mt-6">
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 ml-0">
                                                        Course Price
                                                    </label>
                                                    <input
                                                        type='number'
                                                        className="z-0 block w-full border-stone-400 md:w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                                        value={coursePrice}
                                                        placeholder="Course Price"
                                                        onChange={(e) => {
                                                            const inputValue = e.target.value;
                                                            if (inputValue.length <= 50) {
                                                                setCoursePrice(inputValue);
                                                            } else {
                                                                setCoursePrice(inputValue.slice(0, 50));
                                                            }
                                                        }}
                                                    />
                                                    {coursePrice.length >= 500 && (
                                                        <span className="text-red-500">
                                                            You can add only 50 Characters
                                                        </span>
                                                    )}
                                                    {fieldValidation && coursePrice === 0 && (
                                                        <span className="text-red-500">
                                                            Course Price is Required
                                                        </span>
                                                    )}
                                                </div>


                                                {/* courseCapacity */}
                                                <div className="px-4 mb-1 mt-6">
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 ml-0">
                                                        Course Capacity
                                                    </label>
                                                    <input
                                                        type='number'
                                                        className="z-0 block w-full border-stone-400 md:w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                                        value={courseCapacity}
                                                        placeholder="Course Capacity"
                                                        onChange={(e) => {
                                                            const inputValue = e.target.value;
                                                            if (inputValue.length <= 50) {
                                                                setCourseCapacity(inputValue);
                                                            } else {
                                                                setCourseCapacity(inputValue.slice(0, 50));
                                                            }
                                                        }}
                                                    />
                                                    {courseCapacity.length >= 50 && (
                                                        <span className="text-red-500">
                                                            You can add only 50 Characters
                                                        </span>
                                                    )}
                                                    {fieldValidation && courseCapacity === 0 && (
                                                        <span className="text-red-500">
                                                            Course Capacity is Required
                                                        </span>
                                                    )}
                                                </div>


                                                {/* endDate */}
                                                <div className="px-4 mb-1 mt-6">
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 ml-0">
                                                        End Date
                                                    </label>
                                                    <input
                                                        type='text'
                                                        className="z-0 block w-full border-stone-400 md:w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                                        value={endDate}
                                                        placeholder="End Date"
                                                        onChange={(e) => {
                                                            const inputValue = e.target.value;
                                                            if (inputValue.length <= 50) {
                                                                setEndDate(inputValue);
                                                            } else {
                                                                setEndDate(inputValue.slice(0, 50));
                                                            }
                                                        }}
                                                    />
                                                    {endDate.length >= 50 && (
                                                        <span className="text-red-500">
                                                            You can add only 50 Characters
                                                        </span>
                                                    )}
                                                    {fieldValidation && endDate === "" && (
                                                        <span className="text-red-500">
                                                            EndDate is Required
                                                        </span>
                                                    )}
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/*footer*/}
                            <div className="flex items-center justify-end p-6">
                                <button
                                    className="bg-emerald-500 mr-0 text-white font-bold  text-sm px-3 py-2 rounded "
                                    type="button"
                                    onClick={() => {
                                        addCourse();
                                    }}
                                >
                                    Add
                                </button>

                                <button
                                    className="text-red-500 background-transparent font-bold  px-4 py-2 text-sm"
                                    type="button"
                                    onClick={() => (
                                        setCourseModal(false),
                                        // resetForm(),
                                        setFieldValidation(false)
                                    )}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default AddCourse