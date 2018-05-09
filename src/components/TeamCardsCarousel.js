/**
 * Created by Balthazar on 7/27/16.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  CarouselStopItem,
  CarouselStops
} from 'gm-react-components';
import { emptyList } from 'gm-mobile-libs/packages/in-util';
import 'onsenui/css/onsenui.css';
import 'gm-react-components/es/static/gm-mobile-font-style.css';
import '../theme/index.css';

const styles = {
  carouselStopItem: {
    base: {
      width: '690px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    lineItems: {
      flexWrap: 'wrap'
    }
  }
};

const getTeamMembers = (teamMembers) => {
  if (!teamMembers) {
    return null;
  }
  const data = [];
  teamMembers.forEach((teamMember) => {
    const teamMemberDOM = (
      <p>
        {teamMember}
      </p>
    );
    data.push(teamMemberDOM);
  });
  return data;
};

export default class TeamCardsCarousel extends React.PureComponent {
  onPostChange = (event) => {
    const { onSwipe } = this.props;
    onSwipe(event.activeIndex);
  }

  render() {
    const { teams, teamIndex } = this.props;
    if (!teams || teams.isEmpty()) {
      return null;
    }
    const teamsCarousel = [];
    teams.forEach((team, index) => {
      teamsCarousel.push(
        <CarouselStopItem
          key={team.get('id')}
          title={team.get('name')}
          quantity={<img alt="logo" width={30} height={30} src={team.get('image')} />}
          address={getTeamMembers(team.get('teamMembers', emptyList))}
          styles={styles.carouselStopItem}
          departure={<span>{index + 1}º lugar</span>}
        >
          <span>{team.get('departures', emptyList).size} paradas finalizadas</span>
        </CarouselStopItem>);
    });
    return (
      <CarouselStops
        index={teamIndex}
        key="carousel-teams"
        onSwipeItem={this.onPostChange}
      >
        {teamsCarousel}
      </CarouselStops>);
  }
}

TeamCardsCarousel.propTypes = {
  // actions
  onSwipe: PropTypes.func,
  // state
  teams: PropTypes.object,
  teamIndex: PropTypes.number
};
