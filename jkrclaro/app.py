from flask import Flask


def create_app():
    app = Flask(__name__)

    from .views.workout import workout
    from .views.home import home
    app.register_blueprint(workout)
    app.register_blueprint(home)

    return app
