import React from 'react'
import TeamMember from './TeamMember'

const Team = () => {
  const teamMembers = [
    {
      id: 0,
      name: "Anamaya Sharma",
      designation: "Founder & CEO"
    },
    {
      id: 1,
      name: "Jeet Budhiraja",
      designation: "Senior Analyst"
    },
    {
      id: 2,
      name: "Amit Kumar",
      designation: "Senior Operations Manager"
    },
    {
      id: 3,
      name: "Niranjan Epilli",
      designation: "Operations Management"
    },
    {
      id: 4,
      name: "Akshai Bansal",
      designation: "Operations Manager"
    },
    {
      id: 5,
      name: "Shivam Chaudhary",
      designation: "Senior Web Developer"
    },
    {
      id: 6,
      name: "Sneha Rawat",
      designation: "Social Media Manager"
    },
    {
      id: 7,
      name: "Neha Ghosh",
      designation: "HR Manager"
    },
    {
      id: 8,
      name: "Kushagra Pandey",
      designation: "Content Coordinator & Researcher"
    },

    {
      id: 9,
      name: "Swati Mishra",
      designation: "COntent Writer & Researcher"
    },
    {
      id: 10,
      name: "Nandan Kumar",
      designation: "Content Writer & Researcher"
    },
    {
      id: 11,
      name: "Lavansh Rana",
      designation: "Content Writer & Researcher"
    },
    {
      id: 12,
      name: "Lavanya Sumar",
      designation: "Content Writer & Researcher"
    },
    {
      id: 13,
      name: "Milind Gaur",
      designation: "Content Development"
    },
    {
      id: 14,
      name: "Tushar Kulkarni",
      designation: "Content Development"
    },
    {
      id: 15,
      name: "Mayur Sonkamble",
      designation: "Content Development"
    },
    {
      id: 16,
      name: "Pawan Kumar",
      designation: "Content Development"
    },
    {
      id: 17,
      name: "Ranit Sadh",
      designation: "Content Development"
    },
    {
      id: 18,
      name: "Atharva Raut",
      designation: "Content Development"
    },
    {
      id: 19,
      name: "Mansi",
      designation: "Content Development"
    },
    {
      id: 20,
      name: "Shivam Upadhyay",
      designation: "Content Development"
    },
    {
      id: 21,
      name: "Vinayak Sharma",
      designation: "Design Team"
    },
    {
      id: 22,
      name: "Atharva Raut",
      designation: "Graphic Designer"
    },
    {
      id: 23,
      name: "Himanshu Vishwakarma",
      designation: "Content Writer"
    },
    {
      id: 24,
      name: "Ambika Karn",
      designation: "Content Writer"
    },
    {
      id: 14,
      name: "Srijal Anand",
      designation: "Content Writer"
    }


  ]
  return (
    <div className='w-full flex justify-center bg-gradient-to-bl from-[#6159C3] to-[#9d97e7]'>
      <div className='w-11/12 max-w-[1440px] flex flex-col justify-center items-center mt-40 text-white p-10 pb-40'>
        <h1 className='font-bold bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-transparent text-5xl text-center'>Our Team</h1>

        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm-grid-cols-1 mt-10 gap-y-20 gap-x-20'>
          {
            teamMembers.map((item, index) => {
              return <div key={index}>
                <TeamMember member={item} />
              </div>
            })

          }
        </div>
      </div>
    </div>

  )
}

export default Team