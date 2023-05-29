import React, {useEffect, useState} from 'react';
import {Container, TabLists} from './styles';
import {useSelector} from 'react-redux';
import ScoresInfo from '../../components/ScoresInfo';
import SwapList from '../../components/SwapList';
import SwipeableTabs from '../../components/SwipeableTabs';
import ModalComponent from '../../components/Modal';
import {getCurrentLevel} from '../../utils';

const SwapData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '1 Pasaje',
    entityName: 'nombre de entidad',
    entityId: '#111',
    points: 10,
    icon: require('../../../assets/Icons/ticket.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    entityName: 'nombre de entidad',
    entityId: '#111',
    title: 'Alquiler de bici',
    points: 15,
    icon: require('../../../assets/Icons/ticket.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Cena para dos',
    entityName: 'nombre de entidad',
    entityId: '#111',
    points: 20,
    icon: require('../../../assets/Icons/ticket.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Box gift',
    entityName: 'nombre de entidad',
    entityId: '#111',
    points: 20,
    icon: require('../../../assets/Icons/ticket.png'),
  },
];

const DonateData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Greenpeace',
    entity: 'nombre de entidad',
    entityId: '#111',
    points: 50,
    icon: require('../../../assets/Icons/donateHand.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'El cambio posible',
    entityName: 'nombre de entidad',
    entityId: '#111',
    points: 15,
    icon: require('../../../assets/Icons/donateHand.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Hogar sin techo',
    entityName: 'nombre de entidad',
    entityId: '#111',
    points: 20,
    icon: require('../../../assets/Icons/donateHand.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Caritas',
    entityName: 'nombre de entidad',
    entityId: '#111',
    points: 20,
    icon: require('../../../assets/Icons/donateHand.png'),
  },
];

const Swap = () => {
  const [showModal, setShowModal] = useState(false);
  const scores = useSelector(state => state.scores);
  const {currentPoints, currentBottles, currentWeight} = scores;

  // implement useSelector of SwapList's DATA
  // 1. swap list
  // 2. donation list

  const dataArray = [
    {
      key: 1,
      Component: SwapList,
      title: 'Canjear',
      data: SwapData,
      currentPoints,
      // callback:
    },
    {
      key: 2,
      Component: SwapList,
      title: 'Donar',
      data: DonateData,
      currentPoints,
      // callback:
    },
  ];

  return (
    <Container>
      <ScoresInfo
        currentPoints={currentPoints}
        currentLevel={getCurrentLevel(currentPoints).label}
        icon={getCurrentLevel(currentPoints).icon}
      />
      <TabLists>
        <SwipeableTabs data={dataArray} />
      </TabLists>

      {/*  Not implemented yet */}
      {/* <ModalComponent
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}
        onBackButtonPress={() => setShowModal(false)}>
        <ScoresInfo
          currentPoints={currentPoints}
          currentLevel={getCurrentLevel(currentPoints).label}
          icon={getCurrentLevel(currentPoints).icon}
        />
      </ModalComponent> */}
    </Container>
  );
};

export default Swap;
