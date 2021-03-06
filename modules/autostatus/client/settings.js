/*
 * rrequest
 * http://www.rrequest.com/
 * (C) Copyright Bashton Ltd, 2013
 *
 * This file is part of rrequest.
 *
 * rrequest is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * rrequest is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with rrequest.  If not, see <http://www.gnu.org/licenses/>.
 *
*/
Template.autostatussettings.events({
  'click .autostatus-settings-save': function (event, template) {
    var status = template.find(".staff_typing").value;

    Meteor.call('updateAutostatusSettings', {
      staff_typing: status
    }, function(error, settings) {

    });
  }
});

Template.autostatussettings.helpers({
    selectedstatus: function(statusname){
        var settings = AutostatusSettings.findOne({});
        if (settings !== undefined) {
            if (settings.staff_typing == statusname) {
                return 'selected';
            }
        }
    },

    staff_typing: function() {
        var settings = AutostatusSettings.findOne({});
        if (settings !== undefined) {
            return settings.staff_typing;
        }
    },

    ticketstatus: function() {
        return TicketStatus.find({}, {sort: {'name': 1}});
    }
});

autostatus_settings_page = function(args) {
  args = args || {};

  return {
    name: 'Autostatus',
    template: 'autostatussettings'
  };
};
