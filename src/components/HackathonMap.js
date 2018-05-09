/**
 * Created by Balthazar on 7/27/16.
 */

import React, { Fragment } from 'react';
import DivIcon from 'react-leaflet-div-icon';
import DraggablePolyline from 'react-leaflet-draggable-polyline';
import { asImmutable, emptyList } from 'gm-mobile-libs/packages/in-util';
import { Map } from 'gm-react-components';
import TeamCardsCarousel from './TeamCardsCarousel';
import mockData from '../mockData';

const defaultMapCenter = [-4.9795193, -39.0562027];

const pathRenderer = (teamsData) => {
  if (!teamsData || teamsData.isEmpty()) {
    return null;
  }
  const container = teamsData.map((team) => {
    const lastCoordinate = team.get('coordinates', emptyList).last().toJS();
    return (
      <Fragment>
        <DivIcon
          position={lastCoordinate}
          key={team.get('id')}
        >
          <img
            alt={team.get('name')}
            src={team.get('image', 'http://queroworkar.com.br/blog/wp-content/uploads/2016/07/unnamed.png')}
            width={40}
            height={40}
          />
        <span style={{ fontSize: '10px' }}>{team.get('name')}</span>
        </DivIcon>
        {team.get('coordinates', emptyList).size > 1 && <DraggablePolyline
          positions={team.get('coordinates', emptyList).toJS()}
          key={`path-${team.get('id')}`}
        />}
      </Fragment>
    );
  });
  return container;
};

export default class HackathonMap extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      data: emptyList,
      currentMapCenter: defaultMapCenter
    };
    setInterval(() => this.fetchTeams(), 10000);
  }

  componentDidMount() {
    this.fetchTeams();
  }

  onSwipe = (index) => {
    const activeTeam = this.state.data.get(String(index), emptyList);
    this.setState({
      index,
      currentMapCenter: activeTeam.get('coordinates', emptyList).last().toJS()
    });
  }

  swipePrevious = () => {
    if (this.state.index > 0) {
      this.setState({
        ...this.state,
        index: this.state.index - 1
      });
    }
  }

  swipeNext = () => {
    if (this.state.index < this.state.data.size - 1) {
      this.setState({
        ...this.state,
        index: this.state.index + 1
      });
    }
  }

  fetchTeams = () => {
    this.setState({
      ...this.state,
      data: asImmutable(mockData)
    });
    return;
    fetch('http://192.168.0.141:3000/teams?_embed=coordinates&_embed=departures', { method: 'GET' }).then((response) => {
      response.json().then((data) => {
        const sortedData = asImmutable(data).sort((teamA, teamB) =>
          teamB.get('departures', emptyList).size - teamA.get('departures', emptyList).size);
        this.setState({
          ...this.state,
          data: sortedData
        });
      });
    }).catch(() => {
      this.setState({
        ...this.state,
        data: asImmutable(mockData)
      });
    });
  }

  renderChildren = () => (pathRenderer(this.state.data));

  render() {
    return (
      <div>
        <div>
          <Map
            className="basic"
            center={this.state.currentMapCenter}
            zoom={16}
            key="map"
          >
            {this.renderChildren()}
          </Map>
          <TeamCardsCarousel onSwipe={this.onSwipe} teams={this.state.data} teamIndex={this.state.index} />
        </div>
        <div style={{textAlign: 'center'}}>
          <button onClick={this.fetchTeams}>Atualizar Mapa</button><br />
          <button onClick={this.swipePrevious}>Anterior</button>
          <button onClick={this.swipeNext}>Próximo</button>
        </div>
      </div>
    );
  }
}
