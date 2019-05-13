/**
 ** Themed Heading
*/

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Heading.css';

/**
 * @param {number} level - The heading level. (i.e., The numbers of h1, h2, h3, h4, h5, h6) [ 1 | 2 | 3 | 4 | 5 | 6 ]
 * @param {node} [children=null] - The children of the component. Defaults to null.
 * @param {object} [img] - The definition of the optional image.
 * @param {string} [className] - CSS class name to allow custom styling to be passed in.
 * @param {string} [styleVariation] - The style variation options [ see variation options in propTypes definition ]
 */
const propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node,
  img: PropTypes.object,
  className: PropTypes.string,
  styleVariation: PropTypes.oneOf([
    'level1',
    'level2',
    'level3',
    'level4',
    'level5',
    'level6',
  ]).isRequired,
};

const Heading = ({
  level,
  img,
  children,
  className,
  styleVariation,
  ...props
}) => {
  if (React.Children.count(children) < 1) {
    return null;
  }
  const HeaderTag = `h${level}`;
  if (img && img.exist) {
    return (
      <HeaderTag {...props}>
        <img {...img.attr} role="presentation" />
        {children}
      </HeaderTag>
    );
  }
  return (
    <HeaderTag
      {...props}
      className={classnames(
        { [styles[styleVariation]]: styleVariation },
        className,
      )}
    >
      {children}
    </HeaderTag>
  );
};

Heading.propTypes = propTypes;

export default Heading;
