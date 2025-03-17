from flask import request, jsonify
import pandas as pd
from models.product_model import ProductModel

def upload_csv():
    file = request.files['file']
    if not file:
        return jsonify({"error": "No file uploaded"}), 400

    df = pd.read_csv(file)

    for _, row in df.iterrows():
        ProductModel.insert_product(row.to_dict())

    return jsonify({"message": "CSV data uploaded successfully"}), 200

def get_products():
    products = ProductModel.get_all_products()
    return jsonify(products)

