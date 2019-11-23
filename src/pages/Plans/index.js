import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '~/components/Container';
import Table from '~/components/Table';
import PageHeader from '~/components/PageHeader';

import { planListRequest } from '~/store/modules/plans/actions';

export default function Plans() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function loadPlans() {
      await dispatch(planListRequest());
    }
    loadPlans();
  }, [dispatch]);

  const plans = useSelector(state => state.plans.list);
  return (
    <>
      <PageHeader
        title="Gerenciamento de planos"
        action="CADASTRAR"
        createUri="/create-plan"
      />
      <Container>
        <Table array={plans} type={plans} />
      </Container>
    </>
  );
}
