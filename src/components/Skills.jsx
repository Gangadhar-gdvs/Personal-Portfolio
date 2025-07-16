import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

// Devicon classNames for each technology
const techSkills = [
  { name: 'HTML', icon: 'devicon-html5-plain colored' },
  { name: 'CSS', icon: 'devicon-css3-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'React', icon: 'devicon-react-original colored' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
  { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
  { name: 'Flutter', icon: 'devicon-flutter-plain colored' },
  { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
  { name: 'Dart', icon: 'devicon-dart-plain colored' },
  { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
  { name: 'NestJS', icon: 'devicon-nestjs-plain colored' },
  { name: 'NextJS', icon: 'devicon-nextjs-plain colored' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'BootStrap', icon: 'devicon-bootstrap-plain colored' },
  { name: 'Tailwind', icon: 'devicon-tailwindcss-plain colored' },
  { name: 'Git', icon: 'devicon-git-plain colored' },
   { name: 'GitHub', icon: 'devicon-github-plain colored' },
  { name: 'Canva', icon: 'devicon-canva-plain colored' },
];

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
  hover: {
    scale: 1.05,
    rotate: 2,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
};

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
        color: '#e2e8f0',
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        textAlign: 'center',
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
      
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: '#38bdf8',
          mb: 2,
          position: 'relative',
          zIndex: 1,
          fontFamily: 'Ubuntu',
          // textTransform: 'uppercase',
          letterSpacing: 2,
        }}
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </Typography>
      
      <Box
        sx={{
          width: { xs: '80px', md: '120px' },
          height: '4px',
          background: 'linear-gradient(90deg, #38bdf8, #818cf8)',
          mx: 'auto',
          mb: 6,
          borderRadius: 2,
        }}
        component={motion.div}
        initial={{ width: 0 }}
        animate={{ width: '120px' }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      
      <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
        {techSkills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={2.4} key={index}>
            <motion.div
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    width: { xs: 60, md: 80 },
                    height: { xs: 60, md: 80 },
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                    border: '1px solid rgba(56, 189, 248, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'box-shadow 0.3s ease-out',
                    '&:hover': {
                      boxShadow: '0px 0px 15px rgba(56, 189, 248, 0.5)',
                    },
                  }}
                >
                  <Box
                    component="i"
                    className={skill.icon}
                    sx={{ fontSize: { xs: 32, md: 40 } }}
                  />
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 500,
                    color: '#e2e8f0',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    mt: 1.5,
                  }}
                >
                  {skill.name}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;