UsersController = function(app) { with(app) {
	
	/** Routes **/
	
	// GET index
	get('#/users', function(cx) {
		cx.users = User.all();
	});
	
	// GET new
	get('#/users/new', function(cx) {
	});
	
	// POST create
	post('#/users', function(cx) {
		var user = new User(cx.params['user']);
		user.save(function(success) {
			cx.redirect('#/users/' + user.id());
		});
	});
	
	// GET edit
	get('#/users/edit/:id', function(cx) {
		cx.user = User.find(cx.params['id']);
	});
	
	// PUT update
	put('#/users/update/:id', function(cx) {
		var user = User.find(cx.params['id']);
		user.update(cx.params['user']).save(function(success) {
			cx.redirect('#/users/' + user.id())
		});
	});
	
	// DELETE destroy
	route('delete', '#/users/:id', function(cx) {
		var user = User.find(cx.params['id']);
		user.destroy();
		cx.trigger('user_remove', { user_id: user.id() });		
	});
	
	// GET show
	get('#/users/:id', function(cx) {
		cx.user = User.find(cx.params['id']);
	});
	
	/** Events **/
	
	bind('user_remove', function(e, data) {
		$('#user_' + data['user_id']).remove();
	});
	
}};