import React from 'react'
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { toast } from 'react-toastify';
import CourseService from '@/service/courseService';


const DeleteCourse = ({ deleteModal, setDeleteModal, deleteCourseId, gettAllCourses }) => {
    const { deleteCourse } = CourseService();

    const DeleteCourse = async () => {
        const deleteData = await deleteCourse(deleteCourseId);
        if (deleteData?.data?.message === "course delete success") {
            toast.success("Course Delete Success");
            setDeleteModal(false)
            gettAllCourses();
        }
        else {
            toast.warning("Course Delete Unsuccess")
        }
    }

    return (
        <Modal
            open={deleteModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box>
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-80 justify-center mx-auto mt-20">
                    <div className="p-4 md:p-5 text-center">
                        <h3 className="mb-5 text-lg font-normal text-white ">
                            Are you sure you want to delete this Course?
                        </h3>
                        <button
                            data-modal-hide="popup-modal"
                            type="button"
                            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                            onClick={() => {
                                DeleteCourse();
                            }}
                        >
                            Yes, I'm sure
                        </button>
                        <button
                            data-modal-hide="popup-modal"
                            type="button"
                            className="text-gray-900 mt-6 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-600 rounded-lg border border-gray-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 600"
                            onClick={() => {
                                setDeleteModal(false);
                            }}
                        >
                            No, cancel
                        </button>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default DeleteCourse