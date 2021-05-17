import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useStyles } from './styles';

export default function CheckBoxBar({
  handleChange,
  stateCheckBox,
  checkboxGroup = [],
}) {
  const classes = useStyles();

  return (
    <div className={classes.checkBoxWrapper}>
      <div className={classes.numberOfTransfers}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <FormGroup>
        {checkboxGroup.length &&
          checkboxGroup.map(({ id, label, value }) => (
            <FormControlLabel
              classes={{ root: classes.root }}
              key={id}
              control={
                <Checkbox
                  checkedIcon={
                    <span className={clsx(classes.icon, classes.checkedIcon)} />
                  }
                  icon={<span className={classes.icon} />}
                  checked={!!stateCheckBox?.[id]}
                  onChange={(ev, checked) => handleChange(id, value, checked)}
                  name={label}
                />
              }
              label={label}
            />
          ))}
      </FormGroup>
    </div>
  );
}

CheckBoxBar.propTypes = {
  handleChange: PropTypes.func,
  stateCheckBox: PropTypes.shape({
    one: PropTypes.bool,
    two: PropTypes.bool,
    three: PropTypes.bool,
    four: PropTypes.bool,
    five: PropTypes.bool,
  }),
  checkboxGroup: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.number,
    })
  ),
};
