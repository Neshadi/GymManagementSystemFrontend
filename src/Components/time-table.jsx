import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 0),
    backgroundColor: theme.palette.background.default,
    minHeight:'600px',
    transition: 'transform 0.3s ease', 
    '&:hover': {
      transform: 'scale(1.15)', 
    },
  },
  title: {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  table: {
    minWidth: 650,
    // transition: 'transform 0.3s ease', 
    // '&:hover': {
    //   transform: 'scale(1.05)', 
    // },
  },
  tableHead: {
    // backgroundColor: theme.palette.info.main,
  },
  tableCellHead: {
    color: theme.palette.common.white,
    //  backgroundColor: theme.palette.info.main,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableCell: {
    textAlign: 'center',
    // color: theme.palette.common.white,
  },
  classType: {
    color: theme.palette.common.white,
    padding: theme.spacing(1),
    borderRadius: 4,
    display: 'inline-block',
    width: '100%',
  },
  yoga: {
    backgroundColor: '#264653',
  },
  hiit: {
    backgroundColor: '#2a9d8f',
  },
  pilates: {
    backgroundColor: '#e9c46a',
  },
  cardio: {
    backgroundColor: '#f4a261',
  },
  rest: {
    // backgroundColor: theme.palette.grey[500],
    backgroundColor: '#e76f51'
  },
}));

const GymTimeTable = () => {
  const classes = useStyles();

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
        return classes.yoga;
      case 'HIIT':
        return classes.hiit;
      case 'Pilates':
        return classes.pilates;
      case 'Cardio':
        return classes.cardio;
      case 'Rest':
        return classes.rest;
      default:
        return '';
    }
  };

  return (
    <div className={classes.root} id="timetable">
      <Container maxWidth="md">
        <Typography variant="h4" className={classes.title}>
          FITNESS SCHEDULE
        </Typography>
        <Paper>
          <Table className={classes.table} aria-label="gym timetable">
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell className={classes.tableCellHead}>Time</TableCell>
                <TableCell className={classes.tableCellHead}>Monday</TableCell>
                <TableCell className={classes.tableCellHead}>Tuesday</TableCell>
                <TableCell className={classes.tableCellHead}>Wednesday</TableCell>
                <TableCell className={classes.tableCellHead}>Thursday</TableCell>
                <TableCell className={classes.tableCellHead}>Friday</TableCell>
                <TableCell className={classes.tableCellHead}>Saturday</TableCell>
                <TableCell className={classes.tableCellHead}>Sunday</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {timetable.map((slot, index) => (
                <TableRow key={index}>
                  <TableCell className={classes.tableCell}>{slot.time}</TableCell>
                  <TableCell className={`${classes.tableCell} ${getClassTypeClass(slot.Monday)}`}>
                    {slot.Monday}
                  </TableCell>
                  <TableCell className={`${classes.tableCell} ${getClassTypeClass(slot.Tuesday)}`}>
                    {slot.Tuesday}
                  </TableCell>
                  <TableCell className={`${classes.tableCell} ${getClassTypeClass(slot.Wednesday)}`}>
                    {slot.Wednesday}
                  </TableCell>
                  <TableCell className={`${classes.tableCell} ${getClassTypeClass(slot.Thursday)}`}>
                    {slot.Thursday}
                  </TableCell>
                  <TableCell className={`${classes.tableCell} ${getClassTypeClass(slot.Friday)}`}>
                    {slot.Friday}
                  </TableCell>
                  <TableCell className={`${classes.tableCell} ${getClassTypeClass(slot.Saturday)}`}>
                    {slot.Saturday}
                  </TableCell>
                  <TableCell className={`${classes.tableCell} ${getClassTypeClass(slot.Sunday)}`}>
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
