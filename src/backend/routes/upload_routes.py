import os
from flask import Blueprint, request, jsonify

upload_routes = Blueprint("upload_routes", __name__)

# Ensure 'uploads' directory exists
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@upload_routes.route("/upload", methods=["GET", "POST"])
def upload_csv():
    if request.method == "GET":
        return jsonify({"message": "Upload endpoint is active!"}), 200

    if "file" not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(file_path)

    return jsonify({"message": "File uploaded successfully!", "filename": file.filename})
