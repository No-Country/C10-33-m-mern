import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
<<<<<<< HEAD:client/src/screens/Donate/styles.js
  justify-content: space-between;
  align-items: center;
  flex-direction:column ;
  height: 100%;
  width: 100%;
  background-color: #FBFDF9;
`;


const NavbarHome=styled.View`
  width: 100%;
  height: 50px;
  background: #6AC52D;
  display: flex;
  align-items:center;  
  flex-direction:row;
  justify-content:space-around;
`
const ProfileBtn=styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background: yellow;
  margin-left:5px ;
  display: flex;
  border-radius:30px ;
  justify-content: center;
  align-items:center;
`
const TitleHome = styled.Text`
  color: #000000;
  font-size: 24px;
  width: 150px;
  text-align:center;
  height: auto;
  display: flex;
  margin :auto;
  justify-content: space-between;
`;
const DotsBtn=styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background: transparent;
  color: black;
  transform:rotate(90deg);
  display: flex;
  justify-content:center;
  align-items:center;
  margin-right:5px;  
=======
  background-color: #fff;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 30;
`;

const Title = styled.Text`
  font-size: 20px;
>>>>>>> claudio-swap-screen:client/src/components/Modal/styles.js
`;
const BoxPointsData=styled.View`
  height: 20%;
  width: 90%;
  border: 1px solid #6AC52D;
  border-Radius:15px ;
  margin-top:20px;
`
const TicketsAviable=styled.View`
  width: 90%;
  height: 65% ;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
`
const TagsContainer=styled.View`
    width: 90%;
    height: 20%;
    display: flex;
    flex-Direction:row;
    align-Items:center;
    justify-Content:space-around;
`
const BoxTickets=styled.View`
  height: 140px;
  width: 100%;
  border: 1px solid #6AC52D;
  border-Radius:15px ;
  display :flex ;
  margin-top: 30px ;
  flex-Direction:row;
  justify-Content:space-around;
`
const ContainerGiftData=styled.View`
  width: 40%;
  height: 100%;
  display: flex;
  flex-Direction:column;
  justify-Content:space-around;
  align-Items:center;

`
export {Container, NavbarHome
        ,ProfileBtn,TitleHome
        ,DotsBtn,BoxPointsData
        ,TicketsAviable,TagsContainer
        ,BoxTickets,ContainerGiftData};
