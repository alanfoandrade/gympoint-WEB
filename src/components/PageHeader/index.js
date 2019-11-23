import React from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import { Content } from './styles';

export default function PageHeader({ title, action, createUri }) {
  return (
    <Content>
      <strong>{title}</strong>
      <aside>
        <Link to={createUri}>
          <MdAdd size={20} />
          {action}
        </Link>
      </aside>
    </Content>
  );
}
