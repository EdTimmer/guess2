import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import pyramids from '../images/pyramids.jpg';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 63,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

const Image = ({modalOpen, handleClose, modalOpacity, classes}) => {
  return (
    <div>     

      <Modal
        open={modalOpen}
        onClose={handleClose}          
      >
        
          <div style={{marginLeft: "30rem", marginTop: "12rem", transition: 'opacity 2s ease-in-out', opacity: modalOpacity}} className={classes.paper}>

          <img src={pyramids} style={{ height: '500px', width: '500px' }} alt="reward" />
  
          </div>      
        
      </Modal>
    </div>
  );
}


Image.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ImageModal = withStyles(styles)(Image);

export default ImageModal;
