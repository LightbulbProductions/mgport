class PortfoliosController < ApplicationController
  before_action :set_portfolio_item, only: [:edit, :update, :show, :destroy]
  layout "portfolio"
  
  def index
    @portfolio_items = Portfolio.all
    @page_title = "My Workings"
  end
  
  def rails
    @rails_portfolio_items = Portfolio.rails
  end
  
  def react
    @react_portfolio_items = Portfolio.react
  end
  
  def new
    @portfolio_item = Portfolio.new
  end
  
  def edit
  end
  
  def show
  end
  
  def create
      @portfolio_item = Portfolio.new(portfolio_params)
      
      respond_to do |format|
        if @portfolio_item.save
          format.html { redirect_to portfolios_path, notice: 'Portfolio item was successfully created.' }
        else
          format.html { render :new }
        end
      end
    end
    
    def update
        respond_to do |format|
          if @portfolio_item.update(portfolio_params)
            format.html { redirect_to portfolios_path, notice: 'Portfolio item was successfully updated.' }
          else
            format.html { render :edit }
          end
        end
      end
      
      def destroy
          @portfolio_item.destroy
          respond_to do |format|
            format.html { redirect_to portfolios_path, notice: 'Portfolio item was successfully destroyed.' }
          end
      end
    
      private
      def portfolio_params
        params.require(:portfolio).permit(:title, :subtitle,
                                          :body, technologies_attributes: [:name])
      end
      
      def set_portfolio_item
        @portfolio_item = Portfolio.find(params[:id])
      end
  
end
