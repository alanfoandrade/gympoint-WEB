import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Content, Profile } from './styles';
import headerlogo from '~/assets/headerlogo.svg';

import { logout } from '~/store/modules/auth/actions';

export default function Header() {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }
  return (
    <Container>
      <Content>
        <nav>
          <img src={headerlogo} alt="Gympoint" />
          <Link to="/students">ALUNOS</Link>
          <Link to="/plans">PLANOS</Link>
          <Link to="/enrollments">MATRÍCULAS</Link>
          <Link to="/help">PEDIDOS DE AUXÍLIO</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{user.name}</strong>
              <button type="button" onClick={handleLogout}>
                sair do sistema
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
