import React from "react";
import Navbar from "./Navbar/Navbar";
import banner from "../assests/abtt.png";
import devansh from "../assests/dj.jpeg";
import manju from "../assests/manju.jpeg";
import yash from "../assests/yash.jpeg";
import medhansh from "../assests/medh.jpeg";
import Footer from "./Footer";


const Team = [
    {
      name: "Dr. Manju Dhariwal",
      role: "Professor (Department of Humanities and Social Sciences at LNMIIT)",
      description: "Dean (International Student Enablement and Gender Sensitization)",
      image: manju,
    },
    {
      name: "Medhansh Sharma",
      role: "Developer",
      description: "4th year student at LNMIIT",
      image: medhansh,
    },
    {
      name: "Devansh Jain",
      role: "Developer",
      description: "4th year student at LNMIIT",
      image:devansh,
    },
    {
      name: "Yash Chugh",
      role: "Developer",
      description: "4th year student at LNMIIT",
      image: yash,
    },
  ];

const About = () => {
    return (
        <div className="h-auto">
            <div className="relative -top-9 p-16">
                <Navbar />
            </div>
            <div>
            <section className="w-full text-darkBlue py-16 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto">
                {/* Text Content */}
                <div className="flex flex-col justify-center gap-6">
                {/* <h1 className="text-6xl font-bold text-center">
                Built for kids and teens, here for you
                </h1> */}
                <p className="text-xl relative top-3">
                <span className="font-bold">MindConnect</span> is a comprehensive platform dedicated to supporting college students in their mental health journey. We offer a safe and anonymous space where students can access a wide range of mental health resources, including latest blogs, practical tips, and the opportunity to connect with professionals without revealing their identity. To further enhance well-being, MindConnect also provides a journaling feature, allowing students to reflect on their thoughts and emotions in a private, secure environment. 
                <br/> <br/>Our mission is to break the stigma around mental health issues by offering confidential support and tools, empowering students to navigate college life with confidence and resilience. 
                At MindConnect, we’re here to help you prioritize your mental well-being and succeed both academically and personally

                </p>
                </div>
                
                {/* Image Content */}
                <div className="relative left-20 right-20 flex justify-center">
                <img
                    src={banner} // Replace with the actual path to your image
                    alt="Brightline Session With Therapist"
                    className="rounded-3xl object-contain min-h-16 shadow-2xl shadow-black"
                />
                </div>
                </div>
                </section>

                
            </div>
            <div>
            <div className="py-12 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                <h1 className="text-6xl font-extrabold text-gray-900">
                    Our Supportive Team
                </h1>
                </div>
                <div className="mt-10 mb-28">
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
                    {/* First Row with 1 Person */}
                    <div className="text-center">
                    <img
                        className="mx-auto h-30 w-40 rounded-full shadow-2xl shadow-black"
                        src={Team[0].image}
                        alt={Team[0].name}
                    />
                    <h3 className="mt-6 text-xl font-medium text-gray-900">
                        {Team[0].name}
                    </h3>
                    <p className="mt-2 text-gray-500">{Team[0].role}</p>
                    <p className="mt-1 text-gray-500">{Team[0].description}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-10">
                    {/* Second Row with 3 People */}
                    {Team.slice(1).map((leader) => (
                    <div key={leader.name} className="text-center">
                        <img
                        className="mx-auto h-30 w-40 rounded-full shadow-2xl shadow-black"
                        src={leader.image}
                        alt={leader.name}
                        />
                        <h3 className="mt-6 text-xl font-medium text-gray-900">
                        {leader.name}
                        </h3>
                        <p className="mt-2 text-gray-500">{leader.role}</p>
                        <p className="mt-1 text-gray-500">{leader.description}</p>
                    </div>
                    ))}
                </div>
                </div>
            </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;