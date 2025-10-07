# backend/routes/api.py
from flask import Blueprint, jsonify
import json
import os

api_bp = Blueprint('api_bp', __name__)

# Path to the dummy devices JSON
DATA_FILE = os.path.join(os.path.dirname(__file__), "..", "data", "devices.json")

# Route to get all devices / mobile positions
@api_bp.route("/devices", methods=["GET"])
def get_devices():
    try:
        with open(DATA_FILE, "r") as f:
            devices = json.load(f)
        return jsonify({"status": "success", "devices": devices})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

# Health check route
@api_bp.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "success", "message": "API routes are running!"})
