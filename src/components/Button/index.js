import React from 'react';
import {ActivityIndicator} from 'react-native'; // Loading inside button
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function Button({children, loading, rest}) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" /> // Loading
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
