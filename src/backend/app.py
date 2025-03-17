import os
import sys
sys.path.append(os.path.abspath(os.path.dirname(__file__)))

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy import inspect  
from backend.models.database import db  
from backend.routes.product_routes import product_routes
from backend.routes.upload_routes import upload_routes  

import pymysql
pymysql.install_as_MySQLdb()

# ✅ Initialize Flask App
app = Flask(__name__)

# ✅ Configure Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:xcdmp3013@localhost/product_segmentation'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# ✅ Initialize Database & Migrations
db.init_app(app)
migrate = Migrate(app, db)

# ✅ Register Blueprints with Correct URL Prefix
app.register_blueprint(product_routes, url_prefix="/api/products")  
app.register_blueprint(upload_routes, url_prefix="/api")

# ✅ Check Database Tables
with app.app_context():
    try:
        inspector = inspect(db.engine)
        print("Existing Tables:", inspector.get_table_names())
    except Exception as e:
        print("❌ Database Connection Failed:", str(e))

if __name__ == "__main__":
    print("🚀 Running Flask App with Debug Mode...")
    app.run(debug=True)
