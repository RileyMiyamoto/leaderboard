/**
 * Created by Akira on 10/11/2016.
 */
PlayerList = new Mongo.Collection('plauers');

if(Meteor.isServer){

}
if(Meteor.isClient){
  Template.leaderboard.helpers({
    'player': function(){
      return PlayerList.find();
    },
    'selectedClass': function() {
      let playerId = this._id;
      let selectedPlayer = Session.get('selectedPlayer');
      if(playerId == selectedPlayer) {
        return "selected"
      }
    }

  });
  Template.leaderboard.events({
    'click .player': function(){
      let playerId = this._id;
      Session.set('selectedPlayer', playerId);
    }
  });
}



