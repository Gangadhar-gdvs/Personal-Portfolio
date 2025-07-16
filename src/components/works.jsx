import React from 'react';
import { Box, Typography, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Work items with added tech stack
const works = [
  {
    title: 'Website Maintenance & Content Management',
    description:
      'Successfully managed and maintained the official website of JNTUACEP, ensuring seamless performance, timely content updates, and an intuitive user interface. Actively resolved technical issues, enhanced navigation structure, and implemented optimization strategies to ensure a reliable and engaging user experience for students, staff, and visitors.',
    icon: 'fa fa-paint-brush',
    link: 'https://jntuacep.ac.in/',
    techStack: [
      { name: 'HTML', icon: 'devicon-html5-plain colored' },
      { name: 'CSS', icon: 'devicon-css3-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'PHP', icon: 'devicon-php-plain colored' },
    ],
  },
  {
    title: 'Custom Web Application Development',
    description:
      'Designed and developed a bespoke web application for <strong>Comfort Floors and Bathrooms Ltd.</strong> to automate core business operations. The solution was engineered to meet their specific workflow requirements, improving operational efficiency, streamlining customer interactions, and enhancing overall business agility.',
    icon: 'fa fa-chart-line',
    link: 'https://comfortfloors.ie/',
    techStack: [
      { name: 'Tailwind', icon: 'devicon-tailwindcss-plain colored' },
      { name: 'React', icon: 'devicon-react-original colored' },
       { name: 'CSS', icon: 'devicon-css3-plain colored' },
    ],
  },
  {
    title: 'Web Application for TechKshatriyas',
    description:
      'A modern web application developed for the software startup company <strong>TechKshatriyas</strong>. This solution was tailored to streamline operations, enhance client interaction, and reflect the company’s tech vision. Visit the official site to explore more about the application and its offerings.',
    icon: 'fa fa-code',
    link: 'https://agnikulakshatriyasitsolutions.com/',
    techStack: [
      { name: 'NestJs', icon: 'devicon-nestjs-original colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'Tailwind', icon: 'devicon-tailwindcss-plain colored' },
    ],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: (i) => (i % 2 === 0 ? -50 : 50) },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: '0px 4px 15px rgba(56, 189, 248, 0.4)',
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.95 },
};

const Works = () => {
  return (
    <Box
      component={motion.section}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      id="works"
      sx={{
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
        color: '#e2e8f0',
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.2), transparent 70%)',
          zIndex: 0,
        }}
      />

      <Box sx={{ maxWidth: '1200px', mx: 'auto', position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: '#38bdf8',
            textAlign: 'center',
            mb: 2,
            // textTransform: 'uppercase',
            letterSpacing: 2,
          }}
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Latest Works
        </Typography>
        <Box
          sx={{
            width: { xs: '100px', md: '140px' },
            height: '4px',
            background: 'linear-gradient(90deg, #38bdf8, #818cf8)',
            mx: 'auto',
            mb: 8,
            borderRadius: 2,
          }}
          component={motion.div}
          initial={{ width: 0 }}
          animate={{ width: '120px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Timeline */}
        <Box
          sx={{
            position: 'relative',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: { xs: '50%', md: '50%' },
              width: '4px',
              height: '100%',
              background: 'linear-gradient(180deg, #38bdf8, #818cf8)',
              transform: 'translateX(-50%)',
              zIndex: 1,
            },
          }}
        >
          {works.map((work, index) => (
            <Box
              key={index}
              component={motion.div}
              variants={itemVariants}
              custom={index}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                alignItems: { xs: 'center', md: 'flex-start' },
                mb: 6,
                position: 'relative',
                zIndex: 2,
              }}
            >
              {/* Timeline Dot */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: '50%', md: '50%' },
                  top: { xs: '20px', md: '50%' },
                  transform: 'translate(-50%, -50%)',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#38bdf8',
                  border: '3px solid #1e293b',
                  zIndex: 3,
                  boxShadow: '0px 0px 10px rgba(56, 189, 248, 0.5)',
                }}
              />

              {/* Content */}
              <Box
                sx={{
                  width: { xs: '100%', md: '45%' },
                  p: 3,
                  background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                  borderRadius: 2,
                  border: '1px solid rgba(56, 189, 248, 0.2)',
                  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                  textAlign: { xs: 'center', md: 'left' },
                  mt: { xs: 4, md: 0 },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <i className={work.icon} style={{ fontSize: '28px', color: '#38bdf8' }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#e2e8f0' }}>
                    {work.title}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: '#94a3b8', mb: 2 }}
                  dangerouslySetInnerHTML={{ __html: work.description }}
                />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {work.techStack.map((tech, i) => (
                    <Chip
                      key={i}
                      icon={<i className={tech.icon} style={{ fontSize: '16px' }} />}
                      label={tech.name}
                      sx={{
                        background: 'rgba(56, 189, 248, 0.1)',
                        color: '#e2e8f0',
                        '&:hover': {
                          background: 'rgba(56, 189, 248, 0.2)',
                          boxShadow: '0px 0px 8px rgba(56, 189, 248, 0.3)',
                        },
                      }}
                      component={motion.div}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    />
                  ))}
                </Box>
                <Button
                  variant="outlined"
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderColor: '#38bdf8',
                    color: '#38bdf8',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    borderRadius: 2,
                    '&:hover': {
                      borderColor: '#60a5fa',
                      background: 'rgba(56, 189, 248, 0.1)',
                    },
                  }}
                  component={motion.a}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Visit Website
                </Button>
              </Box>

              {/* Spacer for alternating layout */}
              <Box sx={{ width: { xs: '0', md: '10%' } }} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Works;