class PostsController < ApplicationController
  def index
    render :json => Post.all
  end
  
  def create
    post = Post.create(params[:post])
    render :json => post
  end
  
  def update
    post = Post.find(params[:id])
    post.update_attributes(params[:post])
    render :json => post
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    render :nothing => true
  end
end
