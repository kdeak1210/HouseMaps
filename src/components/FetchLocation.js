import React from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';

const FetchLocation = props => (
  <Button title="Get Location" onPress={props.onGetLocation} />
);

FetchLocation.propTypes = {
  onGetLocation: PropTypes.func.isRequired
};

export default FetchLocation;
