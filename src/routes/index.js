import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '~/pages/Login';
import Students from '~/pages/Students';
import Plans from '~/pages/Plans';
import Help from '~/pages/Help';
import Enrollments from '~/pages/Enrollments';

import StudentForm from '~/components/StudentForm';

const student = {
  name: 'arthur',
  email: 'arthurdsb_@hotmail.com',
};

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route
        path="/create-student"
        component={() => <StudentForm student={student} />}
        isPrivate
      />
      <Route path="/students" component={Students} isPrivate />
      <Route path="/enrollments" component={Enrollments} isPrivate />
      <Route path="/plans" component={Plans} isPrivate />
      <Route path="/help" component={Help} isPrivate />
    </Switch>
  );
}
