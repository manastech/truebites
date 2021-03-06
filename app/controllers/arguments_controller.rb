class ArgumentsController < ApplicationController
  before_action :set_argument, only: [:show, :edit, :update]

  # GET /arguments
  # GET /arguments.json
  def index
    @arguments = Argument.all
  end

  # GET /arguments/1
  # GET /arguments/1.json
  def show
  end

  # GET /arguments/new
  def new
    @argument = Argument.new
  end

  # POST /arguments
  # POST /arguments.json
  def create
    @argument = Argument.new_with_params(argument_params.permit(:title, :description), current_user, JSON.parse(argument_params[:statements]))

    respond_to do |format|
      if @argument.save
        format.html { redirect_to @argument, notice: 'Argument was successfully created.' }
        format.json { render :show, status: :created, location: @argument }
      else
        format.html { render :new }
        format.json { render json: @argument.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /arguments/1
  # PATCH/PUT /arguments/1.json
  def update
    statements = JSON.parse(argument_params[:statements])
    conclusion = statements.pop
    statements = statements.map {|content| Statement.find_or_initialize_by(content: content)}
    argument_view = @argument.argument_views.find_or_initialize_by(user:current_user)
    argument_view.versions.new(statements: statements, conclusion: conclusion)

    respond_to do |format|
      if argument_view.save
        format.html { redirect_to @argument, notice: 'Argument was successfully updated.' }
        format.json { render :show, status: :ok, location: @argument }
      else
        format.html { render :edit }
        format.json { render json: @argument.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_argument
      @argument = Argument.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def argument_params
      params.fetch(:argument, {})
    end
end
