/**
 * Themed Paragraph
 */

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Paragraph.css';

/**
 * @param {string} [className=null] - CSS class name to allow custom styling to be passed in.  Defaults to null.
 * @param {string} [theme='base'] - The syle theme for the component.  Defaults to 'base' [ base | primary | lead | smallLight | mediumLight ]
 * @param {string} [variation] - The style variation options [ errorMessage ]
 * @param {node} [children=null] - The children of the component. Defaults to null.
 */
const propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([
    'base',
    'primary',
    'lead',
    'smallLight',
    'mediumLight',
    'largeLight',
  ]),
  variation: PropTypes.oneOf(['errorMessage']),
  weight: PropTypes.oneOf(['', 'bold']),
  children: PropTypes.node,
};

const defaultProps = {
  className: null,
  theme: 'base',
  children: null,
  weight: '',
};

const Paragraph = ({
  className,
  variation,
  theme,
  weight,
  children,
  ...props
}) => (
  <p
    className={classnames(
      styles[variation],
      styles[theme],
      styles[weight],
      className
    )}
    {...props}
  >
    {children}
  </p>
);

Paragraph.propTypes = propTypes;
Paragraph.defaultProps = defaultProps;

export default Paragraph;
