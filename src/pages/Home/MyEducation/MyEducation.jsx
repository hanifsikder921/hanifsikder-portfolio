import React from 'react';

const MyEducation = () => {
    const educationData = [
        {
            degree: 'JSC (Junior School Certificate)',
            institution: 'Chenchri Rampur Secondary High School',
            year: '2014'
        },
        {
            degree: 'SSC (Secondary School Certificate)',
            institution: 'Chenchri Rampur Secondary High School',
            year: '2017'
        },
        {
            degree: 'HSC (Higher Secondary Certificate)',
            institution: 'Govt. Tofazzol Hossen Maink Mia Degree College',
            year: '2020'
        },
        {
            degree: 'BA (Bachelor of Arts)',
            institution: 'Amanullah University, Bangladesh',
            year: '2025'
        }
    ];

    return (
        <div className="py-10 bg-gray-100 my-15 rounded-lg">
            <h2 data-aos="flip-left" className="text-3xl font-bold text-center mb-8 text-emerald-600">My Education</h2>
            <p data-aos="zoom-in" className="text-center text-gray-600 md:max-w-2xl mx-auto mb-8">
                My educational journey has built a strong foundation for both technical knowledge and creative thinking, enabling me to grow as a modern web developer.
            </p>

            <div className="max-w-7xl mx-auto px-4 grid gap-6 md:grid-cols-2">
                {educationData.map((edu, index) => (
                    <div
                        data-aos="fade-up"
                        key={index}
                        className="bg-white rounded-lg shadow p-6 border-l-4 border-emerald-500 md:min-h-auto min-h-56 flex flex-col items-center md:justify-start md:items-start justify-center"
                    >
                        <h3 className="text-xl font-semibold text-emerald-600 mb-1 text-center">{edu.degree}</h3>
                        <p className="text-gray-700 text-center">{edu.institution}</p>
                        <p className="text-gray-500 text-sm">Passing Year: {edu.year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyEducation;
