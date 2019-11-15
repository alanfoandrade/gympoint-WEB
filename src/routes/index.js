import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '~/pages/Login';
import Students from '~/pages/Students';
import Plans from '~/pages/Plans';
import Help from '~/pages/Help';
import Enrollments from '~/pages/Enrollments';

import StudentForm from '~/pages/Students/StudentForm';
import PlanForm from '~/pages/Plans/PlanForm';
import EnrollmentForm from '~/pages/Enrollments/EnrollmentForm';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/students" component={Students} isPrivate />
      <Route path="/create-student" component={StudentForm} isPrivate />
      <Route exact path="/edit-student/:id" component={StudentForm} isPrivate />
      <Route path="/plans" component={Plans} isPrivate />
      <Route path="/create-plan" component={PlanForm} isPrivate />
      <Route exact path="/edit-plan/:id" component={PlanForm} isPrivate />
      <Route path="/enrollments" component={Enrollments} isPrivate />
      <Route
        exact
        path="/create-enrollment"
        component={EnrollmentForm}
        isPrivate
      />
      <Route path="/help" component={Help} isPrivate />
    </Switch>
  );
}
