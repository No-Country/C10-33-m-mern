import React from 'react';
import {Container, Title} from './styles';
import {useSelector} from 'react-redux';
import NewsList from '../../components/NewsList';

const News = () => {
  const state = useSelector(state => state);
  const {news: NewsData, scores, user: userState} = state;

  return (
    <Container>
      <NewsList data={NewsData} />
    </Container>
  );
};

export default News;
