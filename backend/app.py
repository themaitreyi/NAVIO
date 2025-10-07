# backend/app.py
from flask import Flask
from flask_cors import CORS
import json
import os

# Import blueprint from routes
from routes.api import api_bp

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from frontend

# Register API blueprint with /api prefix
app.register_blueprint(api_bp, url_prefix="/api")

if __name__ == "__main__":
    print("Starting NAVIO Backend Server...")
    print("Server will be available at: http://localhost:5000")
    print("API endpoints: http://localhost:5000/api/health, /api/devices")
    app.run(debug=True, port=5000, host='0.0.0.0')
