from flask import Blueprint, jsonify

product_routes = Blueprint("product_routes", __name__)

# Health Check Route
@product_routes.route("/health", methods=["GET"])
def check_product_routes():
    return jsonify({"status": "Product API is running!"})

# Get All Products
@product_routes.route("/", methods=["GET"])
def get_products():
    dummy_products = [
        {"id": 1, "name": "Laptop", "price": 50000},
        {"id": 2, "name": "Mouse", "price": 700},
    ]
    return jsonify(dummy_products)

# Get a Specific Product by ID
@product_routes.route("/<int:product_id>", methods=["GET"])
def get_product(product_id):
    dummy_product = {"id": product_id, "name": "Laptop", "price": 50000}
    return jsonify(dummy_product)
