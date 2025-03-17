import pickle
import numpy as np

# Load model and encoders
with open("product_segmentation_model.pkl", "rb") as f:
    model = pickle.load(f)

with open("label_encoders.pkl", "rb") as f:
    label_encoders = pickle.load(f)

# Function to predict product category
def predict_product_segment(brand, color, gender):
    # Encode inputs
    brand_encoded = label_encoders['brand'].transform([brand])[0]
    color_encoded = label_encoders['color'].transform([color])[0]
    gender_encoded = label_encoders['gender'].transform([gender])[0]

    # Prepare input array
    input_data = np.array([[brand_encoded, color_encoded, gender_encoded]])

    # Predict category
    prediction = model.predict(input_data)
    return prediction[0]

# Example usage
brand = "Nike"
color = "Red"
gender = "Male"

predicted_segment = predict_product_segment(brand, color, gender)
print(f"Predicted Product Segment: {predicted_segment}")
