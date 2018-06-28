from flask import Blueprint, render_template

workout = Blueprint('workout', __name__, url_prefix='/workout/')


@workout.route('/')
def index():
    return render_template('workout.html')
