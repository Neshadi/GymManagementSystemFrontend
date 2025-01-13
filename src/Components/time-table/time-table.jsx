import { Container, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import React from 'react';
import './time-table.css';

const GymTimeTable = () => {
  const timetable = [
    { time: '08:00 - 10:00 AM', Monday: 'Yoga', Tuesday: 'Pilates', Wednesday: 'Yoga', Thursday: 'Pilates', Friday: 'Yoga', Saturday: 'Pilates', Sunday: 'Rest' },
    { time: '10:00 - 12:00 PM', Monday: 'HIIT', Tuesday: 'Cardio', Wednesday: 'HIIT', Thursday: 'Cardio', Friday: 'HIIT', Saturday: 'Cardio', Sunday: 'Rest' },
    { time: '12:00 - 02:00 PM', Monday: 'Pilates', Tuesday: 'HIIT', Wednesday: 'Pilates', Thursday: 'HIIT', Friday: 'Pilates', Saturday: 'HIIT', Sunday: 'Rest' },
    { time: '02:00 - 04:00 PM', Monday: 'Cardio', Tuesday: 'Yoga', Wednesday: 'Cardio', Thursday: 'Yoga', Friday: 'Cardio', Saturday: 'Yoga', Sunday: 'Rest' },
    { time: '04:00 - 06:00 PM', Monday: 'Yoga', Tuesday: 'Pilates', Wednesday: 'Yoga', Thursday: 'Pilates', Friday: 'Yoga', Saturday: 'Pilates', Sunday: 'Rest' },
    { time: '06:00 - 08:00 PM', Monday: 'HIIT', Tuesday: 'Cardio', Wednesday: 'HIIT', Thursday: 'Cardio', Friday: 'HIIT', Saturday: 'Cardio', Sunday: 'Rest' },
    { time: '08:00 - 10:00 PM', Monday: 'Pilates', Tuesday: 'HIIT', Wednesday: 'Pilates', Thursday: 'HIIT', Friday: 'Pilates', Saturday: 'HIIT', Sunday: 'Rest' },
  ];

  const getClassTypeClass = (className) => {
    switch (className) {
      case 'Yoga':
        return 'yoga';
      case 'HIIT':
        return 'hiit';
      case 'Pilates':
        return 'pilates';
      case 'Cardio':
        return 'cardio';
      case 'Rest':
        return 'rest';
      default:
        return '';
    }
  };

  return (
    <div className="root" id="timetable">
      <Container maxWidth="md">
        <Typography variant="h4" className="title">
          FITNESS SCHEDULE
        </Typography>
        <br></br>
        <Paper>
          <Table className="table" aria-label="gym timetable">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell className="tableCellHead">Time</TableCell>
                <TableCell className="tableCellHead">Monday</TableCell>
                <TableCell className="tableCellHead">Tuesday</TableCell>
                <TableCell className="tableCellHead">Wednesday</TableCell>
                <TableCell className="tableCellHead">Thursday</TableCell>
                <TableCell className="tableCellHead">Friday</TableCell>
                <TableCell className="tableCellHead">Saturday</TableCell>
                <TableCell className="tableCellHead">Sunday</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {timetable.map((slot, index) => (
                <TableRow key={index}>
                  <TableCell className="tableCell">{slot.time}</TableCell>
                  <TableCell className={`tableCell ${getClassTypeClass(slot.Monday)}`}>
                    {slot.Monday}
                  </TableCell>
                  <TableCell className={`tableCell ${getClassTypeClass(slot.Tuesday)}`}>
                    {slot.Tuesday}
                  </TableCell>
                  <TableCell className={`tableCell ${getClassTypeClass(slot.Wednesday)}`}>
                    {slot.Wednesday}
                  </TableCell>
                  <TableCell className={`tableCell ${getClassTypeClass(slot.Thursday)}`}>
                    {slot.Thursday}
                  </TableCell>
                  <TableCell className={`tableCell ${getClassTypeClass(slot.Friday)}`}>
                    {slot.Friday}
                  </TableCell>
                  <TableCell className={`tableCell ${getClassTypeClass(slot.Saturday)}`}>
                    {slot.Saturday}
                  </TableCell>
                  <TableCell className={`tableCell ${getClassTypeClass(slot.Sunday)}`}>
                    {slot.Sunday}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </div>
  );
};

export default GymTimeTable;
