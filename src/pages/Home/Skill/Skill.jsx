import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { SiFirebase, SiExpress, SiTailwindcss, SiMongodb } from 'react-icons/si';

const Skill = () => {
  const skills = [
    {
      icon: <FaJs className="w-full h-full" />,
      title: 'JavaScript',
      description: 'Modern ES6+ syntax, async programming, and DOM manipulation',
    },
    {
      icon: <FaReact className="w-full h-full" />,
      title: 'React',
      description: 'Hooks, Context API, React Router, and component lifecycle',
    },
    {
      icon: <SiFirebase className="w-full h-full" />,
      title: 'Firebase',
      description: 'Authentication, Firestore, Realtime Database, and Cloud Functions',
    },
    {
      icon: <SiExpress className="w-full h-full" />,
      title: 'Express.js',
      description: 'RESTful APIs, middleware, and server-side routing',
    },
    {
      icon: <SiTailwindcss className="w-full h-full" />,
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development',
    },
    {
      icon: <SiMongodb className="w-full h-full" />,
      title: 'MongoDB',
      description: 'NoSQL database, Mongoose ODM, and aggregation pipelines',
    },
    {
      icon: <FaNodeJs className="w-full h-full" />,
      title: 'Node.js',
      description: 'Server-side JavaScript, NPM ecosystem, and event-driven architecture',
    },
    {
      icon: <FaCss3Alt className="w-full h-full" />,
      title: 'CSS',
      description: 'Flexbox, Grid, animations, and responsive design principles',
    },
    {
      icon: <FaHtml5 className="w-full h-full" />,
      title: 'HTML',
      description: 'Semantic markup, accessibility, and modern HTML5 features',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        type: 'spring',
        stiffness: 200,
      },
    },
  };

  return (
    <div className="p-4 md:p-8">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center text-emerald-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Professional Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >
            <div className="card-body items-center text-center">
              <motion.div
                className="w-16 h-16 mb-4 text-4xl text-emerald-500"
                variants={iconVariants}
                whileHover="hover"
              >
                {skill.icon}
              </motion.div>

              <h3 className="card-title text-xl">{skill.title}</h3>
              <p className="text-base-content/70">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skill;
