import os

SQLALCHEMY_DATABASE_URI = "mysql+mysqlconnector://root:1234@localhost/product_segmentation"
SQLALCHEMY_TRACK_MODIFICATIONS = False
UPLOAD_FOLDER = os.path.join(os.getcwd(), "uploads")  # Folder to store uploaded CSVs
ALLOWED_EXTENSIONS = {"csv"}
