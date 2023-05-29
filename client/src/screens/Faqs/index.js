import React from 'react';
import {Container, Title} from './styles';
import Accordion from '../../components/Accordion';
import SwipeableTabs from '../../components/SwipeableTabs';
import {useSelector} from 'react-redux';
import NewsList from '../../components/NewsList';
import Contact from '../../components/Contact';

const FAQs = ({navigation, route}) => {
  console.log('en FAQs');
  const state = useSelector(state => state);
  const {news: NewsData, scores, user: userState} = state;

  console.log(route.params);
  const {swipeId} = route?.params;

  const dataArray = [
    {
      key: 1,
      Component: NewsList,
      title: 'Novedades',
      data: NewsData,
      // callback:
    },
    {
      key: 2,
      Component: Accordion,
      title: 'FAQs',
      data: [],
      // callback:
    },
    {
      key: 3,
      Component: Contact,
      title: 'Contáctenos',
      data: [],
      // callback:
    },
  ];

  return (
    <Container>
      <SwipeableTabs data={dataArray} selectedTab={swipeId} />
    </Container>
  );
};

export default FAQs;
