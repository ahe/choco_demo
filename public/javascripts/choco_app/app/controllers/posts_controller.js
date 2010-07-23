PostsController = function(app) { with(app) {
	
	/** Routes **/
	
	// GET index
	get('#/posts', function(cx) {
		cx.posts = Post.all();
		cx.render({ template: 'posts/index', event: 'posts_loaded', data: { size: cx.posts.length }});
	});
	
	// GET new
	get('#/posts/new', function(cx) {
	});
	
	// POST create
	post('#/posts', function(cx) {
		var post = new Post(cx.params['post']);
		post.save(function(success) {
			cx.redirect('#/posts/' + post.id());
		});
	});
	
	// GET edit
	get('#/posts/edit/:id', function(cx) {
		cx.post = Post.find(cx.params['id']);
	});
	
	// PUT update
	put('#/posts/update/:id', function(cx) {
		var post = Post.find(cx.params['id']);
		post.update(cx.params['post']).save(function(success) {
			cx.redirect('#/posts/' + post.id())
		});
	});
	
	// DELETE destroy
	route('delete', '#/posts/:id', function(cx) {
		var post = Post.find(cx.params['id']);
		post.destroy();
		cx.trigger('post_remove', { post_id: post.id() });		
	});
	
	// GET show
	get('#/posts/:id', function(cx) {
		cx.post = Post.find(cx.params['id']);
	});
	
	/** Events **/
	
	bind('post_remove', function(e, data) {
		$('#post_' + data['post_id']).remove();
	});
	
	bind('posts_loaded', function(e, data) {
		$('#test_link').click(function() {
			alert('Hey! We have ' + data['size'] + ' posts!');
			return false;
		});
	});
	
}};