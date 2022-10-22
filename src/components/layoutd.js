/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useCallback } from 'react';
import Sticky from 'react-stickynode';
import { useStickyState } from 'contexts/app/app.provider';
import { Waypoint } from 'react-waypoint';
import { useStickyDispatch } from 'contexts/app/app.provider';

import DHeader from '../components/Dashboard/d-header';

export default function Layout({ children }) {
  const isSticky = useStickyState('isSticky');
  const dispatch = useStickyDispatch();
  const setSticky = useCallback(() => dispatch({ type: 'SET_STICKY' }), [
    dispatch,
  ]);
  const removeSticky = useCallback(() => dispatch({ type: 'REMOVE_STICKY' }), [
    dispatch,
  ]);

  const onWaypointPositionChange = ({ currentPosition }) => {
    if (currentPosition === 'above') {
      setSticky();
    }
    if (currentPosition === 'below') {
      removeSticky();
    }
  };

  return (
    <React.Fragment>
      <Sticky enabled={isSticky} innerZ={991}>
        <DHeader className={`${isSticky ? 'sticky' : 'unSticky'}`} />
      </Sticky>
      <Waypoint
        onEnter={removeSticky}
        // onLeave={setSticky}
        onPositionChange={onWaypointPositionChange}
      />
      <main
        sx={{
          variant: 'layout.main',
        }}
      >
        {children}
      </main>

    </React.Fragment>
  );
}
