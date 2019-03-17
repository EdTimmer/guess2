import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import pyramids from '../images/pyramids.jpg';

const styles = theme => ({
  paper: {
    // position: 'absolute',
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "12rem",
    marginBottom: "auto",
    // width: theme.spacing.unit * 63,
    width: "40rem",
    height: "40rem",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    // padding: theme.spacing.unit * 4,
    outline: 'none',
    display: "flex",    
    justifyContent: "center",
    alignItems: "center",
    transition: 'opacity 0.5s ease-in-out'
  },
});

const Image = ({modalOpen, handleClose, modalOpacity, classes}) => {
  // console.log('modalOpacity :', modalOpacity)
  return (
    <div>     

      <Modal
        open={modalOpen}
        onClose={handleClose}   
        style={{transition: 'all 0.5s ease-in-out', opacity: modalOpacity}}
      >
        
          <div style={{opacity: modalOpacity}} className={classes.paper}>
          
          <img src={pyramids} style={{ height: '35rem', width: '35rem' }} alt="reward" />
  
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
