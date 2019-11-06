import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExpandMore } from '@material-ui/icons';
import {
  ExpansionPanel as Expansion,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from '@material-ui/core';
import ExpansionPanelList from './ExpansionPanelList';

function ExpansionPanel() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Expansion TransitionProps={{ mountOnEnter: true, unmountOnExit: true }}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography fontWeight="bolder">
            {t('landing.presentation.more')}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ExpansionPanelList />
        </ExpansionPanelDetails>
      </Expansion>
    </React.Fragment>
  );
}

export default ExpansionPanel;
