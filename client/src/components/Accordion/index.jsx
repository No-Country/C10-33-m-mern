import * as React from 'react';
import {View, ScrollView, Image} from 'react-native';
import {List} from 'react-native-paper';
import {Container, Group, AccordionItem} from './styles';

const Img = () => {
  <View>
    <Image source={require('../../../assets/Icons/down.png')} />
  </View>;
};
const Accordion = () => (
  <Container>
    <ScrollView>
      <Group>
        <AccordionItem
          title="¿De qué se trata la app?"
          id="1"
          titleStyle={{fontSize: 17, fontWeight: 800, letterSpacing: 0.1}}
          right={props => (
            <List.Icon
              {...props}
              icon={require('../../../assets/Icons/down.png')}
            />
          )}>
          <List.Item
            titleNumberOfLines={4}
            title="Nuestra app de reciclaje recompensa a los usuarios por reciclar botellas de plástico en nuestros centros. Los usuarios ganan puntos que pueden canjear por beneficios como pasajes de transporte o donaciones a organizaciones ecológicas como Caritas, TECHO y Greenpeace.
¡Recicla y gana puntos mientras ayudas al medio ambiente!  1"
          />
        </AccordionItem>
        <AccordionItem
          title="Nuestro compromiso con el medio ambiente"
          id="2"
          titleStyle={{fontSize: 17, fontWeight: 700, letterSpacing: 0.1}}
          right={props => (
            <List.Icon
              {...props}
              icon={require('../../../assets/Icons/down.png')}
            />
          )}>
          <List.Item
            title="En GreenCycle nos comprometemos a reducir el impacto ambiental del plástico y el vidrio. A través de nuestra app de reciclaje, in centivamos a las personas a reciclar más frecuentemente y promovemos un estilo de vida más sostenible."
            titleNumberOfLines={4}
          />
        </AccordionItem>
        <AccordionItem
          title="¿Cómo hago crecer mi semilla?"
          id="3"
          titleStyle={{fontSize: 17, fontWeight: 700, letterSpacing: 0.1}}
          right={props => (
            <List.Icon
              {...props}
              icon={require('../../../assets/Icons/down.png')}
            />
          )}>
          <List.Item
            title="Cada vez que recicles botellas, ganarás puntos y tu semilla crecerá. Sigue reciclando y sumando puntos para alcanzar el siguiente nivel y obtener más beneficios."
            titleNumberOfLines={4}
          />
        </AccordionItem>

        <AccordionItem
          title="¿Tiene algún costo el uso de la app?"
          id="4"
          titleStyle={{fontSize: 17, fontWeight: 700, letterSpacing: 0.1}}
          right={props => (
            <List.Icon
              {...props}
              icon={require('../../../assets/Icons/down.png')}
            />
          )}>
          <List.Item
            title="No, nuestra app de reciclaje es completamente gratuita para los usuarios. Puedes descargarla y usarla para reciclar botellas de plástico en nuestros centros, ganar puntos y canjearlos por beneficios, sin pagar nada."
            titleNumberOfLines={4}
          />
        </AccordionItem>

        <AccordionItem
          title="¿En qué países funciona GreenCycle?"
          id="5"
          titleStyle={{fontSize: 16, letterSpacing: 0.1, fontWeight: 700}}
          right={props => (
            <List.Icon
              {...props}
              icon={require('../../../assets/Icons/down.png')}
            />
          )}>
          <List.Item
            title="Actualmente, nuestra app de reciclaje está disponible en Argentina, México, Colombia y Perú. Estamos trabajando para expandirnos a más países en el futuro, y esperamos poder llegar a más usuarios que quieran contribuir al cuidado del medio ambiente "
            titleNumberOfLines={4}
          />
        </AccordionItem>

        <AccordionItem
          title="¿Cómo puedo eliminar mi cuenta?"
          id="6"
          titleStyle={{fontSize: 16, letterSpacing: 0.1, fontWeight: 700}}
          right={props => (
            <List.Icon
              {...props}
              icon={require('../../../assets/Icons/down.png')}
            />
          )}>
          <List.Item
            title="Si deseas eliminar tu cuenta en nuestra app de reciclaje, simplemente accede a tu perfil y selecciona la opción 'Eliminar cuenta'. Asegúrate de haber canjeado tus puntos antes de hacerlo, ya que una vez eliminada la cuenta, perderás todo tu progreso en la app."
            titleNumberOfLines={4}
          />
        </AccordionItem>
      </Group>
    </ScrollView>
  </Container>
);

export default Accordion;
