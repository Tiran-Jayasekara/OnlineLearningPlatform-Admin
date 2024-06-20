import React, { useState } from 'react'
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { toast } from 'react-toastify';
import CourseService from '@/service/courseService';


const EditCourse = ({ showCourseModal, selectedCourse, setSelecteCourse, setShowCourseModal, gettAllCourses }) => {
    const [fieldValidation, setFieldValidation] = useState(false);
    const { UpdateCourse } = CourseService();

    const formValidation = () => {
        if (
            selectedCourse.courseName === "" ||
            selectedCourse.duration === "" ||
            selectedCourse.startDate === "" ||
            selectedCourse.instructorName === "" ||
            selectedCourse.description === "" ||
            selectedCourse.coursePrice === "" ||
            selectedCourse.courseCapacity === "" ||
            selectedCourse.endDate === ""
        ) {
            setFieldValidation(true);
            return true;
        } else {
            setFieldValidation(false);
            return false;
        }
    };

    const updateCourse = async () => {
        if (formValidation()) {
            toast.error("Please Fill All fields")
        } else {
            const courseForm = {
                _id: selectedCourse._id,
                courseName: selectedCourse.courseName,
                description: selectedCourse.description,
                duration: selectedCourse.duration,
                startDate: selectedCourse.startDate,
                instructorName: selectedCourse.instructorName,
                coursePrice: selectedCourse.coursePrice,
                courseCapacity: selectedCourse.courseCapacity,
                endDate: selectedCourse.endDate,
            }
            const UpdateData = await UpdateCourse(courseForm);
            if (UpdateData?.data?.message === "Course Update Success") {
                toast.success("Course Update Success");
                setShowCourseModal(false)
                gettAllCourses();
            }
            else {
                toast.warning("Course Update Unsuccess")
            }
        }
    }

    return (
        <Modal
            open={showCourseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box>
                {selectedCourse && (
                    <div className="justify-center items-center overflow-x-hidden rounded-md md:w-full w-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-4">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

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
                                                            value={selectedCourse.courseName}
                                                            placeholder="Course Name"
                                                            onChange={(e) => {
                                                                const inputValue = e.target.value;
                                                                if (inputValue.length <= 50) {
                                                                    setSelecteCourse({
                                                                        ...selectedCourse,
                                                                        courseName: inputValue,
                                                                    });


                                                                } else {
                                                                    setSelecteCourse({
                                                                        ...selectedCourse,
                                                                        courseName: inputValue.slice(0, 50),
                                                                    });

                                                                }
                                                            }}
                                                        />
                                                        {selectedCourse.courseName.length >= 50 && (
                                                            <span className="text-red-500">
                                                                You can add only 50 Characters
                                                            </span>
                                                        )}
                                                        {fieldValidation && selectedCourse.courseName === "" && (
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
                                                            value={selectedCourse.duration}
                                                            placeholder="Duration"
                                                            onChange={(e) => {
                                                                const inputValue = e.target.value;
                                                                if (inputValue.length <= 50) {
                                                                    setSelecteCourse({
                                                                        ...selectedCourse,
                                                                        duration: inputValue
                                                                    });

                                                                } else {
                                                                    setSelecteCourse({
                                                                        ...selectedCourse,
                                                                        duration: inputValue.slice(0, 50),
                                                                    });
                                                                }
                                                            }}
                                                        />
                                                        {selectedCourse.duration.length >= 50 && (
                                                            <span className="text-red-500">
                                                                You can add only 50 Characters
                                                            </span>
                                                        )}
                                                        {fieldValidation && selectedCourse.duration === "" && (
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
                                                            value={selectedCourse?.startDate}
                                                            placeholder="Date"
                                                            onChange={(e) => {
                                                                const inputValue = e.target.value;
                                                                if (inputValue.length <= 50) {
                                                                    setSelecteCourse({
                                                                        ...selectedCourse,
                                                                        startDate: inputValue,
                                                                    });


                                                                } else {
                                                                    setSelecteCourse({
                                                                        ...selectedCourse,
                                                                        startDate: inputValue.slice(0, 50),
                                                                    });
                                                                }
                                                            }}
                                                        />
                                                        {selectedCourse.startDate.length >= 50 && (
                                                            <span className="text-red-500">
                                                                You can add only 50 Characters
                                                            </span>
                                                        )}
                                                        {fieldValidation && selectedCourse.startDate === "" && (
                                                            <span className="text-red-500">
                                                                Start Date is Required
                                                            </span>
                                                        )}
                                                    </div>

                                                    {/* InstructorName */}
                                                    <div className="px-4 mb-1 mt-6">
                                                        <label className="block mb-2 text-sm font-medium text-gray-900 ml-0">
                                                            Instructor Name
                                                        </label>

                                                        <input
                                                            className="z-0 block w-full border-stone-400 md:w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                                            name=""
                                                            value={selectedCourse.instructorName}
                                                            placeholder="Time"
                                                            onChange={(e) => {
                                                                const inputValue = e.target.value;
                                                                if (inputValue.length <= 50) {
                                                                    setSelecteCourse({
                                                                        ...selectedCourse,
                                                                        instructorName: inputValue,
                                                                    });

                                                                } else {
                                                                    setSelecteCourse({
                                                                        ...selectedCourse,
                                                                        instructorName: inputValue.slice(0, 50),
                                                                    });

                                                                }
                                                            }}
                                                        />
                                                        {selectedCourse.instructorName.length >= 50 && (
                                                            <span className="text-red-500">
                                                                You can add only 50 Characters
                                                            </span>
                                                        )}
                                                        {fieldValidation && selectedCourse.instructorName === "" && (
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
                                                            value={selectedCourse.description}
                                                            placeholder="Description"
                                                            onChange={(e) => {
                                                                const inputValue = e.target.value;
                                                                if (inputValue.length <= 500) {
                                                                    setSelecteCourse({
                                                                        ...selectedCourse,
                                                                        description: inputValue,
                                                                    });
                                                                } else {
                                                                    setSelecteCourse({
                                                                        ...selectedCourse,
                                                                        description: inputValue.slice(0, 500),
                                                                    });
                                                                }
                                                            }}
                                                        />
                                                        {selectedCourse.description.length >= 500 && (
                                                            <span className="text-red-500">
                                                                You can add only 500 Characters
                                                            </span>
                                                        )}
                                                        {fieldValidation && selectedCourse.description === "" && (
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
                                                            value={selectedCourse.coursePrice}
                                                            placeholder="Course Price"
                                                            onChange={(e) => {
                                                                const inputValue = e.target.value;
                                                                if (inputValue.length <= 50) {
                                                                    setSelecteCourse({
                                                                        ...selectedCourse,
                                                                        coursePrice: inputValue,
                                                                    });

                                                                } else {
                                                                    setSelecteCourse({
                                                                        ...selectedCourse,
                                                                        coursePrice: inputValue.slice(0, 50),
                                                                    });

                                                                }
                                                            }}
                                                        />
                                                        {selectedCourse.coursePrice.length >= 50 && (
                                                            <span className="text-red-500">
                                                                You can add only 50 Characters
                                                            </span>
                                                        )}
                                                        {fieldValidation && selectedCourse.coursePrice === "" && (
                                                            <span className="text-red-500">
                                                                Course Price is Required
                                                            </span>
                                                        )}
                                                    </div>


                                                    {/* Course Capacity */}
                                                    <div className="px-4 mb-1 mt-6">
                                                        <label className="block mb-2 text-sm font-medium text-gray-900 ml-0">
                                                            Course Capacity
                                                        </label>
                                                        <input
                                                            type='number'
                                                            className="z-0 block w-full border-stone-400 md:w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                                            value={selectedCourse.courseCapacity}
                                                            placeholder="Course Capacity"
                                                            onChange={(e) => {
                                                                const inputValue = e.target.value;
                                                                if (inputValue.length <= 50) {
                                                                    setSelecteCourse({
                                                                        ...selectedCourse,
                                                                        courseCapacity: inputValue,
                                                                    });

                                                                } else {
                                                                    setSelecteCourse({
                                                                        ...selectedCourse,
                                                                        courseCapacity: inputValue.slice(0, 50),
                                                                    })
                                                                }
                                                            }}
                                                        />
                                                        {selectedCourse.courseCapacity.length >= 50 && (
                                                            <span className="text-red-500">
                                                                You can add only 50 Characters
                                                            </span>
                                                        )}
                                                        {fieldValidation && selectedCourse.courseCapacity === "" && (
                                                            <span className="text-red-500">
                                                                Course Capacity is Required
                                                            </span>
                                                        )}
                                                    </div>


                                                    {/* End Date */}
                                                    <div className="px-4 mb-1 mt-6">
                                                        <label className="block mb-2 text-sm font-medium text-gray-900 ml-0">
                                                            End Date
                                                        </label>
                                                        <input
                                                            type='text'
                                                            className="z-0 block w-full border-stone-400 md:w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                                            value={selectedCourse.endDate}
                                                            placeholder="End Date"
                                                            onChange={(e) => {
                                                                const inputValue = e.target.value;
                                                                if (inputValue.length <= 50) {
                                                                    setSelecteCourse({
                                                                        ...selectedCourse,
                                                                        endDate: inputValue,
                                                                    })

                                                                } else {
                                                                    setSelecteCourse({
                                                                        ...selectedCourse,
                                                                        endDate: inputValue.slice(0, 50),
                                                                    })

                                                                }
                                                            }}
                                                        />
                                                        {selectedCourse.endDate.length >= 50 && (
                                                            <span className="text-red-500">
                                                                You can add only 50 Characters
                                                            </span>
                                                        )}
                                                        {fieldValidation && selectedCourse.endDate === "" && (
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
                                <div className="flex items-center justify-end pr-6 pb-4">

                                    <>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold  text-sm px-3 py-2 rounded-md "
                                            type="button"
                                            onClick={() => {
                                                updateCourse();
                                            }}
                                        >
                                            Update
                                        </button>

                                        <button
                                            className="text-red-500 background-transparent font-bold  px-4 py-2 text-sm"
                                            type="button"
                                            onClick={() => (
                                                setShowCourseModal(false)
                                            )}
                                        >
                                            Close
                                        </button>
                                    </>

                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </Box>
        </Modal>
    )
}

export default EditCourse