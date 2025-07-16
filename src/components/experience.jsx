import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab';
import {
  Typography,
  Paper,
  Box,
  Button
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Zyrone Energy',
    date: 'May 2025 – Present',
    description: 'Building scalable full-stack applications with efficient frontend and backend architectures. Responsible for delivery and deployment.',
    icon: <WorkIcon />,
    color: '#4caf50',
    techStack: ['Flutter', 'Firebase', 'Dart', 'NestJS', 'Angular'],
  },
  {
    role: 'Intern - Full Stack Developer',
    company: 'Zyrone Energy',
    date: 'March 2025 – April 2025',
    description: 'Worked on web and mobile application modules. Gained hands-on experience with modern full-stack technologies.',
    icon: <WorkIcon />,
    color: '#00bcd4',
    techStack: ['Flutter', 'Firebase', 'Dart', 'NestJS'],
  },
  
];

const CustomTimeline = () => {
  return (
    <div style={{ padding: '60px 20px', backgroundColor: '#0f172a', minHeight: '100vh' }} id='experience'>
      <Typography
  variant="h4"
  align="center"
  gutterBottom
  style={{ fontWeight: 700, color: '#e0f2fe', marginBottom: '10px', fontFamily: 'Ubuntu'}}
>
 Experience
</Typography>

<div
  style={{
    width: '140px',
    height: '4px',
    backgroundColor: '#ffffff',
    margin: '0 auto',
    marginBottom: '40px',
    borderRadius: '2px',
  }}
></div>


      <Timeline position="right" sx={{ maxWidth: '900px', margin: '0 auto' }}>
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ flex: 0.25, paddingTop: '18px' }}
            >
              <Typography variant="body2" color="#94a3b8">
                {exp.date}
              </Typography>
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: exp.color }}>
                {exp.icon}
              </TimelineDot>
              {index !== experiences.length - 1 && (
                <TimelineConnector sx={{ backgroundColor: exp.color }} />
              )}
            </TimelineSeparator>

            <TimelineContent>
              <Paper
                elevation={4}
                sx={{
                  backgroundColor: '#1e293b',
                  color: '#f8fafc',
                  padding: '16px 24px',
                  borderRadius: '12px',
                }}
              >
                <Typography variant="h6" sx={{ color: exp.color, fontWeight: 600 }}>
                  {exp.role}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: '#38bdf8' }}>
                  {exp.company}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 1.5, color: '#cbd5e1' }}>
                  {exp.description}
                </Typography>

                <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
                  {exp.techStack.map((tech, i) => (
                    <Button
                      key={i}
                      variant="outlined"
                      size="small"
                      sx={{
                        color: '#f1f5f9',
                        borderColor: '#64748b',
                        textTransform: 'none',
                        '&:hover': {
                          borderColor: exp.color,
                          backgroundColor: 'rgba(255,255,255,0.05)',
                        },
                      }}
                    >
                      {tech}
                    </Button>
                  ))}
                </Box>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default CustomTimeline;
