import React from 'react'
import './Profile.css'
import ReactStoreIndicator from 'react-score-indicator'

const Profile = (props) => {
    return (
        <div>
          <header className="bg">
            <div className="hello">
            <img style={{borderRadius: '100px', marginTop: '-75px', zIndex: 1000, width: 300}} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/435311/React--daily-ui-006.jpg" alt="" />          
            <div className="heading-box" >
              <h1>John Doe</h1>
              <h3>Photographer, <span><i className="material-icons">location_city</i> Warsaw, PL</span></h3>
            </div>
            </div>
            <div className="button-box" >
              <a className="follow-btn" href="#"><i className="material-icons" style={props.btnStyle} onClick={props.follow} >{props.icon}</i></a>
            </div>
          </header>
          <main style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '40px', justifyContent: 'center'}}>
            <div className="activity" style={{width: '250px'}}>
              {/* <i className="material-icons">group</i> */}
              <span className="activity-name">Followers</span>
              <span className="index">{props.friends}</span>
            </div>
            <div className="activity" style={{width: '250px'}}>
              {/* <i className="material-icons">access_time</i> */}
              <span className="activity-name">Activity</span>
              <span className="index">225</span>
            </div>
            <div className="activity" style={{width: '250px'}}>
              {/* <i className="material-icons">mode_comment</i> */}
              <span className="activity-name">Matches</span>
              <span className="index">146</span>
            </div>
          </main>
          <ReactStoreIndicator
        value={50}
        maxValue={100}
      />
        </div>
    )
  }
  
  class Card extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        friends: 10,
        icon: 'add_circle',
        text: 'Follow',
        btnStyle: {
          borderRadius: '50%',
          color: 'limegreen',
          cursor: 'pointer'
        }
      }
    }
    
    follow(e){
      e.preventDefault()
      let currentIcon = this.state.icon
      let currentText = this.state.text
      let currentFriends = this.state.friends
      if (currentIcon === 'add_circle' && currentText === 'Follow')
        this.setState({friends: currentFriends + 1, icon: 'cancel', text: 'Unfollow', btnStyle: {
          color: 'maroon', cursor: 'normal', animation: 'spin 200ms ease-in-out'
        }})
      else
        this.setState({friends: currentFriends - 1, icon: 'add_circle', text: 'Follow', btnStyle: {
          color: 'limegreen', cursor: 'pointer', animation: 'spinBack 200ms ease-in-out'
        }})
    }
    
    render(){
      return (
        <Profile 
          btnStyle={this.state.btnStyle}
          icon={this.state.icon}
          text={this.state.text}
          follow={this.follow.bind(this)}
          friends={this.state.friends}
        />
      )
    }
  }
  
  export default Profile