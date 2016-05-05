	givetitle: function (target, room, user) {
		if (!this.can('forcewin')) return false;
		if (!target || target.indexOf(',') < 0) return this.parse('/help givetitle');

		var parts = target.split(',');
		var username = parts[0];
		var title = parts[1];

		if (typeof amount === 'string') return this.sendReply(amount);

		var _this = this;
		Database.read('title', toId(username), function (err, initial) {
			if (err) throw err;
			Database.write('title', title, toId(username), function (err, total) {
				if (err) throw err;
				_this.sendReply(username + " was given the profile title " + title + ".");
			});
		});
	},
	givetitlehelp: ["/givetitle [message] - Give a user a profile title."],
