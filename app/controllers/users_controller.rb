class UsersController < ApplicationController
  def index
    render :json => User.all
  end
  
  def create
    user = User.create(params[:user])
    render :json => user
  end
  
  def update
    user = User.find(params[:id])
    user.update_attributes(params[:user])
    render :json => user
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    render :nothing => true
  end
end
