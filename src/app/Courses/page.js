"use client";
import AddButton from '@/components/AddButton'
import PageHeader from '@/components/pageHeader'
import React, { useEffect, useState } from 'react'
import AddCourse from './AddCourse';
import CourseService from '@/service/courseService';
import EditCourse from './EditCourse';
import DeleteCourse from './DeleteCourse';


const Courses = () => {
  const [courseModal, setCourseModal] = useState(false);
  const { getAllCourses } = CourseService();
  const [courses, setCourses] = useState();
  const [selectedCourse, setSelecteCourse] = useState()
  const [showCourseModal, setShowCourseModal] = useState(false)
  const [deleteCourseId, setDeleteCourseId] = useState();
  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    gettAllCourses();
  }, [])

  const gettAllCourses = async () => {
    const courses = await getAllCourses();
    setCourses(courses?.data?.allCourses)
  }


  return (
    <>
      <PageHeader
        topic="Admin Panel"
        header="Manage Courses"
        description="Learn Anything You Need"
      />
      <div className='mt-10 ml-10 cursor-pointer'>
        <span onClick={() => setCourseModal(true)}><AddButton name={"Add Course"} /></span>
      </div>

      {courseModal && <AddCourse courseModal={courseModal} setCourseModal={setCourseModal} gettAllCourses={gettAllCourses} />}


      <div className="grid grid-cols-2 md:grid-cols-3">
        {courses
          ? courses.map((data, index) => (
            <div
              key={data._id}
              className="relative md:mt-6 mt-4 text-gray-700 bg-white shadow-md mx-2 rounded-md m-0 md:m-4 hover:shadow-lg  hover:transform hover:scale-105  cursor-pointer"
            >
              <div className="pt-2 m-2 mt-2 ml-0 lg:px-2 px-0 ">
                <p
                  className={`mb-4 md:m-4 text-sm text-gray-600 dark:text-gray-600 ${true ? "line-clamp-4" : ""
                    }`}
                >
                  <b className="text-[10px] md:text-[20px]">Course Name : </b>
                  <span className="text-[10px] md:text-[20px]">
                    {data?.courseName}
                  </span>
                  <br></br>
                  <b className="text-[10px] md:text-[20px]">Course Price : </b>
                  <span className="text-[10px] md:text-[20px]">
                    {data?.coursePrice}
                  </span>
                  <br></br>
                  <b className="text-[10px] md:text-[20px]">Duration : </b>
                  <span className="text-[10px] md:text-[20px]">
                    {data?.duration}
                  </span>
                  <br></br>
                  <br></br>
                  <span className="text-[10px] md:text-[20px]">
                    {data?.description}
                  </span>
                </p>
              </div>
              <div className="p-2 pt-0">

                <div className="flex flex-row justify-between">
                  <button
                    className=" font-bold text-center  bg-blue-600 text-white px-2 py-1 rounded-md"
                    type="button"
                    onClick={() => {
                      setSelecteCourse(data);
                      setShowCourseModal(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="font-bold text-center  bg-red-600 text-white px-2 rounded-md"
                    type="button"
                    onClick={() => {
                      setDeleteCourseId(data._id);
                      setDeleteModal(true);
                    }}
                  >
                    Delete
                  </button>
                </div>

              </div>
            </div>
          ))
          : "No Course"}
      </div>

      <div>
        {showCourseModal && <EditCourse showCourseModal={showCourseModal} selectedCourse={selectedCourse} setSelecteCourse={setSelecteCourse} setShowCourseModal={setShowCourseModal} gettAllCourses={gettAllCourses} />}
      </div>
      <div>
        {deleteModal && <DeleteCourse deleteModal={deleteModal} setDeleteModal={setDeleteModal} deleteCourseId={deleteCourseId} gettAllCourses={gettAllCourses} />}
      </div>
    </>
  )
}

export default Courses