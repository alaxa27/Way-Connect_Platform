import React from "react";
import { Modal, ModalBody} from "reactstrap";
import Countdown from 'react-sexy-countdown'

const ComingSoon = () => {
  const date = new Date(Date.now());
  date.setDate(date.getDate() + 21);
  return (
    <Modal isOpen={true} className="modal-body">
      <ModalBody>
        <div className="modal-body__heading">
          <img src="../img/shiba-01.png" alt="Logo" className="modal-body__img" />
          <div className="modal-body__title modal-body__title--big mb-3">
            Coming Soon
          </div>
          <div className="modal-body__title">
            Vouz pourrez beintot creer votre campagne publicitaire
          </div>
        </div>                    
        <div className="modal-body__content my-4">
        <Countdown
          date={date.toString()}
          onEndCountdown={ (count) => console.log(count) }
          displayText={{
            Days: 'Days',
            Hours: 'Hours',
            Min: 'Minutes',
            Sec: 'Seconds'
          }}
        />
        </div>
      </ModalBody>
    </Modal>
  );
}

ComingSoon.propTypes = {
};

export default ComingSoon;