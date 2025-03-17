from flask import Blueprint, jsonify, request
from backend.controllers.user_controller import get_all_users, get_user_by_id, create_user, delete_user

user_routes = Blueprint("user_routes", __name__)

# ✅ Get All Users
@user_routes.route("/", methods=["GET"], strict_slashes=False)
def get_users():
    try:
        users = get_all_users()
        if not users:  # ✅ Check if there are no users
            return jsonify({"message": "No users found"}), 200

        return jsonify([{"id": u.id, "name": u.name, "email": u.email} for u in users])
    except Exception as e:
        print("Error in get_users:", str(e))  # ✅ Logs error to console
        return jsonify({"error": "Something went wrong!"}), 500

# ✅ Get User by ID
@user_routes.route("/<int:user_id>", methods=["GET"])
def get_user(user_id):
    try:
        user = get_user_by_id(user_id)
        if user:
            return jsonify({"id": user.id, "name": user.name, "email": user.email})
        return jsonify({"error": "User not found"}), 404
    except Exception as e:
        print("Error in get_user:", str(e))  # ✅ Logs error to console
        return jsonify({"error": "Something went wrong!"}), 500

# ✅ Create a New User
@user_routes.route("/", methods=["POST"], strict_slashes=False)
def add_user():
    try:
        data = request.json
        if "name" not in data or "email" not in data:
            return jsonify({"error": "Invalid data"}), 400

        user = create_user(data["name"], data["email"])
        return jsonify({"id": user.id, "name": user.name, "email": user.email}), 201
    except Exception as e:
        print("Error in add_user:", str(e))  # ✅ Logs error to console
        return jsonify({"error": "Something went wrong!"}), 500

# ✅ Delete a User
@user_routes.route("/<int:user_id>", methods=["DELETE"])
def remove_user(user_id):
    try:
        if delete_user(user_id):
            return jsonify({"message": "User deleted successfully"}), 200
        return jsonify({"error": "User not found"}), 404
    except Exception as e:
        print("Error in remove_user:", str(e))  # ✅ Logs error to console
        return jsonify({"error": "Something went wrong!"}), 500
