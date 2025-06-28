import React, { useEffect, useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io";


const MyLatestProject = () => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <div id='projects-section' className="py-10 bg-gray-100 rounded-lg">
            <h2 data-aos="flip-left" className="text-3xl font-bold text-center mb-10 text-emerald-600">My Latest Projects</h2>
            <p data-aos="zoom-out" className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
                Here are some of my recent web development projects that showcase my skills in frontend and full-stack development.
            </p>


            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 px-4  mx-auto">
                {projects.map(project => (
                    <div data-aos="zoom-in" key={project.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
                        <img src={project.image} alt={project.title} className="w-full max-h-96 object-cover rounded mb-4" />
                        <h3 className="text-xl font-semibold text-emerald-600">{project.title}</h3>
                        <button
                            onClick={() => setSelectedProject(project)}
                            className="btn btn-sm btn-outline btn-primary mt-3"
                        >
                            Live Preview
                        </button>
                    </div>
                ))}
            </div>

            {/* DaisyUI Modal */}
            {selectedProject && (
                <>
                    <input type="checkbox" id="livePreviewModal" className="modal-toggle" checked readOnly />
                    <div className="modal">
                        <div className="modal-box max-w-[90%] w-full h-[80vh] p-0 overflow-hidden">
                            <iframe
                                src={selectedProject.liveLink}
                                title="Live Project Preview"
                                className="w-full h-full border-0"
                            ></iframe>
                            <div className="modal-action absolute -top-6 right-0 ">
                                <label htmlFor="livePreviewModal" className="btn btn-sm hover:bg-red-200" onClick={() => setSelectedProject(null)}>
                                    <IoIosCloseCircle size={30} className='hover:text-red-500'/>
                                </label>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default MyLatestProject;
