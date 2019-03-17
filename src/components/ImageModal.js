import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import pyramids from '../images/pyramids.jpg';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';

const styles = theme => ({
  paper: {
    // position: 'absolute',
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10rem",
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

const Image = ({modalOpen, handleClose, modalOpacity, classes, imageNumber}) => {

  let imageArray = [img1, img2, img3, img4];
  let image = imageArray[imageNumber];

  return (
    <div>     

      <Modal
        open={modalOpen}
        onClose={handleClose}   
        style={{transition: 'all 0.5s ease-in-out', opacity: modalOpacity}}
      >
        
          <div style={{opacity: modalOpacity}} className={classes.paper}>
          
          <img src={image} style={{ height: '35rem', width: '35rem' }} alt="reward" />
  
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
