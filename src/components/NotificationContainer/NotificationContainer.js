import React from 'react';
import { connect } from 'react-redux';
import { selectItems } from "../../redux/notifications/notification.selectors";

import { Container } from "./notification.styles";
import Notification from '../Notification/Notification';

const NotificationsContainer = ({notes}) => {
  return(
    <Container notes={notes}>
      {
        notes.map(n => <Notification note={n} key={n.id} level={n.level} />)
      }
    </Container>
  )
}

const mapStateToProps = state => ({
  notes: selectItems(state)
}) 
export default connect(mapStateToProps)(NotificationsContainer);