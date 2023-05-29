import React from 'react';
import {Container, TabLists} from './styles';
import {useSelector} from 'react-redux';
import SwipeableTabs from '../../components/SwipeableTabs';
import UserInfoForm from './components/UserInfoForm';
import UserPoints from './components/UserPoints';
import MyGrowth from './components/MyGrowth';
import UserInfoHeader from './components/UserInfoHeader';
import Movements from './components/Movements';

const Profile = () => {
  const {user, scores} = useSelector(state => state);
  const {currentPoints, currentBottles, currentWeight} = scores;
  const {name} = user;

  const dataArray = [
    {
      key: 1,
      Component: UserInfoForm,
      title: 'Mis Datos',
      data: {user},

      // callback:
    },
    {
      key: 2,
      Component: UserPoints,
      title: 'Mi puntaje',
      data: {scores},
      currentPoints,
      // callback:
    },
    {
      key: 3,
      Component: MyGrowth,
      title: 'Mi crecimiento',
      data: {scores},
      currentPoints,
      // callback:
    },
    {
      key: 4,
      Component: Movements,
      title: 'Movimientos',
      currentPoints,
      // callback:
    },
  ];

  return (
    <Container>
      <UserInfoHeader name={name} />
      <TabLists>
        <SwipeableTabs data={dataArray} />
      </TabLists>
    </Container>
  );
};

export default Profile;
