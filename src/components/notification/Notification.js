import {useContext} from 'react';
import NotificationContext from '../context/NotificationContext';



const Notification = () => {


    const {notification} = useContext(NotificationContext)

    return(
        <div style={{color: notification.severity === 'error' ? 'red' : 'green'}}>
            {notification.mensaje}
        </div>
    )
}

export default Notification;