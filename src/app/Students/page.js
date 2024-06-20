"use client"
import PageHeader from '@/components/pageHeader';
import StudentService from '@/service/studentService';
import React, { useEffect, useState } from 'react'

const Students = () => {
    const { getAllStudents } = StudentService();
    const [students, setStudents] = useState();

    useEffect(() => {
        gettAllStudents();
    }, [])

    const gettAllStudents = async () => {
        const students = await getAllStudents();
        setStudents(students?.data?.allStudents)
    }

    return (
        <>
            <PageHeader
                topic="Admin Panel"
                header="Manage Students"
            />

            <div className="grid grid-cols-2 md:grid-cols-3">
                {students
                    ? students.map((data, index) => (
                        <div
                            key={data._id}
                            className="relative md:mt-6 mt-4 text-gray-700 bg-white shadow-md mx-2 rounded-md m-0 md:m-4 hover:shadow-lg  hover:transform hover:scale-105  cursor-pointer"
                        >
                            <div className="pt-2 m-2 mt-2 ml-0 lg:px-2 px-0 ">
                                <p
                                    className={`mb-4 md:m-4 text-sm text-gray-600 dark:text-gray-600 ${true ? "line-clamp-8" : ""
                                        }`}
                                >
                                    <b className="text-[10px] md:text-[20px]">Student Name : </b>
                                    <span className="text-[10px] md:text-[20px]">
                                        {data?.name}
                                    </span>
                                    <br></br>
                                    <b className="text-[10px] md:text-[20px]">Email : </b>
                                    <span className="text-[10px] md:text-[20px]">
                                        {data?.email}
                                    </span>
                                    <br></br>
                                    <b className="text-[10px] md:text-[20px]">Mobile : </b>
                                    <span className="text-[10px] md:text-[20px]">
                                        {data?.mobile}
                                    </span>
                                    <br></br>
                                    <b className="text-[10px] md:text-[20px]">Address : </b>
                                    <span className="text-[10px] md:text-[20px]">
                                        {data?.address}
                                    </span>
                                    <br></br>
                                    <b className="text-[10px] md:text-[20px]">BirthDay : </b>
                                    <span className="text-[10px] md:text-[20px]">
                                        {data?.dob}
                                    </span>
                                    <br></br>
                                </p>
                            </div>
                        </div>
                    ))
                    : "No Course"}
            </div>
        </>
    )
}

export default Students