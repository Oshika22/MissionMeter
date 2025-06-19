from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
load_dotenv()
def create_app():
    app = Flask(__name__)
    CORS(app)

    from .routes import api_bp
    app.register_blueprint(api_bp)

    return app
